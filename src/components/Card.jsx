import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, imageURL }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <img src={imageURL} className="image-class"/>
        </div>
    );
};

export default Card;
