'use client';
import React, { useEffect, useRef, useState } from 'react';
import { FaEdit, FaTrash, FaFlag } from 'react-icons/fa';
import DeleteCommentModal from '../../../Components/Modals/DeleteCommentModal';
import SignInModal from '../../../Components/Modals/SignInModel';
import {
  useCreateCommentMutation,
  useFetchCommentsQuery,
  useUpdadeCommentMutation,
} from '@/store';
import LoadingButton from '../../../Components/LoadingButton';
import { useSelector } from 'react-redux';

function Comments({ currentUser, BlogId }) {
  const [comment, setComment] = useState('');
  const [createComment, status] = useCreateCommentMutation();
  return (
    <section
      className="bg-white py-8 lg:py-16 antialiased border"
      id="comments"
    >
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">
            Discussion (20)
          </h2>
        </div>
        <CommentPost
          ActionButton={'Post comment'}
          Value={comment}
          setValue={setComment}
          currentUser={currentUser}
          OnSubmit={createComment}
          blogId={BlogId}
          status={status}
        />
        <Comment BlogId={BlogId} currentUser={currentUser} />
      </div>
    </section>
  );
}

import { useDispatch } from 'react-redux';
import { SetCommentsPage } from '@/store';

const PaginationContainer = ({ data, isFetching }) => {
  const dispatch = useDispatch();

  if (isFetching) {
    return <Spinner />;
  }
  const { meta } = data;
  const { totalPages, page } = meta.pagination;
  const pages = Array.from({ length: totalPages }, (_, index) => {
    return index + 1;
  });

  const handlePageChange = (pageNumber) => {
    dispatch(SetCommentsPage(pageNumber));
  };

  if (totalPages < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = totalPages;
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              onClick={() => handlePageChange(pageNumber)}
              key={pageNumber}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                pageNumber === page ? 'bg-base-300 border-base-300' : ''
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > totalPages) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const CommentPost = ({
  ActionButton,
  Value,
  setValue,
  currentUser,
  OnSubmit,
  blogId,
  status,
  CommentId,
}) => {
  const [showModal, setshowModel] = useState(false);
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (!currentUser) {
      return;
    }
    OnSubmit({
      blogId,
      content: Value,
      commentId: CommentId,
    });
    setValue('');
  };
  return (
    <form className="mb-6" onSubmit={SubmitHandler}>
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
        <textarea
          id="comment"
          rows="6"
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none  "
          placeholder="Write a comment..."
          value={Value}
          onChange={(e) => setValue(e.target.value)}
          required
        ></textarea>
      </div>
      {!currentUser && (
        <SignInModal
          showModel={showModal}
          setshowModel={setshowModel}
          Text={'Please sign in to post a comment'}
        />
      )}

      {
        <button
          type="submit"
          className="btn btn-primary text-xs min-h-0 h-10"
          disabled={Value.replace(/\s/g, '').length === 0}
          onClick={() => {
            if (!currentUser) {
              setshowModel(true);
            }
          }}
        >
          {status.isLoading ? (
            <LoadingButton text={`${ActionButton}ing`} />
          ) : (
            ActionButton
          )}
        </button>
      }
    </form>
  );
};

const CommentLoader = () => {
  return (
    <article className="p-6 text-base bg-white rounded-lg animate-pulse">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-gray-300 mr-3 animate-pulse"></div>
          <div className="w-20 h-4 bg-gray-300 animate-pulse"></div>
        </div>
        <div className="w-4 h-4 bg-gray-300 rounded-full relative cursor-pointer hover:bg-gray-100"></div>
      </footer>
      <div className="w-3/4 h-4 bg-gray-300 animate-pulse mb-1"></div>
      <div className="w-full h-4 bg-gray-300 animate-pulse"></div>
    </article>
  );
};

const timeAgo = (timestamp) => {
  const now = new Date();
  const commentTime = new Date(timestamp);
  const diff = now - commentTime;

  // Define time intervals in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (diff < minute) {
    return 'just now';
  } else if (diff < hour) {
    const minutesAgo = Math.floor(diff / minute);
    return `${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`;
  } else if (diff < day && now.getDate() === commentTime.getDate()) {
    const hoursAgo = Math.floor(diff / hour);
    return `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`;
  } else if (diff < day * 2 && now.getDate() - 1 === commentTime.getDate()) {
    return 'yesterday';
  } else {
    // Modify this part as per your desired date format
    return commentTime.toDateString();
  }
};

