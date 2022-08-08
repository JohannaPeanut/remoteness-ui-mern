import { createNewLandscape } from './../services/landscape'
import { useEffect, useState } from 'react';

const HomePage = () => {

  const [ landscape, setLanscape ] = useState('/leer.png')

  // useEffect(()=> {
  //   const newLandscape = '';
  //   createNewLandscape()
  //   .then((newDoc) => console.log(newDoc) )
  // }, [])

  const generateLandscape = () => {
    const newLandscape = '';
    createNewLandscape()
    .then((newDoc) => setLanscape(newDoc.data.displayedLandscape.image))
  }

  return (
    <div>
        <div>
            <p id="intro" className="subtitle">
             A unique landscape, an ideal background 
            <br/>can be generated for you.
    
            </p>
        </div> 
        <div className="container">
        {/* sizes="sm:100vw md:50vw lg:200px" */}
            <img src={landscape} />

            <div className="buttons">
      
                <button onClick={ generateLandscape } className="ontopbtn">
                  generate
                </button>
             
            </div>

        </div>

        <div className="infolink">
            <button id="help-button" style={{visibility: "hidden"}}>*</button>
            <a id="info-a" href="http://start.johannamichel.com/remoteness-insularity-difficult-topography/">info</a>      
        </div>
    </div>
  )
}

export default HomePage