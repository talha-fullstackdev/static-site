import Link from "next/link";
import AddEmployees from "./components/AddEmployees";
import Counter from "./components/Counter";
import ShowEmployees from "./components/ShowEmployees";

export default function Home() {
  return (
    <>
    <AddEmployees/>
    <ShowEmployees/>
    <Counter/>
   <Link href="/products">products page</Link>

    </>
  );
}
