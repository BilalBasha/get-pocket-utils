import { css } from "linaria";
import { breakpointLargeHandset } from "../responsive/breakpoints";

const groupStyle = css`
    border-top:1px solid var(--color-popoverBorder);
    padding:var(--spacing050) 0
    ul {
        padding:0;
        margin:0
    }
    :first-child {
        border:none
    }
`;

const itemStyle = css`
    display: block;
    margin: 0;
    padding: 0;
    width: 100%;
    ${breakpointLargeHandset} {
        a, button {
            border-radius:var(--borderRadius);
        }
    }
    a, button {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        padding: var(--spacing075) var(--spacing100);
        background: none;
        -webkit-transition: background-color .1s ease-out;
        transition: background-color .1s ease-out;
        color: var(--color-textPrimary);
        font-size: var(--fontSize100);
        font-family: var(--fontSansSerif);
        font-weight: 500;
        -webkit-text-decoration: none;
        text-decoration: none;
        text-align: left;
        line-height: 1.5rem;
        border-radius: 0;
        &:focus {
            outline: none;
            box-shadow: inset 0 0 0 2px var(--color-actionFocus)
        }
        &:hover {
            background: var(--color-actionPrimary);
            color: var(--color-actionPrimaryText);
            .label-secondary {
                color:var(--color-actionPrimaryText)
            }
        }
        &:active {
            background: var(--color-actionPrimaryHover);
            color: var(--color-actionPrimaryText);
            .label-secondary {
                color: var(--color-actionPrimaryText);
            }
        }
        &:disabled {
            pointer-events: none;
            cursor: default;
            opacity: .5;
        }
    }
    .icon {
        height: 1.5rem;
        line-height: 1rem;
        margin-right: var(--spacing075);
        margin-top: 1px;
    }
    .label-secondary {
        display: block;
        color: var(--color-textTertiary);
        font-size: var(--fontSize085);
        line-height: 1.25em;
        font-weight: 400;
    }
`;


// .iv7u18i {
//     display:block;
//     margin:0;
//     padding:0;
//     width:100%
//    }
//    .iv7u18i a,
//    .iv7u18i button {
//     display:-webkit-box;
//     display:-webkit-flex;
//     display:-ms-flexbox;
//     display:flex;
//     width:100%;
//     padding:var(--spacing075) var(--spacing100);
//     background:none;
//     -webkit-transition:background-color .1s ease-out;
//     transition:background-color .1s ease-out;
//     color:var(--color-textPrimary);
//     font-size:var(--fontSize100);
//     font-family:var(--fontSansSerif);
//     font-weight:500;
//     -webkit-text-decoration:none;
//     text-decoration:none;
//     text-align:left;
//     line-height:1.5rem;
//     border-radius:0
//    }
//    .iv7u18i a:focus,
//    .iv7u18i button:focus {
//     outline:none;
//     box-shadow:inset 0 0 0 2px var(--color-actionFocus)
//    }
//    .iv7u18i a:hover,
//    .iv7u18i button:hover {
//     background:var(--color-actionPrimary);
//     color:var(--color-actionPrimaryText)
//    }
//    .iv7u18i a:hover .label-secondary,
//    .iv7u18i button:hover .label-secondary {
//     color:var(--color-actionPrimaryText)
//    }
//    .iv7u18i a:active,
//    .iv7u18i button:active {
//     background:var(--color-actionPrimaryHover);
//     color:var(--color-actionPrimaryText)
//    }
//    .iv7u18i a:active .label-secondary,
//    .iv7u18i button:active .label-secondary {
//     color:var(--color-actionPrimaryText)
//    }
//    .iv7u18i a:disabled,
//    .iv7u18i button:disabled {
//     pointer-events:none;
//     cursor:default;
//     opacity:.5
//    }
//    @media (max-width:599px) {
//     .iv7u18i a,
//     .iv7u18i button {
//      border-radius:var(--borderRadius)
//     }
//    }
//    .iv7u18i .icon {
//     height:1.5rem;
//     line-height:1rem;
//     margin-right:var(--spacing075);
//     margin-top:1px
//    }
//    .iv7u18i .label-secondary {
//     display:block;
//     color:var(--color-textTertiary);
//     font-size:var(--fontSize085);
//     line-height:1.25em;
//     font-weight:400
//    }

export {
    groupStyle,
    itemStyle
}