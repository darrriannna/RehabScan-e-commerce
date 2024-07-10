import React, { useState } from 'react';
import '../styles/index.css';

const AnimationBody = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const animationData = [
    { id: 1, text: 'MR Höger axel' },
    { id: 2, text: 'MR Vänster axel' },
    { id: 3, text: 'MR Prostatascreening' },
    { id: 4, text: 'MR Bröstrygg' },
    { id: 5, text: 'MR Höftleder och bäckenben' },
    { id: 6, text: 'MR Höger fotled' },
    { id: 7, text: 'MR Höger armbåge' },
    { id: 8, text: 'MR Höger handled' },
    { id: 9, text: 'MR Höger knä' },
    { id: 10, text: 'MR Ländrygg' },
    { id: 11, text: 'MR Halsrygg' },
    { id: 12, text: 'MR Vänster fotled' },
    { id: 13, text: 'MR Vänster armbåge' },
    { id: 14, text: 'MR Vänster handled' },
    { id: 15, text: 'MR Vänster knä' }
  ];

  const toggleList = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
    <div className="banner-images-container">
      <div className="banner-image">
        <img src="./assets/Humanbody.png" alt="Image 1" className="image-front" />
        <div className="circle-animation circle-animation1">
          <div className="pop-up">
            <p className='animation-text'>MR Höger axel</p>
            <button className='animation-button btn-link'>Boka</button>
          </div>
        </div>
        <div className="circle-animation circle-animation2">
          <div className="pop-up">
            <p className='animation-text'>MR Vänster axel</p>
            <button className='animation-button btn-link'>Boka</button>
          </div>
        </div>
        <div className="circle-animation circle-animation3">
          <div className="pop-up">
            <p className='animation-text'>MR Prostatascreening</p>
            <button className='animation-button btn-link'>Boka</button>
          </div>
        </div>
        <div className="circle-animation circle-animation4">
          <div className="pop-up">
            <p className='animation-text'>MR Höftleder och bäckenben</p>
            <button className='animation-button btn-link'>Boka</button>
          </div>
        </div>
        <div className="circle-animation circle-animation5">
          <div className="pop-up">
            <p className='animation-text'>MR Höftleder och bäckenben</p>
            <button className='animation-button btn-link'>Boka</button>
          </div>
        </div>
        <div className="circle-animation circle-animation6">
          <div className="pop-up">
            <p className='animation-text'>MR Vänster handled</p>
            <button className='animation-button btn-link'>Boka</button>
          </div>
        </div>
        <div className="circle-animation circle-animation7">
          <div className="pop-up">
            <p className='animation-text'>MR Höger handled</p>
            <button className='animation-button btn-link'>Boka</button>
          </div>
        </div>
        <div className="circle-animation circle-animation8">
          <div className="pop-up">
            <p className='animation-text'>MR Höger knä </p>
            <button className='animation-button btn-link'>Boka</button>
          </div>
        </div>
        <div className="circle-animation circle-animation9">
          <div className="pop-up">
            <p className='animation-text'>MR Vänster knä</p>
            <button className='animation-button btn-link'>Boka</button>
          </div>
        </div>
        <div className="circle-animation circle-animation10">
          <div className="pop-up">
            <p className='animation-text'>MR Höger fotled</p>
            <button className='animation-button btn-link'>Boka</button>
          </div>
        </div>
        <div className="circle-animation circle-animation11">
          <div className="pop-up">
            <p className='animation-text'>MR Vänster fotled</p>
            <button className='animation-button btn-link'>Boka</button>
          </div>
        </div>
        <div className="circle-animation circle-animation12">
          <div className="pop-up">
            <p className='animation-text'>MR Höger armbåge</p>
            <button className='animation-button btn-link'>Boka</button>
          </div>
        </div>
        <div className="circle-animation circle-animation13">
          <div className="pop-up">
            <p className='animation-text'>MR Halsrygg</p>
            <button className='animation-button btn-link'>Boka</button>
          </div>
        </div>
        <div className="circle-animation circle-animation14">
          <div className="pop-up">
            <p className='animation-text'>MR Bröstrygg</p>
            <button className='animation-button btn-link'>Boka</button>
          </div>
        </div>
        <div className="circle-animation circle-animation15">
          <div className="pop-up">
            <p className='animation-text'>MR Ländrygg</p>
            <button className='animation-button btn-link'>Boka</button>
          </div>
        </div>
        <div className="circle-animation circle-animation16">
          <div className="pop-up">
            <p className='animation-text'>MR Vänster armbåge</p>
            <button className='animation-button btn-link'>Boka</button>
          </div>
        </div>
        
      </div> </div>
      <button className="toggle-button" onClick={toggleList}>
        <span>{isExpanded ? 'Hide' : 'Show'} Prices List</span>
        <span className={`arrow ${isExpanded ? 'expanded' : 'collapsed'}`}>&#9660;</span>
      </button>

      <ul className={`mr-services-list ${isExpanded ? 'expanded' : 'collapsed'}`}>
        {animationData.map(item => (
          <li className='list-element' key={item.id}>
            <div className="mr-service-container">
              <div className='mr-service-info'>
                <p>{item.text}</p>
                <p className='mr-price'>0000kr <span className='more-link'><a href="http://#">Läs mer</a></span></p>
              </div>
              <button className="btn-primary">Boka nu</button>
            </div>
          </li>
        ))}
      </ul>
   
    </div>
  );
};

export default AnimationBody;
