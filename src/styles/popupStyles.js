import { css } from 'linaria';

const popupStyles = css`
    position: absolute;
    z-index: var(--zIndexTooltip);
    .popup-content {
        &.enter {
            visibility:visible;
            margin-left:auto
        }
        &.animate-to {
            opacity:1;
            -webkit-transform:scale(1);
            -ms-transform:scale(1);
            transform:scale(1);
            -webkit-transition-duration:.15s;
            transition-duration:.15s
        }
        &[data-popper-placement^=top-start] {
            .content {
                -webkit-transform-origin:bottom left;
                -ms-transform-origin:bottom left;
                transform-origin:bottom left
            }
        }
        &[data-popper-placement^=top-end] {
            .content {
                -webkit-transform-origin:bottom right;
                -ms-transform-origin:bottom right;
                transform-origin:bottom right
            }
        }
        &[data-popper-placement^=bottom-start] {
            .content {
                -webkit-transform-origin:top left;
                -ms-transform-origin:top left;
                transform-origin:top left
            }
        }
        &[data-popper-placement^=bottom-end] {
            .content {
                -webkit-transform-origin:top right;
                -ms-transform-origin:top right;
                transform-origin:top right
            }
        }
        background-color: var(--color-popoverCanvas);
        color: var(--color-textPrimary);
        border: 1px solid var(--color-popoverBorder);
        border-radius: var(--borderRadius);
        box-shadow: 0 8px 24px rgba(0,0,0,.12);
        padding: var(--spacing100);
        font-family: var(--fontSansSerif);
        -webkit-transition: all 75ms ease-in-out;
        transition: all 75ms ease-in-out;
        -webkit-transition-property: opacity,-webkit-transform;
        -webkit-transition-property: opacity,transform;
        transition-property: opacity,transform;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        opacity: 0;
        -webkit-transform: scale(.8);
        -ms-transform: scale(.8);
        transform: scale(.8);
        visibility: hidden;
        margin-left: -99999px
    }
`;


// .p1is21nw {
//     position:absolute;
//     z-index:var(--zIndexTooltip)
//    }
//    .p1is21nw .popup-content {
//     background-color:var(--color-popoverCanvas);
//     color:var(--color-textPrimary);
//     border:1px solid var(--color-popoverBorder);
//     border-radius:var(--borderRadius);
//     box-shadow:0 8px 24px rgba(0,0,0,.12);
//     padding:var(--spacing100);
//     font-family:var(--fontSansSerif);
//     -webkit-transition:all 75ms ease-in-out;
//     transition:all 75ms ease-in-out;
//     -webkit-transition-property:opacity,-webkit-transform;
//     -webkit-transition-property:opacity,transform;
//     transition-property:opacity,transform;
//     -webkit-backface-visibility:hidden;
//     backface-visibility:hidden;
//     opacity:0;
//     -webkit-transform:scale(.8);
//     -ms-transform:scale(.8);
//     transform:scale(.8);
//     visibility:hidden;
//     margin-left:-99999px
//    }
//    .p1is21nw .popup-content.enter {
//     visibility:visible;
//     margin-left:auto
//    }
//    .p1is21nw .popup-content.animate-to {
//     opacity:1;
//     -webkit-transform:scale(1);
//     -ms-transform:scale(1);
//     transform:scale(1);
//     -webkit-transition-duration:.15s;
//     transition-duration:.15s
//    }
//    .p1is21nw[data-popper-placement^=top-start] .content {
//     -webkit-transform-origin:bottom left;
//     -ms-transform-origin:bottom left;
//     transform-origin:bottom left
//    }
//    .p1is21nw[data-popper-placement^=top-end] .content {
//     -webkit-transform-origin:bottom right;
//     -ms-transform-origin:bottom right;
//     transform-origin:bottom right
//    }
//    .p1is21nw[data-popper-placement^=bottom-start] .content {
//     -webkit-transform-origin:top left;
//     -ms-transform-origin:top left;
//     transform-origin:top left
//    }
//    .p1is21nw[data-popper-placement^=bottom-end] .content {
//     -webkit-transform-origin:top right;
//     -ms-transform-origin:top right;
//     transform-origin:top right
//    }

export default popupStyles;