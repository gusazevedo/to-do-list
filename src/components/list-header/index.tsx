import {taskList, taskProps} from '../../utils';
import './styles.scss';

interface ListHeaderProps {
    amount: number;
    done: number;
    tasks: taskProps[]
}

export function ListHeader({tasks, amount, done}: ListHeaderProps) {
    return (
        <div className="listHeaderContainer">
            <div className="info new">
                <span>Tarefas criadas</span>
                <span className="qnt">{amount}</span>
            </div>
            <div className="info done">
                <span>Concluídas</span>
                {tasks.length === 0
                    ? <span className="qnt">{done}</span>
                    : <span className="qnt">{done} de {amount}</span>
                }
            </div>
        </div>
    );
}