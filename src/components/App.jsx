// eslint-disable-next-line
import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Editor from "./Editor.jsx";
import Previewer from "./Previewer.jsx";

function App() {
    return (
        <div>
            <Header />
            <Editor />
            <Previewer />
            <Footer />
        </div>
    );
}

export default App;