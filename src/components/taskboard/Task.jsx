/* eslint-disable react/prop-types */
import { useState } from "react";
import { StarActiveIcon, StarInactiveIcon } from "../../assets/icons/SvgIcons";
import TaskActionButton from "./TaskActionButton";

const Task = ({ task, handleDeleteTask }) => {
  // const [favouriteTask, setFavouriteTask] = useState(false);
  return (
    <>
      <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
        <td>
          {/* <span
            onClick={() => setFavouriteTask(!favouriteTask)}
            className="cursor-pointer"
          >
            {favouriteTask ? <StarActiveIcon /> : <StarInactiveIcon />}
          </span> */}
          {task.isFavourite ? <StarActiveIcon /> : <StarInactiveIcon />}
        </td>
        <td>{task.taskTitle}</td>
        <td>
          <div>{task.taskDesc}</div>
        </td>
        <td>
          <ul className="flex justify-center gap-1.5 flex-wrap">
            {task.tags.map((tag, index) => (
              <li key={index}>
                <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </td>
        <td className="text-center">High</td>
        <td>
          <TaskActionButton id={task.id} handleDeleteTask={handleDeleteTask} />
        </td>
      </tr>
    </>
  );
};

export default Task;
