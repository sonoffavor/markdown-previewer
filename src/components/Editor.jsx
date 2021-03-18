import React, { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowsAlt, faCompress } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMediaQuery from "@material-ui/core/useMediaQuery";

library.add(faArrowsAlt, faCompress)

function Editor(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [expandedWidth, setExpandedWidth] = useState("80%");
    const [markdown, setMarkdown] = useState(
        "# Welcome to my React Markdown Previewer!\n\n" +
        "## This is a sub-heading... \n" + 
        "### And here's some other cool stuff:\n\n" +
        "Heres some code, `<div></div>`, between 2 backticks.\n\n" + 
        "```\n" +
        "// this is multi-line code:\n" +
        "function anotherExample(firstLine, lastLine) {\n" + 
        " if (firstLine == '```' && lastLine == '```') {\n" +
        "  return multiLineCode;\n" + 
        " }\n" + 
        "}\n" + 
        "```\n\n\n" + 
        "You can also make text **bold**... whoa! \n" + 
        "Or _italic_. \n" + 
        "Or... wait for it... **_both!_** \n" + 
        "And feel free to go crazy ~~crossing stuff out~~.\n\n" + 
        "There's also [links](https://www.freecodecamp.com), and\n" +
        "> Block Quotes!\n\n" + 
        "And if you want to get really crazy, even tables:\n\n" +
        "Wild Header | Crazy Header | Another Header?\n" + 
        "------------ | ------------- | -------------\n" + 
        "Your content can | be here, and it | can be here....\n" + 
        "And here. | Okay. | I think we get it.\n\n" + 
        "- And of course there are lists.\n" + 
        " - Some are bulleted.\n" + 
        "  - With different indentation levels.\n" +
        "   - That look like this.\n\n\n" + 
        "1. And there are numbererd lists too.\n" + 
        "1. Use just 1s if you want!\n" + 
        "1. And last but not least, let's not forget embedded images:\n\n" +
        "![React Logo w/ Text](https://goo.gl/Umyytc)\n");

    const matches = useMediaQuery('(min-width: 1367px)');

    useEffect(() => props.onChange(markdown));

    function handleChange(event) {
        const text = event.target.value;
        setMarkdown(text);
        props.onChange(markdown);
    }

    function expand() {

        if (matches) {
            setExpandedWidth("60%");
        } else {
            setExpandedWidth("80%");
        }

        if (isExpanded) {
            setExpanded(false);
        } else {
            setExpanded(true);
        }
    }

   

    return (
        <div id="editor-window" style={{width: isExpanded !== false  && expandedWidth}}>
            <div className="window-heading">Editor
                <div id="editor-toggle">
                    <FontAwesomeIcon 
                        icon={faArrowsAlt} 
                        id="editor-toggle"
                        style={{display: isExpanded !== true ? "block" : "none"}}
                        onClick={expand}       
                    />
                    <FontAwesomeIcon
                        icon={faCompress}
                        id="editor-toggle"
                        style={{display: isExpanded === true ? "block" : "none"}}
                        onClick={expand}
                    />
                </div>
            </div>
            <textarea 
                id="editor" 
                type="text" 
                rows="22" 
                onChange={handleChange}
                defaultValue={markdown}
            >
            </textarea>
        </div>
    );
}

export default Editor;