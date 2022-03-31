import React from 'react';
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';

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
                    <span className="itemNumber">•#1</span>
                </div>
                <div className="owner">
                    <div className="ownerImageContainer">
                        <img src="https://ipfs.thirdweb.com/ipfs/QmX5KmDnfBdHQhmCSnqsb4yp3dyHcY6dzd2f7L9NEgATtQ/0.jpg" alt=""/>
                    </div>
                    <div className="ownerDetails">
                        <div className="ownerNameAndHandle">
                            <div className="">
                                0x23DDc2606865a6feCe458E78D16Ffdf440785A88
                            </div>
                            <div className="ownerHandle">
                                @rookasrudzianskas
                            </div>
                            <div className="ownerLink">
                                <img src={instagramLogo} alt=""/>
                            </div>
                            <div className="ownerLink">
                                <img src={twitterLogo} alt=""/>
                            </div>
                            <div className="ownerLink">
                                <img src={moreIcon} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
