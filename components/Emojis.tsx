import { useState } from "react";
import Link from "next/link";
import { emojis } from "../assets/data/emojis";
import { emojisAll } from "../assets/data/emojisAll";
import styles from "../styles/Emojis.module.css";

export default function Emojis({ full }: { full: boolean }) {
  const [search, setSearch] = useState<string | null>(null);
  const emojiList = full ? emojisAll : emojis;
  return (
    <>
      {!full ? <h2 id="emojis">Emojis</h2> : null}
      <div className={styles.emojis}>
        {full ? (
          <>
            <TableOfContents emojiList={emojiList} />
            <Search setSearch={setSearch} />{" "}
          </>
        ) : null}
        {emojiList.map((emojiArr) => {
          emojiArr = search
            ? {
                cat: emojiArr.cat,
                arr: emojiArr.arr.filter((a) =>
                  a[1].toLowerCase().includes(search.toLowerCase())
                ),
              }
            : emojiArr;

          return (
            <div key={emojiArr.cat}>
              {full ? (
                emojiArr.arr.length > 0 ? (
                  <h3 id={emojiArr.cat}>{emojiArr.cat}</h3>
                ) : null
              ) : null}
              <div className={styles.emojiGrid}>
                {emojiArr.arr.map((emoji) => {
                  return (
                    <Emoji
                      key={emoji[1]}
                      emoji={emoji[0]}
                      name={emoji[1]}
                      unicode={emoji[2]}
                    />
                  );
                })}
                {!full ? (
                  <Link className={styles.moreButton} href="/emojis">
                    ...
                  </Link>
                ) : null}
              </div>
            </div>
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
      value={emoji}
      id={name}
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
        return (
          <Link key={emoji.cat} href={`#${emoji.cat}`}>
            {emoji.cat}
          </Link>
        );
      })}
    </div>
  );
};

const Search = ({ setSearch }: { setSearch: any }) => {
  return (
    <input
      className={styles.search}
      onChange={(e) => setSearch(e.target.value)}
      type="text"
      name="search"
      id="search"
      aria-label="search bar"
      placeholder="Search..."
    />
  );
};
