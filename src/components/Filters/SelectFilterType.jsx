import TextFormatIcon from "@/assets/icons/text_format.svg";
import Image from "next/image";

export default function SelectFilterType() {
  return (
    <div className="cursor-pointer rounded-full bg-white w-[36px] h-[36px] min-w-[36px] min-h-[36px] flex items-center justify-center">
      <Image width={28} height={28} alt="logo" src={TextFormatIcon} />
    </div>
  );
}
