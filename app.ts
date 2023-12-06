import { LitElement, html ,customElement} from 'lit-element';
// import "./src/Header/Header";

@customElement('app-root')
export class AppRoot extends LitElement {
  render() {
    return html`
      <!-- <app-header></app-header> -->
      <div>Hello from AppRoot!</div>
    `;
  }
}

// customElements.define('app-root', AppRoot);