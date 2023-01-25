import cls from "./MorePages.module.css";
import EmailIcon from '@mui/icons-material/Email';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const MorePages = () => {
  return (
      <div className={cls["more-pages"] + " card-shadow"}>
        <span className={cls["more-pages-title"]}>More Pages</span>
        <div className={cls["pageCategory"]}>
            <EmailIcon sx={{fontSize:"30px"}} />
            <span className={cls["pageCategoryText"]}>Email Box</span>
        </div>
        <div className={cls["pageCategory"]}>
            <MapsHomeWorkIcon sx={{fontSize:"30px"}} /> 
            <span className={cls["pageCategoryText"]}>Near Hotel</span>
        </div>
        <div className={cls["pageCategory"]}>
            <LocationOnIcon sx={{fontSize:"30px"}} />
            <span className={cls["pageCategoryText"]}>Latest event </span>
        </div>
        <div className={cls["pageCategory"]}>
            <YouTubeIcon sx={{fontSize:"30px"}} />
            <span className={cls["pageCategoryText"]}>Live Streaming </span>
        </div>
      </div>
  )
}

export default MorePages