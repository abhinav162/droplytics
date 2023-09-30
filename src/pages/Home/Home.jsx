import Carousel from "../../components/Carousel/Carousel"
import "./Home.scss"
import Marquee from "react-fast-marquee";

const Home = () => {
    return (
        <>
            <div className="main-container">
                <div className="carousel-container">
                    <Carousel />
                </div>
                <div className="announcement-container">
                    <h1>Announcements</h1>


                    <Marquee direction={'up'} style={{ marginLeft:0,width:'270px' }}>
                        <div className="announcementContainer">
                            <div className="announcements">

                                <div className="announcement1">
                                    <h2>Announcement 1</h2>
                                    <p>Announcement 1 Description</p>
                                </div>
                                <div className="announcement2">
                                    <h2>Announcement 2</h2>
                                    <p>Announcement 2 Description</p>
                                </div>
                                <div className="announcement3">
                                    <h2>Announcement 3</h2>
                                    <p>Announcement 3 Description</p>
                                </div>

                            </div>
                        </div>

                    </Marquee>

                </div>
            </div>
        </>
    )
}

export default Home;