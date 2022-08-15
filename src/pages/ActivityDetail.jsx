import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import EmptyTodo from "../components/EmptyTodo";
import AddEditTodo from "../components/modal/AddEditTodo";
import SortListCard from "../components/SortListCard";
import TodoListCard from "../components/TodoListCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getActivityById,
  updateActivity,
} from "../store/actionCreator/activitiesAction";
import { sortingTodo } from "../store/actionCreator/todoAction";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";

const ActivityDetail = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [titleForm, setTitleForm] = useState("");
  const [formData, setFormData] = useState(null);
  const { activityDetail, error, loading } = useSelector(
    (state) => state.activities
  );
  const {
    todos,
    error: errorTodos,
    loading: loadingTodos,
  } = useSelector((state) => state.todos);
  const [isEdit, setIsEdit] = useState(false);
  const [openSortList, setOpenSortList] = useState(false);
  const [openAddEditTodo, setOpenAddEditTodo] = useState(false);

  useEffect(() => {
    setTitle(location.state.title);
    dispatch(getActivityById(id));
  }, []);

  const handleEdit = (e) => {
    e.preventDefault();
    if (title !== activityDetail.title) {
      dispatch(updateActivity(id, { title }));
    }
    setIsEdit(!isEdit);
  };

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleOpenAddEditTodo = (e) => {
    e.preventDefault();
    setOpenAddEditTodo(!openAddEditTodo);
  };

  const handleOpenSortList = (e) => {
    e.preventDefault();
    setOpenSortList(!openSortList);
  };

  const handleOpenForm = (e, title, data) => {
    e.preventDefault();
    setTitleForm(title);
    if (data) {
      console.log("masuk <<<<<<<<<");
      setFormData(data);
    }
    console.log(formData, "ini form data");
    setOpenAddEditTodo(!openAddEditTodo);
  };
  return (
    <>
      {loading || loadingTodos ? (
        <Loading />
      ) : error || errorTodos ? (
        <ErrorPage />
      ) : (
        <div className="py-11">
          <div
            data-cy="activity-detail-header"
            className=" w-full flex justify-between"
          >
            <div className="flex items-center md:gap-8 sm:gap-3">
              <button
                data-cy="activity-detail-back-button"
                onClick={(e) => handleGoBack(e)}
              >
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-[26px] sm:w-[18px] md:h-[26px] sm:h-[18px]"
                >
                  <path
                    d="M6.66675 16L14.6667 24"
                    stroke="#111111"
                    strokeWidth="5"
                    strokeLinecap="square"
                  />
                  <path
                    d="M6.66675 16L14.6667 8"
                    stroke="#111111"
                    strokeWidth="5"
                    strokeLinecap="square"
                  />
                </svg>
              </button>
              {isEdit ? (
                <div className="flex items-center border-b border-teal-500 py-2">
                  <input
                    className="appearance-none border-none w-full leading-tight focus:outline-none md:text-4xl sm:text-[24px] font-[700]"
                    type="text"
                    aria-label="Full name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              ) : (
                <h1
                  data-cy="activity-detail-title"
                  className="md:text-4xl sm:text-[24px] font-[700]"
                >
                  {title}
                </h1>
              )}

              <button
                data-cy="activity-detail-edit-button"
                onClick={(e) => handleEdit(e)}
              >
                <svg
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-[18px] sm:w-[14px] md:h-[18px] sm:h-[14px]"
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
            <div className="flex gap-5 items-center">
              <div>
                <button
                  className="md:p-[1.1rem] sm:p-[0.5rem] border-2 border-secondary-text/30 rounded-full relative"
                  onClick={(e) => handleOpenSortList(e)}
                >
                  <svg
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 6L6 2M6 2L10 6M6 2V16"
                      stroke="#888888"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                    <path
                      d="M20 12L16 16M16 16L12 12M16 16V2"
                      stroke="#888888"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </button>
                {openSortList && <SortListCard />}
              </div>

              <button
                data-cy="activity-button"
                className="flex items-center bg-primary md:px-[2.1rem] sm:px-[1.1rem] md:py-[0.8rem] sm:py-[0.5rem] gap-[0.4rem] text-text-white font-[700] rounded-full md:text-[18px] sm:text-[14px]"
                onClick={(e) => handleOpenForm(e, "Tambah List Item")}
              >
                <span data-cy="activity-button-icon">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:w-[14px] sm:w-[12px] md:h-[14px] sm:h-[12px]"
                  >
                    <path
                      d="M8 0.999878V14.9999"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 8H15"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>Tambah</span>
              </button>
            </div>
          </div>
          {todos?.length === 0 ? (
            <EmptyTodo />
          ) : (
            <div
              data-cy="list-item-container"
              className="pt-10 flex flex-col gap-2 w-full"
            >
              {todos?.map((item) => {
                return (
                  <TodoListCard
                    key={item.id}
                    data={item}
                    edit={(e) => handleOpenForm(e, "Edit List Item", item)}
                    activityId={id}
                  />
                );
              })}
            </div>
          )}
          {openAddEditTodo && (
            <AddEditTodo
              closeModal={() => setOpenAddEditTodo(!openAddEditTodo)}
              data={activityDetail}
              editData={formData}
              title={titleForm}
            />
          )}
        </div>
      )}
    </>
  );
};

export default ActivityDetail;
