"use client";

import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
interface Task {
  _id: string;
  text: string;
  _creationTime: number;
}

export default function Home() {
  const tasks: Task[] | undefined = useQuery(api.tasks.get);

  if (!tasks) {
    return (
      <main className="flex min-h-screen flex-col items-center gap-10 p-24">
        <div>Loading...</div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      {tasks.map(({ _id, text, _creationTime }) => (
        <div className="text-blue-950 bg-white" key={_id}>
          {text}, {new Date(_creationTime).toLocaleString()}
        </div>
      ))}
    </main>
  );
}