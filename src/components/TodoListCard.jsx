import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DeleteModal from "./modal/deleteModal";

const TodoListCard = ({ data, edit, activityId }) => {
  const [openDelete, setOpenDelete] = useState(false);
  const renderStyle = () => {
    if (data.priority === "very-high") {
      return "w-[12px] h-[12px] rounded-full bg-red";
    } else if (data.priority === "high") {
      return "w-[12px] h-[12px] rounded-full bg-yellow";
    } else if (data.priority === "normal") {
      return "w-[12px] h-[12px] rounded-full bg-green";
    } else if (data.priority === "low") {
      return "w-[12px] h-[12px] rounded-full bg-primary";
    } else if (data.priority === "very-low") {
      return "w-[12px] h-[12px] rounded-full bg-purple";
    }
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleChecklist = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      <div className="w-full bg-text-white shadow-lg border border-second-white flex items-center justify-between p-5">
        <div className="flex gap-5 items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            onChange={(e) => handleChecklist(e)}
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <div className={renderStyle()}></div>
          {isChecked ? (
            <p className="text-sm line-through">{data.title}</p>
          ) : (
            <p className="text-sm">{data.title}</p>
          )}
          <button data-cy="activity-detail-edit-button" onClick={edit}>
            <svg
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-[14px] sm:w-[12px] md:h-[14px] sm:h-[12px]"
            >
              <path
                d="M1 16.9998H5L15.5 6.49981C16.0304 5.96938 16.3284 5.24996 16.3284 4.49981C16.3284 3.74967 16.0304 3.03025 15.5 2.49981C14.9696 1.96938 14.2501 1.67139 13.5 1.67139C12.7499 1.67139 12.0304 1.96938 11.5 2.49981L1 12.9998V16.9998Z"
                stroke="#A4A4A4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 3.49982L14.5 7.49982"
                stroke="#A4A4A4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <button
          data-cy="activity-delete-btn"
          onClick={() => setOpenDelete(true)}
        >
          <svg
            className="md:w-[16px] md:h-[16px]"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5H17"
              stroke="#888888"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 9V15"
              stroke="#888888"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 9V15"
              stroke="#888888"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 5L3 17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17L16 5"
              stroke="#888888"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 5V2C6 1.73478 6.10536 1.48043 6.29289 1.29289C6.48043 1.10536 6.73478 1 7 1H11C11.2652 1 11.5196 1.10536 11.7071 1.29289C11.8946 1.48043 12 1.73478 12 2V5"
              stroke="#888888"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {openDelete && (
        <DeleteModal
          closeModal={() => setOpenDelete(false)}
          data={data}
          penanda="List Item"
          activityId={activityId}
        />
      )}
    </>
  );
};

export default TodoListCard;
