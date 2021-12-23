import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Landing.module.css'

export const Landing = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title3}>REBEQUI_</h2>
            <div className={styles.part1}>
                <h1 className={styles.title1}>LEAN</h1>
                <p className={styles.title2}>DRO</p>
            </div>
            <Link to='/home'>
                <button className={styles.btn}>{'>>'}</button>
            </Link>
        </div>
    )
}
