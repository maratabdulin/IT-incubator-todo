import React, {ChangeEvent, useState} from 'react';
import {TextField} from "@mui/material";

type EditableSpanPropsType = {
    title: string
    callBack: (newTitle: string) => void
}

export const EditableSpan = (props: EditableSpanPropsType) => {
    const [newTitle, setNewTitle] = useState(props.title)
    const [edit, setEdit] = useState(false);

    const changeEditHandler = () => {
        setEdit(!edit);

    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
        addTask()
    }

    const addTask = () => {
        if (newTitle !== ''){
        props.callBack(newTitle.trim());}
    }

    return (
        edit
            ? <TextField
                autoFocus
                value={newTitle}
                onBlur={changeEditHandler}
                size={'small'}
                onChange={onChangeHandler}
            />
            : <span onDoubleClick={changeEditHandler}>{props.title}</span>
    );
};
