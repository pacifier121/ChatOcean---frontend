import React from 'react'
import cls from "./BasicInfo.module.css";
import { asset } from '../../constants/constants';


const BasicInfo = ({ img, name, info, theme, className, type }) => {
  const classes =  cls["container"] + " " + cls[theme] + " " + className;
  const classesMini = cls["container-mini"] + " " + cls[theme] + ' ' + className;
  
  const card = (type !== 'mini' ? 
    <div className={classes} >
        <img src={asset(img, 'profile')} alt="" className={cls["user-img"]} />
        <div className={cls["user-info-mini"]}>
            <span className={cls["name"]}>{name}</span> 
            <span className={cls["info"]}>{info}</span> 
        </div>
    </div> : 
    <div className={classesMini} >
        <img src={asset(img, 'profile')} alt="" className={cls["user-img"]} />
        <div className={cls["user-info"]}>
            <span className={cls["name"]}>{name}</span> 
            <span className={cls["info"]}>{info}</span> 
        </div>
    </div>
  )

  return (card)
}


export default BasicInfo