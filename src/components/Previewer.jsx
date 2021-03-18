import React from "react";
import marked from "marked";
import DOMPurify from "dompurify";


function Previewer(props) {

    // Receives and converts markdown to html
    function getMarkdown() {
        let rawMarkup = marked(props.markdown, {breaks: true});
        let cleanRawMarkup = DOMPurify.sanitize(rawMarkup)
        console.log(cleanRawMarkup);
        return {__html: cleanRawMarkup};
    }

    return (
        <div id="preview-window">
            <div className="window-heading">Previewer</div>
            <div id="preview" dangerouslySetInnerHTML={getMarkdown()}></div>
        </div>
    );
}

export default Previewer;