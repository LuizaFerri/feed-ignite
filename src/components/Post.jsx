import { useState } from "react";

import { format, formatDistanceToNow, set } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
  const [comments, setComment] = useState(["post muito bacana, parabéns!"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = (event) => {
    event.preventDefault();
    setComment([...comments, newCommentText]);
    setNewCommentText("");
  };

  const handleNewCommentChange = () => {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  };

  const handlwNewCommentInvalid = () => {
    event.target.setCustomValidity("Esse campo é obrigatório");
  };

  const deleteComment = (comment) => {
    const commentsWithoutDeletedOne = comments.filter((c) => c !== comment);
    setComment(commentsWithoutDeletedOne);
  };

  const isNewCommentTextEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                {" "}
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newCommentText}
          name="comment"
          placeholder="Deixe um comentário"
          onChange={handleNewCommentChange}
          required
          onInvalid={handlwNewCommentInvalid}
        />
        <footer>
          <button type="submit" disabled={isNewCommentTextEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
