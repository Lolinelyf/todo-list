import { useState } from "react";
import Button from "./Button";

export default function FormAddingTask({ onClose, onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = el => {
    el.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
      createdAt: new Date().toLocaleDateString(),
    };

    onAdd(newTask);
    setTitle("");
    setDescription("");

    if (onClose) onClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl space-y-4 max-w-lg mx-auto transition-all duration-300 mb-7.5"
    >
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
          onChange={el => setTitle(el.target.value)}
          placeholder="Введите заголовок задачи"
          required
          className="w-full h-10 px-3 py-2 text-sm bg-violet-50 border border-violet-200
                     rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400
                     transition-shadow placeholder:text-violet-300"
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
          onChange={el => setDescription(el.target.value)}
          placeholder="Введите описание задачи"
          className="w-full px-3 py-2 text-sm resize-none bg-violet-50 border border-violet-200
                     rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400
                     transition-shadow placeholder:text-violet-300"
        />
      </div>

      <div className="flex flex-col gap-3">
        <Button type="submit" className="w-full">
          Добавить задачу
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
