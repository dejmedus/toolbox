import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Emojis from "@/components/Emojis";
import Github from "@/images/github.svg";
import { BackArrowSVG } from "@/images/icons";
import Top from "@/components/Top/Top";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emojis</title>
        <meta
          name="description"
          content="Collection of useful frontend web development tools"
        />
        <link rel="icon" href="/flower.png" />
        <link rel="shortcut icon" href="/flower.png" />
      </Head>
      <nav className={styles.emojisNav}>
        <Link href="/">
          <BackArrowSVG />
        </Link>
      </nav>
      <main className={styles.main}>
        <Emojis full={true} />
      </main>
      <Top />
    </div>
  );
}
