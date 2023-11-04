import React from 'react';

function Splash(props) {
  return (
    <section className="container splash">
      <picture>
        <source
          srcset="http://placekitten.com/400/340"
          media="(max-width: 400px)"
        />
        <source
          srcset="http://placekitten.com/600/340"
          media="(max-width: 600px)"
        />
        <source
          srcset="http://placekitten.com/800/340"
          media="(max-width: 800px)"
        />

        <img src="http://placekitten.com/1300/340" alt="cat" />
      </picture>
    </section>
  );
}

export default Splash;
