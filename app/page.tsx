import Button from "@/components/button/Button";
import Image from "next/image";
export default function Home() {
  return (
    <div className="md:flex md:justify-between items-center mt-20  h-[85vh] ">
      <div className="flex flex-col gap-[15px] ">
        <h1 className="lg:text-8xl text-6xl  font-semibold pl-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to to-slate-950   ">
          Better Design <br />
          for your digital products.{" "}
        </h1>
        <p className="text-2xl pl-5">
          Turning your idea into Reality.We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div>
        <Image
          src="/learningHome.png"
          width={900}
          height={900}
          alt="Home Learning"
          className="object-contain    "
        />
      </div>
    </div>
  );
}
