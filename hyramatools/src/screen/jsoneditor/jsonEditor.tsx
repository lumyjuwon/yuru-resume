import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { getBeautifulJson } from "utils/json/jsonUtils";

const Container = styled.div({
  justifyItems: "center",
  paddingTop: 16,
  paddingLeft: 16,
});

const AreaContainer = styled.div({
  display: "flex",
  flexDirection: "row",
});

const InputArea = styled.textarea({
  display: "flex",
  resize: "none",
  width: 500,
  height: 800,
});

const OutputArea = styled.textarea({
  display: "flex",
  resize: "none",
  width: 500,
  height: 800,
});

let pressKey: KeyboardEvent;

function JsonEditor() {
  const inputAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [tabSize, setTabSize] = useState(2);
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);

  useEffect(() => {
    // inputAreaRef.current?.setSelectionRange(cursorPosition, cursorPosition);
  });

  function autoComplete(event: any): { text: string; cursorPos: number } {
    const data = event.nativeEvent.data;
    const text = event.target.value;
    const cursorPos = event.nativeEvent.srcElement.selectionStart;

    console.log(event.nativeEvent);

    if (data === "{") {
      const array: Array<string> = text.split("");
      array[cursorPosition] = `{}`;

      let completedText = "";

      array.forEach((element: string) => {
        completedText += element;
      });

      return { text: completedText, cursorPos: cursorPos };
    }

    return { text: text, cursorPos: cursorPos };
  }

  return (
    <Container>
      <AreaContainer>
        <InputArea
          spellCheck={false}
          autoComplete={"off"}
          autoCorrect={"off"}
          autoCapitalize={"off"}
          ref={inputAreaRef}
          onKeyPress={(key) => {
            const { nativeEvent } = key;
            pressKey = nativeEvent;
          }}
          onChange={(event: any) => {
            console.log(event.nativeEvent);
            setInputText(event.target.value);
            console.log(event.target.value.split("\n").length);
            try {
              const json = JSON.parse(event.target.value);
              const beautifulJson = getBeautifulJson(json, 2);
              setOutputText(beautifulJson);
            } catch (error) {
              setOutputText("ERROR");
            }
          }}
          value={inputText}
        />
        <OutputArea readOnly value={outputText} />
      </AreaContainer>
    </Container>
  );
}

export default JsonEditor;
