import React from 'react'
import styles from './Skills.module.css'
import react from "../../assets/react.png"
import redux from "../../assets/redux.png"
import node from "../../assets/node.png"
import git from "../../assets/git.png"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import javaScript from "../../assets/javaScript.png"
export const Skills = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.icons}>
            <a className={styles.image} href="https://reactjs.org/" target='_blank'>
                <img className={styles.image} src={react} alt="not found"/>
            </a>
            <a className={styles.image} href="https://redux.js.org/" target='_blank'>
                <img className={styles.image} src={redux} alt="not found"/>
            </a>
            <a className={styles.image} href="https://www.javascript.com/" target='_blank'>
                <img className={styles.image} src={javaScript} alt="not found"/>
            </a>
            <a className={styles.image} href="https://nodejs.org/es/" target='_blank'>
                <img className={styles.image} src={node} alt="not found"/>
            </a>
            <a className={styles.image} href="https://html.com/" target='_blank'>
                <img className={styles.image} src={html} alt="not found"/>
            </a>
            <a className={styles.image} href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank'>
                <img className={styles.image} src={css} alt="not found"/>
            </a>
            <a className={styles.image} href="https://git-scm.com/" target='_blank'>
                <img className={styles.image} src={git} alt="not found"/>
            </a>
            </div>
        </div>
    )
}
