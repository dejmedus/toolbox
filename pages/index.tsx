import React, { useEffect } from "react";
import Prism from "prismjs";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "@/components/Card";
import Snippet from "@/components/Snippet";
import { tools, snippets } from "../assets/data/tools";
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
        {/* <link rel="icon" href="/favicon.ico" /> */}
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
          <span>Code Snippets</span> 📋
        </h1>
        <div className={styles.snippets}>
          {snippets.map((snippet, index) => {
            const open = index == 0 ? true : false;
            return (
              <Snippet
                open={open}
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
