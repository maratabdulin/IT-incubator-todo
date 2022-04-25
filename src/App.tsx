import React from 'react';
import './App.css';
import TodoList from "./TodoList";

function App() {
    const todolistTitle_1 = 'Whats to learn';
    const todolistTitle_2 = 'Whats to teach';
    const todolistTitle_3 = 'Whats to buy';


    return (
        <div className="App">
            <TodoList title={todolistTitle_1}/>
            <TodoList title={todolistTitle_2}/>
            <TodoList title={todolistTitle_3}/>
        </div>
    );
}

export default App;
