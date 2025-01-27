import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner titile="Career " cls="career">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["About Us", "/"],
          ["Career", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
