import React, {useState} from 'react';
import {Trash} from 'phosphor-react';
import './styles.scss';
import {toggleTask} from '../../utils';

interface ListItemProps {
    id: string;
    message: string;
    done: boolean;
    onDelete: (id: string) => void;
    toggleTask: ({}: toggleTask) => void;
}

export function ListItem({id, message, done, onDelete, toggleTask}: ListItemProps) {
    const [isChecked, setIsChecked] = useState(done);

    function handleToggleTask(evt: React.ChangeEvent<HTMLInputElement>) {
        console.log('toggle', evt.target.checked);
        toggleTask({id: evt.target.id, done: !isChecked});
        setIsChecked(!isChecked);
    }

    return (
        <li className={`item ${done && 'done'}`}>
            <div className="item-info">
                <input
                    type="checkbox"
                    name={id}
                    id={id}
                    className="check-item"
                    checked={isChecked}
                    onChange={(evt) => handleToggleTask(evt)}
                />
                <span>{message}</span>
            </div>
            <button
                onClick={() => onDelete(id)}
            >
                <Trash size="22"/>
            </button>
        </li>
    );
}
