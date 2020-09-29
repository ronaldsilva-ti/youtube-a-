import React, { useState } from 'react';
import Details from './Details';

function App() {

  const [ id, setId ] = useState('');
  const [ api, setApi ] = useState('');
  const [ mostreFrame, setmostreFrame ] = useState(false);
  
  function onSubmit(event){
    event.preventDefault();
    var idVideo = id;
    idVideo = idVideo.split('watch?v=');
    idVideo = idVideo[1];

    const api = `https://www.yt-download.org/api/widget/mp3/${idVideo}`
    setApi(api)
    setmostreFrame(true)
  }


  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Dowload video Youtube as MP3</a>
      </nav>      

      <form onSubmit={onSubmit} style={{ display:"flex", alignItems:'center', justifyContent:'center',marginTop:'120px' }}>
        <div class="input-group mb-3" style={{width:'80%'}}>
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">URL</span>
          </div>
          <input type="text" onChange={(e) => setId(e.target.value)} class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
          <button type="submit" className="btn btn-primary">Dowload</button>
        </div>
      </form>

      {
        setmostreFrame && 
        (
          <iframe src={`${api}`} width="100%" height="440px" allowtransparency="true" scrolling="no" style={{border:'none'}}></iframe>
        ) 
      }
      <Details/>
    </div>
  );
}

export default App;
