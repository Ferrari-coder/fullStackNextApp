import Image from "next/image";
import Hero from "public/hero.png";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="flex items-center gap-[100px]">
      <div className="flex-1 flex flex-col gap-[50px]">
        <h1 className="title">Better design for your digital products.</h1>
        <p className="text-[24px] font-light">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className="flex-1 flex flex-col gap-[50px]">
      <Image src={Hero} alt="" className="w-full h-[500px] object-cover" />
      </div>
    </main>
  );
}
