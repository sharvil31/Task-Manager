import React, { useEffect, useState } from "react";

const SortTasks = ({
  highPriorityTasks,
  setHighPriorityTasks,
  mediumPriorityTasks,
  setMediumPriorityTasks,
  lowPriorityTasks,
  setLowPriorityTasks,
}) => {

  const [sorted, setSorted] = useState(false);


  // const [isCompletedClicked, setIsCompletedClicked] = useState(false);
  // const [isCNotompletedClicked, setIsCNotompletedClicked] = useState(false);

  // const originalTasks = {
  //   high: highPriorityTasks,
  //   medium: mediumPriorityTasks,
  //   low: lowPriorityTasks
  // }

  // useEffect(() => {
  //   setOriginalTasks({
  //     high: highPriorityTasks,
  //     medium: mediumPriorityTasks,
  //     low: lowPriorityTasks,
  //   });
  // }, [highPriorityTasks, mediumPriorityTasks, lowPriorityTasks]);


  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    if (sortValue === "Completed First") {
      setHighPriorityTasks((prevTasks) =>
        [...prevTasks].sort((a, b) => a.status.localeCompare(b.status))
      );
      setMediumPriorityTasks((prevTasks) =>
        [...prevTasks].sort((a, b) => a.status.localeCompare(b.status))
      );
      setLowPriorityTasks((prevTasks) =>
        [...prevTasks].sort((a, b) => a.status.localeCompare(b.status))
      );
    }
    if (sortValue === "Not Completed First") {
      setHighPriorityTasks((prevTasks) =>
        [...prevTasks].sort((a, b) => b.status.localeCompare(a.status))
      );
      setMediumPriorityTasks((prevTasks) =>
        [...prevTasks].sort((a, b) => b.status.localeCompare(a.status))
      );
      setLowPriorityTasks((prevTasks) =>
        [...prevTasks].sort((a, b) => b.status.localeCompare(a.status))
      );
    }
    if (sortValue === "Newer Tasks First") {
      if(sorted === false) { 
      setHighPriorityTasks((prevTasks) => [...prevTasks].reverse());
      setMediumPriorityTasks((prevTasks) => [...prevTasks].reverse());
      setLowPriorityTasks((prevTasks) => [...prevTasks].reverse());
      setSorted(true);
    }
  }

    if (sortValue === "Older Tasks First") {
      if(sorted) {
      setHighPriorityTasks((prevTasks) => [...prevTasks].reverse());
      setMediumPriorityTasks((prevTasks) => [...prevTasks].reverse());
      setLowPriorityTasks((prevTasks) => [...prevTasks].reverse());
      setSorted(false);
    }
  }
  };

  return (
    <select
      onChange={handleSortChange}
      className="py-2 px-3 max-w-40 md:max-w-52 w-auto rounded-md gap-3 flex items-center outline-none border-2 border-[#3E3F4E] text-inherit bg-[#2B2C37] backdrop-blur-sm bg-opacity-30 shadow-lg justify-center cursor-pointer"
      //   onChange={(e) => setQuery(e.target.value.toLowerCase())}
    >
      <option value="Sort-by" hidden>
        Sort Tasks by..
      </option>
      <option
        className="text-xs text-[#3E3F4E] font-semibold md:text-base pr-2 mb-3"
        value="Completed First"
      >
        Completed First
      </option>
      <option
        className="text-xs text-[#3E3F4E] font-semibold md:text-base pr-2 mb-3"
        value="Not Completed First"
      >
        Not Completed First
      </option>
      <option
        className="text-xs text-[#3E3F4E] font-semibold md:text-base pr-2 mb-3"
        value="Newer Tasks First"
      >
        Newer Tasks First
      </option>
      <option
        className="text-xs text-[#3E3F4E] font-semibold md:text-base pr-2 mb-3"
        value="Older Tasks First"
      >
        Older Tasks First
      </option>
    </select>
  );
};

export default SortTasks;
