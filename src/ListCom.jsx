import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const ListCom = (props) => {

    const [line, setLine] = useState(false);
    const cutIt = () => {
        setLine(true);
    };
    const reDo = () =>{
        setLine(false);
    };

    return (
        <div className="todo_style">
            <span onClick={cutIt} onDoubleClick={reDo}>
                <DeleteIcon className="deleteIcon fa-times" />
            </span>
            <li style={{ textDecoration: line ? "line-through" : "none" }}> {props.text} </li>
        </div>
    );
};

export default ListCom;