const Comment = ({ BlogId, currentUser }) => {
  const { page, limit } = useSelector((state) => state.Blogs.comments);
  const { data, isFetching, error } = useFetchCommentsQuery({
    BlogId,
    page,
    limit,
  });

  if (error) {
    return <p className="text-red-500">Error: {error.message}</p>;
  }

  return (
    <>
      {isFetching ? (
        Array.from({ length: 3 }).map((_, index) => (
          <CommentLoader key={index} />
        ))
      ) : (
        <>
          {data.data.comments.map((comment) => (
            <SingleComment
              comment={comment}
              key={comment.id}
              currentUser={currentUser}
              BlogId={BlogId}
            />
          ))}
          <PaginationContainer data={data} isFetching={isFetching} />
        </>
      )}
    </>
  );
};

const SingleComment = ({ comment, currentUser, BlogId }) => {
  const updateCommentRef = useRef();
  const dropdown = useRef();
  const [showDropdown, setShowDropdown] = useState(false);
  const [commenttext, setCommenttext] = useState('');
  const [Edit, setEdit] = useState(false);
  const [timesAgo, setTimesAgo] = useState(timeAgo(comment.createdAt));
  const [updateComment, status] = useUpdadeCommentMutation();
  const [showModal, setshowModal] = useState(false);

  const HandleEdit = (content) => {
    setEdit(true);
    setCommenttext(content);
  };
  // rerender every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setTimesAgo(timeAgo(comment.createdAt));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // close edit comment textarea when user  clicks Escape key or ser clicks outside of the textarea
  useEffect(() => {
    const closePopUps = (e) => {
      if (e.key === 'Escape') {
        setEdit(false);
        setShowDropdown(false);
      }
      closeEditComment(e);
      closeDropdown(e);
    };
    const closeEditComment = (e) => {
      if (
        updateCommentRef.current &&
        !updateCommentRef.current.contains(e.target)
      ) {
        setEdit(false);
      }
    };

    const closeDropdown = (e) => {
      if (dropdown.current && !dropdown.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('keydown', closePopUps);
    document.addEventListener('click', closePopUps);
    return () => {
      document.removeEventListener('keydown', closePopUps);
      document.removeEventListener('click', closePopUps);
    };
  }, []);

  return (
    <>
      <DeleteCommentModal
        showModal={showModal}
        setshowModal={setshowModal}
        CommentId={comment.id}
        blogId={BlogId}
      />
      <article
        key={comment.id}
        className="p-6 text-base bg-white rounded-lg"
        ref={updateCommentRef}
      >
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900  font-semibold">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src={comment.user.avator}
                alt={comment.user.name}
              />
              {comment.user.name}
            </p>
            <p className="text-sm text-gray-600 ">
              <time dateTime="2022-02-08" title="February 8th, 2022">
                {timesAgo}
              </time>
            </p>
          </div>

          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500  bg-white rounded-lg relative cursor-pointer hover:bg-gray-100"
            ref={dropdown}
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>

            <div
              className={`absolute top-0 left-0 w-40 mt-8 py-2 bg-white rounded-lg shadow-xl ${
                showDropdown ? '' : 'hidden'
              }`}
            >
              <ul className="flex flex-col items-center justify-center">
                {currentUser && currentUser.user.userId === comment.user.id && (
                  <>
                    <li
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
                      onClick={() => HandleEdit(comment.content)}
                      id="edit"
                    >
                      <FaEdit className="mr-2" />
                      <button className="text-sm text-gray-500 hover:underline font-medium">
                        Edit
                      </button>
                    </li>

                    <li
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
                      onClick={() => setshowModal(true)}
                    >
                      <FaTrash className="mr-2" />
                      <button className="text-sm text-gray-500 hover:underline font-medium">
                        Delete
                      </button>
                    </li>
                  </>
                )}
                <li className="flex items-center w-full px-4 py-2 text-sm text-gray-500 hover:bg-gray-100">
                  <FaFlag className="mr-2" />
                  <button className="text-sm text-gray-500 hover:underline font-medium">
                    Report
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        {Edit ? (
          <CommentPost
            ActionButton={'Update comment'}
            Value={commenttext}
            setValue={setCommenttext}
            currentUser={currentUser}
            OnSubmit={updateComment}
            blogId={BlogId}
            status={status}
            CommentId={comment.id}
          />
        ) : (
          <div className="text-sm text-gray-900">
            <p>{comment.content}</p>
          </div>
        )}

        <div className="flex items-center mt-4 space-x-4">
          <button
            type="button"
            className="flex items-center text-sm text-gray-500 hover:underline font-medium"
          >
            <svg
              className="mr-1.5 w-3.5 h-3.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
              />
            </svg>
            Reply
          </button>
        </div>
      </article>
    </>
  );
};
export default Comments;
