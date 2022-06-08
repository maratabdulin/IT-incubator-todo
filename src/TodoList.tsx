import React, {useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";
import {Input} from "./components/Input";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")

    const tzarChangeFilter = (valueType: FilterValuesType) => {
        props.changeFilter(valueType);
    }

    const onClickHandler = (tId: string) => {
        props.removeTask(tId);
    }

    const addTitleHandler = () => {
        props.addTask(title);
        setTitle('')
    }

    return <div>
        <h3>{props.title}</h3>
        <Input title={title} setTitle={setTitle} callBack={addTitleHandler}/>
        <Button nameOfButton={'+'} callBack={addTitleHandler}/>

        <ul>
            {
                props.tasks.map(t => {
                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <Button nameOfButton={'X'} callBack={() => onClickHandler(t.id)}/>
                    </li>
                })
            }
        </ul>
        <div>
            <Button nameOfButton={'All'} callBack={() => tzarChangeFilter('all')}/>
            <Button nameOfButton={'Active'} callBack={() => tzarChangeFilter('active')}/>
            <Button nameOfButton={'Completed'} callBack={() => tzarChangeFilter('completed')}/>
        </div>
    </div>
}
