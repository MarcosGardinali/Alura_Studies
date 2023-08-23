import { ReactNode } from 'react';
import styles from './Botao.module.css';

interface BotaoProps {
  children: ReactNode,
  tipo?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}

export default function Botao({onClick, children, tipo }: BotaoProps) {
  return (
    <button 
      className={styles.botao} 
      type={tipo}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
