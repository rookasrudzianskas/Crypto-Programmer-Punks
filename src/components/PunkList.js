import React from 'react';
import CollectionCard from "./CollectionCard";

const PunkList = ({punkListData}) => {
    return (
        <div className="punkList">
            {punkListData.map((punk, index) => (
                <div className="" key={index}>
                    <CollectionCardg />
                </div>
            ))}
        </div>
    );
};

export default PunkList;
