import LoadingButton from '@/Components/LoadingButton';
import { useCreateBlogMutation } from '@/store';
import React from 'react';
import { useState } from 'react';

const NewPostForm = ({ contents }) => {
  const [formState, setFormState] = useState({
    title: '',
    thumbnailUrl: '',
    isFeatured: false,
    tags: [],
    keywords: [],
    description: '',
    minutesToRead: 0,
    category: '6536d7d01ce8f54770d20c14',
    content: contents,
  });

  const [CreateBlog, status] = useCreateBlogMutation();

  const HandleSubmit = (e) => {
    e.preventDefault();
    CreateBlog({ formState });
  };
  return (
    <div className="mt-6 container mx-auto">
      {/* new Post text */}
      <h1 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white my-6">
        New Post
      </h1>
      <form className="flex flex-col gap-3 " onSubmit={HandleSubmit}>
        {/* input feild for title */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-700 dark:text-gray-200" htmlFor="title">
            Title
          </label>
          <input
            className="px-4 py-2 border border-gray-200 rounded-md dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
            type="text"
            name="title"
            id="title"
            placeholder="Enter title"
            value={formState.title}
            onChange={(e) =>
              setFormState({ ...formState, title: e.target.value })
            }
          />
        </div>
        {/* input feild for thumnailUl */}
        <div className="flex flex-col gap-2">
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="thumbnail"
          >
            Thumbnail
          </label>
          <input
            className="px-4 py-2 border border-gray-200 rounded-md dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
            type="text"
            name="thumbnail"
            id="thumbnail"
            placeholder="Enter thumbnail"
            value={formState.thumbnailUrl}
            onChange={(e) =>
              setFormState({ ...formState, thumbnailUrl: e.target.value })
            }
          />
        </div>
        {/* checkbox for isfeatured */}
        <div className="flex items-center gap-2">
          <input
            className="form-checkbox h-5 w-5 text-blue-600"
            type="checkbox"
            name="isFeatured"
            id="isFeatured"
            value={formState.isFeatured}
            onChange={(e) => {
              setFormState({ ...formState, isFeatured: e.target.value });
            }}
          />
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="isFeatured"
          >
            Featured
          </label>
        </div>
        <TagsForm formState={formState} setFormState={setFormState} />
        <KeywordsForm formState={formState} setFormState={setFormState} />
        <Description formState={formState} setFormState={setFormState} />
        <MinutesToreadForm formState={formState} setFormState={setFormState} />

        <button
          type="submit"
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        >
          {status.isLoading ? <LoadingButton text={'Posting...'} /> : 'Post'}
        </button>
      </form>
    </div>
  );
};

const TagsForm = ({ formState, setFormState }) => {
  const [value, setValue] = useState('');

  const HandleSubmit = () => {
    // check if the value is empty
    if (value === '') {
      return;
    }
    // split the value by comma
    const valueArray = value.split(',');
    // remove the white space and everything other than numbers and strings from the value
    valueArray.forEach((element, index) => {
      valueArray[index] = element.trim().replace(/[^a-zA-Z0-9]/g, '');
      if (valueArray[index] === '') {
        valueArray.splice(index, 1);
      }
    });

    //  add the value to the tags array
    setFormState({ ...formState, tags: [...formState.tags, ...valueArray] });
    // clear the input
    setValue('');
  };

  const HandleDelete = (tagToDelete) => {
    setFormState({
      ...formState,
      tags: formState.tags.filter((tag) => tag !== tagToDelete),
    });
  };

  return (
    <div className="flex flex-col gap-3 mt-6 container mx-auto">
      <label className="text-gray-700 dark:text-gray-200" htmlFor="tags">
        Tags
      </label>

      <div className="flex flex-wrap gap-2">
        {TagsArea(formState.tags, HandleDelete)}
      </div>
      <textarea
        className="px-4 py-2 border border-gray-200 rounded-md dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
        type="text"
        name="tags"
        id="tags"
        placeholder="Enter tags"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="button"
        onClick={HandleSubmit}
        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      >
        Add
      </button>
    </div>
  );
};

const TagsArea = (tags, HandleDelete) => {
  return tags.map((tag, index) => (
    <div key={index} className="flex items-center gap-2">
      <span className="px-2 py-1 text-sm text-gray-800 bg-gray-200 rounded-full">
        {tag}
      </span>
      <button
        type="button"
        onClick={() => HandleDelete(tag)}
        className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
  ));
};

const KeywordsForm = ({ formState, setFormState }) => {
  const [value, setValue] = useState('');

  const HandleSubmit = () => {
    // check if the value is empty
    if (value === '') {
      return;
    }
    // split the value by comma
    const valueArray = value.split(',');
    valueArray.forEach((element, index) => {
      valueArray[index] = element.trim().replace(/[^a-zA-Z0-9]/g, '');
      if (valueArray[index] === '') {
        valueArray.splice(index, 1);
      }
    });

    //  add the value to the tags array
    setFormState({
      ...formState,
      keywords: [...formState.keywords, ...valueArray],
    });
    // clear the input
    setValue('');
  };

  const HandleDelete = (keywordToDelete) => {
    setFormState({
      ...formState,
      keywords: formState.keywords.filter(
        (keyword) => keyword !== keywordToDelete
      ),
    });
  };

  return (
    <div className="flex flex-col gap-3 mt-6 container mx-auto">
      <label className="text-gray-700 dark:text-gray-200" htmlFor="keywords">
        Keywords
      </label>

      <div className="flex flex-wrap gap-2">
        {TagsArea(formState.keywords, HandleDelete)}
      </div>
      <textarea
        className="px-4 py-2 border border-gray-200 rounded-md dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
        type="text"
        name="keywords"
        id="keywords"
        placeholder="Enter keywords"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="button"
        onClick={HandleSubmit}
        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      >
        Add
      </button>
    </div>
  );
};

const Description = ({ formState, setFormState }) => {
  return (
    <div className="flex flex-col gap-3 mt-6 container mx-auto">
      <label className="text-gray-700 dark:text-gray-200" htmlFor="description">
        Description
      </label>
      <textarea
        className="px-4 py-2 border border-gray-200 rounded-md dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
        type="text"
        name="description"
        id="description"
        placeholder="Enter description"
        value={formState.description}
        onChange={(e) =>
          setFormState({ ...formState, description: e.target.value })
        }
      />
    </div>
  );
};
const MinutesToreadForm = ({ formState, setFormState }) => {
  return (
    <div className="flex flex-col gap-3 mt-6 container mx-auto">
      <label
        className="text-gray-700 dark:text-gray-200"
        htmlFor="minutesToread"
      >
        Minutes To Read
      </label>
      <input
        className="px-4 py-2 border border-gray-200 rounded-md dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
        type="number"
        name="minutesToread"
        id="minutesToread"
        placeholder="Enter minutesToread"
        value={formState.minutesToRead}
        onChange={(e) =>
          setFormState({ ...formState, minutesToRead: e.target.value })
        }
      />
    </div>
  );
};
export default NewPostForm;
