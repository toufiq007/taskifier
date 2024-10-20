const TaskActionButton = ({ id, handleDeleteTask }) => {
  return (
    <div className="flex items-center justify-center space-x-3">
      <button onClick={() => handleDeleteTask(id)} className="text-red-500">
        Delete
      </button>
      <button className="text-blue-500">Edit</button>
    </div>
  );
};

export default TaskActionButton;
