import Menu from "@/components/custom/menu";
import { Navbar } from "@/components/custom/nav-bar";
import { Hexagon } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-screen flex">
          <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
            <Link href={'/'} className="flex items-center justify-center lg:justify-start gap-2">
              <Hexagon />
              <span className="hidden lg:block">Social Network</span>
            </Link>
            <Menu/>
          </div>
          <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] p-4 bg-[#F7F8FA] overflow-scroll flex flex-col">
            <Navbar/>
            {children}
          </div>
      </div>
    );
  }