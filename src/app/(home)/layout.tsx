import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface Props {
  children: React.ReactNode;
}

//layout in each route group is rendered first instead of Page.tsx and it will be rendered within each sub route as well. Hence we need children and nextjs automatically injects children for us
const layout = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 bg-[#F4F4F0]">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default layout;
