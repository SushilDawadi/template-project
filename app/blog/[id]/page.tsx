import Image from "next/image";
import React from "react";

const BlogPost = () => {
  return (
    <>
      <div className="mt-[90px] lg:h-screen ">
        <div className="m-5 md:flex md:justify-evenly   ">
          <div className="flex flex-col gap-[15px]">
            <h2 className="text-3xl font-bold ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur magni nam earum.
            </h2>
            <p className="text-xl text-justify md:w-[650px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
              saepe quod nisi neque sapiente ad quia nam accusantium, vitae
              suscipit consequatur quam magni idsint dolorem reiciendis mollitia
              repellendus esse tenetur, illum quae rerum maxime. Repellat, atque
              distinctio quas ea officiis animi reiciendis? Sapiente esse est
              amet nulla, natus quis.
            </p>
            <div className="flex gap-2 items-center m-3">
              <Image
                src="/profile.png"
                className="rounded-full"
                width={60}
                height={100}
                alt="icon"
              />
              <p>Ram Karki</p>
            </div>
          </div>
          <div>
            <Image
              src="/mountain.jpg"
              width={1000}
              height={600}
              alt="mountain"
            />
          </div>
        </div>
        <div className="m-5">
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            ab enim rerum ad beatae? Voluptatem nulla, inventore nobis quia
            fugiat ab error aut cum qui aliquid incidunt et corrupti temporibus
            ipsum, tenetur quasi fuga ullam, porro mollitia. Dolor alias
            repudiandae quo omnis velit eos cum. Maxime facere assumenda hic
            alias quae in aspernatur aperiam repudiandae laudantium distinctio,
            sapiente molestiae minus aut soluta animi esse quasi quidem impedit
            enim officiis odit.lorem60 Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Repellat minus earum autem rerum porro, voluptatum
            ex totam itaque id vitae quibusdam dignissimos quasi quod similique
            soluta delectus consequatur provident quae. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Nostrum ut a, minus voluptatem
            eum voluptatum inventore itaque voluptates ullam magnam, iste at
            aperiam! Quisquam, labore. Eligendi sunt, assumenda iure molestias
            officia, hic mollitia impedit iusto excepturi perspiciatis ducimus
            id doloribus quo totam voluptates maxime nemo libero, doloremque
            vitae modi repellendus.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
