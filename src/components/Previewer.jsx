import React from "react";
import marked from "marked";

function Previewer(props) {

    function getMarkdown() {
        let rawMarkup = marked(props.markdown);
        return {__html: rawMarkup};
    }

    return (
        <div id="preview-window">
            <div className="window-heading">Previewer</div>
            <div id="preview" dangerouslySetInnerHTML={getMarkdown()}></div>
        </div>
    );
}

export default Previewer;