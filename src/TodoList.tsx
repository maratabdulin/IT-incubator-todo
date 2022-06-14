import React, {ChangeEvent, useState} from 'react';
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
    filter: FilterValuesType
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
}

export function Todolist(props: PropsType) {

    const [title, setTitle] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const tzarChangeFilter = (valueType: FilterValuesType) => {
        props.changeFilter(valueType);
    }

    const removeTask = (tId: string) => {
        props.removeTask(tId);
    }

    const addTask = () => {
        title.trim() ? props.addTask(title.trim()) : setError(true)
        setTitle('')
    }

    return <div>
        <h3>{props.title}</h3>
        <Input title={title}
               setTitle={setTitle}
               callBack={addTask}
               errorTask={error}
               setErrorTask={setError}
        />
        <Button nameOfButton={'+'} callBack={addTask}/>
        {error && <div className='error-message'>Title is required</div>}
        <ul>
            {
                props.tasks.map(t => {
                    const changeTaskStatus = ((e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(t.id, e.currentTarget.checked))
                    return <li key={t.id}>
                        <input type="checkbox"
                               checked={t.isDone}
                               onChange={changeTaskStatus}
                        />
                        <span className={t.isDone ? 'isDone' : ''}>{t.title}</span>
                        <Button nameOfButton={'X'} callBack={() => removeTask(t.id)}/>
                    </li>
                })
            }
        </ul>
        <div>
            <Button nameOfButton={'All'}
                    className={props.filter === 'all' ? 'active' : ''}
                    callBack={() => tzarChangeFilter('all')}/>
            <Button nameOfButton={'Active'}
                    className={props.filter === 'active' ? 'active' : ''}
                    callBack={() => tzarChangeFilter('active')}/>
            <Button nameOfButton={'Completed'}
                    className={props.filter === 'completed' ? 'active' : ''}
                    callBack={() => tzarChangeFilter('completed')}/>
        </div>
    </div>
}
