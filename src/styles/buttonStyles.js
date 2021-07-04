import { css } from "linaria";

// const buttonStyles = css`
//   background: var(--color-actionPrimarySubdued);
//   border-radius: 50%;
//   margin: 0;
//   padding: 0;
//   color: var(--color-textPrimary);
//   position: relative;

//   span.default {
//     transition: all 0.1s ease-out;
//   }

//   span.with-image {
//     &::after {
//       content: '';
//       display: block;
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       border-radius: 50%;
//       transition: all 0.1s ease-out;
//       opacity: 0;
//     }
//   }

//   &:focus {
//     outline: none;
//     &::after {
//       content: '';
//       display: block;
//       position: absolute;
//       top: -4px;
//       bottom: -4px;
//       left: -4px;
//       right: -4px;
//       border-radius: 50%;
//       border: 2px solid var(--color-actionPrimary);
//     }
//   }

//   &:hover {
//     background: none;

//     & span.default {
//       color: var(--color-textLinkHover);
//     }

//     & span.with-image {
//       &::after {
//         background-color: var(--color-actionPrimary);
//         opacity: 0.38;
//       }
//     }
//   }

//   &:active {
//     & span.default {
//       color: var(--color-textLinkPressed);
//     }

//     & span.with-image {
//       &::after {
//         background-color: var(--color-actionPrimaryHover);
//         opacity: 38%;
//       }
//     }
//   }
// `


const buttonStyles = css`
  display:inline-block;
  position:relative;
  font-family:Graphik Web,Helvetica Neue,Helvetica,Arial,Sans-Serif;
  font-size:1rem;
  line-height:110%;
  border: none;
  border-radius: .25rem;
  cursor: pointer;
  display: inline-block;
  font-family: Graphik Web,Helvetica Neue,Helvetica,Arial,Sans-Serif;
  font-size: 1rem;
  line-height: 110%;
  padding: .75rem;
  position: relative;
  -webkit-text-decoration: none;
  text-decoration: none;
  -webkit-transition: all .15s ease-out;
  transition: all .15s ease-out;
  &.disabled {
    pointer-events: none;
    cursor: default;
    opacity: .5;
  }
  &:focus {
    outline: none;
    :before {
      content: "";
      position: absolute;
      top: -4px;
      bottom: -4px;
      left: -4px;
      right: -4px;
      border-radius: .5rem
    }
  }
  &:hover {
    -webkit-text-decoration:none;
    text-decoration:none
  }
  &:active:before, &:hover:before {
    display: none;
  }
  &.primary {
    background-color: var(--color-actionPrimary);
    color: var(--color-actionPrimaryText);
    &:hover {
      background-color:var(--color-actionPrimaryHover)
    }
  }
  &.secondary {
    background: none;
    border: 2px solid var(--color-actionSecondary);
    color: var(--color-actionSecondaryText);
    &:hover {
      background-color: var(--color-actionSecondaryHover);
      color: var(--color-actionSecondaryHoverText);
    }
    &:focus:before {
      top:-6px;
      bottom:-6px;
      left:-6px;
      right:-6px
    }
  }
  &.brand, &.emphasized {
    background-color: var(--color-actionBrand);
    color: var(--color-actionBrandText);
    &:active, &:hover {
      background-color: var(--color-actionBrandHover)
    }
  }
  &.inline {
    display: inline;
    background: none;
    padding: 0;
    color: var(--color-textPrimary);
    -webkit-text-decoration: underline;
    text-decoration: underline;
    font-family: inherit;
    font-size: inherit;
    &:focus {
      border: none;
      outline: inherit
    }
    &:focus, &:before {
      border: none;
      outline: inherit;
    }
    &:hover {
      color: var(--color-textLinkHover)
    }
    .large {
      font-size: 1.1875rem;
      padding: 1rem
    }
    .small {
      font-size: .875rem;
      padding: .75rem
    }
  }
`;



// .b1344aws {
//   display:inline-block;
//   position:relative;
//   font-family:Graphik Web,Helvetica Neue,Helvetica,Arial,Sans-Serif;
//   font-size:1rem;
//   line-height:110%;
//   border:none;
//   border-radius:.25rem;
//   padding:.75rem;
//   -webkit-transition:all .15s ease-out;
//   transition:all .15s ease-out;
//   -webkit-text-decoration:none;
//   text-decoration:none;
//   cursor:pointer
//  }
//  .b1344aws.disabled {
  // pointer-events:none;
  // cursor:default;
  // opacity:.5
//  }
//  .b1344aws:focus {
  // outline:none
//  }
//  .b1344aws:focus:before {
//   content:"";
//   position:absolute;
//   border:2px solid var(--color-actionFocus);
//   top:-4px;
//   bottom:-4px;
//   left:-4px;
//   right:-4px;
//   border-radius:.5rem
//  }
//  .b1344aws:hover {
//   -webkit-text-decoration:none;
//   text-decoration:none
//  }
//  .b1344aws:active:before,
//  .b1344aws:hover:before {
//   display:none
//  }
//  .b1344aws.primary {
//   background-color:var(--color-actionPrimary);
//   color:var(--color-actionPrimaryText)
//  }
//  .b1344aws.primary:hover {
//   background-color:var(--color-actionPrimaryHover)
//  }
//  .b1344aws.secondary {
//   background:none;
//   border:2px solid var(--color-actionSecondary);
//   color:var(--color-actionSecondaryText)
//  }
//  .b1344aws.secondary:focus:before {
//   top:-6px;
//   bottom:-6px;
//   left:-6px;
//   right:-6px
//  }
//  .b1344aws.secondary:hover {
//   background-color:var(--color-actionSecondaryHover);
//   color:var(--color-actionSecondaryHoverText)
//  }
//  .b1344aws.brand,
//  .b1344aws.emphasized {
//   background-color:var(--color-actionBrand);
//   color:var(--color-actionBrandText)
//  }
//  .b1344aws.brand:active,
//  .b1344aws.brand:hover,
//  .b1344aws.emphasized:active,
//  .b1344aws.emphasized:hover {
//   background-color:var(--color-actionBrandHover)
//  }
//  .b1344aws.inline {
//   display:inline;
//   background:none;
//   padding:0;
//   color:var(--color-textPrimary);
//   -webkit-text-decoration:underline;
//   text-decoration:underline;
//   font-family:inherit;
//   font-size:inherit
//  }
//  .b1344aws.inline:focus {
//   outline:inherit
//  }
//  .b1344aws.inline:focus:before {
//   display:none
//  }
//  .b1344aws.inline:hover {
//   color:var(--color-textLinkHover)
//  }
//  .b1344aws.large {
//   font-size:1.1875rem;
//   padding:1rem
//  }
//  .b1344aws.small {
//   font-size:.875rem;
//   padding:.75rem
//  }

export default buttonStyles;