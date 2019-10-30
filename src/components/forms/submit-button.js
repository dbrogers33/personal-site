import React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";

const Button = ({ buttonLabel, type }) => {
    return (
        <YellowButton type={type} value={buttonLabel} />
    );
};

Button.propTypes = {
    buttonLabel: PropTypes.node.isRequired,
};

Button.propTypes = {
    textAlign: PropTypes.oneOf(["left", "center"]),
};

Button.defaultProps = {
    textAlign: "left",
};



const YellowButton = styled.input`
    text-decoration: none;
    background: #FFCC00;
    padding: 1.25em 3em;
    display: inline-block;
    font-family: 'Open Sans';
    font-size: 1.25rem;
    color: #000000;
    font-weight: 700;
    text-align: ${props => props.textAlign};
    transition: .25s ease;
    border: none;
    cursor: pointer;
    &:hover {
        background: #ecbd00;
    }
`;

export default Button;