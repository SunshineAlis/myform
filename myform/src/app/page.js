import Image from "next/image";
import { Pine } from "../icons/Pine";

export default function Home() {
  return (
    <div className=" relative flex flex-col items-start justify-items-center w-[100%] w-[400px] h-[700px]  bg-slate-200 m-auto h-[250px]top-[100px]">
      <Pine className="mt-[50px]" />
      <h3 className="font-semibold text-[30px]">Join Us! 😎</h3>
      <p>Please provide all current information accurately</p>
      <p>
        First name<span>*</span>
      </p>

      <input type="text" placeholder="Please write name" />

      <div></div>
    </div>
  );
}
