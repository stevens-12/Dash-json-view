import React from 'react';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

const TreeViewer = ({
    value,
    onChange,
}) => {
    return (
        <AceEditor
            mode="json"
            theme="github"
            value={value}
            onChange={onChange}
            name="editor"
            editorProps={{
                $blockScrolling: true,
                showGutter: false,
                showPrintMargin: false,
                highlightActiveLine: false,
                highlightGutterLine: false,
                fontSize: 16,
                tabSize: 2,
                workerPath: null,
            }}
            style={{
                height: "100vh",
                width: "100%",
                fontSize: 16,
                lineHeight: 1.5,
                color: "#333",
                backgroundColor: "#f9f9f9",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(240, 240, 240, 0.5)",
            }}
        />
    );
};

export default TreeViewer;