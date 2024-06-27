const fetchData = async () => {
  const rawData = fetch("https://api.adviceslip.com/advice");
  console.log(rawData);
};

