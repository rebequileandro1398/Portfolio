import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import code from '../../assets/code.gif'
import github from '../../assets/github.png'
import gmail from '../../assets/gmail.png'
import linkedin from '../../assets/linkedin.png'
import whatsapp from '../../assets/whatsapp.png'
import { MyProjects } from '../Slider/Slider'
export const Home = () => {
    return (
        <div>
            <div style={{width: '4em'}}>
                <Link to='/' className={styles.link}>
                    <button className={styles.btn}>{'<<'}</button>
                </Link>
            </div>
            <div className={styles.home}>
                <div className={styles.header}>
                    <div style={{display:'flex'}}>
                        <div className={styles.left}>
                        <img className={styles.image} src={code} alt="not found"/>
                        <div className={styles.contact}>
                            <div className={styles.colums}>
                                <a href="https://github.com/rebequileandro1398" target="_blank">
                                    <img className={styles.icon} src={github} alt="not found"/>
                                </a>
                                <a href="https://www.linkedin.com/in/leandro-rebequi-dev/" target='_blank'>
                                    <img className={styles.icon} src={linkedin} alt="not found" target="_blank"/>
                                </a>
                            </div>
                            <div className={styles.colums}>
                                <a href="mailto:rebequileandro@gmail.com" target='_blank'>
                                    <img className={styles.icon} src={gmail} alt="not found"/>
                                </a>
                                <a href="https://wa.me/+5493435442575" target='_blank'>
                                <img className={styles.icon} src={whatsapp} alt="not found"/>
                                </a>
                            </div>
                        </div>
                        </div>
                        <div className={styles.container}>
                            <h1>Acerca de mí</h1>
                            <p style={{fontSize: '1.4em'}}>Soy un desarrollador full-stack orientado al front-end.<br/>
                                Realice el Bootcamp de Soy Henry, el cual me llevo a conocer las ultimas tecnologías  
                                que se manejan actualmente en el mundo IT. <br/>
                                <br/>
                                En la siguiente sección podrás encontrar algunos proyectos en los que he trabajado,
                                clickea en el nombre para ir al proyecto.
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                 <MyProjects/>
                </div>
            </div>
        </div>
    )
}
