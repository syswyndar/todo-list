import React, { useState, useEffect } from "react";
import PriorityList from "../PriorityList";
import { useDispatch, useSelector } from "react-redux";
import {
  createTodo,
  updateTodo,
  getAllTodo,
} from "../../store/actionCreator/todoAction";
import { getActivityById } from "../../store/actionCreator/activitiesAction";

const AddEditTodo = ({ title, closeModal, data, editData }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [inputTitle, setInputTitle] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (title === "Edit List Item") {
      setInputTitle(editData.title);
      let value = editData.priority;
      let color = "";

      if (value === "very-high") {
        color = "red";
      } else if (value === "high") {
        color = "yellow";
      } else if (value === "normal") {
        color = "green";
      } else if (value === "low") {
        color = "primary";
      } else if (value === "very-low") {
        color = "purple";
      }
      setSelectedPriority({
        value,
        color,
      });
    }
  }, []);
  const handleOpenDropdown = (e) => {
    e.preventDefault();
    setOpenDropdown(!openDropdown);
  };

  const handleSelectPriority = (e) => {
    e.preventDefault();
    let value = e.target.value;
    let color = "";

    if (value === "Very High") {
      color = "red";
    } else if (value === "High") {
      color = "yellow";
    } else if (value === "Medium") {
      color = "green";
    } else if (value === "Low") {
      color = "primary";
    } else if (value === "Very Low") {
      color = "purple";
    }
    setSelectedPriority({
      value,
      color,
    });
    setOpenDropdown(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      title: inputTitle,
      priority:
        selectedPriority.value === "Medium"
          ? "normal"
          : selectedPriority.value.split(" ").join("-").toLowerCase(),
      activity_group_id: data.id,
    };
    if (title === "Edit List Item") {
      dispatch(updateTodo(editData.id, payload))
        .then((res) => {
          dispatch(getAllTodo(data.id)).then((res) => {
            closeModal();
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      dispatch(createTodo(payload))
        .then((res) => {
          dispatch(getAllTodo(data.id)).then((res) => {
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
        data-cy={title}
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-secondary-text/60"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col lg:w-[50rem] md:w-[30rem] bg-text-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray/30 rounded-t">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <button
                className="p-1 ml-auto border-0 text-primary-text float-right text-3xl leading-none outline-none focus:outline-none"
                onClick={closeModal}
              >
                <span className="text-gray h-6 w-6 text-2xl block outline-none focus:outline-none">
                  x
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              {/* input title */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium"
                >
                  Nama List Item
                </label>
                <input
                  type="text"
                  id="name"
                  name="title"
                  className="border border-gray/30 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-3"
                  placeholder="Tambahkan List Item"
                  value={inputTitle}
                  onChange={(e) => setInputTitle(e.target.value)}
                />
              </div>

              {/* dropdown */}

              <div
                data-cy="priority-dropdown"
                className="border border-gray/40 w-[12.8125rem] rounded-md relative"
              >
                {selectedPriority === null ? (
                  <button
                    className="w-full flex gap-3 border border-solid border-second-white py-3 px-4 justify-between items-center"
                    onClick={(e) => handleOpenDropdown(e)}
                  >
                    <p>Pilih Priority</p>
                    <span>
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={
                          openDropdown
                            ? "duration-500 -rotate-180"
                            : "duration-500 rotate-0"
                        }
                        // className="hover:rotate-180"
                      >
                        <path
                          d="M1 1L7 7L13 1"
                          stroke="#111111"
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                  </button>
                ) : (
                  <PriorityList
                    color={selectedPriority.color}
                    value={selectedPriority.value}
                    openDropdown={() => setOpenDropdown(!openDropdown)}
                  />
                )}
                {openDropdown && (
                  <div
                    data-cy="priority-list"
                    className="absolute w-full bg-text-white border border-solid border-gray/30 mt-3 animate-wiggle rounded-md shadow-lg"
                  >
                    <button
                      data-cy="very-high-priority"
                      className="w-full h-full flex gap-3 border-b border-solid border-gray/30 py-3 px-4 items-center"
                      value="Very High"
                      onClick={(e) => handleSelectPriority(e)}
                    >
                      <div className="w-[12px] h-[12px] rounded-full bg-red"></div>
                      Very High
                    </button>
                    <button
                      data-cy="high-priority"
                      className="w-full flex gap-3 border-b border-solid border-gray/30 py-3 px-4 items-center"
                      value="High"
                      onClick={(e) => handleSelectPriority(e)}
                    >
                      <div className="w-[12px] h-[12px] rounded-full bg-yellow"></div>
                      High
                    </button>
                    <button
                      data-cy="normal-priority"
                      className="w-full flex gap-3 border-b border-solid border-gray/30 py-3 px-4 items-center"
                      value="Medium"
                      onClick={(e) => handleSelectPriority(e)}
                    >
                      <div className="w-[12px] h-[12px] rounded-full bg-green"></div>
                      Medium
                    </button>
                    <button
                      data-cy="low-priority"
                      className="w-full flex gap-3 border-b border-solid border-gray/30 py-3 px-4 items-center"
                      value="Low"
                      onClick={(e) => handleSelectPriority(e)}
                    >
                      <div className="w-[12px] h-[12px] rounded-full bg-primary"></div>
                      Low
                    </button>
                    <button
                      data-cy="very-low-priority"
                      className="w-full flex gap-3 border-b border-solid border-gray/30 py-3 px-4 items-center"
                      value="Very Low"
                      onClick={(e) => handleSelectPriority(e)}
                    >
                      <div className="w-[12px] h-[12px] rounded-full bg-purple"></div>
                      Very Low
                    </button>
                  </div>
                )}
              </div>
            </div>
            {/*footer*/}
            <div
              data-cy="submit-action"
              className="flex items-center justify-end p-6 border-t border-solid border-gray/30 rounded-b"
            >
              {inputTitle === "" ? (
                <button
                  data-cy="submit-button addEdit-disabled"
                  className="bg-primary opacity-50 text-text-white font-bold text-sm px-6 py-3 rounded-full shadow outline-none ease-linear transition-all duration-150"
                  type="button"
                  disabled
                >
                  Simpan
                </button>
              ) : (
                <button
                  data-cy="submit-button-addEdit"
                  className="bg-primary text-text-white font-bold text-sm px-6 py-3 rounded-full shadow outline-none ease-linear transition-all duration-150"
                  type="button"
                  onClick={(e) => handleSubmit(e)}
                >
                  Simpan
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default AddEditTodo;
