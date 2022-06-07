import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValueType, TaskType} from "./App";
import {Button} from "./components/Button";

type TodoListPropsType = {
    title: string
    tasks: TaskType[]
    removeTasks: (id: string) => void
    changeFilter: (value: FilterValueType) => void
    addTasks: (title: string) => void
}

const TodoList: React.FC<TodoListPropsType> = (props) => {
    const [title, setTitle] = useState<string>('');
    const removeTasks = (taskId: string) => props.removeTasks(taskId);

    const todoJSX = props.tasks.map((t) => {
            return (<li key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <Button text={'X'} callback={() => removeTasks(t.id)}/>
            </li>)
        }
    )

    const addTask = () => {
        props.addTasks(title);
        setTitle('');
    }

    const onKeyDownAddTask = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addTask()
    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const changeFilterHandler = (filter: FilterValueType) => {
        props.changeFilter(filter);
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={onChangeSetTitle}
                    onKeyDown={onKeyDownAddTask}
                />
                <Button text={'+'} callback={addTask}/>
            </div>
            <ul>
                {todoJSX}
            </ul>
            <div>
                <Button text={'All'} callback={() => changeFilterHandler('all')}/>
                <Button text={'Active'} callback={() => changeFilterHandler('active')}/>
                <Button text={'Completed'} callback={() => changeFilterHandler('completed')}/>
            </div>
        </div>
    );
};

export default TodoList;
