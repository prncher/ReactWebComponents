import React from 'react';
import ReactDOM from 'react-dom';
import ReactInnerComponent from './ReactInnerComponent'

const ReactComponentInsideWebComponent = () => {

    class ReactComponent extends HTMLElement {
        constructor(){
            super();

            this.attachShadow({ mode: 'open' });
            const reactComp = document.getElementById("react-comp")
  
            this.shadowRoot.appendChild(reactComp);            
            ReactDOM.render(
                <React.StrictMode>
                    <ReactInnerComponent name='Prince Cheruvathur' />
                </React.StrictMode>,
                reactComp
            );
        }
    }

    customElements.define('react-comp', ReactComponent);    
    
}

export default ReactComponentInsideWebComponent;