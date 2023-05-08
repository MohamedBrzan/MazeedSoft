const HandleOnChange = (
  e: React.ChangeEvent<FormControlElement>,
  state: React.Dispatch<React.SetStateAction<string>>
) => {
  return state(e.target.value);
};

export default HandleOnChange;
