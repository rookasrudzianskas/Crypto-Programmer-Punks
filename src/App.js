import './App.css';
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
   const getMyNfts = async () => {
       // eslint-disable-next-line no-unused-vars
     const openseaData = await axios.get(`https://testnets-api.opensea.io/assets?asset_contract_address=0x88b84C21aa4384C7939de52eD55b614D363E85D8&order_direction=asc`)
     console.log("This is data", openseaData.data.assets);

   }
   return getMyNfts();

  }, []);

  return (
    <div className="app">
      <Header />
        <CollectionCard
            id={0}
            name={'Bandana Punk'}
            traits={[{'value': 7}]}
            image={'https://ipfs.thirdweb.com/ipfs/QmX5KmDnfBdHQhmCSnqsb4yp3dyHcY6dzd2f7L9NEgATtQ/0.jpg'}
        />

    </div>
  );
}

export default App;
