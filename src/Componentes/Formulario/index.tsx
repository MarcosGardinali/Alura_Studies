import React from 'react'
import styles from './Formulario.module.css'
import Botao from '../Botao'

export default function Formulario() {
    return (
        <form className={styles.formulario}>
            <section className={styles.input__container}>
                <label>
                    Tarefa:
                    <input 
                        type='text' 
                        placeholder='O que você quer estudar'
                        required
                    />
                </label>
            </section>

            <section className={styles.input__container}>
                <label>
                    Tempo:
                    <input 
                        type='time'
                        step='1'
                        min='00:00:00'
                        max='01:30:00'
                        required
                    />
                </label>
            </section>
            <Botao />
        </form>
    )
}
