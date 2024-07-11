import Footer from '@/components/Shared/Footer';
import Header from '@/components/Shared/Header';
import React from 'react';

const mainLayout = ({children}) => {
    return (
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default mainLayout;