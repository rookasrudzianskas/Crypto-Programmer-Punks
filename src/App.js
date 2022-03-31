import './App.css';
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";

function App() {
  return (
    <div className="app">
      <Header />
        <CollectionCard id={0} name={'Bandana Punk'} traits={[{'value': 7}]} image={'https://ipfs.thirdweb.com/ipfs/QmX5KmDnfBdHQhmCSnqsb4yp3dyHcY6dzd2f7L9NEgATtQ/0.jpg'} />

    </div>
  );
}

export default App;
