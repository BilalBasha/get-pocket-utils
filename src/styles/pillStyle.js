import { css } from 'linaria';

const pillStyle = css`
    display: inline-block;
    padding: var(--spacing050) var(--spacing100);
    background: none;
    color: var(--color-textPrimary);
    font-size: var(--fontSize085);
    font-family: var(--fontSansSerif);
    font-weight: 500;
    line-height: 1;
    border: 1px solid var(--color-formFieldBorder);
    border-radius: calc(var(--fontSize085)/2 + var(--spacing050));
    -webkit-transition: all .15s ease-out;
    transition: all .15s ease-out;
    -webkit-transition-property: border,color,background;
    transition-property: border,color,background;
    &:hover {
        -webkit-text-decoration: none;
        text-decoration: none;
        border-color: var(--color-actionPrimaryHover);
        background: var(--color-actionPrimarySubdued);
        color: var(--color-actionPrimaryHover);
    }
    colormode-dark &:hover {
        border-color: var(--color-textLinkHover);
        color: var(--color-textLinkHover);
        background: none;
    }
    .promoted {
        color: var(--color-actionBrandHover);
        colormode-dark &:hover {
            border-color: var(--color-actionBrand);
            background: none;
        }
    }
`;
export default pillStyle;