import React from 'react';

const Main = () => {
    return (
        <div className="main">
            <div className="mainContent">
                <div className="punkHighlight">
                    <div className="punkContainer">
                        <img src={activePunk.image_original_url} className="selectedPunk" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
