import React from "react";
import styles from '../styles/UpcomingShowCard.module.css'


function UpcomingShowCard() {
  return (
    <div className={styles.cardHolder}>
    <article className={styles.card}>
      <figure className={styles.cardImgHolder}>
        <img className={styles.cardImg} src="https://celebinto.com/wp-content/uploads/2021/09/benny-dayal.gif" alt="benny dayal" />
      </figure>
      <div className={styles.cardInfo}>
        <small>Folk</small>
        <h3>Benny Dayal</h3>
        <a href="#">
          More Info
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><rect fill="none" height="24" width="24"/><path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z"/></svg>
        </a>      
      </div>
    </article>
    </div>
  )
}

export default UpcomingShowCard;
