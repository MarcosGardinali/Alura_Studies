import React from 'react'
import styles from './Lista.module.css'

export default function Lista() {

    const tarefas = [
        {
            titulo: 'Estudar React',
            tempo: '01:00:00'
        },
        {
            titulo: 'Estudar Typescript',
            tempo: '00:40:00'
        },
        {
            titulo: 'Estudar Javascript',
            tempo: '00:30:00'
        }
    ]

    return (
        <aside className={styles.conteudo__lista}>
            <h2>Meus Estudos</h2>
            <ul className={styles.lista}>
                {tarefas.map((tarefa, index) => (
                    <li key={index} className={styles.item}>
                        <h3>{tarefa.titulo}</h3>
                        <span>{tarefa.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
