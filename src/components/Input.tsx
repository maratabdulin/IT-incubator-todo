import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, IconButton, TextField} from "@mui/material";
import {AddCircleOutline} from "@mui/icons-material";

export type InputPropsType = {
    callBack: (newTitle: string) => void
}

export const Input = (props: InputPropsType) => {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== "") {
            props.callBack(title.trim());
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }

    return (
        <div>
            <TextField
                label={error}
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                variant="outlined"
                error={!!error}
                size={'small'}
            />
            <Button variant={'contained'} onClick={addTask} style={{height: '40px', width: '20px'}} color={'primary'}>
                <AddCircleOutline/>
            </Button>
        </div>
    );
};

