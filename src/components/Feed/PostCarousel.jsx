import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import n1 from "./images/nature1.jpg";
import n2 from "./images/nature2.jpeg";
import n3 from "./images/nature3.jpg";
import n4 from "./images/nature4.jpg";
import cls from "./PostCarousel.module.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Slide = ({ item }) => {
    return (
        <div className={cls["slide"]}>
            <img className={cls["slideImg"]} src={item.props.children.props.src} />
        </div>
    )
};

const PostCarousel = () => {
    const onChange = () => {};
    const onClickItem = () => {};
    const onClickThumb = () => {};
    const itemsCount = 4;
    
    const arrowPrev = (clickHandler, hasPrev, labelPrev) => hasPrev && (
            <button className={cls["carousel-control-btn"] + " " + cls["back"]} onClick={clickHandler}>
                <ArrowBackIosNewIcon sx={{fontSize: "25px"}} /> 
            </button>
        )
    
    const arrowNext = (clickHandler, hasNext, labelNext) => hasNext && (
            <button className={cls["carousel-control-btn"] + " " + cls["next"]} onClick={clickHandler}>
                <ArrowForwardIosIcon sx={{fontSize: "25px"}} /> 
            </button>
        )
    
    const indicator = (clickHandler, isSelected, index, label) => (
        isSelected ? 
            <div onClick={clickHandler} className={cls["indicator"] + " " + cls["active"]} /> :
            <div onClick={clickHandler} className={cls["indicator"]} />
    )
    

  return (
        <Carousel className={cls["carousel"]} showThumbs={false} showArrows={itemsCount === 1 ? false: true} showStatus={false} showIndicators={itemsCount === 1 ? false: true}
                renderItem={item => <Slide item={item} />} renderArrowPrev={arrowPrev} renderArrowNext={arrowNext} 
                renderIndicator={indicator}
                >
        <div>
            <img src={n1} />
        </div>
        <div>
            <img src={n2} />
        </div>
        <div>
            <img src={n3} />
        </div>
        <div>
            <img src={n4} />
        </div>
      </Carousel>
  )
}

export default PostCarousel