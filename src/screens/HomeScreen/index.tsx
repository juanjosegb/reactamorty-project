import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Slider1 from "@Assets/slider1.png"
import Slider2 from "@Assets/slider2.png"
import Slider3 from "@Assets/slider3.png"

const HomeScreen = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={Slider1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={Slider2}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100"
                    src={Slider3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};

export default HomeScreen;