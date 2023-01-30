import {Trash} from 'phosphor-react';
import './styles.scss';

interface ListItemProps {
    id: string;
    message: string;
    onDelete: (id: string) => void;
}

export function ListItem({id, message, onDelete}: ListItemProps) {
    return (
        <li className="item">
            <div className='item-info'>
                <input
                    type="checkbox"
                    name={id}
                    id={id}
                    className='check-item'
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