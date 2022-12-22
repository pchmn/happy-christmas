import { Howl } from 'howler';
import JSConfetti from 'js-confetti';

const jsConfetti = new JSConfetti();

const sound = new Howl({
  src: ['sounds/joyeux-noel-grobin.mp3']
});

function App() {
  const handleExplode = () => {
    sound.play();
    jsConfetti.addConfetti({
      emojis: ['🎅🏼', '🧑🏻‍🎄', '🦌', '🛷', '🌟', '🎄', '❄️', '⛄', '🎁', '🕯', '✨', '🎉', '🛰️']
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
          lineHeight: '2.5rem',
          textAlign: 'center',
          padding: 20,
          WebkitTapHighlightColor: 'transparent',
          userSelect: 'none'
        }}
      >
        {"Active le son et appuie sur l'écran"}
      </span>
    </div>
  );
}

export default App;
