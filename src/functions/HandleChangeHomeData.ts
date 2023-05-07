import axios from 'axios';
import { backendURL } from '../apis/constants/appApis';
import HomeDataChangeType from '../types/HomeDataChangeType';

const HandleChangeHomeData = async (props: HomeDataChangeType, onHide: any) => {
  const {
    btnText,
    signatureText,
    firstText,
    secondText,
    thirdText,
    adviceTitleText,
    adviceDescOneText,
    adviceDescTwoText,
    askFormTitleOneText,
    askFormTitleTwoText,
    askFormOfferText,
    askFormBtnText,
  } = props;
  return await axios({
    method: 'PUT',
    baseURL: `${backendURL}/home`,
    data: {
      btn: btnText,
      signature: signatureText,
      introText: {
        first: firstText,
        second: secondText,
        third: thirdText,
      },
      advice: {
        title: adviceTitleText,
        desc_one: adviceDescOneText,
        desc_two: adviceDescTwoText,
      },
      askForm: {
        title_one: askFormTitleOneText,
        title_two: askFormTitleTwoText,
        offer: askFormOfferText,
        btn: askFormBtnText,
      },
    },
  })
    .then(() => onHide)
    .catch((error) => console.log(error))
    .finally(onHide);
};

export default HandleChangeHomeData;
