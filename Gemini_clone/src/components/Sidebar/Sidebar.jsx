import React, { useContext, useState } from 'react'
import './Sidebar.css'
import{assets} from '../../assets/assets'
import { Context } from '../../context/context'
const Sidebar = ({onLogout, showSidebar, setShowSidebar, isMobile}) => {

    const [extended, setExtended] = useState(false)
    const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

  return (
    <div className={`Sidebar ${extended ? 'extended' : ''} ${showSidebar ? 'show' : ''}`}>
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
            {isMobile && <img onClick={()=>setShowSidebar(false)} className='close-sidebar-icon' src={assets.menu_icon} alt="Close" />}
            <div onClick={()=>newChat()} className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {extended ? <p>New Chat</p> : null}
            </div>
            {(extended || (isMobile && showSidebar))
            ? <div className="recent">
                <p className="recent-title">Recent</p>
                {prevPrompts.map((item, index) => {
                    return (
                        <div onClick={()=>loadPrompt(item)} className="recent-entry" key={index}>
                            <img src={assets.message_icon} alt="" />
                            <p>{item.slice(0,18)} ...</p>
                        </div>
                    )
                })}
            </div>
            :null
            }
        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {(extended || (isMobile && showSidebar)) ? <p>Help</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {(extended || (isMobile && showSidebar)) ? <p>Activity</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {(extended || (isMobile && showSidebar)) ? <p>Settings</p> : null}
          </div>
          <div onClick={onLogout} className="bottom-item recent-entry logout-button">
            <img src={assets.user_icon} alt="" /> {/* Using user_icon as a placeholder for logout */}
            {(extended || (isMobile && showSidebar)) ? <p>Logout</p> : <p>Logout</p>}
          </div>
        </div>
    </div>
  )
}

export default Sidebar
