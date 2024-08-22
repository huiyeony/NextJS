import { useRouter } from "next/router";
import Link from "next/link";
import style from "@/styles/Index.module.css";
export default function Page() {
  const router = useRouter();

  return <div className={style.div}>search 페이지 입니다</div>;
}
