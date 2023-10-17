import React from "react";
import Image from "next/image";
import Button from "@/components/button/Button";
const Contact = () => {
  return (
    <div className="mt-[80px]   ">
      <h1 className="md:relative md:top-[75px] text-5xl font-semibold md:font-bold text-center">
        Lets Keep in Touch
      </h1>
      <div className="h-[100vh] md:flex md:justify-center md:gap-[40px] md:items-center">
        <div>
          <Image
            src="/contact.png"
            alt="contact"
            width={500}
            height={500}
            className="object-contain animate-[pulse_3s_ease-in-out_infinite]  relative z-[-2] "
          />
        </div>
        <div className="flex flex-col  justify-center items-center md:items-start  gap-3">
          <input
            type="text"
            className="p-4 w-80 border-2 rounded-md  border-black outline-none "
            placeholder="name"
          />
          <input
            type="text"
            className="p-4 w-80 border-2 rounded-md  border-black outline-none "
            placeholder="email"
          />
          <textarea
            className="p-4 w-80 border-2 rounded-md  border-black outline-none "
            placeholder="message"
            cols={10}
            rows={5}
          />

          <Button url="" text="Send" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
