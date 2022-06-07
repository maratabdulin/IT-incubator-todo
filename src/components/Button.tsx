import React from 'react';

type ButtonType = {
    text: string
    callback: () => void
}

export const Button: React.FC<ButtonType> = (props) => {
    return (
        <button onClick={() => { props.callback() }}>{props.text}</button>);
};
