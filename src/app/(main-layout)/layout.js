import Footer from '@/components/Shared/Footer';
import Header from '@/components/Shared/Header';
import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react';

const mainLayout = async ({children}) => {
    const session = await getServerSession(authOptions);
    return (
        <div>
            <Header session={session}></Header>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default mainLayout;