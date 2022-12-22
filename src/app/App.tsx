import JSConfetti from 'js-confetti';
import { useState } from 'react';

const jsConfetti = new JSConfetti();

const joyeux = new Audio('sounds/joyeux.mp3');
const noel = new Audio('sounds/noel.mp3');
const grobin = new Audio('sounds/grobin.mp3');
// const joyeuxNoel = new Audio('sounds/joyeux-noel-grobin.mp3');

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleExplode = () => {
    switch (clickCount) {
      case 0:
        joyeux.play();
        break;
      case 1:
        noel.play();
        break;
      case 2:
        grobin.play();
        break;
    }
    // joyeuxNoel.play();

    setClickCount((prev) => (prev === 2 ? 0 : prev + 1));

    jsConfetti.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸']
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100dvh',
        width: '100dvw',
        backgroundColor: '#201A1A',
        color: '#c1c2c5'
      }}
      onClick={handleExplode}
    >
      <span
        style={{
          fontWeight: 600,
          fontSize: '2rem',
          textAlign: 'center',
          padding: 20,
          WebkitTapHighlightColor: 'transparent',
          userSelect: 'none'
        }}
      >
        {"Active le son et appuye sur l'écran"}
      </span>
    </div>
  );
}

export default App;
