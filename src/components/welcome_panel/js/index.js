import React from 'react';
import styles from '../css/style.module.css';

function Welcome(props) {
  return (
  <div class={styles.container}>
    <div class={styles.box}>
        <div class={styles.title}>
            <span class={styles.block}></span>
            <h1>{props.text1}<img class={styles.logo} src={props.image} alt="logo"></img></h1>
        </div>
        <div class={styles.role}>
            <div class={styles.block}></div>
            <p>{props.text2}</p>
        </div>
    </div>
  </div>);
}

export default Welcome;
