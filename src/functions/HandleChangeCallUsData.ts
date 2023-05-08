import axios from 'axios';
import { backendURL } from '../apis/constants/appApis';
import CallUsDataChangeType from '../types/CallUsDataChangeType';

const HandleChangeCallUsData = async (
  props: CallUsDataChangeType,
  onHide: any
) => {
  const { titleText, descText } = props;
  return await axios({
    method: 'PUT',
    baseURL: `${backendURL}/call_us`,
    data: {
      title: titleText,
      desc: descText,
    },
  })
    .then(() => onHide)
    .catch((error) => console.log(error))
    .finally(onHide);
};

export default HandleChangeCallUsData;
