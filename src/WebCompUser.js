import React from 'react';

/*
This is a react component using a web component created inside ImportedComponent.js.
*/
const WebCompUser = (props) => {
    return <>
        <hr />
        <h1>Plain Web Component below</h1>
        <div>Hello <web-comp style={{ display: 'inline-block', color: 'red ' }} name={props.name} /></div>
    </>
}

export default WebCompUser;