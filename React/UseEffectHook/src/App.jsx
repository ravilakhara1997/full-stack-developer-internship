import { useState } from 'react'
import Counter from './components/Counter'
import UseCase1 from './components/UseCase1'
import UseCase2 from './components/UseCase2';
import Timer from './components/Timer';
import RealTimeClock from './components/RealTimeClock';
import DataFilteration from './components/DatFilteration';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [ flag,setFlag]=useState(false);
  const handler=()=>{
    flag?setFlag(false):setFlag(true);
  }
  return (
    <>
    {/* {flag? <UseCase1 />: ''}
    <button onClick={handler}>{flag?'Hide':'SHow'}</button>  */}
    {/* <UseCase2/> */}
    {/* <Timer/> */}
    {/* <RealTimeClock/> */}
    <DataFilteration/>
    </>
   
  )
}

export default App
