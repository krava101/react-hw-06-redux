import { useSelector } from "react-redux";
import { getTasks } from "../../redux/selectors";

export const TaskCounter = () => {
  const tasks = useSelector(getTasks);

  const count = tasks.reduce(
    (acc, task) => {
      task.completed ? acc.completed += 1 : acc.active += 1;
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p>Active: {count.active}</p>
      <p>Completed: {count.completed}</p>
    </div>
  );
};