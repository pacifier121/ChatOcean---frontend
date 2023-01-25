import cls from "./NewFeeds.module.css";
import TvIcon from '@mui/icons-material/Tv';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LanguageIcon from '@mui/icons-material/Language';
import BoltIcon from '@mui/icons-material/Bolt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const NewFeeds = () => {
  return (
      <div className={cls["newfeeds"] + " card-shadow"}>
        <span className={cls["newfeeds-title"]}>New Feeds</span>
        <div className={cls["feedCategory"]}>
            <TvIcon sx={{fontSize:"30px"}} />
            <span className={cls["feedCategoryText"]}>NewsFeed</span>
        </div>
        <div className={cls["feedCategory"]}>
            <WorkspacePremiumIcon sx={{fontSize:"30px"}} /> 
            <span className={cls["feedCategoryText"]}>NewsFeed</span>
        </div>
        <div className={cls["feedCategory"]}>
            <LanguageIcon sx={{fontSize:"30px"}} />
            <span className={cls["feedCategoryText"]}>Explore Stories </span>
        </div>
        <div className={cls["feedCategory"]}>
            <BoltIcon sx={{fontSize:"30px"}} />
            <span className={cls["feedCategoryText"]}>Popular Groups </span>
        </div>
        <div className={cls["feedCategory"]}>
            <PersonOutlineIcon sx={{fontSize:"30px"}} />
            <span className={cls["feedCategoryText"]}>Author Profile</span>
        </div>
      </div>
  )
}

export default NewFeeds