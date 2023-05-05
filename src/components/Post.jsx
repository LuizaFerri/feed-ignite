import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/45185814?v=4"
            alt="Luiza Ferri"
          />
          <div className={styles.authorInfo}>
            <strong>Luiza Ferri</strong>
            <span>Web developer</span>
          </div>
        </div>
        <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:30">
          {" "}
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
        <p> voluptatum, quod, quia, quae voluptates quas voluptatibus</p>
        <p> necessitatibus voluptatem quibusdam quidem natus. Quisquam</p>
        <p> voluptatum, quod, quia, quae voluptates quas voluptatibus</p>
        <p> necessitatibus voluptatem quibusdam quidem natus.</p>
        <a href="#">Ver mais</a>
        <a href="#">#seguirNasRedes</a>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
