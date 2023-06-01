import Link from "next/link";
import { UpArrowSVG } from "@/images/icons";
import styles from "./Top.module.css";

export default function Top() {
  return (
    <Link
      aria-label="navigate to top"
      className={styles.top}
      href="#tableOfContents"
    >
      <UpArrowSVG />
    </Link>
  );
}
