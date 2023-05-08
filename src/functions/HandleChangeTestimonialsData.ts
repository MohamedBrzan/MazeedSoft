import axios from 'axios';
import TestimonialsDataChangeType from '../types/TestimonialsDataChangeType';

const HandleChangeTestimonialsData = async (
  props: TestimonialsDataChangeType,
  onHide: any
) => {
  const { id, nameText, descText, rateNum } = props;
  return await axios({
    method: 'PUT',
    baseURL: `/testimonials/${id}`,
    data: {
      name: nameText,
      desc: descText,
      rate: Number(rateNum),
    },
  })
    .then(() => onHide)
    .catch((error) => console.log(error))
    .finally(onHide);
};

export default HandleChangeTestimonialsData;
