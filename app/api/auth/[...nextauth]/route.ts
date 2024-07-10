// import NextAuth, { SessionStrategy, AuthOptions } from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';

// const authOptions: AuthOptions = {
//   session: {
//     strategy: 'jwt' as SessionStrategy,
//   },
//   providers: [
//     CredentialsProvider({
//       type: 'credentials',
//       credentials: {
//         email: { label: 'Email', type: 'email', placeholder: 'Enter your email' },
//         password: { label: 'Password', type: 'password', placeholder: 'Enter your password' },
//       },
//       async authorize(credentials, req) {
//         const { email, password } = credentials as {
//           email: string;
//           password: string;
//         };

//         if (!email || !password) {
//           throw new Error('Email and password are required');
//         }

//         if (email !== process.env.EMAIL || password !== process.env.PASSWORD) {
//           throw new Error('Invalid email or password');
//         }

//         const user = {
//           id: process.env.id || '', 
//           name: process.env.ADMIN_NAME,
//           email: process.env.EMAIL,
//         };

//         return user;
//       },
//     }),
//   ],
//   callbacks: {
//     async redirect({ url, baseUrl }) {
//       return baseUrl; 
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
  
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };



import NextAuth, { SessionStrategy, AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: AuthOptions = {
  session: {
    strategy: 'jwt' as SessionStrategy,
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Enter your email' },
        password: { label: 'Password', type: 'password', placeholder: 'Enter your password' },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as { email: string; password: string; };

        if (!email || !password) {
          console.error('Email or password missing');
          throw new Error('Email and password are required');
        }

        if (email !== process.env.EMAIL || password !== process.env.PASSWORD) {
          console.error('Invalid email or password');
          throw new Error('Invalid email or password');
        }

        const user = {
          id: process.env.id || '', 
          name: process.env.ADMIN_NAME,
          email: process.env.EMAIL,
        };

        console.log('User authorized:', user);

        return user;
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log('Redirecting to:', baseUrl);
      return baseUrl; 
    },
    async session({ session, user }) {
      console.log('Session:', session);
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV !== 'production',
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
