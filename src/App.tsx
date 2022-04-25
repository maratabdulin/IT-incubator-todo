import React from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const todolistTitle_1 = 'Whats to learn';
    const todolistTitle_2 = 'Whats to Wear';
    const todolistTitle_3 = 'Whats to Eat';
    const tasks: Array<TaskType> = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS/TS', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ]

    return (
        <div className="App">
            <TodoList
                title={todolistTitle_1}
                tasks={tasks}
            />
        {/*<TodoList title={todoListTitle_2}*/}
        {/*<TodoList title={todoListTitle_3}*/}
        </div>
    );
}

export default App;
