import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('some-component')
export class SomeComponent extends LitElement {
  static styles = [
    css`
			.some-component {
        margin: 16px;
      }
		`,
  ];

  render() {
    return html`
      <div class="some-component">
        Hello <slot></slot>!
      </div>
    `;
  }
}
