"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Equipment {
  _id: string;
  name: string;
  manufacturer: string;
  installationDate: string;
  researchTests: string[];
  description: string;
  image: string;
}

const ImageUploadPage = () => {
  const [equipments, setEquipments] = useState<Equipment[]>([]);

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/VCLAB/EquipmentsRoute', {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch VCLAB Equipments');
        }

        const responseData = await response.json();
        console.log('Fetched equipments:', responseData.data);
        setEquipments(responseData.data);
      } catch (error) {
        console.error('Error fetching equipments:', error);
      }
    };

    fetchEquipments();
  }, []);

  const handleDeleteEquipment = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/VCLAB/EquipmentsRoute/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete Equipment');
      }

      const updatedEquipments = equipments.filter(equipment => equipment._id !== id);
      setEquipments(updatedEquipments);
    } catch (error) {
      console.error('Error deleting Equipment:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">VCLAB Equipments</h1>
      <Link href="/Forms/VCLAB/EquipmentsForm/new" className="mx-2 my-2 bg-blue-600 text-black px-4 py-2 rounded-md cursor-pointer">Add Equipment</Link>
      {equipments.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Equipments</h2>
          <div className="grid grid-cols-3 gap-4">
            {equipments.map((equipment) => (
              <div key={equipment._id} className="border border-gray-300 p-4 rounded-md">
                <p className="text-lg font-medium mb-2">{equipment.name}</p>
                <p className="text-lg font-medium mb-2">{equipment.manufacturer}</p>
                <p className="text-lg font-medium mb-2">{equipment.description}</p>
                <img src={equipment.image} alt="Equipment Image" className="rounded-md" style={{ width: '100%', height: '200px' }} />
                <p className="text-sm text-gray-600 mb-2">Installation Date: {equipment.installationDate}</p>
                <p className="text-sm text-gray-600 mb-2">Research Tests: {equipment.researchTests.join(', ')}</p>

                <Link href={`/Forms/VCLAB/EquipmentsForm/${equipment._id}`} className="mx-2 my-2 bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer">Edit</Link>

                <button onClick={() => handleDeleteEquipment(equipment._id)} className="mx-2 my-2 bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">Delete</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploadPage;
