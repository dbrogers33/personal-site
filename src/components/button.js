import React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";

const Button = ({ buttonLabel, link, textAlign }) => {
    return (

        <YellowButton href={link} textAlign={textAlign}>{buttonLabel}</YellowButton>
        
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



const YellowButton = styled.a`
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
    &:hover {
        background: #FFCC00;
        box-shadow: 0px 4px 7px rgba(33,32,30, .17);
        margin: -.1em 0 .1em 0;
    }
`;

export default Button;