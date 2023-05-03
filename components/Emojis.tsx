import { emojis } from "../assets/data/emojis";
import styles from "../styles/Emojis.module.css";

export default function Emojis() {
  return (
    <>
      <h2 id="emojis">Emojis</h2>
      <div className={styles.emojis}>
        {emojis.map((emoji) => {
          return (
            <div className={styles.emojiGrid}>
              {emoji.arr.map((emojiArr) => {
                return (
                  <Emoji
                    emoji={emojiArr[0]}
                    name={emojiArr[1]}
                    unicode={emojiArr[2]}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

interface EmojiProps {
  emoji: string;
  name: string;
  unicode: string;
}
const Emoji = ({ emoji, name, unicode }: EmojiProps) => {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(emoji);
      }}
      className={styles.button}
      key={unicode}
      name={name}
      value={emoji}
      id={unicode}
    >
      {emoji}
    </button>
  );
};
