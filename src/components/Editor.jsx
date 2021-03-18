import React, { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowsAlt, faCompress, faWindowMinimize, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMediaQuery from "@material-ui/core/useMediaQuery";

library.add(faArrowsAlt, faCompress, faWindowMinimize, faWindowMaximize)

function Editor(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [expandedWidth, setExpandedWidth] = useState("80%");
    const [minimizeWindow, setMinimizeWindow] = useState(false);
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
        "```\n\n" + 
        "You can also make text **bold**... whoa!  \n" + 
        "Or _italic_.  \n" + 
        "Or... wait for it... **_both!_**  \n" + 
        "And feel free to go crazy ~~crossing stuff out~~.\n\n" + 
        "There's also [links](https://www.freecodecamp.com), and\n" +
        "> Block Quotes! \n\n" + 
        "And if you want to get really crazy, even tables:\n\n" +
        "Wild Header |  Crazy Header | Another Header  \n" + 
        "------------ | ------------- | -------------  \n" + 
        "Your content can | be here, and it | can be here....  \n" + 
        "And here. | Okay. | I think we get it.  \n" + 
        "- And of course there are lists.\n" + 
        "\t- Some are bulleted.\n" + 
        "\t\t- With different indentation levels.\n" +
        "\t\t- That look like this.\n\n\n" + 
        "1. And there are numbererd lists too.\n" + 
        "1. Use just 1s if you want!\n" + 
        "1. And last but not least, let's not forget embedded images:\n\n" +
        "![React Logo w/ Text](https://goo.gl/Umyytc)\n");

    // minWidth is used in calculating expandedWidth state
    const minWidth = useMediaQuery('(min-width: 1367px)');
    const maxWidth = useMediaQuery('(max-width: 768px)');
    
    // useEffect preloads markdown state when website starts
    useEffect(() => props.onChange(markdown));

    // handleChange responds to change in textarea
    function handleChange(event) {
        const text = event.target.value;
        setMarkdown(text);
        props.onChange(markdown);
    }

    // hideShowExapandToggle sets expanded and expandedWidth states
    function hideShowExpandToggle() {
        if (minWidth) {
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

    // hideShowMinMaxToggle sets minimizeWindow state
    function hideShowMinMaxToggle() {
        if (minimizeWindow) {
            setMinimizeWindow(false);
        } else {
            setMinimizeWindow(true);
        }

    }

    return (
        <div id="editor-window" style={{width: isExpanded !== false  && expandedWidth}}>
            <div className="window-heading">Editor
                <div id="expand-toggle-wrapper" style={{display: minimizeWindow === true || maxWidth === true ? "none" : "block"}}>
                    <FontAwesomeIcon 
                        icon={faArrowsAlt} 
                        style={{display: isExpanded !== true ? "block" : "none"}}
                        onClick={hideShowExpandToggle}       
                    />
                    <FontAwesomeIcon
                        icon={faCompress}
                        style={{display: isExpanded === true ? "block" : "none"}}
                        onClick={hideShowExpandToggle}
                    />
                </div>
                <div id="min-max-toggle-wrapper">
                    <FontAwesomeIcon 
                        icon={faWindowMinimize}
                        style={{display: minimizeWindow !== true ? "block" : "none"}}
                        onClick={hideShowMinMaxToggle}
                    />
                    <FontAwesomeIcon
                        icon={faWindowMaximize}
                        style={{display: minimizeWindow === true ? "block" : "none"}}
                        onClick={hideShowMinMaxToggle}
                    />
                </div>
            </div>
            <textarea 
                id="editor" 
                type="text" 
                rows="22" 
                onChange={handleChange}
                defaultValue={markdown}
                style={{display: minimizeWindow !== true ? "block" : "none"}}
            >
            </textarea>
        </div>
    );
}

export default Editor;