import styles from './Item.module.css'
import { ITarefa } from '../../../Types/Tarefa'

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item({
    titulo,
    tempo,
    selecionado,
    completado,
    id,
    selecionaTarefa
}: Props) {

    return (
        <li
            className={`
            ${styles.item} 
            ${selecionado ? styles.itemSelecionado : ''} 
            ${completado ? styles.itemCompletado : ''}`}
            onClick={() => !completado  && selecionaTarefa({
                titulo,
                tempo,
                selecionado,
                completado,
                id
            }
            )}
        >

            <h3>{titulo}</h3>
            <span>{tempo}</span>
            {completado && <span className={styles.concluido}></span>}
        </li>
    );
}
