import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import { temporaryTaskList } from "../../utils/utils";
import AddTaskModal from "./AddTaskModal";

const Taskboard = () => {
  const [taskListData, setTaskListData] = useState(temporaryTaskList);
  const [showAddModal, setShowAddModal] = useState(false);
  const handleDeleteTask = (id) => {
    const newFilterArray = taskListData.filter((item) => item.id !== id);
    setTaskListData(newFilterArray);
  };
  const handleAddTask = (task) => {
    console.log(task);
    setTaskListData((prev) => [...prev, task]);
    setShowAddModal(false); 
  };
  console.log(taskListData, "this is from the taskboard component");
  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddModal && (
          <AddTaskModal
            setShowAddModal={setShowAddModal}
            handleAddTask={handleAddTask}
          />
        )}
        <div className="container">
          <SearchTask />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction handleAddTask={() => setShowAddModal(true)} />
            <TaskList data={taskListData} handleDeleteTask={handleDeleteTask} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Taskboard;
