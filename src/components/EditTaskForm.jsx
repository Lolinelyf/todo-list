import { useState } from "react";
import Button from "./Button";

export default function EditTaskForm({ task, onUpdate, onClose }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [completed, setCompleted] = useState(task.completed);

  const handleSubmit = el => {
    el.preventDefault();
    onUpdate({
      ...task,
      title,
      description,
      completed,
    });

    if (onClose) onClose();
  };

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  return (
    <form onSubmit={handleSubmit} className="py-6 space-y-5 w-full">
      <h3 className="text-lg font-semibold text-gray-800">
        Редактировать задачу
      </h3>

      <div className="space-y-2">
        <label
          htmlFor="task-title"
          className="block text-sm font-medium text-gray-700"
        >
          Заголовок
        </label>
        <input
          id="task-title"
          name="title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Введите заголовок задачи"
          required
          className="w-full h-10 px-3 py-2 text-sm bg-violet-50 border border-violet-200 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400 transition-shadow"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="task-description"
          className="block text-sm font-medium text-gray-700"
        >
          Описание
        </label>
        <textarea
          id="task-description"
          name="description"
          rows="4"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Введите описание задачи"
          className="w-full px-3 py-2 text-sm resize-none bg-violet-50 border border-violet-200 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400 transition-shadow"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          id="task-completed"
          type="checkbox"
          className="peer hidden"
          checked={completed}
          onChange={handleCheckboxChange}
        />

        <label
          htmlFor="task-completed"
          className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md border-2 border-gray-300 bg-white transition-colors peer-checked:border-violet-500 peer-checked:bg-violet-500"
        >
          <svg className="h-5 w-5 text-white fill-white peer-checked:opacity-100">
            <use href="/svg-sprite.svg#icon-checkbox"></use>
          </svg>
        </label>

        <label
          htmlFor="task-completed"
          className="text-sm text-gray-700 cursor-pointer select-none"
        >
          Отметить как выполненную
        </label>
      </div>

      <div className="flex flex-col gap-3 pt-2">
        <Button type="submit" color="violet" className="w-full">
          Сохранить изменения
        </Button>
        {onClose && (
          <Button
            type="button"
            color="gray"
            className="w-full"
            onClick={onClose}
          >
            Отмена
          </Button>
        )}
      </div>
    </form>
  );
}
