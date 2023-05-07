import axios from 'axios';
import { backendURL } from '../apis/constants/appApis';
import HeaderLinksChangeType from '../types/HeaderLinksChangeType';

const HandleChangeHeaderLinks = async (
  { id, titleState, linkState }: HeaderLinksChangeType,
  onHide: any
) =>
  await axios({
    method: 'PUT',
    baseURL: `${backendURL}/header/${id}`,
    data: { title: titleState, link: linkState },
  })
    .then(() => onHide)
    .catch((error) => console.log(error))
    .finally(onHide);

export default HandleChangeHeaderLinks;
