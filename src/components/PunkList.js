import React from 'react';
import CollectionCard from "./CollectionCard";
import "./PunkList.css";

const PunkList = ({punkListData}) => {
    return (
        <div className="punkList">
            {punkListData.map((punk, index) => (
                <div className="" key={index} onClick={() => console.log(punk.token_id)}>
                    <CollectionCard
                        id={punk.token_id}
                        name={punk.name}
                        traits={punk.traits}
                        image={punk.image_original_url}
                    />
                </div>
            ))}
        </div>
    );
};

export default PunkList;
