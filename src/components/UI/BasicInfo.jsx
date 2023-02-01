import React from 'react'
import cls from "./BasicInfo.module.css";
import { asset } from '../../constants/constants';


const BasicInfo = ({ img, name, info, theme, className}) => {
  const classes =  cls["container"] + " " + cls[theme] + " " + className;

  return (
    <div className={classes} >
        <img src={asset(img, 'profile')} alt="" className={cls["user-img"]} />
        <div className={cls["user-info"]}>
            <span className={cls["name"]}>{name}</span> 
            <span className={cls["info"]}>{info}</span> 
        </div>
    </div>
  )
}


export default BasicInfo