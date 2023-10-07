export default function useFetch(link, destination) {
    fetch(link, { cache: 'no-store' })
      .then(data => data.json())
      .then(data => {
        destination(data.slip)
      })
};
