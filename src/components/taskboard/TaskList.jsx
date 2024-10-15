import Task from "./Task";

const TaskList = ({ data, handleDeleteTask }) => {
  return (
    <>
      {data?.length > 0 ? (
        <div className="overflow-auto">
          <table>
            <thead>
              <tr>
                <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                  Title
                </th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                  Description
                </th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                  Tags
                </th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                  Priority
                </th>
                <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                  Options
                </th>
              </tr>
            </thead>

            <tbody>
              {data.length > 0 &&
                data.map((task) => (
                  <Task
                    key={task.id}
                    task={task}
                    handleDeleteTask={handleDeleteTask}
                  />
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text-lg">No Tasks Found. Please Add One.</h2>
      )}
    </>
  );
};

export default TaskList;
