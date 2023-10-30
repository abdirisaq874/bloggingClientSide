import React from 'react';
import { Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { useDeleteCommentMutation } from '@/store';

export const DeleteCommentModal = ({
  showModal,
  setshowModal,
  CommentId,
  blogId,
}) => {
  const [deleteComment, status] = useDeleteCommentMutation();

  const CommentDeleteHandler = () => {
    deleteComment({ blogId, CommentId });
    setshowModal(false);
  };
  return (
    showModal && (
      <Modal
        show={showModal}
        size={'sm'}
        position={'top-center'}
        popup
        dismissible
        onClose={() => setshowModal(false)}
      >
        <Modal.Header className="mb-2">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Delete Comment
          </h3>
        </Modal.Header>

        <Modal.Body className="border-t ">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200 " />

          <div className="text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this comment?
            </h3>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-t">
          <div className="flex justify-center gap-4 w-full">
            <button
              className="btn btn-error min-h-9 h-10"
              onClick={() => CommentDeleteHandler()}
            >
              Delete
            </button>
            <button
              className="btn btn-outline min-h-9 h-10"
              onClick={() => setshowModal(false)}
            >
              cancel
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    )
  );
};

export default DeleteCommentModal;
