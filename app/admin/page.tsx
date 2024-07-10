// "use client";

// import { signIn, signOut, useSession } from "next-auth/react";

// const page = () => {
//   const { data: session} = useSession();

//   return (
//     <div>
//       {session ? (
//         <>
//           <p>Welcome, {session?.user?.name}!</p>
//           <button onClick={() => signOut()}>Logout</button>
//         </>
//       ) : (
//         <button onClick={() => signIn()}>Login</button>
//       )}
//     </div>
//   );
// };

// export default page;

"use client";

import { SetStateAction, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession();
  const [inputPassword, setInputPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [error, setError] = useState("");

  const handlePasswordChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setInputPassword(e.target.value);
  };

  const checkPassword = () => {
    if (inputPassword === process.env.NEXT_PUBLIC_PASSWORD) {
      setIsPasswordCorrect(true);
      setError("");
    } else {
      setError("Incorrect password, please try again.");
      setIsPasswordCorrect(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {session ? (
          <>
            <p className="text-lg font-semibold mb-4">Welcome, {session?.user?.name}!</p>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {!isPasswordCorrect ? (
              <div className="space-y-4">
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={inputPassword}
                  onChange={handlePasswordChange}
                  className="px-4 py-2 border rounded-lg w-full"
                />
                <button
                  onClick={checkPassword}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-full"
                >
                  Submit
                </button>
                {error && <p className="text-red-500">{error}</p>}
              </div>
            ) : (
              <button
                onClick={() => signIn()}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Login
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
