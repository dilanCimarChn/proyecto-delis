import React from 'react';
import '/styles/anuncio.css';

function Anuncio(props) {
    const more = props.more;
  
    return (
      <section>
        <div className='ad'>
          <p>Best seller of the week</p>
          <h1>Iced Coffee Sweet Heaven</h1>
        </div>

      </section>
    );
  }
  
  export default Anuncio;

