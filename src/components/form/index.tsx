import React, {useState} from 'react';
import {PlusCircle} from 'phosphor-react';
import './styles.scss';

interface FormContainerProps {
    handleNewTask: (task: string) => void;
}

export function Form({handleNewTask}: FormContainerProps) {
    const [value, setValue] = useState('');

    function handleForm(evt: React.FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        if (value.trim() !== '') {
            handleNewTask(value);
            setValue('');
        }
    }

    return (
        <form className="formContainer" onSubmit={(evt) => handleForm(evt)}>
            <input
                type="text"
                placeholder="Adicione uma tarefa..."
                value={value}
                onChange={(evt) => setValue(evt.target.value)}
            />
            <button
                disabled={!value}
            >
                Criar
                <PlusCircle size={18} weight="bold"/>
            </button>
        </form>
    );
}