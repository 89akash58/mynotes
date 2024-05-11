import React, { useState } from "react";
import RightBanner from "../components/RightBanner";
import CreateNotes from "../components/CreateNotes";
import NotesSection from "../components/NotesSection";
import TextAreaSection from "../components/TextAreaSection";
const Main = () => {
  const [visible, setVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  const [groupName, setGroupName] = useState([]);
  const [bgColor, setBgColor] = useState("");

  const [textInputText, setTextInputText] = useState("");
  const [textGroupName, setTextGroupName] = useState([]);

  const [textInput, setTextInput] = useState("");
  const [textSlice, setTextSlice] = useState("");
  const [textBgColor, setTextBgColor] = useState("");

  const [isActive, setActive] = useState(false);

  const [noteId, setNoteId] = useState(null);

  const [notesBgColor, setNotesBgColor] = useState(false);

  return (
    <>
      <div style={{ height: "100vh", display: "flex" }}>
        <NotesSection
          noteId={noteId}
          notesBgColor={notesBgColor}
          setNotesBgColor={setNotesBgColor}
          setNoteId={setNoteId}
          setVisible={setVisible}
          setActive={setActive}
          groupName={groupName}
          bgColor={bgColor}
          setTextInput={setTextInput}
          setTextSlice={setTextSlice}
          setTextBgColor={setTextBgColor}
        />
        <RightBanner />
      </div>
      <CreateNotes
        bgColor={bgColor}
        setBgColor={setBgColor}
        visible={visible}
        setVisible={setVisible}
        inputText={inputText}
        setInputText={setInputText}
        groupName={groupName}
        setGroupName={setGroupName}
      />
      <TextAreaSection
        setNotesBgColor={setNotesBgColor}
        noteId={noteId}
        textInputText={textInputText}
        setActive={setActive}
        isActive={isActive}
        setTextInputText={setTextInputText}
        textGroupName={textGroupName}
        setTextGroupName={setTextGroupName}
        textInput={textInput}
        textSlice={textSlice}
        textBgColor={textBgColor}
      />
    </>
  );
};

export default Main;
