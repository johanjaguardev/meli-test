class Store {
  private url: string;
  private headers = {};
  constructor() {
    this.url = "http://localhost:3000/items";
    this.headers = {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        authorname: "Johan",
        authorlastname: "Vargas Sánchez",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url/ body data type must match "Content-Type" header
    };
  }

  getAllItems = async () => {
    const response = await fetch(`${this.url}`, this.headers);
    if (!response.ok) {
      debugger;
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };

  getItemsByQuery = async (query: string) => {
    const response = await fetch(`${this.url}?q=${query}`, this.headers);
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };

  getItemById = async (id: string) => {
    const response = await fetch(`${this.url}/${id}`, this.headers);

    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };
}

export { Store };
