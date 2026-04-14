import AllFriends from "@/components/homepage/AllFriends";
import Banner from "@/components/homepage/Banner";
import Loader from "@/components/loader/Loader";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Banner />
      <Suspense
        fallback={<Loader></Loader>}
      >
        <AllFriends />
      </Suspense>
    </>
  );
}
