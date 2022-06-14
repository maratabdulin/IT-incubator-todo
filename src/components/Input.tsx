import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import './../App.css'

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
    callBack: () => void
    errorTask: boolean
    setErrorTask: (errorTask: boolean) => void
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        props.setErrorTask(false)
        if (e.key === 'Enter') {
            props.callBack();
        }
    }

    return (
        <input value={props.title}
               onChange={onChangeHandler}
               onKeyDown={onKeyPressHandler}
               className={props.errorTask ? 'error' : ''}
        />
    );
};
