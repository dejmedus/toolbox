import Link from "next/link";
import { emojis } from "../assets/data/emojis";
import { emojisAll } from "../assets/data/emojisAll";
import styles from "../styles/Emojis.module.css";

export default function Emojis({ full }: { full: boolean }) {
  const emojiList = full ? emojisAll : emojis;
  return (
    <>
      {!full ? <h2 id="emojis">Emojis</h2> : null}
      <div className={styles.emojis}>
        {full ? <TableOfContents emojiList={emojiList} /> : null}
        {emojiList.map((emoji) => {
          return (
            <>
              {full ? <h3 id={emoji.cat}>{emoji.cat}</h3> : null}
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
                {!full ? (
                  <Link className={styles.moreButton} href="/emojis">
                    ...
                  </Link>
                ) : null}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

interface IEmoji {
  emoji: string;
  name: string;
  unicode: string;
}
const Emoji = ({ emoji, name, unicode }: IEmoji) => {
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

interface IEmojiCategory {
  cat: string;
  arr: string[][];
}

const TableOfContents = ({ emojiList }: { emojiList: IEmojiCategory[] }) => {
  return (
    <div id="tableOfContents" className={styles.tableOfContents}>
      {emojiList.map((emoji) => {
        return <Link href={`#${emoji.cat}`}>{emoji.cat}</Link>;
      })}
    </div>
  );
};
