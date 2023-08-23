import { tempoParaSegundos } from '../../Common/Utils/time'
import { ITarefa } from '../../Types/Tarefa'
import Botao from '../Botao'
import styles from './Cronometro.module.css'
import Relogio from './Relogio'
import { useState, useEffect } from 'react'

interface Props {
    selecionado: ITarefa | undefined
    finalizarTarefa: () => void
}

export default function Cronometro({ selecionado, finalizarTarefa }: Props) {

    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado]);

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1);
            return regressiva(contador -1);
            }
            finalizarTarefa();
            }, 1000);
    }

    return (
        <main className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
            <section className={styles.relogioWrapper}>
                <Relogio
                    tempo={tempo}
                />
            </section>
            <Botao onClick={() => regressiva(tempo)}>
                Iniciar!
            </Botao>
        </main>
    )
}
