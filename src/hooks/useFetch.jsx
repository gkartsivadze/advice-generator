export default function useFetch(link, destination) {
    fetch(link)
      .then(data => data.json())
      .then(data => destination(data.slip))
};
