import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import { logoStyle, logoLabelStyle } from '../styles/logoMarkStyle';

const LogoMark = function LogoMark({ className }) {

    // const logoStyle$1 = "ljk7yn1";
    // const logoLabelStyle$1 = "lchp5up";

    return (
        <div className={ classNames(logoStyle, className) }>
            <span className={ logoLabelStyle }>Pocket</span>
        </div>
    );
  };
  
LogoMark.propTypes = {
    className: PropTypes.string
};
LogoMark.defaultProps = {
    className: ''
};

export default LogoMark;