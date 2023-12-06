// import { LitElement, html, property,customElement  } from 'lit-element';
import { LitElement, html, property, customElement } from 'lit-element';
// import { property } from 'lit/decorators';

@customElement('app-header')
 export class HeaderSite extends LitElement {
  @property()
  items = 'salam';

  render() {
    return html`
      <div>Hello from Header! ${this.items}</div>
    `;
  }
}
// customElements.define('app-header', HeaderSite);