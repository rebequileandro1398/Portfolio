import React, { useState } from 'react'
import Carousel, { consts } from 'react-elastic-carousel';
import { Items } from './Projects';
import styles from './Slider.module.css'
import Modal from 'react-modal';

export const MyProjects = () => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)

  const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? '<<' : '>>'
        return (
          <button className={styles.btn} onClick={onClick} disabled={isEdge}>
            {pointer}
          </button>
        )
      }
 const pagination =({ pages, activePage, onClick }) => {
    return (
        <div direction="row">
          {pages.map(page => {
            const isActivePage = activePage === page
            return (
              <button
                className={styles.pagination}
                key={page}
                onClick={() => onClick(page)}
                active={isActivePage}
              />
            )
          })}
        </div>
      )
 }
    return (
        <div className={styles.container}>
        <div className={styles.carousel}>
            <Carousel
            renderPagination={pagination}
            renderArrow={myArrow}
            itemsToShow={1}
            easing="cubic-bezier(1,.15,.55,1.54)"
            tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
            transitionMs={700}>
                {Items.map(e => (
                    <div className={styles.card} key={e.id}>
                        <iframe 
                          className={styles.frame}
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                          src={e.src + '?autohide=1'}>
                        </iframe>
                        <button className={styles.btnpopUp} onClick={()=> setIsOpen(true)}>{e.name}</button>
                        <Modal 
                          closeTimeoutMS={200}
                          isOpen={isOpen}
                          style={{
                            content : { 
                              top : '50% ' , 
                              left : '50%' , 
                              right : 'auto' , 
                              bottom : 'auto' , 
                              marginRight : '-50%' , 
                              transform : 'translate (-50%, -50%) ' , 
                            } 
                          }}>
                        <div>
                          <h1>{e.name}</h1>
                          <button onClick={() => setIsOpen(false)}>X</button>
                        </div>

                        </Modal>
                    </div>
                    ))}
           </Carousel>

        </div>
        </div>
    )
}
