import { useState, useEffect } from "react";
import EditTaskForm from "./EditTaskForm";
import Button from "./Button";

export default function Task({ task, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    isEditing
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = null);
  }, [isEditing]);

  const handleUpdate = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    if (window.confirm("Удалить эту задачу?")) {
      onDelete(task.id);
    }
  };

  return (
    <>
      <li className="flex flex-col gap-4 rounded-xl p-5 bg-white">
        <div className="text-gray-800">
          <span
            className={`w-3 h-3 ${
              task.completed ? "bg-emerald-400" : "bg-amber-400"
            } rounded-full float-left mt-1.5 mr-2`}
            aria-hidden="true"
          ></span>

          <h3 className="text-base mb-3 leading-5.5">{task.title}</h3>
          <p className="text-sm text-gray-500 line-clamp-3">
            {task.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-gray-100">
          <time
            className="px-2 py-1.5 rounded-md bg-gray-50 text-xs font-medium text-gray-700"
            dateTime={task.createdAt}
          >
            {task.createdAt}
          </time>
          <Button type="button" color="red" size="sm" onClick={handleDelete}>
            <svg className="w-2.5 h-3.5 fill-red-600">
              <use href="/svg-sprite.svg#icon-delete"></use>
            </svg>
            Удалить
          </Button>

          <Button
            type="button"
            color="violetLight"
            size="sm"
            onClick={handleUpdate}
          >
            <svg className="w-3 h-3.5 fill-violet-600">
              <use href="/svg-sprite.svg#icon-change"></use>
            </svg>
            Изменить
          </Button>
        </div>
      </li>

      {isEditing && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black opacity-50 cursor-pointer "
            onClick={() => setIsEditing(false)}
          ></div>

          <div
            className="fixed top-5 left-5 right-5 z-50 flex justify-center p-6 bg-white rounded-xl animate-fadeInUp"
            style={{ animation: "fadeInUp 0.3s ease forwards" }}
          >
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="absolute top-3 right-6 cursor-pointer text-gray-500 hover:text-gray-800 text-xl"
              aria-label="Закрыть"
            >
              &times;
            </button>

            <EditTaskForm
              task={task}
              onUpdate={onUpdate}
              onClose={() => setIsEditing(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
