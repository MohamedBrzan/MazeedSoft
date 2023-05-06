interface Footer {
  logo: string;
  desc: string;
  links: {
    facebook: string;
    youtube: string;
    linkedin: string;
  };
  importantLinks: {
    text: string;
    link: {
      name: string;
      url: string;
    };
    privacy: {
      name: string;
      url: string;
    };
  };

  rights: string;
}

export default Footer;
