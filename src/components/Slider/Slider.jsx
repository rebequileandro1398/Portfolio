import React from 'react'
import Carousel, { consts } from 'react-elastic-carousel';
import { Items } from './Projects';
import styles from './Slider.module.css'

export const MyProjects = () => {

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
            enableAutoPlay 
            autoPlaySpeed={4000}
            easing="cubic-bezier(1,.15,.55,1.54)"
            tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
            transitionMs={700}>
                {Items.map(e => (
                    <div>
                        <img style={{width: '20em'}} src={e.src} alt={e.alt}/>
                        <span>{e.desc}</span>
                    </div>
                    ))}
           </Carousel>

        </div>
        </div>
    )
}
