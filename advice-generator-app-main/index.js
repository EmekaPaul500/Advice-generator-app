const btn = document.querySelector("button");

const fetchFun = async () => {
  const rawData = await fetch("https://api.adviceslip.com/advice");
  const datas = await rawData.json();

  for (let key in datas) {
    const h2 = document.querySelector("h2");
    const span = document.querySelector("span");

    h2.innerHTML = datas[key].advice;
    span.innerHTML = datas[key].id;
    console.log(key, datas[key].id);
  }
};

fetchFun();

btn.addEventListener("click", fetchFun);
