// // middleware.js
// import { getToken } from 'next-auth/jwt';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export async function middleware(request: NextRequest) {
//   const token = await getToken({ req: request, secret: process.env.JWT_SECRET });
//   console.log('Middleware token:', token);
//   console.log('Request details:', {
//     url: request.url,
//     method: request.method,
//     headers: request.headers,
//   });

//   if (request.nextUrl.pathname.startsWith('/Forms')) {
//     if (!token || token.name !== process.env.ADMIN_NAME) {
//       console.log('Middleware executed, You are accessing the path without logging in please login');
//       return NextResponse.redirect(new URL('/admin', request.url));
//     }
//     console.log('Middleware executed, access granted for /Forms');
//     return NextResponse.next();
//   }


//   if (request.method === 'GET') {
//     return NextResponse.next();
//   }


//   if (!token || token.name !== process.env.ADMIN_NAME) {
//     console.log('Middleware executed, redirecting to /admin');
//     return NextResponse.redirect(new URL('/admin', request.url));
//   }

//   console.log('Middleware executed, access granted');
//   return NextResponse.next();
// }


// export const config = {
//   matcher: [
//     '/Forms/:path*',
//     '/api/EventsRoute/:path*',
//     '/api/FacultyRoute/:path*',
//     '/api/LabFocus/:path*',
//     '/api/PublicationsRoute/:path*',
//     '/api/send/:path*',
//     '/api/subscribe/:path*',
//     '/api/VCLAB/:path*'
//   ],
// };


// middleware.js
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  try {
    const token = await getToken({ req: request, secret: process.env.JWT_SECRET });

    // console.log('Middleware token:', token);

    if (request.nextUrl.pathname.startsWith('/Forms')) {
      if (!token || token.name !== process.env.ADMIN_NAME) {
        console.log('Middleware executed, You are accessing the path without logging in please login');
        return NextResponse.redirect(new URL('/admin', request.url));
      }
      console.log('Middleware executed, access granted for /Forms');
      return NextResponse.next();
    }

    if (request.method === 'GET') {
      return NextResponse.next();
    }

    if (!token || token.name !== process.env.ADMIN_NAME) {
      console.log('Middleware executed, redirecting to /admin');
      return NextResponse.redirect(new URL('/admin', request.url));
    }

    console.log('Middleware executed, access granted');
    return NextResponse.next();

  } catch (error) {
    console.error('Error in middleware:', error);
    return NextResponse.json({ msg: "Error in middleware", error, status: 404 });
  }
}

export const config = {
  matcher: [
    '/Forms/:path*',
    '/api/EventsRoute/:path*',
    '/api/FacultyRoute/:path*',
    '/api/LabFocus/:path*',
    '/api/UpcomingEvents/:path*',
    '/api/PublicationsRoute/:path*',
    '/api/send/:path*',
    '/api/subscribe/:path*',
    '/api/VCLAB/:path*'
  ],
};
