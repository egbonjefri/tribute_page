import React, { useState } from 'react'
import tracks from './tracks'
import HeaderComponent from './components/headerComponent'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faChevronDown} />
let index = 0;

function App () {
    const [src, setSrc] = useState(tracks[index]);

    function timeOut () {
        const frame = document.getElementsByClassName('frame')[0];
        frame.classList.remove('animate')
    }
    function preview () {
        const frame = document.getElementsByClassName('frame')[0];
        frame.classList.remove('preview')
    }
    
    function handleNext() {
        const frame = document.getElementsByClassName('frame')[0];
        index++;
        setSrc(tracks[index]);
        if (!frame.classList.contains('animate')) {
            frame.classList.add('animate');
        }
        setTimeout(timeOut, 700);
        
    }
    function handlePrev() {
        const frame = document.getElementsByClassName('frame')[0];
        index--;
        setSrc(tracks[index]);
        if (!frame.classList.contains('preview')) {
            frame.classList.add('preview');
        }
        setTimeout(preview, 700);
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