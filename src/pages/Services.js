import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import imgService1 from '../images/service1.jpg';
import imgService2 from '../images/service2.jpg';
import imgService3 from '../images/service3.jpg';
import { motion } from 'framer-motion';


const Services = () => {
    const ProjectList = [
        {
            id: 2,
            name: 'Marketing imgService3 design',
            imageUrl: imgService3
        },
        {
            id: 3,
            name: 'imgService1 site design and build',
            imageUrl: imgService1
        },
        {
            id: 4,
            name: 'imgService2 site design and build',
            imageUrl: imgService2
        },
        {
            id: 5,
            name: 'imgService2 site design and build',
            imageUrl: imgService2
        },
        {
            id: 6,
            name: 'Marketing imgService3 design',
            imageUrl: imgService3
        }
    ];
    return (
        <motion.main className='services' initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} exit={{ scaleY: 0 }} transition={{ duration: .5 }}>
            <h1>Services</h1>
            <div className='content'>
                <Row xs={1} md={3} className="g-4">
                    {ProjectList.map((item) => {
                        return (
                            <motion.div key={item.id} animate={{ opacity: [.5, 1], y: [100, 0], transition: { duration: .5 } }} >
                                <Col>
                                    <motion.div whileHover={{ scale: 1.1, transition: { duration: .5 } }}>
                                        <Card>
                                            <Card.Img variant='top' src={item.imageUrl} style={{ height: '250px' }} />
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </motion.div>
                                </Col>
                            </motion.div>
                        )
                    })}

                </Row>
            </div>
        </motion.main >
    )
}

export default Services;