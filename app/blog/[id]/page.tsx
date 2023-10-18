import Image from "next/image";
import React from "react";

interface BlogPostProps {
  params: {
    id: string;
  };
}
async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
}
const BlogPost = async ({ params }: BlogPostProps) => {
  const data = await getData(params.id);
  return (
    <>
      <div className="mt-[90px] lg:h-screen ">
        <div className="m-5 md:flex md:justify-evenly   ">
          <div className="flex flex-col gap-[15px]">
            <h2 className="text-3xl font-bold ">{data.title}</h2>
            <p className="text-xl text-justify md:w-[650px]">{data.body}</p>
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            dolorum dolorem voluptatem aspernatur! Maxime nihil beatae
            recusandae quisquam tenetur a, nobis mollitia molestiae cumque totam
            eligendi ut soluta esse provident quos perferendis, quo, assumenda
            itaque exercitationem at culpa doloribus voluptate! Voluptas placeat
            perspiciatis non veniam inventore dignissimos at laudantium
            laboriosam vitae unde aut adipisci, repudiandae incidunt. Amet
            facilis error voluptatem sed rerum autem eos, minima aperiam
            eligendi architecto fugiat at tempore ipsa cum, et molestiae
            reprehenderit quisquam a! Provident esse quibusdam vero odio dolor,
            magnam ipsum totam nobis quis obcaecati veniam architecto eum saepe,
            recusandae suscipit, eaque officiis enim. Accusantium nostrum quae,
            architecto quo sint fugit vitae. Dolorem neque fugiat animi est,
            nisi tenetur ducimus ratione quasi ex cupiditate vero eveniet id
            volu cum beatae iusto quis est cumque illum quas! Eaque aliquam
            rerum consequatur quam perferendis tempora veritatis fuga quaerat
            tempore, soluta voluptatem repudiandae odio est illum exercitationem
            repellat animi unde corrupti ipsam rem expedita sed iure? Autem ipsa
            nesciunt repudiandae. Consectetur distinctio minus perspiciatis.
            Error delectus id inventore libero, placeat earum quisquam animi
            eveniet dolores doloribus sed laudantium totam natus iste omnis
            excepturi itaque esse officia voluptatem! Modi cupiditate quam
            laborum sint atque ducimus excepturi aliquam adipisci, recusandae
            vitae expedita tempora dolores molestiae voluptatum earum
            perspiciatis amet quis temporibus? Minima porro debitis numquam
            aliquid distinctio accusantium esse, cum ab dolores quasi rem quam.
            Omnis labore quis qui nihil sunt debitis fugiat autem, optio, harum,
            excepturi nisi enim voluptas distinctio. Dolores, blanditiis quos
            est tempora earum veniam nobis cupiditate, incidunt minus facere,
            numquam odio error sed atque aut? Sunt voluptas odit eum earum
            magnam dignissimos obcaecati. Iusto totam ab vero expedita
            repellendus ipsam culpa suscipit, dicta non pariatur rerum nostrum
            reiciendis voluptates vel eligendi, quisquam, quam laborum velit
            delectus harum accusantium natus voluptas nulla sapiente. Laborum
            distinctio dolores autem unde neque ex recusandae ducimus!
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
