import React from "react";
import Image from "next/image";
const Contact = () => {
  return (
    <div className="mt-[80px]">
      <h1 className="text-5xl font-semibold text-center">Lets Keep in Touch</h1>
      <div>
        <Image
          src="/contact.png"
          alt="contact"
          width={500}
          height={500}
          className="animate-[pulse_3s_ease-in-out_infinite] grayscale "
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <input
          type="text"
          className="p-4 w-80 border-2 rounded-lg  border-black outline-none "
          placeholder="name"
        />
        <input
          type="text"
          className="p-4 w-80 border-2 rounded-lg  border-black outline-none "
          placeholder="email"
        />
        <input
          type=""
          className="p-4 w-80 border-2 rounded-lg  border-black outline-none "
          placeholder="message"
        />
      </div>
    </div>
  );
};

export default Contact;
