import styles from './Formulario.module.css'
import Botao from '../Botao'
import { useState } from 'react';
import { ITarefa } from '../../Types/Tarefa';
import { v4 as uuidv4 } from 'uuid'


interface Props {
    criarTarefa: React.Dispatch<React.SetStateAction<ITarefa[]>>
  }

export default function Formulario({criarTarefa}: Props) {

    const [titulo, setTitulo] = useState('');
    const [tempo, setTempo] = useState('00:00');

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        criarTarefa(tarefasAntigas => 
            [...tarefasAntigas, 
                {
                    titulo, 
                    tempo, 
                    selecionado: false, 
                    completado: false,
                    id: uuidv4()
                }])
        setTitulo("");
        setTempo("00:00");
      }

    return (
        <form className={styles.formulario} onSubmit={adicionarTarefa}>
            <section className={styles.input__container}>
                <label>
                    Tarefa:
                    <input 
                        type='text' 
                        placeholder='O que você quer estudar'
                        required
                        value={titulo}
                        onChange={valor => setTitulo(valor.target.value)}
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
                        value={tempo}
                        onChange={valor => setTempo(valor.target.value)}
                    />
                </label>
            </section>
            <Botao tipo="submit">
                Criar Estudo
            </Botao>
        </form>
    )
}
