import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Tools from "@/components/Tools";
// import Snippets from "@/components/Snippets";
import Emojis from "@/components/Emojis";
import Github from "@/images/github.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tools</title>
        <meta
          name="description"
          content="Collection of useful frontend web development tools"
        />
        <link rel="icon" href="/flower.png" />
        <link rel="shortcut icon" href="/flower.png" />
      </Head>
      <nav className={styles.nav}>
        <Link href="#tools">Tools</Link>
        <span>✦</span>
        <Link href="#emojis">Emojis</Link>
        {/* <span>✦</span>
        <Link href="#snippets">Snippets</Link> */}
      </nav>
      <main className={styles.main}>
        <Tools />
        <Emojis />
        {/* <Snippets /> */}
      </main>
      <footer className={styles.footer}>
        <Link href="https://github.com/dejmedus/tools" target="_blank">
          <Image src={Github} alt="Github" /> View Source Code
        </Link>
      </footer>
    </div>
  );
}
