import React, { useState, useEffect } from "react";
import "../styles/TextAreaSection.css";
import rightarrow from "../images/RightArrow.png";
import leftarrow from "../images/leftarrow.png";
import dot from "../images/Ellipse 23.png";

const TextAreaSection = ({
  setNotesBgColor,
  noteId,
  isActive,
  setActive,
  textInputText,
  setTextInputText,
  textGroupName,
  setTextGroupName,
  textInput,
  textSlice,
  textBgColor,
}) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isTextEmpty, setIsTextEmpty] = useState(true);
  useEffect(() => {
    let currentDate = new Date();
    let formattedDate = currentDate.toLocaleString("default", {
      dateStyle: "long",
    });
    console.log(formattedDate);
    setDate(formattedDate);
  }, []);

  const updateCurrentTime = () => {
    let currentTime = new Date();
    let formattedTime = currentTime.toLocaleTimeString("default", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setTime(formattedTime);
  };

  useEffect(() => {
    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsTextEmpty(!textInputText);
  }, [textInputText]);

  const texts = () => {
    setTextInputText("");
    const newNote = {
      id: noteId,
      title: textInput,
      content: textInputText,
      date: date,
      time: time,
    };
    setTextGroupName([...textGroupName, newNote]);
    localStorage.setItem(
      "newNoteObj",
      JSON.stringify([...textGroupName, newNote])
    );
    setTextInputText("");
  };

  useEffect(() => {
    const storedData = localStorage.getItem("newNoteObj");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setTextGroupName(parsedData);
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      texts();
    }
  };

  return (
    <>
      {isActive && (
        <div className="textarea-section-container">
          <div className="notes textarea-notes">
            <img
              src={leftarrow}
              alt={leftarrow}
              className="left-arrow"
              onClick={() => {
                setActive(false);
                setNotesBgColor(false);
              }}
            />
            <div className="head">
              <span style={{ backgroundColor: textBgColor }}>{textSlice}</span>
              <strong>{textInput}</strong>
            </div>
          </div>

          <div className="display-texts">
            {textGroupName &&
              textGroupName.map((text, idx) => {
                return noteId === text.id ? (
                  <div key={idx} className="text-message">
                    <div className="para">
                      <p>{text.content}</p>
                    </div>
                    <div
                      className="message-info"
                      style={{ display: "flex", flexDirection: "row-reverse" }}
                    >
                      <span className="time-date" style={{ marginLeft: "0" }}>
                        {text.time}
                      </span>
                      <span>
                        <img src={dot} />
                      </span>
                      <span className="time-date">{text.date}</span>
                    </div>
                  </div>
                ) : null;
              })}
          </div>

          <div className="textarea-container">
            <textarea
              placeholder="Enter your text here..........."
              value={textInputText}
              onChange={(e) => setTextInputText(e.target.value)}
              onKeyDown={handleKeyDown}
            ></textarea>
            <img
              src={rightarrow}
              alt={rightarrow}
              className={`rightarrow ${isTextEmpty ? "disabled" : "enabled"}`}
              onClick={!isTextEmpty ? texts : null}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TextAreaSection;
