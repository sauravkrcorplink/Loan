export const navData = [
  {
    id: "au@81",
    itm: "Home",
    url: "/",
    dropdown: false,
  },
  {
    id: "au@2_91",
    itm: "About Us",
    url: "/about",
    dropdown: false,
  },
  {
    id: "au@201",
    itm: "Product",
    url: "#",
    dropdown: true,
    dropdown_itms: [
      {
        id: "du@01",
        dp_itm: "Account",
        url: "#",
        sbu_dropdown: true,
        sub_items: [
          {
            id: "sub@01",
            sub_itm: "Account",
            url: "/account",
          },
          {
            id: "sub@02",
            sub_itm: "Account Details",
            url: "/account-details",
          },
        ],
      },
      {
        id: "du@02",
        dp_itm: "Product",
        url: "/product",
      },
      {
        id: "du@03",
        dp_itm: "Loan",
        url: "#",
        sbu_dropdown: true,
        sub_items: [
          {
            id: "sub@001",
            sub_itm: "Business Loans",
            url: "/business-loan",
          },
          {
            id: "sub@002",
            sub_itm: "Educations Loans",
            url: "/educations-loan",
          },
          {
            id: "sub@003",
            sub_itm: "Home Loans",
            url: "/home-loan",
          },
          {
            id: "sub@004",
            sub_itm: "Car Loans",
            url: "/car-loan",
          },
          {
            id: "sub@005",
            sub_itm: "Personal Loans",
            url: "/personal-loan",
          },
        ],
      },
    ],
  },
  {
    id: "au@2331",
    itm: "Pages",
    url: "#",
    dropdown: true,
    dropdown_itms: [
      
      {
        id: "du@04s",
        dp_itm: "Career",
        url: "/career",
      },
      {
        id: "du@05s",
        dp_itm: "Faqs",
        url: "/faqs",
      },
      
      {
        id: "du@10s",
        dp_itm: "Privacy Policy",
        url: "/privacy-policy",
      },
      {
        id: "du@11s",
        dp_itm: "Onboarding",
        url: "/onboarding",
      },
      {
        id: "du@12s",
        dp_itm: "Permissions",
        url: "/permissions",
      },
    ],
  },
  {
    id: "au@221",
    itm: "Contact Us",
    url: "/contact",
    dropdown: false,
  },
  {
    id: "au@222",
    itm: "Business-loan",
    url: "/business-loan",
  },
  
];
