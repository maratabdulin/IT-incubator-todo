import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValueType = 'all' | 'active' | 'completed';

function App() {
    const todolistTitle = 'Whats to learn';

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS/TS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'Graph QL', isDone: false},
        {id: v1(), title: 'Rest API', isDone: false},
    ]);

    const [filter, setFilter] = useState<FilterValueType>('all');

    function removeTasks(id: string) {
        let filteredTasks = tasks.filter((t) => t.id !== id);
        setTasks(filteredTasks);
    }

    let tasksForTodolist = tasks;

    if (filter === 'active') {
        tasksForTodolist = tasks.filter(t => !t.isDone);
    }

    if (filter === 'completed') {
        tasksForTodolist = tasks.filter(t => t.isDone);
    }

    function changeFilter(value: FilterValueType) {
        setFilter(value);
    }

    function addTasks(title: string) {
        let task = {
            id: v1(), title: title, isDone: false,
        }
        setTasks([task, ...tasks]);
    }

    return (<div className="App">
        <TodoList
            title={todolistTitle}
            tasks={tasksForTodolist}
            removeTasks={removeTasks}
            changeFilter={changeFilter}
            addTasks={addTasks}
        />
    </div>);
}

export default App;
