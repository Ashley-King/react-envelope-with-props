import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Envelope(){
    return(
        <div className="envelope">
         <Stamp/>
        <ReturnAddress/>
        <SenderAddress/>
    </div>
    )
    
}

function ReturnAddress(){
    return(
        <div className="return-address-container">
             <div className="name">
            Ashley King
        </div>    
        <div className="address">
            16 Ohana Lane
        </div>
        <div className="city-state">
            Kauai, HI 96714
        </div>
        </div>
       
    )
}

function SenderAddress(){
    return(
        <div className="sender-address-container">
            <div className="name">
                To Person
            </div>
            <div className="address">
                70 To Address St.
            </div>
            <div className="city-state">
                Kauai, HI, 96715
            </div>
        </div>
    )
}

const Stamp = () => (
    <div className="stamp"></div>
)
    



ReactDOM.render(<Envelope />, document.getElementById('root'));

