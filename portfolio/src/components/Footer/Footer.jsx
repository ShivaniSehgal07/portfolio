import localisedStrings from '../../assets/lib/localisations';

import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <footer className='footer-wrapper pd-tp-25'>
        {localisedStrings.No} &copy;{localisedStrings['Copyright issues']}
        <br />{localisedStrings['Made with']} ❤️ {localisedStrings['in India!']}
      </footer>
    </div>
  );
}

export default Footer;
