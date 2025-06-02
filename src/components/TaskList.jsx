import Task from "./Task";

export default function TaskList({ tasks, onUpdate, onDelete }) {
  return (
    <ul className="space-y-2 mb-7.5">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
