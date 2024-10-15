import SearchTask from "./SearchTask";
import TaskList from "./TaskList";

const Taskboard = () => {
  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container">
          <SearchTask />
          <TaskList />
        </div>
      </section>
    </>
  );
};

export default Taskboard;
