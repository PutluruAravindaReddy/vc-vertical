"use client"
import { useState } from 'react';
import { CldUploadButton } from 'next-cloudinary';
import Link from 'next/link';

const AddEquipmentPage = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [manufacturer, setManufacturer] = useState<string>('');
  const [installationDate, setInstallationDate] = useState<string>('');
  const [researchTests, setResearchTests] = useState<string[]>([]);
  const [description, setDescription] = useState<string>('');

  const handleUploadSuccess = (result: any) => {
    const secureUrl: string = result.info.secure_url;
    setImageUrl(secureUrl);
  };

  const handleAddEquipment = async () => {
    if (!name || !manufacturer || !installationDate || researchTests.length === 0 || !description || !imageUrl) {
      alert('Please fill in all fields and upload an image.');
      return;
    }

    try {
      const response = await fetch('/api/VCLAB/EquipmentsRoute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          manufacturer,
          installationDate,
          researchTests,
          description,
          image: imageUrl,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Equipment added successfully!');
    } catch (error) {
      console.error('Error adding equipment:', error);
    }
  };

  const handleResearchTestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (value && !researchTests.includes(value)) {
      setResearchTests([...researchTests, value]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Add Equipment</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter name"
          value={name} required
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter manufacturer"
          value={manufacturer} required
          onChange={(e) => setManufacturer(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Enter installation date"
          value={installationDate} required
          onChange={(e) => setInstallationDate(e.target.value)}
          className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
        />
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter research test"
            onChange={handleResearchTestsChange} required
            className="border border-gray-300 px-4 py-2 rounded-md mb-2"
          />
          {researchTests.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {researchTests.map((test, index) => (
                <span key={index} className="bg-gray-200 px-2 py-1 rounded-full text-sm">
                  {test} <button onClick={() => setResearchTests(researchTests.filter((_, i) => i !== index))}>&times;</button>
                </span>
              ))}
            </div>
          )}
        </div>
        <textarea
          placeholder="Enter description"
          value={description} required
          onChange={(e) => setDescription(e.target.value)}
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
            style={{ width: '200px', height: '200px' }}
          />
        )}
      </div>
      <Link href="/VCLAB/Equipments" onClick={handleAddEquipment} className="bg-green-600 text-black px-4 py-2 rounded-md cursor-pointer mr-4">
        Add Equipment
      </Link>
      <Link href="/VCLAB/Equipments" className="bg-green-600 text-black px-4 py-2 rounded-md cursor-pointer">
        Back to Equipments
      </Link>
    </div>
  );
};

export default AddEquipmentPage;
