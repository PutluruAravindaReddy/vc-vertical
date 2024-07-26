"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer/Footer";
import NavBar from "@/app/components/NavBar/NavBar";

interface Course {
  _id: string;
  courseName: string;
  faculty: string[];
  completionDate: string;
  platform: string;
  duration: string;
  badgeEarned: string;
}

const EditBookPage = ({ params }: any) => {
  const id = params.id;
  const [course, setCourse] = useState<Course>({
    _id: "",
    courseName: "",
    faculty: [],
    completionDate: "",
    platform: "",
    duration: "",
    badgeEarned: "",
  });

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`/api/PublicationsRoute/Courses/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch course");
        }

        const responseData = await response.json();
        console.log("Fetched course:", responseData.data);
        setCourse(responseData.data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    if (id) {
      fetchCourse();
    }
  }, [id]);

  const handleEditCourse = async () => {
    try {
      const response = await fetch(`/api/PublicationsRoute/Courses/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseName: course.courseName,
          faculty: course.faculty,
          completionDate: course.completionDate,
          platform: course.platform,
          duration: course.duration,
          badgeEarned: course.badgeEarned,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to edit course");
      }

      // Optionally handle success or redirect
      console.log("Course edited successfully!");
    } catch (error) {
      console.error("Error editing course:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Edit Course</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter course name"
            value={course.courseName}
            onChange={(e) =>
              setCourse({ ...course, courseName: e.target.value })
            }
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter faculty (comma separated)"
            value={course.faculty.join(", ")}
            onChange={(e) =>
              setCourse({
                ...course,
                faculty: e.target.value.split(",").map((fac) => fac.trim()),
              })
            }
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter completion date"
            value={course.completionDate}
            onChange={(e) =>
              setCourse({ ...course, completionDate: e.target.value })
            }
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter platform"
            value={course.platform}
            onChange={(e) => setCourse({ ...course, platform: e.target.value })}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter duration"
            value={course.duration}
            onChange={(e) => setCourse({ ...course, duration: e.target.value })}
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
          <input
            type="text"
            placeholder="Enter badge earned"
            value={course.badgeEarned}
            onChange={(e) =>
              setCourse({ ...course, badgeEarned: e.target.value })
            }
            className="border border-gray-300 px-4 py-2 w-full rounded-md mb-4"
          />
        </div>
        <Link
          href="/publications"
          onClick={handleEditCourse}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Save Changes
        </Link>
        <Link
          href="/publications"
          className="bg-green-600 text-black px-4 py-2 rounded-md cursor-pointer ml-4"
        >
          Back to Courses
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default EditBookPage;
