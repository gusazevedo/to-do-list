import {taskProps, toggleTask} from '../../utils';
import {ListItem} from '../list-item';
import './styles.scss';
import {ListMessage} from '../list-message';

interface ListContentProps {
    deleteTask: (id: string) => void;
    toggleTask: (id: string) => void;
    tasks: taskProps[];
}

export function ListContent({tasks, deleteTask, toggleTask}: ListContentProps) {
    return (
        <section className="listContent">
            <ul className="listBody">
                {tasks.length < 1 && <ListMessage />}
                {
                    tasks.map((item) => (
                        <ListItem
                            key={item.id}
                            id={item.id}
                            message={item.message}
                            done={item.done}
                            onDelete={deleteTask}
                            toggleTask={toggleTask}
                        />
                    ))
                }
            </ul>
        </section>
    );
}87