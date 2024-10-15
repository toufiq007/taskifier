import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import { temporaryTaskList } from "../../utils/utils";

const Taskboard = () => {
  const [taskListData, setTaskListData] = useState(temporaryTaskList);
  const handleDeleteTask = (id) => {
    const newFilterArray = taskListData.filter((item) => item.id !== id);
    setTaskListData(newFilterArray);
  };
  console.log(taskListData, "this is from the taskboard component");
  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container">
          <SearchTask />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction />
            <TaskList data={taskListData} handleDeleteTask={handleDeleteTask} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Taskboard;
