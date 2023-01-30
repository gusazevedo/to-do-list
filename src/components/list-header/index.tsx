import './styles.scss';

interface ListHeaderProps {
    done: number;
    newTasks: number;
}

export function ListHeader({newTasks, done}: ListHeaderProps) {
    return (
        <div className="listHeaderContainer">
            <div className="info new">
                <span>Tarefas criadas</span>
                <span className="qnt">{newTasks}</span>
            </div>
            <div className="info done">
                <span>Concluídas</span>
                <span className="qnt">{done}</span>
            </div>
        </div>
    );
}