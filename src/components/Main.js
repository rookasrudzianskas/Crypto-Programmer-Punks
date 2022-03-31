import React from 'react';

const Main = ({activePunk}) => {
    return (
        <div className="main">
            <div className="mainContent">
                <div className="punkHighlight">
                    <div className="punkContainer">
                        <img src="https://ipfs.thirdweb.com/ipfs/QmX5KmDnfBdHQhmCSnqsb4yp3dyHcY6dzd2f7L9NEgATtQ/0.jpg" className="selectedPunk" alt=""/>
                    </div>
                </div>

                <div className="punkDetails" style={{color: '#ffffff'}}>
                    <div classNam="title">
                        An Awesome Punk
                    </div>
                    <span className="itemNumber">1</span>
                </div>
            </div>
        </div>
    );
};

export default Main;
