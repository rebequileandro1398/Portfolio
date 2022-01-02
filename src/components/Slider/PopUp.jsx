import React, { useState } from 'react'
import styles from './Slider.module.css'
import Modal from 'react-modal';

export const PopUp = ({name, desc, web, web2, repo}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
             <button className={styles.btnpopUp} onClick={()=> setIsOpen(true)}>{name}</button>
            <Modal 
            onRequestClose={()=> setIsOpen(false)}
            shouldCloseOnOverlayClick={true}
            closeTimeoutMS={200}
            isOpen={isOpen}
            style={{
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.60)',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            },
            content : { 
                position: 'absolute',
                top: '10em',
                left: '12em',
                right: '12em',
                bottom: '10em',
                border: '1px solid #ccc',
                overflow: 'auto', 
                borderRadius: '.5em',
                outline: 'none',
                background: 'rgba(0, 0, 0, 0.96)',
                padding: '1em',
            } 
            }}>
        <div className={styles.modal}>
            <h2 style={{marginTop: "-0.2em"}}>{name}</h2>
            <button className={styles.btnClose} onClick={() => setIsOpen(false)}>X</button>
        </div>
        <div className={styles.modalBody}>
            <p>{desc}</p>
        </div>
        <div className={styles.containerLinks}>
            {
                web2 ? 
                <div>
                    <a href={web2} target='_blank'>
                        <button className={styles.links}>deploy</button>
                    </a>
                    <a href={web} target='_blank'>
                        <button className={styles.links}>mobile</button>
                    </a>
                </div>
                :
                <a href={web} target='_blank'>
                    <button className={styles.links}>deploy</button>
                </a>
            }
            <a href={repo} target="_blank">
                <button className={styles.links}>Repositorio</button>
            </a>
        </div>
        </Modal>
        </div>
    )
}
