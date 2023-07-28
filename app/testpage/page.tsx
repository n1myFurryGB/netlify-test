import React from 'react';
import { authConfigg } from '@/config/auth';
import { getServerSession } from 'next-auth/next';

const TestNav = async () => {
    const session = await getServerSession(authConfigg);

    return (
        <div>
            Profile of {session?.user?.name}
        </div>
    )
}

export default TestNav