import styles from "../styles/Emoji.module.css";

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

export default Emoji;
