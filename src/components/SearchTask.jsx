import React from "react";
import 'remixicon/fonts/remixicon.css'

const SearchTask = ({setQuery}) => {
  return (
    <div className="py-2 px-3 max-w-64 md:max-w-96 w-full rounded-md gap-3 flex items-center border-2 border-[#3E3F4E] text-inherit bg-[#2B2C37] backdrop-blur-sm bg-opacity-30 shadow-lg justify-center">
        <i className="" class="ri-search-2-line ri-lg"></i>
      <input onChange={(e) => setQuery(e.target.value.toLowerCase())} className="w-full rounded-md bg-[#2B2C37] backdrop-blur-sm bg-opacity-0 shadow-lg border-none outline-none" type="text" placeholder="Search Task by Title.." />
    </div>
  );
};

export default SearchTask;
