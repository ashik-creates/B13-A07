import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center  text-center gap-3">
        <p className="font-extrabold text-8xl text-[#244D3F] ">404</p>
      <h1 className="text-4xl text-gray-500 font-bold">This page is not found <br /> in our server!</h1>
      <Link href={"/"}>
        <button className="btn text-white bg-[#244D3F]">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;