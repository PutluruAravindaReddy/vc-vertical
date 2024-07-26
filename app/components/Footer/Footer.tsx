"use client";
import Link from "next/link";
import React, { useState } from "react";
// import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send email
      const sendEmailResponse = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const sendEmailResult = await sendEmailResponse.json();
      if (sendEmailResponse.status !== 201) {
        throw new Error(sendEmailResult.message || "Error sending email");
      }

      // Save email
      const saveEmailResponse = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const saveEmailResult = await saveEmailResponse.json();
      if (saveEmailResponse.status !== 202) {
        throw new Error(saveEmailResult.message || "Error saving email");
      }

      // Show success message
      setMessage("Email sent successfully");
      setColor("text-green-500");
    } catch (error) {
      // Show error message
      setMessage(`Error: ${error}`);
      setColor("text-red-500");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ========== FOOTER ========== */}
      <hr className="text-gray-700"/>

      <footer className="mt-auto bg-gradient-to-tl from-[#EFF6FF] via-[#DBEAFE] to-[#EFF6FF] w-full py-4 px-4 sm:px-6 lg:px-8 mx-auto dark:bg-gradient-to-tr dark:from-black dark:via-black dark:to-black">
        {/* <div className="overflow-hidden w-full my-10">
          <div className="marquee flex flex-row">
            <img
              src={"/assests/footer/logo_light.png"}
              alt="IEEE SRM SB logo"
              className="w-54 xl:w-54 h-[3rem]"
            />
          </div>
        </div> */}

        <div className="mx-auto bg-[#D0DAF5] w-[85%] md:w-[75%] lg:w-[75%] mt-[1rem] py-[2rem] md:py-[3rem] lg:py-[4rem] rounded-lg">
          <div className="col-span-2">
            <div className="flex justify-center items-center w-[80%] mx-auto">
              <div className="flex flex-col lg:flex-row  justify-between items-center gap-2 w-full">
                <h4 className=" text-xl pb-3 lg:pb-0 md:pb-0 md:text-2xl lg:text-2xl text-black">
                  Wanna Connect with Us?
                </h4>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-row items-start gap-2 sm:flex-row sm:gap-3 bg-black rounded-lg p-2 dark:bg-gray-800">
                    <div className="w-full">
                      <label htmlFor="hero-input" className="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        id="hero-input"
                        name="hero-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="py-4 px-1 pr-[1rem] md:py-4 md:px-6 md:pr-[7rem] lg:py-4 lg:pl-4 lg:pr-[8rem] bg-black block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none text-white dark:bg-slate-900 dark:border-transparent dark:text-white dark:focus:ring-gray-600"
                        placeholder="Enter your email"
                      />
                      <p className={`text-center ${color}`}>{message}</p>
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-auto whitespace-nowrap px-[1.5rem] py-3 lg:py-3.5 lg:px-[1.9rem] inline-flex justify-center items-top gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#188CFF] text-black hover:bg-[#D0DAF5] disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {loading ? "Sending..." : "Send"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-10 mb-4">
          <div className="grid grid-cols-6 lg:grid-cols-5 gap-3 lg:gap-6">
            <div className="col-span-2 lg:col-span-1">
              <Link href="/faculty" className="  text-[1rem]  text-black text-center dark:text-gray-300">
                Faculty
              </Link>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <Link href="/publications" className="  text-[1rem]   text-black text-center dark:text-gray-300">
                Publications
              </Link>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <Link href="/gallery"  className="text-[1rem]  text-black text-center dark:text-gray-300">
                Gallery
              </Link>
            </div>
            <div className="col-span-3 lg:col-span-1 ml-[10px] lg:ml-[0]">
              <Link href="/events"  className="text-[1rem]   text-black text-center dark:text-gray-300">
                Events
              </Link>
            </div>
            <div className="col-span-3 lg:col-span-1 ml-[-10px] lg:ml[0]">
              <h4 className="text-[1rem]   text-black text-center dark:text-gray-300">
                FAQs
              </h4>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mb-7">
          <div className="grid grid-cols-6 lg:grid-cols-5 gap-2 lg:gap-6">
            <div className="col-span-2 lg:col-span-1">
              <Link href="/VCLAB/Members"  className="text-[0.8rem] lg:text-[1rem]  text-black text-center dark:text-gray-300">
                Lab Members
              </Link>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <Link href="/VCLAB/Events"  className="text-[0.8rem] lg:text-[1rem]   text-black text-center dark:text-gray-300">
                Lab Events
              </Link>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <Link href="/VCLAB/Projects"  className="text-[0.8rem] lg:text-[1rem]  text-black text-center dark:text-gray-300">
                Lab Projects
              </Link>
            </div>
            <div className="col-span-3 lg:col-span-1 ml-[10px] lg:ml-[0]">
              <Link href="/VCLAB/Equipments"  className="text-[0.8rem] lg:text-[1rem]  text-black text-center dark:text-gray-300">
                Lab Equipments
              </Link>
            </div>
            <div className="col-span-3 lg:col-span-1 ml-[-10px] lg:ml[0]">
              <h4 className="text-[0.8rem] lg:text-[1rem]  text-black text-center dark:text-gray-300">
                Contact us
              </h4>
            </div>
          </div>
        </div>

        <div className="mt-auto w-full max-w-[85rem] py-0 px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center">
            <div className="inline-flex justify-center items-center">
              <img
                src="/img/Logo/srm_logo.svg"
                alt="SRM logo"
                className="w-30 h-[2rem] lg:w-33 lg:h-[2.5rem] dark:hidden"
              />
                            <img
                src="/img/Logo/srm_logo_dark.svg"
                alt="SRM logo"
                className="w-30 h-[2rem] lg:w-33 lg:h-[2.5rem] hidden dark:block"
              />
              <img
                src="/img/Logo/vc_logo.jpg"
                alt="VCLAB Logo"
                className=" w-[2.6rem] h-[2.5rem] lg:w-[3rem] lg:h-[3rem] rounded-[50%] "
              />
            </div>
            <div className="mt-3">
              {/* <p className="text-gray-500">We're part of the <a class="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400" href="#">Htmlstream</a> family.</p> */}
              <p className="text-gray-500 dark:text-gray-300 text-center">
                © 2024 SRM Institute of Science and Technology. All Rights
                Reserved.
              </p>
            </div>
            <div className=" space-x-2">
              <a
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700"
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700"
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a
                className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700"
                href="#"
              >
                <svg
                  className="flex-shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

// // app/components/Footer/Footer.tsx
// "use client";
// import React, { useState } from 'react';

// const Footer = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/subscribe', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       if (response.status ===201) {
//         setMessage('Email sent successfully');
//         setEmail('');
//       } else {
//         const data = await response.json();
//         setMessage(`Failed to send email: ${data.error || response.statusText}`);
//       }
//     } catch (error) {
//       setMessage('Error: ' + error.message);
//     }
//   };

//   return (
//     <footer>
//       <h1>Subscribe to our newsletter</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <p>{message}</p>
//     </footer>
//   );
// };

export default Footer;
