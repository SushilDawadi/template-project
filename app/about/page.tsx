import React from "react";
import Image from "next/image";
import groupImg from "../../public/group.jpg";
import Button from "@/components/button/Button";
const About = () => {
  return (
    <div className="flex  flex-col justify-between gap-5  ">
      <div>
        <Image
          src={groupImg}
          alt="learning-group"
          className="w-[100%] h-[300px] mt-[70px] relative z-[-2] object-cover   "
        />
        <div className="bg-black p-2 text-white absolute top-[280px] left-1 md:left-[350px] z-[-2]">
          <h2 className="text-2xl font-bold">Digital Storytellers</h2>
          <p className="text-[16px] font-semibold">
            Handcrafting award winning digital experiences
          </p>
        </div>
      </div>
      <div className="md:mt-[100px] flex flex-col gap-[30px]  md:flex-row justify-between p-4">
        <div>
          <h1 className="text-5xl font-semibold mb-2 ">Who Are We?</h1>
          <p className="text-2xl text-justify ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            sapiente, autem porro ipsam quia cupiditate! Quas saepe corporis
            omnis ut quaerat facilis, explicabo fugit praesentium dolores at, a
            ab rem nesciunt doloremque nemo.
            <br /> Pariatur repudiandae veniam dolor aliquam distinctio est
            minus obcaecati porro temporibus praesentium sed quam nulla nisi,
            quas molestiae magni deserunt nostrum sequi quasi iste. Reiciendis,
            incidunt accusantium!
          </p>
        </div>
        <div className="p-4">
          <h1 className="text-5xl font-semibold mb-2">What We Do?</h1>
          <p className="text-2xl text-justify ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
            commodi dolorum perspiciatis mollitia vero officiis autem possimus
            asperiores fuga dolorem consequuntur sit veritatis, dolore
            reprehenderit ullam corrupti quibusdam aspernatur saepe?
          </p>
          <li className="m-2 text-2xl list-none">- Creative Illustrations</li>
          <li className="m-2 text-2xl list-none">-Dynamic Website</li>
          <li className="m-2 text-2xl list-none md:mb-20 mb-8">
            -Fast and Handy Mobile Apps
          </li>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
