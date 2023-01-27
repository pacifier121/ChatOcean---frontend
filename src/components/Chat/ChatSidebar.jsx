import cls from "./ChatSidebar.module.css";
import BasicInfo from "../UI/BasicInfo";
import SectionCard from "../UI/SectionCard";

const ChatSidebar = () => {
  return (
       <div className={cls["chat-sidebar"]}>
           <SectionCard className={cls["online-friends"]} title={"Online Friends"} expandLinkText={"See All"}>
                <BasicInfo img={''} name={"Pacifire Ocean"} info={"1 hr ago"} />
                <BasicInfo img={''} name={"Pacifire Ocean"} info={"1 hr ago"} />
                <BasicInfo img={''} name={"Pacifire Ocean"} info={"1 hr ago"} />
           </SectionCard>
           <SectionCard className={cls["offline-friends"]} title={"Offline Friends"} expandLinkText={"See All"}>
                <BasicInfo img={''} name={"Pacifire Ocean"} info={"1 hr ago"} />
                <BasicInfo img={''} name={"Pacifire Ocean"} info={"1 hr ago"} />
                <BasicInfo img={''} name={"Pacifire Ocean"} info={"1 hr ago"} />
           </SectionCard>
       </div> 
  )
}

export default ChatSidebar