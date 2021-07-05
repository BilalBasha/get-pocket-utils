import React from 'react';
import PropTypes from 'prop-types';

import objectWithoutProperties from '../helpers/objectWithOutProperties';

class TextAreaAutoSizeClass {
    constructor(props) {
        this.props = props;
        this.state = {
            lineHeight: null
        };
        this.textarea = this.props.innerRef || React.createRef();
        this.onResize = function (e) {
            if (this.props.onResize) {
                this.props.onResize(e);
            }
        };
        this.updateLineHeight = function () {
            if (this.textarea.current) {
                this.setState({
                    lineHeight: getLineHeight(this.textarea.current)
                });
            }
        };
        this.onChange = function (e) {
            var onChange = this.props.onChange;
            this.currentValue = e.currentTarget.value;
            onChange && onChange(e);
        };
    }

    componentDidMount() {
        const maxRows = this.props.maxRows;
        const async = this.props.async;
        if (typeof maxRows === "number") {
            this.updateLineHeight();
        }
        if (typeof maxRows === "number" || async) {
            /*
              the defer is needed to:
                - force "autosize" to activate the scrollbar when this.props.maxRows is passed
                - support StyledComponents (see #71)
            */
            setTimeout(function () { return this.textarea.current && autosize(this.textarea.current); });
        }
        else {
            this.textarea.current && autosize(this.textarea.current);
        }
        if (this.textarea.current) {
            this.textarea.current.addEventListener(RESIZED, this.onResize);
        }
    }

    componentDidUpdate = () => {
        this.textarea.current && autosize.update(this.textarea.current);
    }

    componentWillUnmount() {
        if (this.textarea.current) {
            this.textarea.current.removeEventListener(RESIZED, this.onResize);
            autosize.destroy(this.textarea.current);
        }
    }

    render() {
        const onResize = this.props.onResize;
        const maxRows = this.props.maxRows;
        const onChange = this.props.onChange;
        const style = this.props.style;
        const innerRef = this.props.innerRef;
        const children = this.props.children;
        const lineHeight = _a.state.lineHeight;
        const remainingProps = objectWithoutProperties(this.props, ["onResize", "maxRows", "onChange", "style", "innerRef", "children"]);
        const maxHeight = maxRows && lineHeight ? lineHeight * maxRows : null;

        return (
            <textarea {...remainingProps} onChange={this.onChange} style={ maxHeight ? Object.assign(style, { maxHeight: maxHeight }) : style } ref={this.textarea}>
                { children }
            </textarea>
        )
        // return (React.createElement("textarea", __assign({}, props, { onChange: this.onChange, style: maxHeight ? __assign({}, style, { maxHeight: maxHeight }) : style, ref: this.textarea }), children));
    }
}


TextAreaAutoSizeClass.propTypes = {
    rows: PropTypes.number,
    maxRows: PropTypes.number,
    onResize: PropTypes.func,
    innerRef: PropTypes.object,
    async: PropTypes.bool
};

TextAreaAutoSizeClass.defaultProps = {
    rows: 1,
    async: false
};

const TextAreaAutosize = React.forwardRef(function (props, ref) {
    return React.createElement(TextAreaAutoSizeClass, __assign({}, props, { innerRef: ref }));
});

export default TextAreaAutosize;