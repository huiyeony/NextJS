import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const onClick = () => {
    router.push("/test"); //클라이언트 사이드 렌더링 방식
  };
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <div></div>
      <Link href={"/search"}>search</Link>
      <div></div>
      <Link href={"/book/1"}>Book</Link>
      <button onClick={onClick}>test 페이지으로 이동</button>
      <Component {...pageProps} />
    </div>
  );
}
