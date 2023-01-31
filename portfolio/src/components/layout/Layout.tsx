import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }: any) {
  return (
    <>
    <div className="flex flex-col min-h-screen">

      <Nav />
      <div className="container mx-auto relative h-auto">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
    </>
  );
}
