interface Home {
  logo: string;
  image: string;
  introText: {
    first: string;
    second: string;
    third: string;
  };
  signature: string;
  btn: string;
  advice: {
    title: string;
    desc_one: string;
    desc_two: string;
  };
  askForm: {
    title_one: string;
    title_two: string;
    offer: string;
    btn: string;
  };
}

export default Home;
