import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowsAlt, faCompress } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faArrowsAlt, faCompress)

function Editor() {
    return (
        <div id="editor-window">
            <div className="window-heading">Editor<FontAwesomeIcon icon={faArrowsAlt} id="zoom-out-icon" /></div>
            <textarea id="'editor" rows="22">
            

            </textarea>
        </div>
    );
}

export default Editor;