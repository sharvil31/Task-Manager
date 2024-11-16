import React, { useState } from "react";

const TaskCard = ({ title, titleColor, tasks, handleTaskClick, query }) => {

  // const searchQuery = query || ""; 
  console.log("Current search query:", query);

  return (
    <div className="w-full lg:w-[30%] h-max bg-[#2B2C37] bg-opacity-30 backdrop-blur-sm border-2 border-[#3E3F4E] rounded-lg flex flex-col items-center gap-5 p-5">
      <h1 className={`text-3xl font-semibold ${titleColor}`}>{title}</h1>

      {tasks.length > 0 ? (
        <div className="w-full max-h-80 overflow-y-scroll tasks-container pr-2">
          {tasks
            .filter((task) => task.title.toLowerCase().includes(query))
            .map((task, index) => (
              <div
                onClick={() => {
                  handleTaskClick(task);
                  console.log(index);
                }}
                key={index}
                title="Click to Edit"
                className={`w-full ${
                  task.status === "Completed"
                    ? "bg-green-800/20 border-green-500"
                    : "bg-[#1F2029] border-[#3E3F4E]"
                }  border text-left rounded-md p-3 cursor-pointer text-wrap task-card backdrop-blur-sm bg-opacity-30 shadow-lg relative -z-0`}
              >
                <h2 className="text-lg font-semibold text-white">
                  {task.title}
                </h2>
                <p className="text-sm text-gray-400">{task.description}</p>
              </div>
            ))}
        </div>
      ) : (
        <p>No Tasks Available</p>
      )}
    </div>
  );
};

export default TaskCard;
