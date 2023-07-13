import React,{useState} from 'react';
const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
  
    const addTodo = () => {
      if (newTodo.trim() !== '') {
        setTodos([...todos, newTodo]);
        setNewTodo('');
      }
    };
  
    const deleteTodo = (index) => {
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
    };
  return (
      <div className="container">
        <h1 className="my-4">Todo List</h1>
  
        <div className="card">
          <div className="card-body">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a new todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
              />
              <div className="input-group-append">
  <button
                  className="btn btn-primary"
                  type="button"
                  onClick={addTodo}
                >
                  Add
                </button>
              </div>
            </div>
  <ul className="list-group">
              {todos.map((todo, index) => (
                <li className="list-group-item" key={index}>
                  {todo}
                  <button
                    className="btn btn-danger btn-sm float-right"
                    onClick={() => deleteTodo(index)}
                  >
                    Delete
                  </button>
  </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default TodoList;
   