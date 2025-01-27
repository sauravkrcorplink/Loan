import Image from "next/image";
import how_works_1 from "/public/images/how-works-1.png";
import how_works_2 from "/public/images/how-works-2.png";
import how_works_3 from "/public/images/how-works-3.png";
import how_works_4 from "/public/images/how-works-4.png";

const HowItWork = () => {
  return (
    <section className="how-works">
      <div className="overlay pt-120 pb-120">
        <div className="container  wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h5 className="sub-title">A Better Way to Loan</h5>
                <h2 className="title">How it works</h2>
                <p>
                Experience a hassle-free loan application process
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-md-6">
              <div className="nav nav-tabs" role="tablist">
                <div
                  className="nav-link active"
                  id="nav-eligibility-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-eligibility"
                  role="tab"
                  aria-controls="nav-eligibility"
                  aria-selected="true"
                >
                  <div className="row">
                    <div className="col-lg-2 col-3">
                      <div className="left-side">
                        <div className="number">
                          <h4>1</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-10 col-9">
                      <div className="right-side">
                        <h4>Check Your Eligibility</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Morbi in metus justo.consectetur adipiscing
                          elit. Morbi in metus justo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="nav-link"
                  id="nav-account-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-account"
                  role="tab"
                  aria-controls="nav-account"
                  aria-selected="false"
                >
                  <div className="row">
                    <div className="col-lg-2 col-3">
                      <div className="left-side">
                        <div className="number">
                          <h4>2</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-10 col-9">
                      <div className="right-side">
                        <h4>Sign Up & Apply</h4>
                        <p>
                        Create your Loan1 account and 
                        fill out the application
                         for your chosen loan product.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="nav-link"
                  id="nav-saving-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-saving"
                  role="tab"
                  aria-controls="nav-saving"
                  aria-selected="false"
                >
                  <div className="row">
                    <div className="col-lg-2 col-3">
                      <div className="left-side">
                        <div className="number">
                          <h4>3</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-10 col-9">
                      <div className="right-side">
                        <h4>Get Verified</h4>
                        <p>
                        Securely verify your identity and documents for quick approval.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="nav-link last"
                  id="nav-rewarded-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-rewarded"
                  role="tab"
                  aria-controls="nav-rewarded"
                  aria-selected="false"
                >
                  <div className="row">
                    <div className="col-lg-2 col-3">
                      <div className="left-side">
                        <div className="number">
                          <h4>4</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-10 col-9">
                      <div className="right-side">
                        <h4>Approval & Disbursement</h4>
                        <p>
                        Upon approval, funds will be credited directly to your account.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 justify-content-end d-flex align-items-center">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="nav-eligibility"
                  role="tabpanel"
                  aria-labelledby="nav-eligibility-tab"
                >
                  <Image src={how_works_1} alt="image" />
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-account"
                  role="tabpanel"
                  aria-labelledby="nav-account-tab"
                >
                  <Image src={how_works_2} alt="image" />
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-saving"
                  role="tabpanel"
                  aria-labelledby="nav-saving-tab"
                >
                  <Image src={how_works_3} alt="image" />
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-rewarded"
                  role="tabpanel"
                  aria-labelledby="nav-rewarded-tab"
                >
                  <Image src={how_works_4} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
