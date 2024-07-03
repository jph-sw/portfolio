import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { ArrowUpRightFromSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen items-center justify-center p-24">
        <div className="border rounded-base shadow-base bg-bg p-12 flex flex-col gap-6 justify-start">
          <h1 className="text-4xl">Jan Philipps</h1>
          <h2 className="font-light">Software Engineer</h2>
          <div className="flex gap-4">
            <Button asChild>
              <Link href={"https://github.com/jph-sw"}>Github</Link>
            </Button>
            <Button asChild>
              <Link
                href={"https://www.linkedin.com/in/jan-philipps-b37052297/"}
              >
                Linked In
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="h-screen">
        <h3 className="text-center text-2xl pt-12">Projects</h3>
        <div className="flex flex-wrap px-4 lg:p-12">
          <Card className="w-full md:w-[30vw]">
            <CardHeader>
              <Link
                href={"https://interrogation-nine.vercel.app"}
                className="flex gap-2 items-center"
              >
                Interrogation <ArrowUpRightFromSquare size={16} />
              </Link>
            </CardHeader>
            <CardDescription className="px-4 pb-2">
              A website to create forms. Built with Next.js, shadcn/ui and
              tailwind.css
            </CardDescription>
          </Card>
        </div>
      </div>
    </main>
  );
}
