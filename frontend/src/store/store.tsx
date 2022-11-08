class Store {
  private url: string;

  constructor() {
    this.url = "http://localhost:3000/items";
  }

  getAllItems = async () => {
    const response = await fetch(`${this.url}`);
    if (!response.ok) {
      debugger;
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };

  getItemsByQuery = async (query: string) => {
    const response = await fetch(`${this.url}?q=${query}`);
    if (!response.ok) {
      debugger;
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };
}

export { Store };
