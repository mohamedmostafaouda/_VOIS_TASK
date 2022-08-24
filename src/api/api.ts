export default class API {
  apiURL =
    'https://raw.githubusercontent.com/abdelrhman-arnos/analysis-fe-challenge/master/data.json';

  fetchData(): Promise<Response> {
    return fetch(this.apiURL);
  }
}
