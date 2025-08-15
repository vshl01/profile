import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="pt-10">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
