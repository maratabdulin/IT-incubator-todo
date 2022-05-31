import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValueType = 'all' | 'active' | 'completed';

function App() {
    const todolistTitle = 'Whats to learn';

    let [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS/TS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'Graph QL', isDone: false},
        {id: 5, title: 'Rest API', isDone: false},
    ]);

    function removeTasks(id: number) {
        let filteredTasks = tasks.filter((t) => t.id !== id);
        setTasks(filteredTasks);
    }

    const [filter, setFilter] = useState<FilterValueType>('all');

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

    return (
        <div className="App">
            <TodoList
                title={todolistTitle}
                tasks={tasksForTodolist}
                removeTasks={removeTasks}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
