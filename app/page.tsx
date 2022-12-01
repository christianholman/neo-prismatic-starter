"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-xl">Neo Prismatic Starter</h1>
      <button onClick={() => signIn()}>Signin</button>
    </div>
  );
}
