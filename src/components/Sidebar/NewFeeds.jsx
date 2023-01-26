import cls from "./NewFeeds.module.css";
import TvIcon from '@mui/icons-material/Tv';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LanguageIcon from '@mui/icons-material/Language';
import BoltIcon from '@mui/icons-material/Bolt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const NewFeeds = () => {
  return (
      <div className={"card-shadow category-card"}>
        <span className={"title"}>New Feeds</span>
        <div className={"category"}>
            <TvIcon sx={{fontSize:"30px"}} />
            <span className={"category-text"}>NewsFeed</span>
        </div>
        <div className={"category"}>
            <WorkspacePremiumIcon sx={{fontSize:"30px"}} /> 
            <span className={"category-text"}>NewsFeed</span>
        </div>
        <div className={"category"}>
            <LanguageIcon sx={{fontSize:"30px"}} />
            <span className={"category-text"}>Explore Stories </span>
        </div>
        <div className={"category"}>
            <BoltIcon sx={{fontSize:"30px"}} />
            <span className={"category-text"}>Popular Groups </span>
        </div>
        <div className={"category"}>
            <PersonOutlineIcon sx={{fontSize:"30px"}} />
            <span className={"category-text"}>Author Profile</span>
        </div>
      </div>
  )
}

export default NewFeeds