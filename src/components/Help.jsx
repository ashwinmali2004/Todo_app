import React from 'react';
import { Link } from 'react-router-dom';

const Help = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Help - How to Use iTask</h1>
      <p>Welcome to the iTask app! Here’s how you can manage your tasks:</p>
      <ul className="list-disc list-inside my-4">
        <li><strong>Add a Todo:</strong> Type your task in the input field and click on "Save" to add a new todo.</li>
        <li><strong>Edit a Todo:</strong> Click on the edit icon next to a task to modify it.</li>
        <li><strong>Delete a Todo:</strong> Click on the delete icon to remove a task from your list.</li>
        <li><strong>Mark as Completed:</strong> Use the checkbox to mark a task as completed or unfinished.</li>
        <li><strong>Show/Hide Completed Todos:</strong> Toggle the "Show Finished" checkbox to show or hide completed tasks.</li>
      </ul>
      <Link to="/" className="text-violet-900 hover:underline">Go back to Home</Link>
    </div>
  );
};

export default Help;
