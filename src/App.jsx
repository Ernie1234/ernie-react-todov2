import { useEffect, useState } from "react";
import AppInput from "./components/AppInput";
import Header from "./components/Header";
import List from "./components/List";
import RowBtn from "./components/RowBtn";

function App() {
  //-------APP HOOKS-------
  const [todos, setTodos] = useState(() => {
    const savedData = localStorage.getItem("tasks");
    return savedData ? JSON.parse(savedData) : [];
  });
  const [input, setInput] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const [length, setLenght] = useState(null);
  const [all, setAll] = useState(true);
  const [allTask, setAllTask] = useState([]);
  const [active, setActive] = useState(false);
  const [activedTask, setActivedTask] = useState([]);
  const [complete, setComplete] = useState(false);
  const [completedTask, setCompletedTask] = useState([]);
  //GET THE LENGTH OF TASKS
  useEffect(() => {
    // const arr = todos.filter((item) => item.isCompleted === false);
    const arr = remainingTask();
    setLenght(arr.length);
  }, [todos]);
  //SET TASK TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);

  //-------APP FUNCTION-------
  //FINDING ALL THE UNCOMPLETED TASK
  const remainingTask = () => {
    return todos.filter((item) => item.isCompleted === false);
  };
  //RANDOM NUMBER GENERATOR FOR ID
  const randNum = () => {
    return Math.floor(Math.random() * 999999999999999);
  };
  //INPUT CHANGE HANDLER
  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };
  randNum();
  //INPUT SUBMIT HANDLER
  const handleInputSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: randNum(), title: input, isCompleted: false }]);
    setInput("");
  };
  //DELETE FUNCTION
  const handlerDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  //COMPLETE FUNCTION
  const handleCheckChange = ({ id }) => {
    const newAr = todos.map((item) => {
      return item.id === id
        ? { ...item, isCompleted: !item.isCompleted }
        : item;
    });
    setTodos(newAr);
  };
  //EDIT FUNCTIONS
  const handleEditClick = (item) => {
    setEditing((prev) => !prev);
    setCurrentTask({ ...item });
  };
  //HANDLE EDIT INPUT CHANGE
  const handleEditChange = (e) => {
    setCurrentTask({ ...currentTask, title: e.target.value });
  };
  //HANDLE EDIT INPUT SUBMIT
  const handleEditSubmit = (e) => {
    e.preventDefault();
    setTodos(
      todos.map((item) => (item.id === currentTask.id ? currentTask : item))
    );
    setEditing((prev) => !prev);
  };
  //HANDLE EDIT CANCEL CLICK
  const handleEditClc = () => {
    setEditing((prev) => !prev);
  };
  //HANDLE ALL CLICK
  const handleALL = () => {
    setAll(true);
    setComplete(false);
    setActive(false);
    setAllTask(todos);
    const arr = remainingTask();
    setLenght(arr.length);
  };
  //HANDLE ACTIVE CLICK
  const handleActive = () => {
    setAll(false);
    setComplete(false);
    setActive(true);
    const arr = todos.filter((item) => {
      return item.isCompleted === false;
    });
    setActivedTask(arr);
    setLenght(arr.length);
  };
  //HANDLE COMPLETE CLICK
  const handleComplete = () => {
    setAll(false);
    setActive(false);
    setComplete(true);
    const arr = todos.filter((item) => {
      return item.isCompleted === true;
    });
    setCompletedTask(arr);
    setLenght(arr.length);
  };
  //HANDLE CLEAR-ALL FUNCTION
  const handleClr = () => {
    const task = localStorage.clear("tasks");
    setTodos([]);
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <AppInput
          inputChangeHandler={inputChangeHandler}
          inputValue={input}
          handleInputSubmit={handleInputSubmit}
        />
        <RowBtn
          handleALL={handleALL}
          handleActive={handleActive}
          handleComplete={handleComplete}
        />
        <section className="section">
          {all && (
            <List
              todos={todos}
              handlerDelete={handlerDelete}
              handleCheckChange={handleCheckChange}
              handleEditClick={handleEditClick}
              handleEditSubmit={handleEditSubmit}
              handleEditChange={handleEditChange}
              editing={editing}
              handleEditClc={handleEditClc}
              currentTask={currentTask}
              length={length}
              handleClr={handleClr}
            />
          )}
          {active && (
            <List
              todos={activedTask}
              handlerDelete={handlerDelete}
              handleCheckChange={handleCheckChange}
              handleEditClick={handleEditClick}
              handleEditSubmit={handleEditSubmit}
              handleEditChange={handleEditChange}
              editing={editing}
              handleEditClc={handleEditClc}
              currentTask={currentTask}
              length={length}
              handleClr={handleClr}
            />
          )}
          {complete && (
            <List
              todos={completedTask}
              handlerDelete={handlerDelete}
              handleCheckChange={handleCheckChange}
              handleEditClick={handleEditClick}
              handleEditSubmit={handleEditSubmit}
              handleEditChange={handleEditChange}
              editing={editing}
              handleEditClc={handleEditClc}
              currentTask={currentTask}
              length={length}
              handleClr={handleClr}
            />
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
