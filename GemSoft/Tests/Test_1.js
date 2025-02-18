// fetch("https://job-api.cyberzone.dev/vacancy/")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Промис выполнился"));

const fetcher = async () => {
  try {
    let promise = (
      await fetch("https://job-api.cyberzone.dev/vacancy/")
    ).json();
    let res = await promise;
    console.log(res);
  } catch (error) {
    console.log("Упс :(");
  }
};

fetcher();
