import { Chatbot } from "@/components/component/chatbot";
import Image from "next/image";

export default function Home() {
  return (
   <main className = "flex items-center justify-center h-screen w-full">
      <Chatbot/>
   </main>
  );
}
