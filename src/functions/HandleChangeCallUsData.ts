import axios from 'axios';
import CallUsDataChangeType from '../types/CallUsDataChangeType';

const HandleChangeCallUsData = async (
  props: CallUsDataChangeType,
  onHide: any
) => {
  const { titleText, descText } = props;
  return await axios({
    method: 'PUT',
    baseURL: `/call_us`,
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
