import React from "react";
import styles from "../styles/ReviewCard.module.css";

const ReviewCard = () => {
  return (
    <div className={styles.reviewCardHolder}>
    <article className={styles.reviewCard}>
      <figure className={styles.cardHeader}>
        <img className={styles.cardHeaderUser} src="https://i.guim.co.uk/img/media/33c508e9f0c30a90df363e3b5cc3925f0b70f5b6/0_0_3600_2159/master/3600.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6c1e047f1edc4a54f1770458201ed69e" alt="Trulli"  />
        <figcaption className={styles.cardHeaderUserInfo}>
            <h3>Hellen Jummy</h3>
            <div>
                <img src="https://cdn.britannica.com/73/4473-050-0D875725/Grand-Union-Flag-January-1-1776.jpg" />
                <small>PALO ALTO, CA</small>
            </div>
        </figcaption>
      </figure>
      <div className={styles.cardInfo}>
        It's completely up to you to decide how to deliver the task. GitHub,
        Bitbucket or any other service that's easily accessible works great.
      </div>
    </article>
    </div>
  );
};

export default ReviewCard;
