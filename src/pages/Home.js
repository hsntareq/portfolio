import { motion } from 'framer-motion';
import React from 'react'

const Home = () => {
    return (
        <motion.main className='home'>
            <motion.h1
                initial={{ x: -300, scale: 0.5 }}
                animate={{ x: 0, scale: 1 }}
            // transition={{ duration: 1 }}
            >Hasan <font>Tareq</font></motion.h1>
            <motion.div
                initial={{ x: 100, scale: 0.5 }}
                animate={{ x: 0, scale: 1 }}
                // transition={{ duration: 1 }}
                className='content'
            >
                Full stack developer
            </motion.div>
        </motion.main>
    )
}

export default Home;