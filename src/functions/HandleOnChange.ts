const HandleOnChange = (
  e: React.ChangeEvent<any>,
  state: React.Dispatch<React.SetStateAction<string>>
) => {
  return state(e.target.value);
};

export default HandleOnChange;
