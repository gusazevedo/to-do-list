import React, {useState} from 'react';
import {Trash} from 'phosphor-react';
import './styles.scss';
import {toggleTask} from '../../utils';

interface ListItemProps {
    id: string;
    message: string;
    done: boolean;
    onDelete: (id: string) => void;
    toggleTask: (id: string) => void;
}

export function ListItem({id, message, done, onDelete, toggleTask}: ListItemProps) {

    function handleToggleTask(evt: React.ChangeEvent<HTMLInputElement>) {
        toggleTask(evt.target.id);
    }

    return (
        <li className={`item ${done && 'done'}`}>
            <div className="item-info">
                <input
                    type="checkbox"
                    name={id}
                    id={id}
                    className="check-item"

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
