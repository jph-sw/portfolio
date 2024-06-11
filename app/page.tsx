import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="border rounded-base shadow-base bg-bg p-12 flex flex-col gap-6 justify-start">
        <h1 className="text-4xl">Jan Philipps</h1>
        <h2 className="font-light">Software Engineer</h2>
        <div className="flex gap-4">
          <Button asChild>
            <Link href={"https://github.com/jph-sw"}>Github</Link>
          </Button>
          <Button asChild>
            <Link href={"https://www.linkedin.com/in/jan-philipps-b37052297/"}>
              Linked In
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
