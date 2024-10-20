import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import { temporaryTaskList } from "../../utils/utils";
import AddTaskModal from "./AddTaskModal";

const Taskboard = () => {
  const [taskListData, setTaskListData] = useState(temporaryTaskList);
  const [showAddModal, setShowAddModal] = useState(false);
  const [updateTask, setUpdateTask] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDeleteTask = (id) => {
    const newFilterArray = taskListData.filter((item) => item.id !== id);
    setTaskListData(newFilterArray);
  };

  const addOrEditTask = (newAddedTask, isAdd) => {
    console.log(isAdd, "this is the addOredit task function");
    if (isAdd) {
      setTaskListData((prev) => [...prev, newAddedTask]);
    } else {
      setTaskListData((tasks) =>
        tasks.map((task) => (task.id === newAddedTask.id ? newAddedTask : task))
      );
      setUpdateTask(null);
    }
    setShowAddModal(false);
  };

  const handleFindUpdateTask = (task) => {
    setUpdateTask(task);
    setShowAddModal(true);
  };

  const handleFavouriteTask = (taskID) => {
    setTaskListData((task) =>
      task.map((item) =>
        item.id === taskID ? { ...item, isFavourite: !item.isFavourite } : item
      )
    );
    console.log(taskID);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterList = taskListData.filter((task) =>
    task.taskTitle.toLowerCase().includes(searchQuery)
  );

  console.log({ filterList });

  const handleModalClose = () => {
    setShowAddModal(false);
    setUpdateTask(null);
  };

  console.log(updateTask, "this is the update task");

  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddModal && (
          <AddTaskModal
            handleModalClose={handleModalClose}
            addOrEditTask={addOrEditTask}
            updateTask={updateTask}
          />
        )}
        <div className="container">
          <SearchTask handleChange={handleChange} />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction
              setTaskListData={setTaskListData}
              setShowAddModal={setShowAddModal}
            />
            <TaskList
              data={filterList}
              handleDeleteTask={handleDeleteTask}
              handleFindUpdateTask={handleFindUpdateTask}
              handleFavouriteTask={handleFavouriteTask}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Taskboard;
