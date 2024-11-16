import React from "react";

const Header = ({
  setShowAddTask,
  selectedTask,
  setSelectedTask,
  setTitle,
  setDescription,
  setPriority,
  setStatus,
}) => {
  const handleAddNewTaskClick = () => {
    setSelectedTask(null);
    setTitle("");
    setDescription("");
    setPriority("");
    setStatus("");
    console.log(selectedTask);
    setShowAddTask(true);
  };

  return (
    <header className=" flex items-center justify-center border-b-2 border-[#3E3F4E] backdrop-blur-sm bg-opacity-30 shadow-lg">
      <nav className="w-[90%] px-2 py-6 md:p-6 flex items-center justify-between backdrop-blur-sm bg-opacity-30 shadow-lg">
        <h1 className="font-bold text-lg md:text-2xl">My Task Manager</h1>
        <div
          onClick={handleAddNewTaskClick}
          className="py-2 px-3 md:py-4 md:px-6 border-2 rounded-full font-semibold text-xs md:text-base cursor-pointer hover:bg-[#635FC8] hover:border-[#635FC8] transition-colors ease-in-out"
        >
          <i class="ri-add-large-line"></i>&nbsp;&nbsp;&nbsp;Add New Task
        </div>
      </nav>
    </header>
  );
};

export default Header;
