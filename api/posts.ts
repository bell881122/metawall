import axios from '../utils/axiosConfig';

const path = '/posts';

export async function getPosts(setData: Function) {
  await axios.get(path)
    .then(response => response.data.data)
    .then(data => setData(data))
    .catch(error => console.log(error));
}

export async function addPost() {
  let newData = {
    userName: '測試人員',
    userContent: '測試內容'
  }
  axios.post(path, newData)
    .then(res => console.log(res))
    .catch(error => console.log(error));
}