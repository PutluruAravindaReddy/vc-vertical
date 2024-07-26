"use client";
import { useState } from "react";
import Link from "next/link";
import NavBar from "@/app/components/NavBar/NavBar";
import Footer from "@/app/components/Footer/Footer";

interface Publication {
  title: string;
  authors: string[];
  journal?: string;
  year?: number;
  pages?: string;
  impactFactor?: number;
  SNIP?: number;
  DOI?: string;
  link?: string;
  date?: string;
}

const AddPublicationPage = () => {
  const [title, setTitle] = useState<string>("");
  const [authors, setAuthors] = useState<string>("");
  const [journal, setJournal] = useState<string>("");
  const [year, setYear] = useState<number | undefined>(undefined);
  const [pages, setPages] = useState<string>("");
  const [impactFactor, setImpactFactor] = useState<number | undefined>(
    undefined
  );
  const [SNIP, setSNIP] = useState<number | undefined>(undefined);
  const [DOI, setDOI] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const handleAddPublication = async () => {
    const authorsArray = authors.split(",").map((author) => author.trim());

    if (!title || authorsArray.length === 0) {
      alert("Please fill in all required fields.");
      return;
    }

    const publication: Publication = {
      title,
      authors: authorsArray,
      journal,
      year,
      pages,
      impactFactor,
      SNIP,
      DOI,
      link,
      date,
    };

    try {
      const response = await fetch("/api/PublicationsRoute/Publications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(publication),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Publication added successfully!");
      // Reset form fields
      setTitle("");
      setAuthors("");
      setJournal("");
      setYear(undefined);
      setPages("");
      setImpactFactor(undefined);
      setSNIP(undefined);
      setDOI("");
      setLink("");
      setDate("");
    } catch (error) {
      console.error("Error adding publication:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Add Publication</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter authors (comma-separated)"
            value={authors}
            onChange={(e) => setAuthors(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter journal"
            value={journal}
            onChange={(e) => setJournal(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="number"
            placeholder="Enter year"
            value={year ?? ""}
            onChange={(e) => setYear(Number(e.target.value))}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter pages"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="number"
            placeholder="Enter impact factor"
            value={impactFactor ?? ""}
            onChange={(e) => setImpactFactor(Number(e.target.value))}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="number"
            placeholder="Enter SNIP"
            value={SNIP ?? ""}
            onChange={(e) => setSNIP(Number(e.target.value))}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter DOI"
            value={DOI}
            onChange={(e) => setDOI(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
        </div>
        <Link
          href="/publications"
          onClick={handleAddPublication}
          className="bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Add Publication
        </Link>
        <Link
          href="/publications"
          className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer ml-4"
        >
          Back to Publications
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default AddPublicationPage;
