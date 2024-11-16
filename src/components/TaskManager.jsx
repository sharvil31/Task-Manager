import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "/src/App.css";
import Header from "./Header";
import SearchTask from "./SearchTask";
import SortTasks from "./SortTasks";
import TasksDashboard from "./TasksDashboard";
import AddTask from "./AddTask";
import BlurBg from "./BlurBg";

const TaskManager = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);
  const [query, setQuery] = useState("");

  const [highPriorityTasks, setHighPriorityTasks] = useState([]);
  const [mediumPriorityTasks, setMediumPriorityTasks] = useState([]);
  const [lowPriorityTasks, setLowPriorityTasks] = useState([]);

  useEffect(() => {
    const storedHighPriorityTasks =
      JSON.parse(localStorage.getItem("HighPriorityTasks")) || [];
    const storedMediumPriorityTasks =
      JSON.parse(localStorage.getItem("MediumPriorityTasks")) || [];
    const storedLowPriorityTasks =
      JSON.parse(localStorage.getItem("LowPriorityTasks")) || [];

    setHighPriorityTasks(storedHighPriorityTasks);
    setMediumPriorityTasks(storedMediumPriorityTasks);
    setLowPriorityTasks(storedLowPriorityTasks);
  }, []);

  const handleAddTask = () => {
    if (title && description && priority && status) {
      const newTask = { id: uuidv4(), title, description, priority, status }; // Generate unique ID

      if (selectedTask) {
        updateTaskInPriorityList(newTask, selectedTask.priority);
      } else {
        addNewTask(newTask);
      }

      setTitle("");
      setDescription("");
      setPriority("");
      setStatus("");
      setSelectedTask(null);
      setShowAddTask(false);
    } else {
      alert("Fill out all fields");
    }
  };

  const updateTaskInPriorityList = (updatedTask, taskPriority) => {
    let updatedTasks;

    if (taskPriority === "High Priority") {
      updatedTasks = highPriorityTasks.filter(
        (task) => task.id !== selectedTask.id
      );
      setHighPriorityTasks(updatedTasks);
      localStorage.setItem("HighPriorityTasks", JSON.stringify(updatedTasks));
    } else if (taskPriority === "Medium Priority") {
      updatedTasks = mediumPriorityTasks.filter(
        (task) => task.id !== selectedTask.id
      );
      setMediumPriorityTasks(updatedTasks);
      localStorage.setItem("MediumPriorityTasks", JSON.stringify(updatedTasks));
    } else if (taskPriority === "Low Priority") {
      updatedTasks = lowPriorityTasks.filter(
        (task) => task.id !== selectedTask.id
      );
      setLowPriorityTasks(updatedTasks);
      localStorage.setItem("LowPriorityTasks", JSON.stringify(updatedTasks));
    }

    if (updatedTask.priority === "High Priority") {
      updatedTasks = highPriorityTasks.map((task) =>
        task.id === selectedTask.id ? updatedTask : task
      );
      if (!updatedTasks.some((task) => task.id === updatedTask.id)) {
        updatedTasks.push(updatedTask);
      }
      setHighPriorityTasks(updatedTasks);
      localStorage.setItem("HighPriorityTasks", JSON.stringify(updatedTasks));
    } else if (updatedTask.priority === "Medium Priority") {
      updatedTasks = mediumPriorityTasks.map((task) =>
        task.id === selectedTask.id ? updatedTask : task
      );
      if (!updatedTasks.some((task) => task.id === updatedTask.id)) {
        updatedTasks.push(updatedTask);
      }
      setMediumPriorityTasks(updatedTasks);
      localStorage.setItem("MediumPriorityTasks", JSON.stringify(updatedTasks));
    } else if (updatedTask.priority === "Low Priority") {
      updatedTasks = lowPriorityTasks.map((task) =>
        task.id === selectedTask.id ? updatedTask : task
      );
      if (!updatedTasks.some((task) => task.id === updatedTask.id)) {
        updatedTasks.push(updatedTask);
      }
      setLowPriorityTasks(updatedTasks);
      localStorage.setItem("LowPriorityTasks", JSON.stringify(updatedTasks));
    }
  };

  const addNewTask = (newTask) => {
    let updatedTasks;
    if (newTask.priority === "High Priority") {
      updatedTasks = [...highPriorityTasks, newTask];
      setHighPriorityTasks(updatedTasks);
      localStorage.setItem("HighPriorityTasks", JSON.stringify(updatedTasks));
    } else if (newTask.priority === "Medium Priority") {
      updatedTasks = [...mediumPriorityTasks, newTask];
      setMediumPriorityTasks(updatedTasks);
      localStorage.setItem("MediumPriorityTasks", JSON.stringify(updatedTasks));
    } else if (newTask.priority === "Low Priority") {
      updatedTasks = [...lowPriorityTasks, newTask];
      setLowPriorityTasks(updatedTasks);
      localStorage.setItem("LowPriorityTasks", JSON.stringify(updatedTasks));
    }
  };

  const handleDeleteTask = () => {
    if (selectedTask) {
      let updatedTasks;
      if (selectedTask.priority === "High Priority") {
        updatedTasks = highPriorityTasks.filter(
          (task) => task.id !== selectedTask.id
        );
        setHighPriorityTasks(updatedTasks);
        localStorage.setItem("HighPriorityTasks", JSON.stringify(updatedTasks));
      } else if (selectedTask.priority === "Medium Priority") {
        updatedTasks = mediumPriorityTasks.filter(
          (task) => task.id !== selectedTask.id
        );
        setMediumPriorityTasks(updatedTasks);
        localStorage.setItem(
          "MediumPriorityTasks",
          JSON.stringify(updatedTasks)
        );
      } else if (selectedTask.priority === "Low Priority") {
        updatedTasks = lowPriorityTasks.filter(
          (task) => task.id !== selectedTask.id
        );
        setLowPriorityTasks(updatedTasks);
        localStorage.setItem("LowPriorityTasks", JSON.stringify(updatedTasks));
      }
    }

    setTitle("");
    setDescription("");
    setPriority("");
    setStatus("");
    setShowAddTask(false);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setTitle(task.title);
    setDescription(task.description);
    setPriority(task.priority);
    setStatus(task.status);
    setShowAddTask(true);
  };

  return (
    <main className="w-full min-h-screen bg-[#000000] text-white relative z-20" style={{wordSpacing: "1px"}}>
      <BlurBg />
      <Header
        setShowAddTask={setShowAddTask}
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
        setTitle={setTitle}
        setDescription={setDescription}
        setPriority={setPriority}
        setStatus={setStatus}
      />
      <AddTask
        showAddTask={showAddTask}
        setShowAddTask={setShowAddTask}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        priority={priority}
        setPriority={setPriority}
        status={status}
        setStatus={setStatus}
        handleAddTask={handleAddTask}
        selectedTask={selectedTask}
        handleDeleteTask={handleDeleteTask}
      />

      <section className="flex flex-col md:flex-row justify-center mt-10 md:mt-12 gap-6 md:gap-28 px-8">
        <SearchTask setQuery={setQuery} />
        <SortTasks
          highPriorityTasks={highPriorityTasks}
          setHighPriorityTasks={setHighPriorityTasks}
          mediumPriorityTasks={mediumPriorityTasks}
          setMediumPriorityTasks={setMediumPriorityTasks}
          lowPriorityTasks={lowPriorityTasks}
          setLowPriorityTasks={setLowPriorityTasks}
        />
      </section>

      <section className="p-8 min-h-96 flex flex-col lg:flex-row mt-12 items-stretch justify-center gap-8 w-full text-center">
        <TasksDashboard
          highPriorityTasks={highPriorityTasks}
          mediumPriorityTasks={mediumPriorityTasks}
          lowPriorityTasks={lowPriorityTasks}
          showAddTask={showAddTask}
          setShowAddTask={setShowAddTask}
          handleTaskClick={handleTaskClick}
          query={query}
        />
      </section>
    </main>
  );
};

export default TaskManager;
