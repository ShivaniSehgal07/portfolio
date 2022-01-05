const members = [
  {
      name: "Utkarsh Vashishtha",
      link: "https://www.linkedin.com/in/utkarsh-vashishtha-729172114/",
      description: "UTKARSH_REC",
      logo: "images/utkarsh.jpeg",
  },
  {
      name: "Aditi Gupta",
      link: "https://www.linkedin.com/in/aditi-gupta-006aab160/",
      description: "ADITI_REC",
      logo: "images/aditi.jpeg",
  },
  {
      name: "Mohit Sharma",
      link: "https://www.linkedin.com/in/mohit-sharma-863025146/",
      description: "MOHIT_REC",
      logo: "images/mohit.jpeg",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ],
};

export default members;
export {
  settings,
};
