import { FaCar, FaShieldAlt, FaEuroSign, FaStar } from "react-icons/fa";

export default function WhyChooseUs() {
    return (
        <section className="why-us mt-4">
            <h3 className="text-center mb-4">Why choose us</h3>

            <div className="row">
                <div className="col-md-3 col-6 mb-4">
                    <div className="why-us__card">
                        <FaCar className="why-us__icon" />
                        <h5>10,000+ Cars</h5>
                        <p>Large selection available</p>
                    </div>
                </div>

                <div className="col-md-3 col-6 mb-4">
                    <div className="why-us__card">
                        <FaShieldAlt className="why-us__icon" />
                        <h5>Verified Dealers</h5>
                        <p>Trusted sellers only</p>
                    </div>
                </div>

                <div className="col-md-3 col-6 mb-4">
                    <div className="why-us__card">
                        <FaEuroSign className="why-us__icon" />
                        <h5>Best Prices</h5>
                        <p>Market comparison</p>
                    </div>
                </div>

                <div className="col-md-3 col-6 mb-4">
                    <div className="why-us__card">
                        <FaStar className="why-us__icon" />
                        <h5>Save & Compare</h5>
                        <p>View cars later</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
