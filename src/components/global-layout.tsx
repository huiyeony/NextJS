import { ReactNode } from "react";
import style from "@/components/global-layout.module.css";
import Link from "next/link";
export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>📚 ONEBITE-BOOK 홈페이지 </Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>제작 @</footer>
    </div>
  );
}
