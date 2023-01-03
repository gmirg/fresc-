export const fetcher = async (endPoint, metodo, datos) => {
    let metaData = {
      method: metodo,
      body: JSON.stringify(datos),
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    };
  
    const res = (await fetch(endPoint, metaData)).json();
    return res;
  }