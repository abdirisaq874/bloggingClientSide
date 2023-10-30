'use client';
import LoadingButton from '@/Components/LoadingButton';
import {
  useGenerateDescriptionMutation,
  useGenerateKeywordsMutation,
  useGenerateMinutesToReadMutation,
  useGenerateTagsMutation,
} from '@/store';
import React, { useEffect, useState } from 'react';

const GenerateDescriptions = ({ content }) => {
  const [data, setdata] = useState('');
  const [GenerateDescription, status] = useGenerateDescriptionMutation();
  useEffect(() => {
    if (status.isSuccess) {
      setdata(status.data.description);
    }
  }, [status.isSuccess]);

  // useEffect(() => {
  //   if (content.length > 0) {
  //     GenerateDescription(content);
  //   }
  // }, [content]);

  const HandleSubmit = () => {
    // onSubmit();
    console.log('content', content);

    GenerateDescription(content);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3 my-4">
        <div className="w-full">
          <label htmlFor="hero-input" className="">
            Description
          </label>
          <textarea
            type="text"
            id="hero-input"
            name="hero-input"
            className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md"
            rows={10}
            cols={100}
            value={data}
            placeholder="for Generating description"
          />
        </div>
        <button
          type="button"
          onClick={HandleSubmit}
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          disabled={status.isLoading}
        >
          {status.isLoading ? (
            <LoadingButton text={'Generating'} />
          ) : (
            'Generate'
          )}
        </button>
      </div>
    </>
  );
};

const GenerateKeywords = ({ content }) => {
  const [data, setdata] = useState('');
  const [GenerateKeyword, status] = useGenerateKeywordsMutation();
  useEffect(() => {
    if (status.isSuccess) {
      setdata(status.data.keywords);
    }
  }, [status.isSuccess]);

  const HandleSubmit = () => {
    // onSubmit();
    GenerateKeyword(content);
  };

  // the returned value will be array of strings and it should be mapped and displayed inside card, each element can be removed
  return (
    <>
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3 my-4">
        <div className="w-full">
          <label htmlFor="hero-input" className="">
            Keywords
          </label>
          <textarea
            rows={10}
            cols={100}
            type="text"
            id="hero-input"
            name="hero-input"
            className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md  "
            value={data}
            placeholder="for Generating keywords"
          />
        </div>
        <button
          type="button"
          onClick={HandleSubmit}
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          disabled={status.isLoading}
        >
          {status.isLoading ? (
            <LoadingButton text={'Generating'} />
          ) : (
            'Generate'
          )}
        </button>
      </div>
    </>
  );
};

const GenerateTags = ({ content }) => {
  const [data, setdata] = useState('');
  const [GenerateTags, status] = useGenerateTagsMutation();
  useEffect(() => {
    if (status.isSuccess) {
      setdata(status.data.tags);
    }
  }, [status.isSuccess]);

  const HandleSubmit = () => {
    // onSubmit();
    GenerateTags(content);
  };

  // the returned value will be array of strings and it should be mapped and displayed inside card, each element can be removed
  return (
    <>
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3 my-4">
        <div className="w-full">
          <label htmlFor="hero-input" className="">
            Tags
          </label>
          <textarea
            rows={10}
            cols={100}
            type="text"
            id="hero-input"
            name="hero-input"
            className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md  "
            value={data}
            placeholder="for Generating tags"
          />
        </div>
        <button
          type="button"
          onClick={HandleSubmit}
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          disabled={status.isLoading}
        >
          {status.isLoading ? (
            <LoadingButton text={'Generating'} />
          ) : (
            'Generate'
          )}
        </button>
      </div>
    </>
  );
};

const GenerateMinutesToRead = ({ content }) => {
  const [data, setdata] = useState('');
  const [GenerateMinutesToRead, status] = useGenerateMinutesToReadMutation();
  useEffect(() => {
    if (status.isSuccess) {
      setdata(status.data.minutesToread);
    }
  }, [status.isSuccess]);

  const HandleSubmit = () => {
    // onSubmit();
    GenerateMinutesToRead(content);
  };

  // the returned value will be array of strings and it should be mapped and displayed inside card, each element can be removed
  return (
    <>
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3 my-4">
        <div className="w-full">
          <label htmlFor="hero-input" className="">
            MinutesToread
          </label>
          <input
            type="text"
            id="hero-input"
            name="hero-input"
            className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md  "
            value={data}
            placeholder="for Generating minutesToread"
          />
        </div>
        <button
          type="button"
          onClick={HandleSubmit}
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          disabled={status.isLoading}
        >
          {status.isLoading ? (
            <LoadingButton text={'Generating'} />
          ) : (
            'Generate'
          )}
        </button>
      </div>
    </>
  );
};

export {
  GenerateDescriptions,
  GenerateKeywords,
  GenerateTags,
  GenerateMinutesToRead,
};
