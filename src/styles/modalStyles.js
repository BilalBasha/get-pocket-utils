import { css } from "linaria";

const modalStyles = css`
    position: absolute;
    overflow: auto;
    max-width: 552px;
    padding: 0;
    background: var(--color-popoverCanvas);
    margin: 0 auto;
    border: 1px solid rgba(0,0,0,.12);
    box-sizing: border-box;
    box-shadow: 0 var(--spacing150) 32px rgba(0,0,0,.16);
    border-radius: 4px;
    max-height: calc(100vh - var(--spacing650) - var(--spacing400));
    min-height: 200px;
    top: var(--spacing650);
    right: var(--spacing400);
    bottom: auto;
    left: var(--spacing400);
    z-index: var(--zIndexModal);
    -webkit-transition: opacity var(--dialogsDurationExitMS) var(--easingDecelerate),-webkit-transform var(--dialogsDurationExitMS) var(--easingDecelerate);
    -webkit-transition: opacity var(--dialogsDurationExitMS) var(--easingDecelerate),transform var(--dialogsDurationExitMS) var(--easingDecelerate);
    transition: opacity var(--dialogsDurationExitMS) var(--easingDecelerate),transform var(--dialogsDurationExitMS) var(--easingDecelerate)
    
    &.animation-base {
        pointer-events:none;
        opacity:0;
        -webkit-transform:scale(.8);
        -ms-transform:scale(.8);
        transform:scale(.8);
    }
    
    &.animation-show {
        pointer-events:auto;
        opacity:1;
        -webkit-transform:scale(1);
        -ms-transform:scale(1);
        transform:scale(1);
        -webkit-transition:opacity var(--dialogsDurationEnterMS) var(--easingAccelerate),-webkit-transform var(--dialogsDurationEnterMS) var(--easingAccelerate);
        -webkit-transition:opacity var(--dialogsDurationEnterMS) var(--easingAccelerate),transform var(--dialogsDurationEnterMS) var(--easingAccelerate);
        transition:opacity var(--dialogsDurationEnterMS) var(--easingAccelerate),transform var(--dialogsDurationEnterMS) var(--easingAccelerate);
    }

    &.animation-hide {
        opacity: 0
    }

    @media (max-width:1279px) {
        max-height: calc(100vh - var(--spacing400)*2);
        top: var(--spacing400)
    }
    @media (max-width:719px) {
        left: var(--spacing150);
        right: var(--spacing150)
    }
    @media (max-width:599px) {
        left:0;
        right:0;
        bottom:0;
        top:auto;
        border-radius:0;
        max-height:100vh;
        max-width:100%;
        -webkit-transform-origin:bottom;
        -ms-transform-origin:bottom;
        transform-origin:bottom
        &.animation-base {
            -webkit-transform:scale(1) translateY(20%);
            -ms-transform:scale(1) translateY(20%);
            transform:scale(1) translateY(20%)
        }
        &.animation-show {
            -webkit-transform: scale(1) translateY(0);
            -ms-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
            -webkit-transition-property: opacity,-webkit-transform;
            -webkit-transition-property: opacity,transform;
            transition-property: opacity,transform
        }
    }

    &.force-mobile {
        left: 0;
        right: 0;
        bottom: 0;
        top: auto;
        border-radius: 0;
        max-height: 100vh;
        max-width: 100%;
        -webkit-transform-origin: bottom;
        -ms-transform-origin: bottom;
        transform-origin: bottom;
        &.animation-base {
            -webkit-transform: scale(1) translateY(20%);
            -ms-transform: scale(1) translateY(20%);
            transform: scale(1) translateY(20%)
        }
        &.animation-show {
            -webkit-transform: scale(1) translateY(0);
            -ms-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
            -webkit-transition-property: opacity,-webkit-transform;
            -webkit-transition-property: opacity,transform;
            transition-property: opacity,transform
        }
    }
`;

