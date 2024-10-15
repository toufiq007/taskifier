import { useState } from "react";

const AddTaskModal = ({ setShowAddModal, handleAddTask }) => {
  const [tasks, setTasks] = useState({
    taskTitle: "",
    taskDesc: "",
    tags: [],
    priority: "",
    isFavourite: false,
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "tags") {
      value = value.split(",");
      console.log(value, "this is the updated value");
    }
    setTasks({ ...tasks, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(tasks, "this is the modal task");

  return (
    <>
      <div className="bg-black opacity-60 h-full w-full z-10 absolute top-0 left-0"></div>
      {/* <!-- Add Task Form --> */}
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-10 left-1/4"
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          Add New Task
        </h2>

        {/* <!-- inputs --> */}
        <div className="space-y-9 text-white lg:space-y-10">
          {/* <!-- title --> */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="taskTitle"
              value={tasks.taskTitle}
              onChange={handleChange}
              id="title"
              required
            />
          </div>
          {/* <!-- description --> */}
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="taskDesc"
              value={tasks.taskDesc}
              onChange={handleChange}
              id="description"
              required
            ></textarea>
          </div>
          {/* <!-- input group --> */}
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            {/* <!-- tags --> */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                value={tasks.tags}
                onChange={handleChange}
                id="tags"
                required
              />
            </div>
            {/* <!-- priority --> */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                value={tasks.priority}
                onChange={handleChange}
                id="priority"
                required
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>
        {/* <!-- inputs ends --> */}
        <div className="mt-16 flex justify-between lg:mt-20">
          <button
            onClick={() => setShowAddModal(false)}
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Close
          </button>

          <button
            onClick={() => {
              handleAddTask(tasks);
              setShowAddModal(false);
            }}
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Create new Task
          </button>
        </div>
      </form>
      {/* <!-- Add Task Form Ends -->    */}
    </>
  );
};

export default AddTaskModal;
