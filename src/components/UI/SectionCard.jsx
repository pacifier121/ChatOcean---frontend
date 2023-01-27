import React from 'react'
import cls from "./SectionCard.module.css";
import Divider from './Divider'

const SectionCard = ({ className, children, title, expandLinkText }) => {
  const classes = className + " " +  cls["section-card"] + " card-shadow";

  return (
       <div className={classes}>
          <div className={cls["section-top"]}>
            <span className={cls["section-top-text"]}>{title}</span>
            <a href="#" className={cls["section-top-link"]}>{expandLinkText} </a>
          </div>
          <Divider />
          <div className={cls["section-container"]}>
            {children}
          </div>
       </div> 
  )
}

export default SectionCard