import React from 'react';


export default function Details(){
    return(
        <>
        <div class="card">    
            <div class="card-body">
                <h5 class="card-title">How to use the website?  </h5>
                <p class="card-text">
                    1- Copy the Video Url on youtube   
                </p>
                <p class="card-text">2- Paste the Url in the specific field up there</p>
                <p class="card-text">3-Press on Dowload</p>
                <p class="card-text">4-Choose the audio quality and download</p>
            </div>
        </div>


        <div class="card" style={{marginTop:12}}>    
            <div class="card-body">
                <h5 class="card-title text-center">About</h5>
                <p class="card-text">   
                The site was born with the intention of facilitating the conversion of videos to MP3 to be heard on the computer, tablet and cell phones.


                </p>
                <p class="card-text">
                Fast, easy to use, clean and made with a lot of love
                </p>     
                <p class="card-text">
                Our service is free and requires no software or registration.
                </p>           
            </div>
        </div>

        <div style={{marginTop:'20px',display:'flex', alignItems:'center', justifyContent:'center'}}>
        <button className="btn btn-danger" >We are not related to  Youtube</button>
        </div>

        <div class="card">
            <div class="card-body">
            Dowload video Youtube as MP3 - 2020
            </div>
        </div>
        </>
    )
}