import React, { useState } from 'react'
import tracks from './tracks'
import HeaderComponent from './components/headerComponent'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faChevronDown} />
let index = 0

function App () {
    const [src, setSrc] = useState(tracks[index]);
    function handleNext() {
        index++;
        setSrc(tracks[index])
    }
    function handlePrev() {
        index--;
        setSrc(tracks[index])
    }
    function handleScroll() {
        window.scroll({
            top: -2500, 
            left: 0, 
            behavior: 'smooth' 
          });
     }
    return (
        <div>
                    <HeaderComponent />

            <iframe className='frame' src={src} title='Music Player'></iframe>
            <div className='parent'>{tracks.length - 1 > index && 
            <button className='btn' onClick={handleNext}>
                Next Track
            </button>}
            {index > 0 && <button className='btn-2' onClick={handlePrev}>
                Previous Track
            </button>}
            </div>
            <button onClick={handleScroll} className='icon-top'>{element}</button>
        </div>
        
    )
    
}


export default App;