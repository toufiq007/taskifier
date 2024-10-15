import { temporaryTaskList } from "../../utils/utils";
import Task from "./Task";

const TaskList = () => {
  return (
    <>
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
            {temporaryTaskList.length > 0 &&
              temporaryTaskList.map((task) => (
                <Task key={task.id} task={task} />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TaskList;
