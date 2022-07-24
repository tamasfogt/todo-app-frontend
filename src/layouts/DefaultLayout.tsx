import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

type DefaultLayoutProp = { children: ReactNode };

// TODO itt majd a typeot lehet meg kell adni hogy componentet adunk át valahogy..
function DefaultLayout({ children }: DefaultLayoutProp) {
  return (
    <div>
      <Header></Header>
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        {children}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default DefaultLayout;
