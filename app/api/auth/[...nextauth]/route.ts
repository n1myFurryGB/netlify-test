import NextAuth from 'next-auth';

import { authConfig } from '@/lib/session';

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };