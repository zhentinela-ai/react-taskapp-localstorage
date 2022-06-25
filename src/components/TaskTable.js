import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
  const taskTableRow = (doneValue) => {
    return tasks
    .filter(task => task.done === doneValue)
    .map((task) => (
      <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
    ));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>{taskTableRow(showCompleted)}</tbody>
    </table>
  );
};
