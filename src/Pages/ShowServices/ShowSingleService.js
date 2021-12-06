import React from 'react';

const ShowSingleService = ({service}) => {
    const {name, description,image} = service;
    return (
        <div>
            <img src={image} alt=""/>
            {name}
            {description}
        </div>
    );
};

export default ShowSingleService;