const overlayStyles = css`
    position: fixed;
    background: rgba(26,26,26,.24) none repeat scroll 0 0;
    mix-blend-mode: normal;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: var(--zIndexModalShade);
    -webkit-transition: opacity var(--dialogsDurationExitMS) var(--easingAccelerate),-webkit-transform var(--dialogsDurationExitMS) var(--easingAccelerate);
    -webkit-transition: opacity var(--dialogsDurationExitMS) var(--easingAccelerate),transform var(--dialogsDurationExitMS) var(--easingAccelerate);
    transition: opacity var(--dialogsDurationExitMS) var(--easingAccelerate),transform var(--dialogsDurationExitMS) var(--easingAccelerate);
    &.animation-base {
        pointer-events: none;
        opacity: 0;
    }
    &.animation-show {
        pointer-events: auto;
        opacity: 1;
        -webkit-transition: opacity var(--dialogsDurationEnterMS) var(--easingDecelerate),-webkit-transform var(--dialogsDurationEnterMS) var(--easingDecelerate);
        -webkit-transition: opacity var(--dialogsDurationEnterMS) var(--easingDecelerate),transform var(--dialogsDurationEnterMS) var(--easingDecelerate);
        transition: opacity var(--dialogsDurationEnterMS) var(--easingDecelerate),transform var(--dialogsDurationEnterMS) var(--easingDecelerate);
    }
    &.animation-hide {
        opacity: 0
    }
`;

const closeButtonStyles = css`
    cursor: pointer;
    color: var(--color-textPrimary);
    background-color: transparent;
    padding: var(--spacing150);
    position: -webkit-sticky;
    position: sticky;
    float: right;
    top: 0;
    z-index: 2;

    span, span:hover {
        width: 20px;
        height: 20px;
        background-color: transparent
    }

    &:active, &:hover {
        background-color: transparent;
        color: var(--color-textLinkHover)
    }

    .visually-hidden {
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
    }
`;


const modalBodyStyles = css`
    padding: var(--spacing150);
    font-family: var(--fontSansSerif);
    font-size: var(--fontSize100);
`; 

export {
    modalStyles,
    overlayStyles,
    closeButtonStyles,
    modalBodyStyles
}

// .c9xoh5 {
//     cursor:pointer;
//     color:var(--color-textPrimary);
//     background-color:transparent;
//     padding:var(--spacing150);
//     position:-webkit-sticky;
//     position:sticky;
//     float:right;
//     top:0;
//     z-index:2
//    }
//    .c9xoh5 span,
//    .c9xoh5 span:hover {
//     width:20px;
//     height:20px;
//     background-color:transparent
//    }
//    .c9xoh5:active,
//    .c9xoh5:hover {
//     background-color:transparent;
//     color:var(--color-textLinkHover)
//    }
//    .c9xoh5 .visually-hidden {
//     border:0;
//     -webkit-clip-path:polygon(0 0,0 0,0 0);
//     clip-path:polygon(0 0,0 0,0 0);
//     height:1px;
//     margin:-1px;
//     overflow:hidden;
//     padding:0;
//     position:absolute;
//     width:1px;
//     white-space:nowrap
//    }


// .o1ohlj7h {
//     position:fixed;
//     background:rgba(26,26,26,.24) none repeat scroll 0 0;
//     mix-blend-mode:normal;
//     top:0;
//     left:0;
//     right:0;
//     bottom:0;
//     z-index:var(--zIndexModalShade);
//     -webkit-transition:opacity var(--dialogsDurationExitMS) var(--easingAccelerate),-webkit-transform var(--dialogsDurationExitMS) var(--easingAccelerate);
//     -webkit-transition:opacity var(--dialogsDurationExitMS) var(--easingAccelerate),transform var(--dialogsDurationExitMS) var(--easingAccelerate);
//     transition:opacity var(--dialogsDurationExitMS) var(--easingAccelerate),transform var(--dialogsDurationExitMS) var(--easingAccelerate)
//    }
//    .o1ohlj7h.animation-base {
//     pointer-events:none;
//     opacity:0
//    }
//    .o1ohlj7h.animation-show {
//     pointer-events:auto;
//     opacity:1;
//     -webkit-transition:opacity var(--dialogsDurationEnterMS) var(--easingDecelerate),-webkit-transform var(--dialogsDurationEnterMS) var(--easingDecelerate);
//     -webkit-transition:opacity var(--dialogsDurationEnterMS) var(--easingDecelerate),transform var(--dialogsDurationEnterMS) var(--easingDecelerate);
//     transition:opacity var(--dialogsDurationEnterMS) var(--easingDecelerate),transform var(--dialogsDurationEnterMS) var(--easingDecelerate)
//    }
//    .o1ohlj7h.animation-hide {
//     opacity:0
//    }






