import cls from "./ChatSidebar.module.css";
import BasicInfo from "../UI/BasicInfo";
import SectionCard from "../UI/SectionCard";
import { useEffect, useState } from "react";

const ChatSidebar = () => {
    const [sidebarMini, setSidebarMini] = useState(false);
     
    useEffect(() => {
         if (window.innerWidth < 1000) setSidebarMini(true);
         else setSidebarMini(false);
    }, []);

  return (
       <div className={cls["chat-sidebar"]}>
           <SectionCard type={sidebarMini && 'mini'} className={cls["online-friends"]} title={"Online Friends"} expandLinkText={"See All"}>
                <BasicInfo cardStatus={'online'} type={sidebarMini && 'mini'} className={sidebarMini ? cls["basic-info-mini"] : cls['basic-info']} img={''} name={"Pacifire Ocean"} info={"1 hr ago"} />
                <BasicInfo cardStatus={'online'} type={sidebarMini && 'mini'} className={sidebarMini ? cls["basic-info-mini"] : cls['basic-info']} img={''} name={"Pacifire Ocean"} info={"1 hr ago"} />
                <BasicInfo cardStatus={'online'} type={sidebarMini && 'mini'} className={sidebarMini ? cls["basic-info-mini"] : cls['basic-info']} img={''} name={"Pacifire Ocean"} info={"1 hr ago"} />
           </SectionCard>
           <SectionCard type={sidebarMini && 'mini'} className={cls["offline-friends"]} title={"Offline Friends"} expandLinkText={"See All"}>
                <BasicInfo type={sidebarMini && 'mini'} className={sidebarMini ? cls["basic-info-mini"] : cls['basic-info']} img={''} name={"Pacifire Ocean"} info={"1 hr ago"} />
                <BasicInfo type={sidebarMini && 'mini'} className={sidebarMini ? cls["basic-info-mini"] : cls['basic-info']} img={''} name={"Pacifire Ocean"} info={"1 hr ago"} />
                <BasicInfo type={sidebarMini && 'mini'} className={sidebarMini ? cls["basic-info-mini"] : cls['basic-info']} img={''} name={"Pacifire Ocean"} info={"1 hr ago"} />
           </SectionCard>
       </div> 
  )
}

export default ChatSidebar