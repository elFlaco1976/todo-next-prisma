import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";

export default async function Home() {
  const todos = await prisma.todo.findMany();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className={"text-2xl"}>TODOS</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 outline-none"
          href="/newtodo"
        >
          New page
        </Link>
      </header>
      <ul>
        {todos.map((todo) => (
          <TodoItem title={todo.title} complete={todo.complete} id={todo.id} key={todo.id} />
        ))}
      </ul>
    </>
  );
}
