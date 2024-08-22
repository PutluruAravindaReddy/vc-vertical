import NavBar from "@/app/components/NavBar/NavBar";
import Footer from "@/app/components/Footer/Footer";
import LabEvents from "@/app/components/LabEvents/LabEvents";

const page = () => {
  return (
    <>
      <NavBar />
      <div className="bg-black">
        <LabEvents />
      </div>

      <Footer />
    </>
  );
};

export default page;
