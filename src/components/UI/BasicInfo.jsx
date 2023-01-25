import React from 'react'
import cls from "./BasicInfo.module.css";

const BasicInfo = ({img, name, info}) => {
  return (
    <div className={cls["container"]} >
        <img src={img} alt="" className={cls["user-img"]} />
        <div className={cls["user-info"]}>
            <span className={cls["name"]}>{name}</span> 
            <span className={cls["info"]}>{info}</span> 
        </div>
    </div>
  )
}

export default BasicInfo