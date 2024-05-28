import Image from "next/image";
export default function Avatar() {
  return (
    <div className="flex flex-col items-center">
      <Image
        width={100}
        height={300}
        src="/avatar.jpeg"
        alt="Gambar"
        className="rounded-full absolute object-cover "
      />
      <span className="mt-32 font-bold">{"@ Harsena Argrety"}</span>
    </div>
  );
}
