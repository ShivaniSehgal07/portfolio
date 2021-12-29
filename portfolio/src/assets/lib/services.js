import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import BugReportIcon from '@mui/icons-material/BugReport';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';

const services = [
  {
    name: "Web Design & Development",
    description: "Skilled in taming a wide variety of web development tools including responsive web designs.",
    logo: <div className="service-logo"><IntegrationInstructionsIcon style={{ fontSize: "4.1rem" }} /></div>,
  },
  {
    name: "Quality Assurance",
    description: "Sophisticated quality management approach to confirm secure, sustainable and faster web apps.",
    logo: <div className="service-logo"><BugReportIcon style={{ fontSize: "4.1rem" }} /></div>,
  },
  {
    name: "Optimization & Evolution",
    description: "Continuously optimize and enhance web apps for higher perfomance and clean code.",
    logo: <div className="service-logo"><EnhancedEncryptionIcon style={{ fontSize: "4.1rem" }} /></div>,
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

export default services;
export {
  settings,
};
