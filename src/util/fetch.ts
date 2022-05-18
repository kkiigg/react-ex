export function fetchData(url: string) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(async (res: any) => {
        if (res.ok) {
          let response = await res.json();
          resolve(response);
        }
      })
      .then((e) => {
        reject(e);
      });
  });
}
