import { useRef } from 'react';
import moon from './moon.png';
import land from './land.png';
import cat from './cat.gif';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        {/* <ParallaxLayer speed={1}>
            <h2>Welcome to my website</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <img src={cat} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h3>Hii Gladis Fadilaku Cantik❤️</h3> 
          <h4>Ini Surat Permintaan Maaf Dariku Untukmu 😔</h4>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h4>Pleasee!! Udahan dong ngambeknya sayang! Orang beneran hampa dan kesepian disini 😭😭</h4>
          <p>Blokirnya dibuka lagi ya sayang 😍 Abang pasti nungguin adek selalu disini 😭😭</p>
          <p>Besar harapan orang untuk blokirnya bisa dibukak 😔 orang cuman pengen kita bicarain baik-baik dan kita selesaikan baik-baik</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
