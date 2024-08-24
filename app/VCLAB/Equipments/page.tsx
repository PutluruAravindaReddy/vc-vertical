import NavBar from "@/app/components/NavBar/NavBar"
import Footer from "@/app/components/Footer/Footer"
import LabEquipments from "@/app/components/LabEquipments/LabEquipments"

const page = () => {
  return (
    <div className="bg-black">
      <NavBar />

      <LabEquipments/>

      <Footer/> 
    </div>
  )
}

export default page
