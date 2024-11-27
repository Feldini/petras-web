import Image from "next/image";

export default function Avatar() {
  return (
    <>
      <a href="https://x.com/philippetras">
        <div className="avatar md:hover:scale-[102%] transition-all duration-300">
          <div className="w-32 mask mask-squircle">
            <Image
              priority={true}
              alt="user avatar"
              src="https://pbs.twimg.com/profile_images/1851733332637224960/zARdDxTH_400x400.jpg"
              width={100}
              height={100}
            />
          </div>
        </div>
      </a>
    </>
  );
}
