import React, { useEffect } from "react";

const AddTask = ({
  showAddTask,
  setShowAddTask,
  title,
  setTitle,
  description,
  setDescription,
  priority,
  setPriority,
  status,
  setStatus,
  handleAddTask,
  selectedTask,
  handleDeleteTask
}) => {

  // useEffect(() => {
  //   if(selectedTask) {
  //     setTitle(selectedTask.title);
  //     setDescription(selectedTask.description);
  //     setPriority(selectedTask.priority);
  //     setStatus(selectedTask.status);

  //   } else {
  //     setTitle("");
  //     setDescription("");
  //     setPriority("");
  //     setStatus("")
  //   }
  // }, [selectedTask])

  if(!showAddTask) return null;

  const isEditing = Boolean(selectedTask);


  return (
    <div
      onClick={() => {
        setShowAddTask(false)
      }}
      className={`fixed inset-0 ${
        showAddTask ? "flex" : "hidden"
      } items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-[350px] md:w-[480px] flex flex-col gap-6 overflow-hidden md:gap-8 bg-[#2B2C37] backdrop-blur-2xl bg-opacity-30 shadow-lg pt-4 md:pt-8 pb-7 md:pb-12 px-5 rounded-md z-50`}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">{isEditing ? "Edit Task" : "Add New Task"}</h1>
          <div className="cursor-pointer">
            <i
              onClick={() => setShowAddTask(false)}
              class="ri-close-large-line ri-2x"
            ></i>
          </div>
        </div>

        <form
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   handleAddTask();
        // }}
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="Title">Title</label>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
                // console.log(title);
              }}
              type="text"
              value={title}
              className="px-2 py-2 w-full rounded-md bg-[#2B2C37] backdrop-blur-sm bg-opacity-30 shadow-lg outline-none border-2 border-[#3E3F4E]"
              placeholder="e.g. Take Coffee Break"
            />

            <label htmlFor="Description" className="mt-4">
              Description
            </label>
            <textarea
              onChange={(e) => {
                setDescription(e.target.value);
                // console.log(description);
              }}
              rows={3}
              value={description}
              className="px-2 py-1 rounded-md bg-[#2B2C37] backdrop-blur-sm bg-opacity-30 shadow-lg border-2 outline-none border-[#3E3F4E]"
              placeholder="e.g. It's always good to take a break This 15 minute break will recharge the batteries a little"
            />
          </div>
        </form>

        <select
          onChange={(e) => {
            setPriority(e.target.value);
            // console.log(priority);
          }}
          value={priority}
          className="py-2 px-3 w-auto rounded-md border-2 border-[#3E3F4E] backdrop-blur-sm bg-opacity-30 shadow-lg outline-none bg-[#2B2C37] text-white cursor-pointer"
        >
          <option value="Priority-Level" hidden>
            Set Priority Level
          </option>
          <option className="text-xs md:text-base text-[#3E3F4E] font-semibold" value="High Priority">
            High Priority
          </option>
          <option className="text-xs md:text-base text-[#3E3F4E] font-semibold" value="Medium Priority">
            Medium Priority
          </option>
          <option className="text-xs md:text-base pb-3 text-[#3E3F4E] font-semibold" value="Low Priority">
            Low Priority
          </option>
        </select>

        <select
          onChange={(e) => {
            setStatus(e.target.value);
            // console.log(status);
          }}
          value={status}
          className="py-2 px-3 w-full rounded-md border-2 border-[#3E3F4E] backdrop-blur-sm bg-opacity-30 shadow-lg outline-none bg-[#2B2C37] text-white cursor-pointer"
        >
          <option value="Status" hidden>
            Status
          </option>
          <option className="text-xs md:text-base text-[#3E3F4E] font-semibold" value="Completed">
            Completed
          </option>
          <option className="text-xs md:text-base text-[#3E3F4E] font-semibold" value="Not Completed">
            Not Completed
          </option>
        </select>

        <div onClick={handleAddTask} className="p-2 border hover:bg-[#635FC8] hover:border-[#635FC8] text-center font-semibold rounded-full cursor-pointer transition-colors ease-in-out">
           {isEditing ? "Update" : "Add"} {isEditing ? "Task" : `to ${priority} Tasks`}
        </div>
        
        { isEditing &&
        <div onClick={handleDeleteTask} className="max-w-28 w-full self-end text-center py-2 ml-auto text-red-100 bg-red-800/20 border-2 border-red-500 rounded-lg cursor-pointer">Delete Task</div> 
        }
      </div>

      
    </div>
  );
};

export default AddTask;
