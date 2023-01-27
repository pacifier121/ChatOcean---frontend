import cls from "./ChatSidebar.module.css";
import BasicInfo from "../UI/BasicInfo";

const ChatSidebar = () => {
  return (
       <div className={cls["chat-sidebar"]}>
           <div className={cls["online-friends"]}>
                <BasicInfo img={''} name={"Pacifire Ocean"} info={"1 hr ago"} />
                <BasicInfo img={''} name={"Pacifire Ocean"} info={"1 hr ago"} />
                <BasicInfo img={''} name={"Pacifire Ocean"} info={"1 hr ago"} />
            </div> 
           <div className={cls["offline-friends"]}>
                <BasicInfo img={''} name={"Pacifire Ocean"} info={"1 hr ago"} />
                <BasicInfo img={''} name={"Pacifire Ocean"} info={"1 hr ago"} />
                <BasicInfo img={''} name={"Pacifire Ocean"} info={"1 hr ago"} />
            </div> 
       </div> 
  )
}

export default ChatSidebar