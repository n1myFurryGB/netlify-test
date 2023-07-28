import { authConfigg } from '@/config/auth';
import { getServerSession } from 'next-auth/next';
import React from 'react';


const Navbar = async () => {

    const session = await getServerSession(authConfigg);

    return (
        <div>
            Profile of {session?.user?.name}
        </div>
    )
}

export default Navbar