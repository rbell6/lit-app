import { LitElement, html } from 'lit-element';
import '@shoelace-style/shoelace';

class MyElement extends LitElement {
	render() {
		return html`
			<h1>Hello World</h1>
			<sl-button>Hello</sl-button>
		`;
	}
}

customElements.define('my-element', MyElement);