import React from 'react';

export default function TipButton(props) {
    return (
        <div
            className={`tip-button${props.isActive === 'true' ? ' isActive' : ''}`}
            onClick={props.onFinish}
        >
            {props.pcvalue}%
        </div>
    )
}