import React from 'react';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';
import './index.css';


function Envelope({toPerson, fromPerson}){
    return(
        <div className="envelope">
         <Stamp/>
         <div className="return-address-container">
         <Address name={fromPerson.name}
                  address={fromPerson.address}
                  city={fromPerson.city}
                  state={fromPerson.state}
                  zip={fromPerson.zip}/>
         </div>
         <div className="sender-address-container">
         <Address name={toPerson.name}
                  address={toPerson.address}
                  city={toPerson.city}
                  state={toPerson.state}
                  zip={toPerson.zip}/>
         </div>
    </div>
    )
    
}
Envelope.propTypes = {
    toPerson: PropTypes.object.isRequired,
    fromPerson: PropTypes.object.isRequired
};

function Address({name, address, city, state, zip}){
    return(
        <div className="address-container">
             <div className="name">
            {name}
        </div>    
        <div className="address">
            {address}
        </div>
        <div className="city-state">
            {city}, {state} {zip}
        </div>
        </div>
       
    )
}

Address.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired
}

const Stamp = () => (
    <div className="stamp"></div>
)
    
const toPerson = {
    name: 'Ashley King',
    address: '70 Ohana Lane',
    city: 'Kauai',
    state: 'HI',
    zip: '96714'
}

const fromPerson = {
    name: 'Someone Else',
    address: '100 Hula Ave',
    city: 'Kauai',
    state: 'HI',
    zip: '96714'
}

ReactDOM.render(<Envelope toPerson={toPerson} fromPerson={fromPerson} />, document.getElementById('root'));

