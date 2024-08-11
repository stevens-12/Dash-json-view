import React from 'react';
import ReactJson from 'react-json-view';

const JsonViewer = ({ data, onEdit }) => {
    return (
        <ReactJson
            src={data}
            theme="rjv-default"
            iconStyle="circle"
            onDelete={true}
            onAdd={true}
            onSelect={true}
            indentWidth={8}
            space={4}
            displayDataTypes={false}
            collapsed={1}
            style={{
                height: "100vh",
                width: "100%",
                backgroundColor: '#f9f9f9',
                padding: '20px',
                borderRadius: "10px",
                overflow: "auto",
                whiteSpace: "nowrap",
                overflowY: "auto",
            }}
            onEdit={onEdit}
            useWorker={false}
        />
    );
};

export default JsonViewer;