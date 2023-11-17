import React from 'react';
import '/styles/anuncio.css';

function Anuncio(props) {
    const more = props.more;
  
    return (
      <section>
        <div>
          <h2>Best seller of the week</h2>
        </div>

        <div>
          <h1>Iced Coffee Sweet Heaven</h1>
        </div>

      </section>
    );
  }
  
  export default Anuncio;

