import './global.scss';
import {Header} from './components/header';
import {Form} from './components/form';
import {List} from './components/list';

export function App() {
    return (
        <div className="App">
            <Header />
            <Form />
            <List />
        </div>
    );
}

