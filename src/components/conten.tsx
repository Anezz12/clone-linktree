import Link from "next/link";
import Image from "next/image";

export default function Conten() {
  const socials = [
    {
      link: "https://www.instagram.com/selenagomez/",
      image: "avatar.jpeg",
      title: "My Instagram",
    },
    {
      link: "https://www.instagram.com/selenagomez/",
      image: "avatar.jpeg",
      title: "My Instagram",
    },
    {
      link: "https://www.instagram.com/selenagomez/",
      image: "avatar.jpeg",
      title: "My Instagram",
    },
    {
      link: "https://www.instagram.com/selenagomez/",
      image: "avatar.jpeg",
      title: "My Instagram",
    },
    {
      link: "https://www.instagram.com/selenagomez/",
      image: "avatar.jpeg",
      title: "My Instagram",
    },
    {
      link: "https://www.instagram.com/selenagomez/",
      image: "avatar.jpeg",
      title: "My Instagram",
    },
  ];

  return (
    <div className="mt-10">
      {socials.map((social, index) => (
        <div
          key={index}
          className="py-1 mt-5 border rounded-lg border-transparent  shadow-lg shadow-zinc-500/10 bg-zinc-600 max-w-[600px] mx-auto outline-none transition-all focus:scale-105 hover:scale-105 active:scale-105"
        >
          <Link href={social.link} className="flex items-center w-full">
            <div className="mr-24 md:mr-48">
              <Image
                width={50}
                height={50}
                src={`/${social.image}`}
                alt={social.title}
                className="ml-1"
              />
            </div>
            <p className="font-bold">{social.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
