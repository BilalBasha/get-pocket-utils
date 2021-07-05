import React from 'react';
import classNames from 'classnames';
import testIdAttribute from '../testIdAttribute';
import TextAreaAutoSize from '../classes/TextareaAutosizeClass';
import { css } from 'linaria';

const defaultTextareaStyles = css`
    resize: none;
`;

const TextArea = ({
    name,
    initialRows,
    maxRows,
    characterLimit,
    showCharacterLimit,
    labelText,
    helperText,
    value,
    error,
    displayErrorInline,
    className,
    disabled,
    onChange,
    onFocus,
    onBlur,
    textareaStyles
}) => {

    return <InputWrapper
        labelText={ labelText }
        helperText={ helperText }
        error={ error }
        displayErrorInline={ displayErrorInline }
        className={ className }
        disabled={ disabled }
        name={ name }
        showCharacterLimit={ showCharacterLimit }
        characterLimit={ characterLimit }
        value={ value }
    >
        <TextAreaAutoSize
            className={classNames(defaultTextareaStyles, textareaStyles)}
            name={ name }
            rows={ initialRows }
            maxRows={ maxRows }
            value={ value }
            disabled={ disabled }
            onChange={ onChange }
            onFocus={ onFocus }
            onBlur={ onBlur }
            maxLength={ characterLimit }
            {...testIdAttribute('textarea-input')}
        >
        </TextAreaAutoSize>
    </InputWrapper>
}

export default TextArea;