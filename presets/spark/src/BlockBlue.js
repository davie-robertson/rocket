import { css } from 'lit';
import { TheBlock } from '@rocket/components';

export class BlockBlue extends TheBlock {
  static styles = [
    ...this.styles,
    css`
      :host {
        background-color: #272556;
        text-align: center;
        --default-headline-color: #fff;
      }
    `,
  ];
}