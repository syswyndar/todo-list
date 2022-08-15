import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../store/actionCreator/todoAction";
import {
  deleteActivity,
  getActivityById,
  getAllActivity,
} from "../../store/actionCreator/activitiesAction";

const DeleteModal = ({
  closeModal,
  data,
  penanda,
  activityId,
  successDelete,
}) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    if (penanda === "Activity") {
      dispatch(deleteActivity(data.id))
        .then(() => {
          dispatch(getAllActivity()).then(() => {
            closeModal();
            successDelete();
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (penanda === "List Item") {
      dispatch(deleteTodo(data.id))
        .then(() => {
          dispatch(getActivityById(activityId)).then(() => {
            closeModal();
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div
        data-cy="delete-modal"
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-secondary-text/60"
      >
        <div className="relative w-auto my-6 mx-auto max-w-lg align-middle sm:flex sm:justify-center">
          {/*content*/}
          <div
            data-cy="delete-modal-body"
            className="border-0 rounded-xl shadow-lg relative flex flex-col sm:w-5/6 md:w-full bg-text-white outline-none focus:outline-none"
          >
            {/*body*/}
            <div className="relative p-6 flex-auto text-center">
              <div className="flex justify-center md:p-[36px] sm:p-[26]">
                <svg
                  width="68"
                  height="61"
                  viewBox="0 0 68 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34 44.5V44.535M34 23.5V30.5V23.5Z"
                    stroke="#ED4C5C"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.50018 58.5012H58.5002C59.6423 58.4932 60.765 58.2059 61.7705 57.6643C62.7761 57.1227 63.6338 56.3433 64.2689 55.3941C64.904 54.4449 65.2972 53.3546 65.4142 52.2186C65.5312 51.0825 65.3685 49.935 64.9402 48.8762L40.0902 6.00125C39.4848 4.90714 38.5975 3.99515 37.5203 3.3601C36.4432 2.72504 35.2156 2.39011 33.9652 2.39011C32.7148 2.39011 31.4872 2.72504 30.41 3.3601C29.3329 3.99515 28.4455 4.90714 27.8402 6.00125L2.99018 48.8762C2.56997 49.9108 2.40334 51.0308 2.5042 52.1428C2.60506 53.2549 2.97048 54.3266 3.56996 55.2687C4.16943 56.2107 4.98556 56.9956 5.95022 57.558C6.91487 58.1203 8.00006 58.4438 9.11518 58.5012"
                    stroke="#ED4C5C"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="my-4 sm:text-md md:text-lg leading-relaxed">
                Apakah anda yakin menghapus <span>{penanda}</span>{" "}
                <span className="font-bold">"{data.title}"?</span>?
              </p>
            </div>
            {/*footer*/}
            <div
              data-cy="delete-modal-footer"
              className="flex items-center justify-center p-6 rounded-b gap-[20px]"
            >
              <button
                className="bg-second-white font-bold sm:px-8 md:px-12 sm:py-2 md:py-3.5 text-secondary-text text-md outline-none  mr-1 mb-1 ease-linear transition-all duration-150 rounded-full"
                type="button"
                onClick={closeModal}
              >
                Batal
              </button>
              <button
                className="bg-red font-bold sm:px-8 md:px-12 sm:py-2 md:py-3.5 text-text-white text-md outline-none  mr-1 mb-1 ease-linear transition-all duration-150 rounded-full"
                type="button"
                onClick={(e) => handleDelete(e)}
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default DeleteModal;
