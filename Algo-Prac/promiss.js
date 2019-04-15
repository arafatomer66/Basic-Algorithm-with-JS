const httpReq = new XMLHttpRequest()

const getWeather = url => {
  return new Promise((resolve, reject) => {
  httpReq.open('GET', url)

  httpReq.onload = () => {

    
    if (httpReq.status === 200) {
      resolve(httpReq.responseText)
    } else {
      reject(Error(httpReq.status))
    }
  }

  httpReq.send()
  })
}

getWeather('https://api/some/endpoint')
  .then(resp => console.log(resp))
  .catch(reason => console.log(reason))