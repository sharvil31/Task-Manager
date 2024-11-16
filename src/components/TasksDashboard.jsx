import React from "react";
import TaskCard from "./TaskCard";

const TasksDashboard = ({ highPriorityTasks, mediumPriorityTasks, lowPriorityTasks, handleTaskClick, query }) => {

  return (
    <>
      <TaskCard 
        title="High Priority Tasks"
        titleColor="text-rose-600"
        tasks={highPriorityTasks} 
        handleTaskClick={handleTaskClick}
        query={query}
     />

      <TaskCard
        title="Medium Priority Tasks"
        titleColor="text-amber-500"
        tasks={mediumPriorityTasks}
        handleTaskClick={handleTaskClick}
        query={query}
      />

      <TaskCard
        title="Low Priority Tasks"
        titleColor="text-lime-500"
        tasks={lowPriorityTasks}
        handleTaskClick={handleTaskClick}
        query={query}
      />
    </>
  );
};

export default TasksDashboard;
