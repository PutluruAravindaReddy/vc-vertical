/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname:"res.cloudinary.com",
            },
        ],
    },
    env: {
        NEXT_PUBLIC_PASSWORD: process.env.PASSWORD,
      },
};


export default nextConfig;
