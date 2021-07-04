import { css } from 'linaria';

const tooltipStyles = css`
    display: inline-block;
    position: relative;
    &[tooltip] {
        position: relative;
        &:after, &:before {
            line-height: 1;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            pointer-events: none;
            position: absolute;
            opacity: 0;
            left: 50%;
            -webkit-transform: translate(-50%);
            -ms-transform: translate(-50%);
            transform: translate(-50%)
        }
        &:before {
            content:"";
            z-index:var(--zIndexTooltip);
            border:4px solid transparent;
        }
        &:after {
            content:attr(tooltip);
            font-size:var(--fontSize085);
            z-index:var(--zIndexTooltip);
            font-family:var(--fontSansSerif);
            text-align:center;
            min-width:3rem;
            max-width:20rem;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
            line-height:143%;
            padding:var(--spacing025) var(--spacing050);
            border-radius:4px;
            background-color:var(--color-tooltipCanvas);
            color:var(--color-tooltipText);
        }
    }
`;

// export default tooltipStyles;


// .t1221eea {
//     display:inline-block
//    }
//    .t1221eea,
//    .t1221eea[tooltip] {
//     position:relative
//    }
//    .t1221eea[tooltip]:after,
//    .t1221eea[tooltip]:before {
//     line-height:1;
//     -webkit-user-select:none;
//     -moz-user-select:none;
//     -ms-user-select:none;
//     user-select:none;
//     pointer-events:none;
//     position:absolute;
//     opacity:0;
//     left:50%;
//     -webkit-transform:translate(-50%);
//     -ms-transform:translate(-50%);
//     transform:translate(-50%)
//    }
//    .t1221eea[tooltip]:before {
//     content:"";
//     z-index:var(--zIndexTooltip);
//     border:4px solid transparent
//    }
//    .t1221eea[tooltip]:after {
//     content:attr(tooltip);
//     font-size:var(--fontSize085);
//     z-index:var(--zIndexTooltip);
//     font-family:var(--fontSansSerif);
//     text-align:center;
//     min-width:3rem;
//     max-width:20rem;
//     white-space:nowrap;
//     overflow:hidden;
//     text-overflow:ellipsis;
//     line-height:143%;
//     padding:var(--spacing025) var(--spacing050);
//     border-radius:4px;
//     background-color:var(--color-tooltipCanvas);
//     color:var(--color-tooltipText)
//    }

const placementTop = css`
    @keyframes tooltipFadeawayTop {
        0%,
        to {
            opacity:0;
            -webkit-transform:translate(-50%,-.2em) scale(.8);
            -ms-transform:translate(-50%,-.2em) scale(.8);
            transform:translate(-50%,-.2em) scale(.8)
        }
        9%,
        96% {
            opacity:1;
            -webkit-transform:translate(-50%) scale(1);
            -ms-transform:translate(-50%) scale(1);
            transform:translate(-50%) scale(1)
        }
    }
    &[tooltip]:before {
        bottom:calc(100% + var(--spacing050));
        border-bottom-width:0;
        border-top-color:var(--color-tooltipCanvas)
    }
    &[tooltip]:after {
        bottom:calc(100% + 3px + var(--spacing050))
    }
    &[tooltip] {
        :hover:after, :hover:before {
            -webkit-transform-origin:bottom;
            -ms-transform-origin:bottom;
            transform-origin:bottom;
            -webkit-animation-name:tooltipFadeawayTop-pmdugmx;
            animation-name:tooltipFadeawayTop-pmdugmx;
            -webkit-animation-duration:calc(var(--dialogsDurationEnterMS) + 1.5s + var(--dialogsDurationExitMS));
            animation-duration:calc(var(--dialogsDurationEnterMS) + 1.5s + var(--dialogsDurationExitMS));
            -webkit-animation-timing-function:var(--easingAccelerate);
            animation-timing-function:var(--easingAccelerate);
            -webkit-animation-direction:normal;
            animation-direction:normal
        }
    }
`;

const placementBottom = css`
    @keyframes tooltipFadeawayBottom {
        0%,
        to {
            opacity:0;
            -webkit-transform:translate(-50%,.2em) scale(.8);
            -ms-transform:translate(-50%,.2em) scale(.8);
            transform:translate(-50%,.2em) scale(.8)
        }
        9%,
        96% {
            opacity:1;
            -webkit-transform:translate(-50%) scale(1);
            -ms-transform:translate(-50%) scale(1);
            transform:translate(-50%) scale(1)
        }
    }
    &[tooltip] {
        &:before {
            top:calc(100% + var(--spacing050));
            border-top-width:0;
            border-bottom-color:var(--color-tooltipCanvas)
        }
        &:after {
            top:calc(100% + 4px + var(--spacing050))
        }
        &:hover:after, :hover:before {
            -webkit-transform-origin:top;
            -ms-transform-origin:top;
            transform-origin:top;
            -webkit-animation-name:tooltipFadeawayBottom;
            animation-name:tooltipFadeawayBottom;
            -webkit-animation-duration:calc(var(--dialogsDurationEnterMS) + 1.5s + var(--dialogsDurationExitMS));
            animation-duration:calc(var(--dialogsDurationEnterMS) + 1.5s + var(--dialogsDurationExitMS));
            -webkit-animation-timing-function:var(--easingAccelerate);
            animation-timing-function:var(--easingAccelerate);
            -webkit-animation-direction:normal;
            animation-direction:normal
        }
    }
`;

const delayStyle = css`
    &[tooltip] {
        &:hover:after, :hover:before {
            -webkit-animation-delay:1.5s;
            animation-delay:1.5s
        }
    }
`;

export {
    tooltipStyles,
    placementTop,
    placementBottom,
    delayStyle
}