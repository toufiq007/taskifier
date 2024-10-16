/* eslint-disable react/prop-types */
import { StarActiveIcon, StarInactiveIcon } from "../../assets/icons/SvgIcons";

const Task = ({
  task,
  handleDeleteTask,
  handleFindUpdateTask,
  handleFavouriteTask,
}) => {
  return (
    <>
      <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
        <td>
          <span
            onClick={() => handleFavouriteTask(task.id)}
            className="cursor-pointer"
          >
            {task.isFavourite ? <StarActiveIcon /> : <StarInactiveIcon />}
          </span>
        </td>
        <td>{task.taskTitle}</td>
        <td>
          <div>{task.taskDesc}</div>
        </td>
        <td>
          <ul className="flex justify-center gap-1.5 flex-wrap w-[200px]">
            <li>
              {task.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]"
                >
                  {tag}
                </span>
              ))}
            </li>
          </ul>
        </td>
        <td className="text-center">High</td>
        <td>
          {/* <TaskActionButton id={task.id} handleDeleteTask={handleDeleteTask} /> */}
          <div className="flex items-center justify-center space-x-3">
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="text-red-500"
            >
              Delete
            </button>
            <button
              onClick={() => handleFindUpdateTask(task)}
              className="text-blue-500"
            >
              Edit
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Task;
