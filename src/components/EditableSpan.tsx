import React, {ChangeEvent, useState} from 'react';

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
            ? <input
                autoFocus
                value={newTitle}
                onBlur={changeEditHandler}
                onChange={onChangeHandler}
            />
            : <span onDoubleClick={changeEditHandler}>{props.title}</span>
    );
};
