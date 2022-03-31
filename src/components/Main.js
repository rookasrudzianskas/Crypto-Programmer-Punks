import React, {useEffect, useState} from 'react';
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';
import "./Main.css";

const Main = ({selectedPunk, punkListData}) => {
    const [activePunk, setActivePunk] = useState(punkListData[0]);


    useEffect(() => {
        setActivePunk(punkListData[selectedPunk]);
    }, [punkListData, selectedPunk]);

    return (
        <div className="main" style={{display: 'flex', flexDirection: 'column', paddingTop: '10px'}}>
            <div className="mainContent" >
                <div className="punkHighlight">
                    <div className="punkContainer">
                        <img src="https://ipfs.thirdweb.com/ipfs/QmX5KmDnfBdHQhmCSnqsb4yp3dyHcY6dzd2f7L9NEgATtQ/0.jpg" className="selectedPunk" alt=""/>
                    </div>
                </div>

                <div  style={{display: 'flex', flexDirection: 'column'}}>
                        <div className="punkDetails" style={{color: '#ffffff', flex: 1,}}>
                            <div className="title" style={{display: 'flex', maxWidth: '20px'}}>
                                An Awesome Punk
                            </div>
                        </div>
                    <div className="owner" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <span className="itemNumber">•#1</span>
                        <div className="ownerImageContainer">
                            <img src="https://ipfs.thirdweb.com/ipfs/QmX5KmDnfBdHQhmCSnqsb4yp3dyHcY6dzd2f7L9NEgATtQ/0.jpg" alt=""/>
                        </div>
                        <div className="ownerDetails" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', flex: 1}}>
                            <div className="ownerNameAndHandle" style={{flex: 1, display: 'flex'}}>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <div className="">
                                        0x23DDc2606865a6feCe458E78D16Ffdf440785A88
                                    </div>
                                    <div className="ownerHandle">
                                        @rookasrudzianskas
                                    </div>
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

        </div>
    );
};

export default Main;
