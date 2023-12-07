import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <h1 className={"text-2xl"}>TODOS</h1>
        <Link href="/testpage">New page</Link>
      </header>
      <ul></ul>
    </>
  );
}