// .m1gbisw7 {
//     position:absolute;
//     overflow:auto;
//     max-width:552px;
//     padding:0;
//     background:var(--color-popoverCanvas);
//     margin:0 auto;
//     border:1px solid rgba(0,0,0,.12);
//     box-sizing:border-box;
//     box-shadow:0 var(--spacing150) 32px rgba(0,0,0,.16);
//     border-radius:4px;
//     max-height:calc(100vh - var(--spacing650) - var(--spacing400));
//     min-height:200px;
//     top:var(--spacing650);
//     right:var(--spacing400);
//     bottom:auto;
//     left:var(--spacing400);
//     z-index:var(--zIndexModal);
//     -webkit-transition:opacity var(--dialogsDurationExitMS) var(--easingDecelerate),-webkit-transform var(--dialogsDurationExitMS) var(--easingDecelerate);
//     -webkit-transition:opacity var(--dialogsDurationExitMS) var(--easingDecelerate),transform var(--dialogsDurationExitMS) var(--easingDecelerate);
//     transition:opacity var(--dialogsDurationExitMS) var(--easingDecelerate),transform var(--dialogsDurationExitMS) var(--easingDecelerate)
//    }
//    .m1gbisw7.animation-base {
//     pointer-events:none;
//     opacity:0;
//     -webkit-transform:scale(.8);
//     -ms-transform:scale(.8);
//     transform:scale(.8)
//    }
//    .m1gbisw7.animation-show {
//     pointer-events:auto;
//     opacity:1;
//     -webkit-transform:scale(1);
//     -ms-transform:scale(1);
//     transform:scale(1);
//     -webkit-transition:opacity var(--dialogsDurationEnterMS) var(--easingAccelerate),-webkit-transform var(--dialogsDurationEnterMS) var(--easingAccelerate);
//     -webkit-transition:opacity var(--dialogsDurationEnterMS) var(--easingAccelerate),transform var(--dialogsDurationEnterMS) var(--easingAccelerate);
//     transition:opacity var(--dialogsDurationEnterMS) var(--easingAccelerate),transform var(--dialogsDurationEnterMS) var(--easingAccelerate)
//    }
//    .m1gbisw7.animation-hide {
//     opacity:0
//    }
//    @media (max-width:1279px) {
//     .m1gbisw7 {
//      max-height:calc(100vh - var(--spacing400)*2);
//      top:var(--spacing400)
//     }
//    }
//    @media (max-width:719px) {
//     .m1gbisw7 {
//      left:var(--spacing150);
//      right:var(--spacing150)
//     }
//    }
//    @media (max-width:599px) {
//     .m1gbisw7 {
//      left:0;
//      right:0;
//      bottom:0;
//      top:auto;
//      border-radius:0;
//      max-height:100vh;
//      max-width:100%;
//      -webkit-transform-origin:bottom;
//      -ms-transform-origin:bottom;
//      transform-origin:bottom
//     }
//     .m1gbisw7.animation-base {
//      -webkit-transform:scale(1) translateY(20%);
//      -ms-transform:scale(1) translateY(20%);
//      transform:scale(1) translateY(20%)
//     }
//     .m1gbisw7.animation-show {
//      -webkit-transform:scale(1) translateY(0);
//      -ms-transform:scale(1) translateY(0);
//      transform:scale(1) translateY(0);
//      -webkit-transition-property:opacity,-webkit-transform;
//      -webkit-transition-property:opacity,transform;
//      transition-property:opacity,transform
//     }
//    }
//    .m1gbisw7.force-mobile {
//     left:0;
//     right:0;
//     bottom:0;
//     top:auto;
//     border-radius:0;
//     max-height:100vh;
//     max-width:100%;
//     -webkit-transform-origin:bottom;
//     -ms-transform-origin:bottom;
//     transform-origin:bottom
//    }
//    .m1gbisw7.force-mobile.animation-base {
//     -webkit-transform:scale(1) translateY(20%);
//     -ms-transform:scale(1) translateY(20%);
//     transform:scale(1) translateY(20%)
//    }
//    .m1gbisw7.force-mobile.animation-show {
//     -webkit-transform:scale(1) translateY(0);
//     -ms-transform:scale(1) translateY(0);
//     transform:scale(1) translateY(0);
//     -webkit-transition-property:opacity,-webkit-transform;
//     -webkit-transition-property:opacity,transform;
//     transition-property:opacity,transform
//    }