// src/components/TaskItem.jsx
import React from "react";
import DueBadge from "./DueBadge";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task">
      <label className="taskMain">
        {/* Checkbox reflects task.isDone and calls onToggle(task.id) */}
        <input
          type="checkbox"
          checked={!!task.isDone}
          onChange={() => onToggle(task.id)}
        />

        {/* Show DueBadge only when task is not done */}
        {!task.isDone && <DueBadge dueDate={task.dueDate} />}

        {/* Task title */}
        <span className="title">{task.title}</span>
      </label>

      {/* Delete button */}
      <button
        className="ghost"
        aria-label="Delete task"
        onClick={() => onDelete(task.id)}
      >
        &times;
      </button>
    </li>
  );
}