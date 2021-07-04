import { css } from 'linaria';
import pocketLogoMark from '../assets/pocket-logo-mark.dd8dec213208a4fbf2bff946d112aec3.svg';

const logoStyle = css`
    background: no-repeat url(${pocketLogoMark});
    background-size: contain;
    width: 24px;
    height: 24px;
`;

const logoLabelStyle = css`
    border: 0;
    -webkit-clip-path: polygon(0 0,0 0,0 0);
    clip-path: polygon(0 0,0 0,0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap
`;

export {
    logoStyle,
    logoLabelStyle
}