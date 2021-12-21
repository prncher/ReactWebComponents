import React from 'react';

const ReactInnerComponent = (props) => {
    // Why className don't work here?
    return <div style={{ textAlign: 'center'}}>
        <hr />
        <h1>Web Component using React component below</h1>
        <div style={{ display: 'inline-block', color: 'red ' }}>Hello This is the property passed from Web component: {props.name}</div>
    </div>
}

export default ReactInnerComponent;