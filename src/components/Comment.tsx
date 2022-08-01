import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps){
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1
    });
  }
  
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/thiagopalhares77.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thiago Palhares</strong>
              <time dateTime='2022-05-11 08:13:13'>
            Cerca de 2h atrás
          </time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar Comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
      

      <footer>
        <button onClick={handleLikeComment}>
          <ThumbsUp />
          Aplaudir <span>{likeCount}</span>
        </button>
      </footer>
    </div>
    </div>
  )
}