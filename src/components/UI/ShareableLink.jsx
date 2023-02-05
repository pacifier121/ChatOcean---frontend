import React from 'react'
import cls from "./ShareableLink.module.css";
import { Link } from 'react-router-dom';

const ShareableLink = ({ to, content, own }) => {
  return (
      <Link to={to} className={'linkStyles ' + cls["shareable-link"] + ' ' + (own && cls['own'])}>
        {content}
      </Link>
  )
}

export default ShareableLink