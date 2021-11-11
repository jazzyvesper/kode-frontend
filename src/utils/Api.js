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
      headers: {
        'Content-Type': 'application/json',
        'Prefer': 'code=200, example=success',
    }
    })
    .then(this._getResponseData)
  }

  getDataDifferent () {
    return fetch(`${this._address}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Prefer': 'code=200, dynamic=true'
    }
    })
    .then(this._getResponseData)
  }

  getDataReject () {
    return fetch(`${this._address}/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Prefer': 'code=500, example=error-500'
    }
    })
    .then(this._getResponseData)
  }

}

const apiProfile = new DataProfile({
    address: 'https://stoplight.io/mocks/kode-education/trainee-test/25143926',
  });

export default apiProfile