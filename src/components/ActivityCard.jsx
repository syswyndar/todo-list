import React, { useState } from "react";
import moment from "moment";
import DeleteModal from "./modal/deleteModal";
import { useNavigate } from "react-router-dom";

const ActivityCard = ({ deleteActivity, data, successDelete }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const navigate = useNavigate();

  const toDetailActivity = (e) => {
    e.preventDefault();
    navigate(`/activity/${data.id}`, { state: { title: data.title } });
  };

  return (
    <>
      <div
        data-cy="activity-item"
        className="w-[14.6875rem] h-[14.6875rem] bg-text-white shadow-xl rounded-xl p-6 flex flex-col justify-between font-[500] gap-5 hover:cursor-pointer"
      >
        <div
          data-cy="activity-body"
          className="h-[90%] overflow-y-auto"
          onClick={(e) => toDetailActivity(e)}
        >
          <h4 data-cy="activity-title" className="text-[18] break-words">
            {data.title}
          </h4>
        </div>
        <div data-cy="activity-footer" className="flex justify-between">
          <p
            data-cy="activity-created-date"
            className="text-[14px] text-secondary-text"
          >
            {moment(data.created_at).format("LL")}
            {/* {JSON.stringify(data.created_at)} */}
          </p>
          <button
            data-cy="activity-delete-btn"
            onClick={() => setOpenDeleteModal(true)}
            className="z-50"
          >
            <svg
              className="md:w-[20px] md:h-[20px]"
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
      </div>
      {openDeleteModal && (
        <DeleteModal
          closeModal={() => setOpenDeleteModal(false)}
          data={data}
          penanda="Activity"
          successDelete={successDelete}
        />
      )}
    </>
  );
};

export default ActivityCard;
