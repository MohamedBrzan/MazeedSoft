import axios from 'axios';
import FooterDataChangeType from '../types/FooterDataChangeType';

const HandleChangeFooterData = async (
  props: FooterDataChangeType,
  onHide: any
) => {
  const {
    logo,
    descText,
    facebookLink,
    youtubeLink,
    linkedinLink,
    importantLinkText,
    importantLinkName,
    importantLinkUrl,
    privacyName,
    privacyUrl,
    rightsText,
  } = props;
  return await axios({
    method: 'PUT',
    baseURL: `/footer`,
    data: {
      logo,
      desc: descText,
      links: {
        facebook: facebookLink,
        youtube: youtubeLink,
        linkedin: linkedinLink,
      },
      importantLinks: {
        text: importantLinkText,
        link: {
          name: importantLinkName,
          url: importantLinkUrl,
        },
        privacy: {
          name: privacyName,
          url: privacyUrl,
        },
      },
      rights: rightsText,
    },
  })
    .then(() => onHide)
    .catch((error) => console.log(error))
    .finally(onHide);
};

export default HandleChangeFooterData;
