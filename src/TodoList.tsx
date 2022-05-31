import React from 'react';
import {FilterValueType, TaskType} from "./App";

type TodoListPropsType = {
    title: string
    tasks: TaskType[]
    removeTasks: (id: number) => void
    changeFilter: (value: FilterValueType) => void
}

const TodoList = (props: TodoListPropsType) => {

    const todolistJSX = props.tasks.map((t) =>
        <li key={t.id}>
            <input type="checkbox" checked={t.isDone}/>
            <span>{t.title}</span>
            <button onClick={() => {
                props.removeTasks(t.id)
            }}>X
            </button>
        </li>
    )

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {todolistJSX}
            </ul>
            <div>
                <button onClick={() => {
                    props.changeFilter('all')
                }}>
                    All
                </button>
                <button onClick={() => {
                    props.changeFilter('active')
                }}>
                    Active
                </button>
                <button onClick={() => {
                    props.changeFilter('completed')
                }}>
                    Completed
                </button>
            </div>
        </div>
    );
};

export default TodoList;
