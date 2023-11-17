import React from 'react';
import '/styles/anuncio.css';

function Anuncio(props) {
    const more = props.more;
  
    return (
      <section>
        <div className='ad'>
          <p>Best seller of the week</p>
          <h1>Iced Coffee Sweet Heaven</h1>
          <button>Mas informacion</button>
          <ul>
            <li><img src='./public/navidad.svg'></img></li>
          </ul>
        </div>

      </section>
    );
  }
  
  export default Anuncio;

