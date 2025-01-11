import React, { useContext, useState } from "react";
import "./Sidbar.css";
import { assets } from "./assets/Media/Media";
import { Context } from "./Context";

function Sidbar() {
  const [extended, setExtended] = useState(false);

  const {
    prevPrompts,
    promptResponseMap,
    setRecentPrompt,
    setResultData,
    onSent,
    newChat,
  } = useContext(Context);

  const handlePromptClick = (prompt) => {
    setRecentPrompt(prompt);
    setResultData(promptResponseMap[prompt]); // Display the saved response
  };

  return (
    <div className="sidbar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt="Menu Icon"
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="Plus Icon" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <div className="recent-title">Recent</div>
            {prevPrompts.map((item, index) => (
              <div
                key={index}
                onClick={() => handlePromptClick(item)}
                className="recent-entry"
              >
                <img src={assets.message_icon} alt="Message Icon" />
                <p>{item.slice(0, 15)}...</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="Question Icon" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="History Icon" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="Setting Icon" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidbar;
