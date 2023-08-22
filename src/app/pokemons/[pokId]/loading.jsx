import Image from "next/image";
import loader from "@/assets/others/loading.svg";

const Loading = ({ small }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-screen h-screen bg-white `}
    >
      <Image
        width={small ? 40 : 80}
        height={small ? 40 : 80}
        alt="pokemon"
        src={loader}
      />
      <h6
        className={`text-red-600 font-bold ${small ? "text-lg" : "text-2xl"}`}
      >
        LOADING
      </h6>
    </div>
  );
};

export default function loading() {
  return <Loading />;
}
