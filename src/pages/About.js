import React from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import Lorem from '../components/Lorem';

const About = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: .001
    })

    return (
        <main className='about'>
            <motion.div className='about-animate' style={{ scaleX: scaleX }}></motion.div>
            <h1>About</h1>
            <div className='content'>
                <Lorem para={20} />
            </div>
        </main>
    )
}

export default About;