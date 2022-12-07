import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        setLikeCount((count) => {
            return count + 1;
        })
    }

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                src="https://avatars.githubusercontent.com/u/56443755?v=4" 
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Marcos</strong>
                            <time 
                                title='06 de Dezembro às 10:58'
                                dateTime='2022-12-05 10:58:00'
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}