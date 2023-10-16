import Link from "next/link";

interface ButtonProps {
  text: string;
  url: string;
}
const Button = ({ url, text }: ButtonProps) => {
  return (
    <Link href={url}>
      <button className="bg-black text-white ml-4 px-2 md:px-4 py-2 rounded-md  text-xl my-2 md:my-0 ">
        {text}
      </button>
    </Link>
  );
};

export default Button;
