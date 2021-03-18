// eslint-disable-next-line
import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Editor from "./Editor.jsx";
import Previewer from "./Previewer.jsx";

function App() {
    const [newMarkdown, setNewMarkdown] = useState("");

    function updateMarkdown(markdown) {
        setNewMarkdown(markdown);
    }

    return (
        <div>
            <Header />
            <Editor onChange={updateMarkdown}/>
            <Previewer markdown={newMarkdown}/>
            <Footer />
        </div>
    );
}

export default App;