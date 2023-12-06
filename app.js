import { LitElement, html } from 'lit-element';
import './src/Header/Header';

class MyElement extends LitElement {
  render() {
    return html`
      <app-header></app-header>
      <div>Hello from MyElement!</div>
    `;
  }
}

customElements.define('my-element', MyElement);