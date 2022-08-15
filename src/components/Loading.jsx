import React from "react";

const Loading = () => {
  return (
    <>
      <div
        data-cy="loading-modal"
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-secondary-text/60"
      >
        <div data-cy="loading-content" className="relative w-auto my-6 mx-auto">
          {/*content*/}
          <div
            data-cy="loading-body"
            className="border-0 rounded-md shadow-lg relative flex flex-col bg-text-white outline-none focus:outline-none px-7 py-3"
          >
            {/*body*/}
            <div className="relative flex-auto">
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-md animate-spin bg-primary"></div>
                <p className="text-primary text-sm leading-relaxed">
                  Loading...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Loading;
