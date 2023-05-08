import axios from 'axios';
import { backendURL } from '../apis/constants/appApis';
import FeaturesDataChangeType from '../types/FeaturesDataChangeType';

const HandleChangeFeaturesData = async (
  props: FeaturesDataChangeType,
  onHide: any
) => {
  const { id, image, titleText, descText } = props;
  return await axios({
    method: 'PUT',
    baseURL: `${backendURL}/features/${id}`,
    data: {
      image,
      title: titleText,
      desc: descText,
    },
  })
    .then(() => onHide)
    .catch((error) => console.log(error))
    .finally(onHide);
};

export default HandleChangeFeaturesData;
