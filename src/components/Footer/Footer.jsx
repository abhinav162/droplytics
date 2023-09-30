import "./Footer.scss"
// @use "./Footer.scss"
const Footer = () => {
    return (
        <>
            <div className='footer-content'>
                <div className="footer-p1">
                    <h3>DROPLYTICS</h3>
                    <p>A Comprehensive Dropout Analysis System.</p>
                </div>

                <div className="footer-p2">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><i className="fas fa-map-marker-alt"></i> <span>123, ABC Road, XYZ City, India</span></li>
                        <li><i className="fas fa-phone-alt"></i><span> +91 1234567890</span></li>
                        <li><i className="fas fa-envelope"></i>
                            <a href="mailto:test@test.com"></a><span> Email Us</span>
                        </li>
                    </ul>
                </div>

                <div className="footer-p3">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Analysis Report</a></li>
                        <li><a>Policies</a></li>
                    </ul>
                </div>

                <div className="footer-p5-cr">
                    <p className="footer-bottom">© 2023 Droplytics.</p>
                </div>
            </div>
        </>
    )
}

export default Footer;