import DailyMeals from '@/components/Home/DailyMeals';
import FAQ from '@/components/Home/FAQ';
import Feedbacks from '@/components/Home/Feedbacks';
import Hero from '@/components/Home/Hero';
import Menu from '@/components/Home/Menu';
import WhySGF from '@/components/Home/WhySGF';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            
            <Hero></Hero>
            <WhySGF></WhySGF>
            <Menu></Menu>
            <DailyMeals></DailyMeals>
            <FAQ></FAQ>
            <Feedbacks></Feedbacks>
        </div>
    );
};

export default HomePage;