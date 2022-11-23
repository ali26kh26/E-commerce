import Footer from "./footer/footer";
import BreadCrumbs from "./bread-crumbs/bread-crumb";
import NavBar from "./navbar/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <BreadCrumbs />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
