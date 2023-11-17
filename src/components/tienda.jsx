import React from 'react';
import '/styles/home.css';

function Tienda(props) {
  const more = props.more;

  return (
    <section className='home' style={{ backgroundImage: 'url(/images/background.jpg)' }}>
      <div className='home'>
        <button>mundo</button>
        <button>hello</button>
        <button>papito rey</button>
      </div>
    </section>
  );
}

export default Home;
