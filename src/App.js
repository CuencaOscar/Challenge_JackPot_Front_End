import './App.css';
import './css/ChashOut.css'
import { useEffect, useState } from 'react';
import { getCreditsRoll, getImages } from './services/services'
import Spin from './assets/Spin';
import { Link } from 'react-router-dom';

const App = () => {

  const [indices, setIndices] = useState([1, 2, 3])

  const [idUser, setIdUser] = useState();

  const [ready, setReady] = useState([true, true, true]);

  const [fruit, setFruit] = useState([]);

  const [credits, setCredits] = useState(10);

  const [temp, setTemp] = useState(credits);

  const [userActive, setUserActive] = useState("----");

  const [m, setM] = useState(0);

  useEffect(() => {
    const existUser = localStorage.getItem("email")
    if (existUser) {
      setCredits(localStorage.getItem("credit"))
      setIdUser(localStorage.getItem("id"))
      setUserActive(existUser)
      setTemp(localStorage.getItem("credit"))
      getImages(setFruit)
      let boton_no = document.getElementsByClassName('btn2')[0];
      boton_no.onmouseover = () => {
        boton_no.style.position = "absolute";
        boton_no.style.left = Math.random() * 300 + 'px';
        boton_no.style.top = Math.random() * 300 + 'px';
      }
    }
  }, []);

  useEffect(() => {
    setTemp(localStorage.getItem("credit"))
  }, [m]);

  const Init = () => {
    return (
      <>
        <div className='image'>
          {ready[0]
            ?
            <img src={fruit[indices[0] - 1]}
              style={{ width: '100px', height: '100px' }} />
            :
            <Spin />}
        </div>
        <div className='image'>{ready[1] ? <img src={fruit[indices[1] - 1]} style={{ width: '100px', height: '100px' }} /> : <Spin />}</div>
        <div className='image'>{ready[2] ? <img src={fruit[indices[2] - 1]} style={{ width: '100px', height: '100px' }} /> : <Spin />}</div>
      </>
    )
  }

  const Roll = () => {
    setReady([false, false, false])
    setTimeout(() => {
      setReady([true, false, false])
      setTimeout(() => {
        setReady([true, true, false])
        setTimeout(() => {
          setReady([true, true, true])
          setM(credits)
        }, 1000);
      }, 1000);
    }, 2000);
  }

  const PressButtom = () => {
    getCreditsRoll({ current_credits: credits, user_id: idUser }, setCredits, setIndices)
    Roll()
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome {userActive.split('@')[0].toUpperCase()}</h1>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
          <Init />
        </div>
        <h2 style={{ marginTop: 50 }}>Credits: {temp}</h2>
        <button className='btn3' onClick={(e) => { PressButtom() }}></button>
        <Link to="/">
          <button className='btn2' onClick={(e) => { localStorage.clear() }}></button>
        </Link>
      </header>
    </div>
  );
}

export default App;