import {Header} from './components/header';
import {Form} from './components/form';
import {List} from './components/list';
import {useState} from 'react';
import {taskProps} from './utils';

import './global.scss';

export function App() {
    const [tasks, setTasks] = useState<taskProps[]>([]);
    const completedTasks = tasks?.filter(item => item.done).length;

    function handleNewTask(newTask: string) {
        const id = String(Math.floor(Math.random() * 10000));
        setTasks([...tasks, {
            id,
            message: newTask,
            done: false,
            deleted: false,
        }]);
    }

    function handleDeleteTask(id: string) {
        const newTaskList = tasks.filter(task => task.id !== id);
        setTasks(newTaskList);
    }

    return (
        <div className="App">
            <Header/>
            <Form handleNewTask={handleNewTask}/>
            <List
                tasks={tasks}
                completedTasks={completedTasks}
                handleDeleteTask={handleDeleteTask}
            />
        </div>
    );
}

