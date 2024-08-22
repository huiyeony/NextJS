import { useRouter } from "next/router";
export default function Page() {
  const router = useRouter();
  console.log(router);
  const { query } = router;
  return <div>{query.id}번째 book 페이지</div>;
}
