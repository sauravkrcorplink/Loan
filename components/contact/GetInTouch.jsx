import ContactForm from "./ContactForm";

const GetInTouch = () => {
  return (
    <section className="apply-for-loan contact">
      <div className="overlay pt-120 pb-120">
        <div className="container  wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h2 className="title">We’re Here to Help</h2>
                <p>
                  Need assistance or have questions about our loan products?
                  Contact our support team, and we’ll be happy to assist you.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="form-content">
                {/* Contact Form here */}
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
