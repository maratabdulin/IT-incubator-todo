import React from 'react';

type ButtonPropsType = {
    nameOfButton: string
    callBack: () => void
    className?: string
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}
                className={props.className}>
            {props.nameOfButton}
        </button>
    );
};
