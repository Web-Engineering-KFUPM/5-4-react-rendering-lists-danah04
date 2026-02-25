// src/components/CourseCard.jsx
import React from "react";
import TaskItem from "./TaskItem";

export default function CourseCard({ course, index, onMutateCourse }) {
  /* Toggle a task's isDone */
  function toggleTask(id) {
    onMutateCourse(index, (tasks) =>
      tasks.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );
  }

  /* Delete a task by id */
  function deleteTask(id) {
    onMutateCourse(index, (tasks) => tasks.filter((t) => t.id !== id));
  }

  return (
    <article className="card">
      <header>
        <h2 className="courseTitle">{course.title}</h2>
        <p className="courseMeta">{course.term}</p>
      </header>

      <section>
        <ul className="tasks">
          {course.tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      </section>
    </article>
  );
}