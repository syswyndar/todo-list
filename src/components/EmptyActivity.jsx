import React from "react";
import EmptyActivityImg from "../assets/activity-empty-state.png";

const EmptyActivity = () => {
  return (
    <>
      <div
        data-cy="activity-empty-state"
        className="flex justify-center py-[4.0625rem]"
      >
        <img
          src={EmptyActivityImg}
          alt=""
          data-cy="activity-empty-state-image"
          className="md:w-[40.9375em] md:h-[26.625em] sm:w-[30.9375em] sm:h-[14.625em]"
        />
      </div>
    </>
  );
};

export default EmptyActivity;
