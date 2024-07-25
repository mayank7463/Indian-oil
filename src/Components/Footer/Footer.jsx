import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#eb6c21]  h-20 w-full flex flex-col justify-center items-center">
      <div className="flex items-center">
        <span>Copyright &copy; Indian Oil Corporation Ltd&nbsp;</span>
        <i className="fa-brands fa-github fa-beat" style={{ color: '#32e10e' }}></i>
        &nbsp;
      </div>
      {/* <div className="mt-2">
        <a href="https://iocl.com/pages/sitemap" className="no-underline mr-4">Site Map |</a>
        <a href="https://cx.indianoilcgd.com/Portal/IOCL_Doc/Terms-and-Conditions-Bilingual.pdf" className="no-underline mr-4">Terms of Use |</a>
        <a href="#data-privacy-policy" className="no-underline mr-4">Data Privacy Policy |</a>
        <a href="#hyperlinking-policy" className="no-underline">Hyperlinking Policy</a>
      </div> */}
    </footer>
  );
};

export default Footer;
