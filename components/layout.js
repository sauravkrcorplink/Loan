import Footer from "./footer/Footer";
import NavBar from "./navBar/NavBar";
import Preloader from "./preloader/Preloader";
import ScrollToTop from "./scrollToTop/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="mt-135">
        {children}
      </div>
      <Footer />

      <ScrollToTop />
      <Preloader />
    </>
  );
};

export default Layout;
