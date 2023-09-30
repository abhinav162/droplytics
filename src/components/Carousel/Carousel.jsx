import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./Carousel.scss";

const imageData = [
    {
        label: "Teacher and students in the class room during a lesson at collage",
        alt: "image1",
        url: "https://thumbs.dreamstime.com/z/teacher-students-class-room-lesson-collage-63436910.jpg?w=2048"
    },
    {
        label: "PM Modi interacts with students at exhibition ahead of Pariksha Pe Charcha 2020",
        alt: "image2",
        url: "https://images.pexels.com/photos/1440388/pexels-photo-1440388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        label: "PM Modi's message on Pariksha Pe Charcha",
        alt: "image2",
        url: "https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
];

// const renderSlides = ;

export default function App() {
    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index) {
        setCurrentIndex(index);
    }
    return (
        <div className="carousel">
            <Carousel
                showArrows={true}
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                selectedItem={imageData[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
            >
                {
                    imageData.map((image) => (
                        <div key={image.alt}>
                            <img style={{height:"600px"}} src={image.url} className="c-image" alt={image.alt} />
                            <p className="legend">{image.label}</p>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
}