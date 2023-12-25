import Image from "next/image";
import Link from "next/link";
import CartBtn from "@/app/ui/CartBtn";

export default function Navigation() {
  return (
    <div className="py-4 border-b border-b-gray-300">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="Secretlab" width={88} height={33} />
        </Link>
        <CartBtn />
      </div>
    </div>
  );
}
