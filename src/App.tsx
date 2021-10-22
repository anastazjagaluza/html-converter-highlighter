import * as React from "react";
import { useState, useEffect } from "react";
import { htmlToText, htmlToTextWithHighlight } from "./util";
import "./App.css";

function App() {
  const [allParagraphs, setAllParagraphs] = useState<string>("");
  const [allParagraphsWithHighlight, setAllParagraphsWithHighlight] = useState<string>("");

  const html = "<p>Hello world!</p>";
  const highlights = ["world"];
  const style = { width: "10rem", height: "20rem", color: "black" };

  useEffect(() => {
    if (html != null) {
    setAllParagraphs(htmlToText(html))
    if (highlights != null) {
      let highlightedText = html;
      for (const item of highlights) {
        highlightedText = htmlToTextWithHighlight(highlightedText, item);
      }
      setAllParagraphsWithHighlight(highlightedText);
    }
  }
  }, [html])

  const updateContent = (value: string) => {
      setAllParagraphs(value);
  }

  return (
    <div id="container">
            <textarea style={style} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateContent(e.target.value)} value={allParagraphs}></textarea>
            <div style={style} id="fake-text" dangerouslySetInnerHTML={{__html: allParagraphsWithHighlight}}></div>
    </div>
  );
}

export default App;
