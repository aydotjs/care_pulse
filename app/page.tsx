import { Button } from "@/components/ui/button";
import { Butcherman } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <h1 className="text-white text-3xl underline">Care Pulse</h1>
    <Button>Click Me</Button>
  </div>
  );
}
