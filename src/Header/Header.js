import { LitElement, html } from 'lit-element';

class HeaderSite extends LitElement {
  render() {
    return html`
      <div>Hello from Header!</div>
    `;
  }
}

customElements.define('app-header', HeaderSite);