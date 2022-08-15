import React from "react";

const Navbar = () => {
  return (
    <>
      <nav
        data-cy="header"
        className="w-full md:h-[6.5625rem] sm:h-[4.5625rem]"
      >
        <div
          data-cy="header-background"
          className="flex items-center font-bold bg-primary text-text-white h-full lg:px-56 md:px-32 sm:px-10"
        >
          <h1
            data-cy="header-title"
            className="uppercase md:text-[32px] sm:text-[20px]"
          >
            to do list app
          </h1>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
