
const ImportedComponent = () => {
    class WebComponent extends HTMLElement {
        constructor(){
            super();
        }

        connectedCallback() {
            const webComp = document.getElementById("web-comp");
            this.myShadow = this.attachShadow({ mode: 'open' });
            this.myShadow.appendChild(webComp);

            // Get the attribute with name "name". 
            // This is passed from a react component.
            var name = this.getAttribute('name');
            const sp = document.createElement('span');
            sp.textContent = `This is the property passed from React component: ${name}`;
            webComp.appendChild(sp);
        }
    }

    customElements.define('web-comp', WebComponent);
}

export default ImportedComponent;