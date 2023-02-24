import {useState} from 'react';
import {Header} from './components/header';
import {Form} from './components/form';
import {List} from './components/list';
import {taskProps} from './utils';

import './global.scss';

export function App() {
    const [tasks, setTasks] = useState<taskProps[]>([]);

    function handleNewTask(newTask: string) {
        const id = String(Math.floor(Math.random() * 10000));
        setTasks([...tasks, {
            id,
            message: newTask,
            done: false,
            deleted: false,
        }]);
    }

    function toggleTask(taskID: string) {
        const newList = tasks.map((item => {
            if (item.id === taskID) {
                if (item.done === false) {
                    item.done = true
                } else {
                    item.done = false
                }
            }

            return item
        }));
        setTasks(newList);
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
                completedTasks={tasks.filter(item => item.done).length}
                handleDeleteTask={handleDeleteTask}
                toggleTask={toggleTask}
            />
        </div>
    );
}
