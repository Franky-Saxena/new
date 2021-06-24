//PROJECT NO.1 :- BUILDING A TODO LIST APP PROJECT IN REACTJS FROM SCRATCH
import React from 'react';

const ToDoList = (props) => {


    return (
        <>
            <div className="todo_style">
                <i className="fa fa-times" aria-hidden="true"
                    onClick={() => {
                        props.onSelect(props.id);
                    }}
                />
                <li> {props.text} </li>
            </div>
        </>
    );
};

export default ToDoList;