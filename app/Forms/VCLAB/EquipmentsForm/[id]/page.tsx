"use client";
import { useState, useEffect } from "react";
import { CldUploadButton } from "next-cloudinary";
import Link from "next/link";
import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar/NavBar";

interface Equipment {
  _id: string;
  name: string;
  manufacturer: string;
  installationDate: string;
  researchTests: string[];
  description: string;
  image: string;
}

const EditEquipmentPage = ({ params }: any) => {
  const equipmentId = params.id;
  const [equipment, setEquipment] = useState<Equipment>({
    _id: "",
    name: "",
    manufacturer: "",
    installationDate: "",
    researchTests: [],
    description: "",
    image: "",
  });
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const response = await fetch(
          `/api/VCLAB/EquipmentsRoute/${equipmentId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch equipment");
        }

        const responseData = await response.json();
        console.log("Fetched equipment:", responseData.data);
        setEquipment(responseData.data);
        setImageUrl(responseData.data.image);
      } catch (error) {
        console.error("Error fetching equipment:", error);
      }
    };

    if (equipmentId) {
      fetchEquipment();
    }
  }, [equipmentId]);

  const handleUploadSuccess = (result: any) => {
    const secureUrl: string = result.info.secure_url;
    setImageUrl(secureUrl);
  };

  const handleEditEquipment = async () => {
    try {
      const response = await fetch(
        `/api/VCLAB/EquipmentsRoute/${equipmentId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: equipment.name,
            manufacturer: equipment.manufacturer,
            installationDate: equipment.installationDate,
            researchTests: equipment.researchTests,
            description: equipment.description,
            image: imageUrl,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to edit equipment");
      }

      console.log("Equipment edited successfully!");
    } catch (error) {
      console.error("Error editing equipment:", error);
    }
  };

  const handleResearchTestsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value.trim();
    if (value && !equipment.researchTests.includes(value)) {
      setEquipment({
        ...equipment,
        researchTests: [...equipment.researchTests, value],
      });
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Edit Equipment</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter name"
            value={equipment.name}
            required
            onChange={(e) =>
              setEquipment({ ...equipment, name: e.target.value })
            }
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter manufacturer"
            value={equipment.manufacturer}
            required
            onChange={(e) =>
              setEquipment({ ...equipment, manufacturer: e.target.value })
            }
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter installation date"
            value={equipment.installationDate}
            required
            onChange={(e) =>
              setEquipment({ ...equipment, installationDate: e.target.value })
            }
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter research test"
              onChange={handleResearchTestsChange}
              required
              className="border border-gray-300 px-4 py-2 rounded-md mb-2"
            />
            {equipment.researchTests.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {equipment.researchTests.map((test, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 px-2 py-1 rounded-full text-sm"
                  >
                    {test}{" "}
                    <button
                      onClick={() =>
                        setEquipment({
                          ...equipment,
                          researchTests: equipment.researchTests.filter(
                            (_, i) => i !== index
                          ),
                        })
                      }
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
          <textarea
            placeholder="Enter description"
            value={equipment.description}
            required
            onChange={(e) =>
              setEquipment({ ...equipment, description: e.target.value })
            }
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <CldUploadButton
            uploadPreset="vcverticalvclabequipments" // Replace with your Cloudinary upload preset
            onSuccess={handleUploadSuccess}
            className="mt-2 bg-black hover:bg-black text-white px-4 py-2 rounded-md cursor-pointer"
          >
            Upload image
          </CldUploadButton>
          {imageUrl && (
            <img
              className="mt-4"
              src={imageUrl}
              alt="Uploaded Image"
              style={{ width: "200px", height: "200px" }}
            />
          )}
        </div>
        <Link
          href="/VCLAB/Equipments"
          onClick={handleEditEquipment}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Save Changes
        </Link>
        <Link
          href="/VCLAB/Equipments"
          className="bg-green-600 text-black px-4 py-2 rounded-md cursor-pointer"
        >
          Back to Equipments
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default EditEquipmentPage;
