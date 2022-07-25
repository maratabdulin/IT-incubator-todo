import React, {ChangeEvent} from 'react';
import {FilterValuesType, TaskType} from './App';
import {Input} from "./components/Input";
import {EditableSpan} from "./components/EditableSpan";
import {Button, Checkbox, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (todoListId: string, taskId: string) => void
    changeFilter: (todoListId: string, value: FilterValuesType) => void
    addTask: (todoListId: string, title: string) => void
    changeTaskStatus: (todoListId: string, taskId: string, isDone: boolean) => void
    filter: FilterValuesType
    todoListId: string
    removeTodoList: (todoListId: string) => void
    editTask: (todoListId: string, taskId: string, newTitle: string) => void
    editTodoList: (todoListId: string, newTitle: string) => void
}

export function Todolist(props: PropsType) {

    const onAllClickHandler = () => props.changeFilter(props.todoListId, "all");
    const onActiveClickHandler = () => props.changeFilter(props.todoListId, "active");
    const onCompletedClickHandler = () => props.changeFilter(props.todoListId, "completed");
    const removeTodoListHandler = () => props.removeTodoList(props.todoListId)
    const addTaskHandler = (newTitle: string) => props.addTask(props.todoListId, newTitle)

    const editTaskHandler = (taskId: string, newTitle: string) => {
        props.editTask(props.todoListId, taskId, newTitle)
    }

    const editTodolistHandler = (newTitle: string) => {
        props.editTodoList(props.todoListId, newTitle);
    }

    return <div>
        <h3>
            <EditableSpan title={props.title} callBack={editTodolistHandler}/>
            <IconButton onClick={removeTodoListHandler} >
                <Delete/>
            </IconButton>
        </h3>

        <Input callBack={addTaskHandler}/>

        <div>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(props.todoListId, t.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(props.todoListId, t.id, e.currentTarget.checked);
                    }

                    return <div key={t.id} className={t.isDone ? "is-done" : ""}>
                        <Checkbox
                            onChange={onChangeHandler}
                            checked={t.isDone}
                        />
                        <EditableSpan title={t.title} callBack={(newTitle) => editTaskHandler(t.id, newTitle)}/>
                        <IconButton onClick={onClickHandler} size={'small'}>
                            <Delete/>
                        </IconButton>
                    </div>
                })
            }
        </div>
        <div>
            <Button
                variant={props.filter === 'all' ? 'contained' : 'outlined'}
                onClick={onAllClickHandler}
                style={{height: '40px'}}
                color={'error'}
            >All</Button>
            <Button
                variant={props.filter === 'active' ? 'contained' : 'outlined'}
                onClick={onActiveClickHandler}
                style={{height: '40px'}}
                color={'success'}
            >Active</Button>
            <Button
                variant={props.filter === 'completed' ? 'contained' : 'outlined'}
                onClick={onCompletedClickHandler}
                style={{height: '40px'}}
                color={'secondary'}
            >Completed</Button>
        </div>
    </div>
}
