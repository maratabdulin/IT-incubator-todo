import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {
    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    function removeTodoList(todoListId: string) {
        setTodolists(todolists.filter(el=> el.id !== todoListId))
        delete tasks[todoListId]
    }

    function removeTask(todoListId: string, taskId: string) {
        setTasks({...tasks, [todoListId]: tasks[todoListId].filter(el => el.id !== taskId)})
    }

    function addTask(todoListId: string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todoListId]: [newTask, ...tasks[todoListId]]})
    }

    function changeStatus(todoListId: string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [todoListId]: tasks[todoListId].map(el => el.id === taskId ? {...el, isDone} : el)})
    }

    function changeFilter(todoListId: string, value: FilterValuesType) {
        setTodolists(todolists.map(el => el.id === todoListId ? {...el, filter: value} : el))
    }


    return (
        <div className="App">
            {
                todolists.map((tl) => {
                    let tasksForTodolist = tasks[tl.id];
                    if (tl.filter === "active") {
                        tasksForTodolist = tasks[tl.id].filter(t => !t.isDone);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = tasks[tl.id].filter(t => t.isDone);
                    }

                    return (
                        <Todolist
                            key={tl.id}
                            todoListId={tl.id}
                            title={tl.title}
                            tasks={tasksForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            filter={tl.filter}
                            removeTodoList={removeTodoList}
                        />
                    )
                })
            }
        </div>
    );
}

export default App;
