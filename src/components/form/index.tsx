import {PlusCircle} from 'phosphor-react';
import './styles.scss';

export function Form() {
    return (
        <form className="formContainer">
            <input type="text" placeholder="Adicione uma tarefa..."/>
            <button>
                Criar
                <PlusCircle size={18} weight='bold'/>
            </button>
        </form>
    );
}