/**
 *  Get elements from Api
 * @param fetch
 * @return data
 */
const fetchData = async () => {
  const data = fetch("https://jsonplaceholder.typicode.com/todos").then((rep) =>
    rep.json()
  );
  return data;
};

/**
 *  Returns first five titles of the Api element in list form
 * @param todoEntity[]
 * @return myList
 */
const getTitles = async () => {
  const data = await fetchData();
  const firstFivesTitles = data.slice(0, 5).map((item) => item.title);
  const myList = document.getElementById("myList");
  firstFivesTitles.forEach((title) => {
    const listItem = document.createElement("li");
    listItem.textContent = title;
    myList?.appendChild(listItem);
  });
};

getTitles();
