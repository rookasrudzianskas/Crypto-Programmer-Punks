import React from 'react';

const CollectionCard = ({id, name, traits, image}) => {
    return (
        <div className="collectionCard">
            <img src={image} alt=""/>
            <div className="details">

            </div>
            <div className="name">
                {name}
                <div className="id">
                    •#{id}
                </div>
                <div className="priceContainer">
                    <img src={weth} className="wethImage" alt=""/>
                    <div className="price">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionCard;
