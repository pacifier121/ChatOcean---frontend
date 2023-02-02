import React from 'react'
import cls from "./Divider.module.css";

const Divider = ({ children }) => {
  return (
      <hr className={cls["divider"]} >
        {children}
      </hr>
  )
}

export default Divider