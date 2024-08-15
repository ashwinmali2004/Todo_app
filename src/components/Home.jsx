import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Home = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true);

  useEffect(() => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    setTodos(todos || []);
  }, []);

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveToLocal();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
    saveToLocal();
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLocal();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLocal();
  };

  // To store the task to the local storage
  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleFinished = () => {
    setshowFinished(!showFinished);
  };

  return (
    <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-[40%]">
      <h1 className='font-bold text-center text-2xl'>iTask - Manage your todos at one place</h1>
      <div className="addtodo my-5 flex flex-col gap-4">
        <h2 className="text-lg font-bold">Add a Todo</h2>
        <input onChange={handleChange} value={todo} type="text" className='w-full rounded-full px-5 py-1' />
        <button onClick={() => {todo.length <= 3 ? alert("Write a valid task!") : handleAdd();}} className='bg-violet-900 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md'>Save</button>
      </div>
      <input onChange={toggleFinished} type="checkbox" checked={showFinished}/> Show Finished
      <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>
      <h2 className="text-lg font-bold my-4">Your Todos</h2>
      <div className="todos">
        {todos.length === 0 && <div className='m-5'>No Todos to display</div>}
        {todos.map(item => {
          return (showFinished || !item.isCompleted) && (
            <div key={item.id} className="todo flex my-3 justify-between">
              <div className='flex gap-5'>
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons flex h-full" >
                <button onClick={(e) => handleEdit(e, item.id)} className='bg-violet-900 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><FaEdit /></button>
                <button onClick={(e) => {alert("Are you Sure you want to Delete!"); handleDelete(e, item.id);}} className='bg-violet-900 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><MdDelete /></button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Home;
