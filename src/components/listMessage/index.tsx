import {ClipboardText} from 'phosphor-react';
import './styles.scss';

export function ListMessage() {
    return (
        <div className="messageContainer">
            <div className="icon">
                <ClipboardText size={56} color="#444444"/>
            </div>
            <div className="message">
                <p className="title">Você ainda não tem tarefgas cadastradas</p>
                <p className="subtitle">Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    );
}