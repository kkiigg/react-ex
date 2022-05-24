// type FethodMethod ={
//     'GET','POST','PUT','DELETE'
// }
interface fetchParams {
  method: string;
  body?: unknown;
}
interface headers {
  "Content-Type": string;
}

export function fetchData<T>(url: string, params?: fetchParams): Promise<T> {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: params && params.method ? params.method : "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: params && params.body ? JSON.stringify(params.body) : "",
    })
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
