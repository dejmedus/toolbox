import React, { useEffect } from "react";
import Prism from "prismjs";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "@/components/Card";
import Snippet from "@/components/Snippet";
import Emoji from "@/components/Emoji";
import { tools } from "../assets/data/tools";
import { snippets } from "../assets/data/snippets";
import { emojis } from "../assets/data/emojis";
import Github from "@/images/github";

export default function Home() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Tools</title>
        <meta
          name="description"
          content="Useful web development tools and code snippets"
        />
        <link rel="icon" href="/flower.png" />
        <link rel="shortcut icon" href="/flower.png" />
      </Head>

      <main className={styles.main}>
        <h1>
          <span>Frontend Tools</span> 🖼️
        </h1>
        <div className={styles.grid}>
          {tools.map((tool) => {
            return (
              <Card
                key={tool.name}
                name={tool.name}
                url={tool.url}
                desc={tool.desc}
              />
            );
          })}
        </div>
        <h1>
          <span>Emojis</span> 🍉
        </h1>
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
        <h1>
          <span>Code Snippets</span> 📋
        </h1>
        <div className={styles.snippets}>
          {snippets.map((snippet, index) => {
            return (
              <Snippet
                name={snippet.name}
                code={snippet.code}
                lang={snippet.lang}
              />
            );
          })}
        </div>
      </main>
      <footer className={styles.footer}>
        <a href="https://github.com/dejmedus/tools">
          <Github />
        </a>
      </footer>
    </div>
  );
}
