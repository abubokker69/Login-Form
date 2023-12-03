import Image from "next/image";

export default function Home() {
  return (
    <form className="flex flex-col justify-center items-center mx-auto mt-20 p-6 rounded-lg py-16 gap-4 shadow-lg w-[20%]">
      <div className="name w-full flex flex-col gap-1">
        <label htmlFor="">Email or Phone :</label>
        <input
          className=" border outline-none p-2 px-4 rounded-lg"
          type="text"
          name=""
          id=""
          placeholder="Enter your email or phone"
        />
      </div>
      <div className="w-full password flex flex-col gap-1">
        <label htmlFor="">Password :</label>
        <input
          className=" border outline-none p-2 px-4 rounded-lg"
          type="password"
          name=""
          id=""
          placeholder="Enter your password"
        />
      </div>
      <input
        type="button"
        value="Login"
        className="text-left bg-[#509FFF] text-white p-2 px-4 rounded-lg cursor-pointer "
      />
    </form>
  );
}
