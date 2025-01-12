import React, { useContext } from "react";
import "./Dev.css";
import { assets } from "./assets/Media/Media";
import { Context } from "./Context";

function Dev() {
  const {
    onSent,
    setInput,
    input,
    showResult,
    recentPrompt,
    resultData,
    loading,
  } = useContext(Context);

  const handleSend = () => {
    if (input.trim()) {
      onSent(input);
    } else {
      console.error("Prompt cannot be empty.");
    }
  };

  return (
    <div className="dev">
      {/* Navigation Bar */}
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User-Icon" />
      </div>

      {/* Main Container */}
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>

            {/* Cards Section */}
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="Compass-Icon" />
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="Bulb-Icon" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="Message-Icon" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="Code-Icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            {/* Displaying the result */}
            <div className="result-title">
              <img src={assets.user_icon} alt="User-Icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Gemini-Icon" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        {/* Search Box and Input Section */}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="prompt-images">
              <img src={assets.gallery_icon} alt="Gallery-Image" />
              <img src={assets.mic_icon} alt="Mic-Image" />
              {input ? (
                <img
                  onClick={handleSend}
                  src={assets.send_icon}
                  alt="Send-Icon"
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dev;
