import axios from 'axios';
import HeaderLinksChangeType from '../types/HeaderLinksChangeType';

const HandleChangeHeaderLinks = async (
  { id, titleState, linkState }: HeaderLinksChangeType,
  onHide: any
) =>
  await axios({
    method: 'PUT',
    baseURL: `/header/${id}`,
    data: { title: titleState, link: linkState },
  })
    .then(() => onHide)
    .catch((error) => console.log(error))
    .finally(onHide);

export default HandleChangeHeaderLinks;
