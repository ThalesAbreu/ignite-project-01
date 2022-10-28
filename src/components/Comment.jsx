import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment () {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/ThalesAbreu.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thales Abreu</strong>
              <time title="25 de Outubro às 15:04" dateTime="2022-10-25 15:04:30">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20}/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}