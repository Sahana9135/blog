import React from 'react';
import { Link } from 'react-router-dom';
import './Alter.css';


function Alter() {
  return (
    <>
        <div className='alter'>
            <h1>
                Blog
            </h1>

            <ul>
                <li><Link to="/">Back</Link></li>
            </ul>
        </div>
    </>
  )
}

export default Alter