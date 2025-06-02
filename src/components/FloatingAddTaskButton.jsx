import { useState, useEffect } from "react";
import AddingTaskForm from "./AddingTaskForm";

export default function FloatingAddTaskButton({ onAdd }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = null);
  }, [isOpen]);

  const handleAdd = newTask => {
    onAdd(newTask);
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-1/2 translate-x-1/2 z-30 h-14 w-14 bg-emerald-500 hover:bg-emerald-600
                   active:bg-emerald-700 text-white rounded-full shadow-lg flex items-center
                   justify-center transition-transform duration-200 hover:scale-105 focus:outline-none
                   focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
        aria-label="Добавить задачу"
      >
        <svg className="w-3.5 h-3.5 fill-white">
          <use href="/svg-sprite.svg#icon-plus"></use>
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>

          <div
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-md transform animate-fadeInUp"
            style={{ animation: "fadeInUp 0.3s ease forwards" }}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer absolute top-3 right-6 text-gray-500 hover:text-gray-800"
              aria-label="Закрыть"
            >
              &times;
            </button>
            <AddingTaskForm
              onAdd={handleAdd}
              onClose={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
