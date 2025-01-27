import tab_card_1 from "/public/images/icon/tab-card-1.png";
import tab_card_11 from "/public/images/icon/tab-card-11.png";
import tab_card_2 from "/public/images/icon/tab-card-2.png";
import tab_card_22 from "/public/images/icon/tab-card-22.png";
import tab_card_3 from "/public/images/icon/tab-card-3.png";
import tab_card_33 from "/public/images/icon/tab-card-33.png";
import tab_card_4 from "/public/images/icon/tab-card-4.png";
import tab_card_44 from "/public/images/icon/tab-card-44.png";

import business from "/public/images/icon/business.png";
import checking from "/public/images/icon/checking.png";
import savings from "/public/images/icon/savings.png";

import blog_1 from "/public/images/blog-1.png";
import blog_2 from "/public/images/blog-2.png";
import blog_3 from "/public/images/blog-3.png";

export const card_data = [
  {
    id: 1,
    img1: tab_card_1,
    img2: tab_card_11,
    heading_text: "Secured Cards",
    link: "/",
  },
  {
    id: 2,
    img1: tab_card_2,
    img2: tab_card_22,
    heading_text: "Balance Transfer",
    link: "/",
  },
  {
    id: 3,
    img1: tab_card_3,
    img2: tab_card_33,
    heading_text: "Travel",
    link: "/",
  },
  {
    id: 4,
    img1: tab_card_4,
    img2: tab_card_44,
    heading_text: "Cashback",
    link: "/",
  },
];

export const business_solutions_data = [
  {
    id: 1,
    title: "Sign Up & Apply",
    icon: checking,
    desc: "Create your Loan1 account and fill out the application for your chosen loan product.",
    link: "/register",
  },
  {
    id: 2,
    title: "Get Verified",
    icon: business,
    desc: "Securely verify your identity and documents for quick approval.",
    link: "/register",
  },
  {
    id: 3,
    title: "Approval & Disbursement",
    icon: savings,
    desc: "Upon approval, funds will be credited directly to your account.",
    link: "/register",
  },
  
];

export const articles_data = [
  {
    id: 1,
    title: "The future of fraud protection.",
    desc: "Morbi eget venenatis lorem, id viverra massa. Etiam congue efficitur velit vel pharetra.",
    image: blog_1,
    author: "Hans Murazik",
    date: "03 Jan 2023",
    details_link: "/",
  },
  {
    id: 2,
    title: "Digital Banking Services",
    desc: "Morbi eget venenatis lorem, id viverra massa. Etiam congue efficitur velit vel pharetra.",
    image: blog_2,
    author: "Hans Murazik",
    date: "03 Jan 2023",
    details_link: "/",
  },
  {
    id: 3,
    title: "Mobile Banking at a Glance",
    desc: "Morbi eget venenatis lorem, id viverra massa. Etiam congue efficitur velit vel pharetra.",
    image: blog_3,
    author: "Hans Murazik",
    date: "03 Jan 2023",
    details_link: "/",
  },
];
