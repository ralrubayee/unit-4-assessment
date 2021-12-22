import React, {useState} from 'react'
import './App.css'
import Circles from './components/Circles'
import CircleSelector from './components/CircleSelector'


function App() {
  const [selectCircle, setselectCircle] = useState(Array(4).fill(false))

  const handleSelectedCircle = (selectedDog) => {
    setselectCircle(selectCircle.map((selectCircle, idx) => (
      selectedDog === idx ? true : false
    )))
  }

    return (
      <div className="App">
        <header className="App-header">Unit 4 Assessment</header>
        <main>
   
        <CircleSelector 
        selectCircle={selectCircle} 
        handleSelectedCircle={handleSelectedCircle}
        />
  
        <div>
        <Circles 
        selectCircle={selectCircle} 
        handleSelectedCircle={handleSelectedCircle}
        />
        </div>
        </main>
      </div>
    )
  }


export default App
