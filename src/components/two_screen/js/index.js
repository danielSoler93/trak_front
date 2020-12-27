import React from 'react';
import styles from '../css/style.module.css';

function TwoScreen(props) {
  return (
  <div class={styles.boxForm}>
	<div class={styles.left}>
		<div class={styles.overlay}>
		</div>
	</div>
	<div class={styles.right}>
	    {props.content_right}
	</div>

</div>);
}

export default TwoScreen;
