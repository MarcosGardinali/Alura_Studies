import styles from './Lista.module.css'
import Item from './Item'
import { ITarefa } from '../../Types/Tarefa'

interface Props{
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void 
}

export default function Lista({tarefas, selecionaTarefa}: Props){

    return (
        <aside className={styles.conteudo__lista}>
            <h2>Meus Estudos</h2>
            <ul className={styles.lista}>
                {tarefas.map(tarefa => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        {...tarefa}
                        key={tarefa.id}
                    />
                ))}
            </ul>
        </aside>
    )
}
