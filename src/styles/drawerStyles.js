import { css } from 'linaria';

const drawerStyles = css`
    .drawer {
        -webkit-transition: opacity var(--navDrawerDurationExitMS) var(--easingAccelerate);
        transition: opacity var(--navDrawerDurationExitMS) var(--easingAccelerate);
        .modal-drawer {
            top:  0;
            bottom:  0;
            right:  auto;
            left:  0;
            margin:  0;
            max-height:  100%;
            background:  var(--color-popoverCanvas);
            box-shadow:  0 var(--size025) var(--size075) rgba(0,0,0,.12);
            border-radius:  0;
            width:  100%;
            max-width:  80vw;
            -webkit-transform:  translateX(-80vw);
            -ms-transform:  translateX(-80vw);
            transform:  translateX(-80vw);
            -webkit-transition:  all var(--navDrawerDurationExitMS) var(--easingAccelerate);
            transition:  all var(--navDrawerDurationExitMS) var(--easingAccelerate);
            @media (max-width: 839px) {
                max-width: 256px;
                -webkit-transform: translateX(-256px);
                -ms-transform: translateX(-256px);
                transform: translateX(-256px);
            }
            &.animation-show {
                opacity: 1;
                -webkit-transition: all var(--navDrawerDurationEnterMS) var(--easingDecelerate);
                transition: all var(--navDrawerDurationEnterMS) var(--easingDecelerate);
                -webkit-transform: translateX(0);
                -ms-transform: translateX(0);
                transform: translateX(0);
            }
        }
    }

`;
export default drawerStyles;


// .dw4vh5s .drawer {
//     -webkit-transition:opacity var(--navDrawerDurationExitMS) var(--easingAccelerate);
//     transition:opacity var(--navDrawerDurationExitMS) var(--easingAccelerate)
//    }
//    .dw4vh5s .drawer .modal-drawer {
//     top:0;
//     bottom:0;
//     right:auto;
//     left:0;
//     margin:0;
//     max-height:100%;
//     background:var(--color-popoverCanvas);
//     box-shadow:0 var(--size025) var(--size075) rgba(0,0,0,.12);
//     border-radius:0;
//     width:100%;
//     max-width:80vw;
//     -webkit-transform:translateX(-80vw);
//     -ms-transform:translateX(-80vw);
//     transform:translateX(-80vw);
//     -webkit-transition:all var(--navDrawerDurationExitMS) var(--easingAccelerate);
//     transition:all var(--navDrawerDurationExitMS) var(--easingAccelerate)
//    }
//    @media (max-width:839px) {
//     .dw4vh5s .drawer .modal-drawer {
//      max-width:256px;
//      -webkit-transform:translateX(-256px);
//      -ms-transform:translateX(-256px);
//      transform:translateX(-256px)
//     }
//    }
//    .dw4vh5s .drawer .modal-drawer.animation-show {
//     opacity:1;
//     -webkit-transition:all var(--navDrawerDurationEnterMS) var(--easingDecelerate);
//     transition:all var(--navDrawerDurationEnterMS) var(--easingDecelerate);
//     -webkit-transform:translateX(0);
//     -ms-transform:translateX(0);
//     transform:translateX(0)
//    }

