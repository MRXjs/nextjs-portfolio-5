import Image from "next/image";
import topLeftImage from "../public/top-left-img.png";

const TopLeftImg = () => {
  return (
    <div className="absolute top-0 left-0 z-10 mix-blend-color-dodge w-[200px] xl:w-[400px] opacity-50">
      <Image src={topLeftImage} alt="top left image" width={400} height={400} />
    </div>
  );
};

export default TopLeftImg;
