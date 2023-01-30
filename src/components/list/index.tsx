import {useState} from 'react';
import {ListHeader} from '../list-header';
import {ListContent} from '../list-content';

import './styles.scss';
import {taskProps} from '../../utils';

interface ListProps {
    tasks: taskProps[];
    completedTasks: number;
    handleDeleteTask: (id: string) => void;
}

export function List({tasks, completedTasks, handleDeleteTask}: ListProps) {

    return (
        <section className="listContainer">
            <ListHeader
                amount={tasks.length}
                done={completedTasks}
                tasks={tasks}
            />
            <ListContent deleteTask={handleDeleteTask} tasks={tasks}/>
        </section>
    );
}