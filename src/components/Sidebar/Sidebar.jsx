import profile from "../../assets/cm.jpeg"
import './Sidebar.scss'
const Sidebar = () => {
    return (
        <>
            <div className="mainSidebar">
                <div className="profileCM">
                    <img className="cmProfile" src={profile}></img>
                    <h3>Shri Bhupinder Patel</h3>
                    <h5>Hon'ble Chief Minister,Government of Gujarat</h5>
                </div>

                <div className="gujratInfo">
                    <h5>Gujarat at Glance</h5>
                    <div className="details">
                        <div className="details1">
                            <span>Area</span>
                            <span>196,024 km2</span>
                        </div>
                        <div className="details2">
                            <span>Population</span>
                            <span>6.27 crores</span>
                        </div>
                        <div className="details3">
                            <span>Capital</span>
                            <span>Gandhinagar</span>
                        </div>
                        <div className="details3">
                            <span>Language</span>
                            <span>Gujarati</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;