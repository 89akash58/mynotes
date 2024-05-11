import React, { useEffect, useState } from "react";
import "../styles/CreateNotes.css";

const CreateNotes = ({
  visible,
  setVisible,
  inputText,
  setInputText,
  groupName,
  setGroupName,
}) => {
  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];
  const [activeColorIndex, setActiveColorIndex] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("groupDetails");
    if (storedData) {
      setGroupName(JSON.parse(storedData));
    }
  }, []);

  const handleColorClick = (index) => {
    setActiveColorIndex(index);
  };

  const createNotes = () => {
    if (inputText.length === 0 || activeColorIndex === null) {
      setVisible(true);
    } else {
      setInputText("");
      setVisible(false);
      setActiveColorIndex(null);
      const bgColor = colors[activeColorIndex];
      setGroupName([...groupName, { inputText: inputText, bgColor: bgColor }]);
      localStorage.setItem(
        "groupDetails",
        JSON.stringify([
          ...groupName,
          { inputText: inputText, bgColor: bgColor },
        ])
      );
    }
    console.log(groupName);
  };

  return (
    <>
      {visible && (
        <div
          className="create-notes-container"
          onClick={() => setVisible(false)}
        >
          <div className="popup-section" onClick={(e) => e.stopPropagation()}>
            <h3>Create New Group</h3>
            <div>
              <strong>Group Name</strong>
              <input
                type="text"
                placeholder="Enter your group name...."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </div>
            <div>
              <strong>Choose colour</strong>
              {colors.map((color, index) => (
                <span
                  key={index}
                  className={`colors color${index + 1} ${
                    activeColorIndex === index ? "active" : ""
                  }`}
                  onClick={() => handleColorClick(index)}
                ></span>
              ))}
            </div>
            <button onClick={createNotes}>Create</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateNotes;
