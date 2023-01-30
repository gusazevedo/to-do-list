import {ListHeader} from '../list-header';
import './styles.scss';
import {ListContent} from '../list-content';

export function List() {
    return (
        <section className="listContainer">
            <ListHeader done={5} newTasks={3}/>
            <ListContent />
        </section>
    );
}