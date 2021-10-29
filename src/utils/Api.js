class DataProfile {
  constructor ({address, headers}) {
    this._address = address;
    this._headers = headers;
  }
  _getResponseData(res) {
    if(res.ok) {
      return res.json()
    }else {
      return Promise.reject(res.status)
    } 
  }

  getData () {
    return fetch(`${this._address}/users`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._getResponseData)
  }

}

const apiProfile = new DataProfile({
    address: 'https://stoplight.io/mocks/kode-education/trainee-test/25143926',
    headers: {
      'Content-Type': 'application/json'
  }
  });

export default apiProfile