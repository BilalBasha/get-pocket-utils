import { css } from 'linaria';
import { breakpointLargeHandset } from '../responsive/breakpoints';

const menuStyle = css`
    display:block;
    list-style-type:none;
    margin:0;
    padding:0;
    min-width:230px
    ${breakpointLargeHandset} {
        padding:0 var(--spacing050);
    }
`;

export default menuStyle;


// .m158lzzu {
//     display:block;
//     list-style-type:none;
//     margin:0;
//     padding:0;
//     min-width:230px
//    }
//    @media (max-width:599px) {
//     .m158lzzu {
//      padding:0 var(--spacing050)
//     }
//    }
