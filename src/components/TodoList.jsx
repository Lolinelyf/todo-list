import { useState, useEffect } from "react";

import TaskList from "./TaskList";
import FloatingAddTaskButton from "./FloatingAddTaskButton";
import Container from "./Container";

export default function TodoList() {
  const [tasks, setTasks] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    return saved;
  });

  // Сохранение в localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Добавление новой задачи
  const addTask = newTask => {
    setTasks(prev => [...prev, newTask]);
  };

  // Обновление задачи
  const updateTask = updatedTask => {
    setTasks(prev =>
      prev.map(task => (task.id === updatedTask.id ? updatedTask : task)),
    );
  };

  // Удаление задачи
  const deleteTask = taskId => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  return (
    <Container>
      <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
      <FloatingAddTaskButton onAdd={addTask} />
    </Container>
  );
}
