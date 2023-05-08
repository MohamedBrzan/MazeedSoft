import axios from 'axios';
import AboutUsDataChangeType from '../types/AboutUsDataChangeType';

const HandleChangeAboutUsData = async (
  props: AboutUsDataChangeType,
  onHide: any
) => {
  const {
    image,
    titleText,
    descText,
    missionTitleText,
    missionDescText,
    visionTitleText,
    visionDescText,
  } = props;
  return await axios({
    method: 'PUT',
    baseURL: `/about_us`,
    data: {
      image,
      title: titleText,
      desc: descText,
      mission: {
        title: missionTitleText,
        desc: missionDescText,
      },
      vision: {
        title: visionTitleText,
        desc: visionDescText,
      },
    },
  })
    .then(() => onHide)
    .catch((error) => console.log(error))
    .finally(onHide);
};

export default HandleChangeAboutUsData;
