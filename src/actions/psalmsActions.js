import axios from 'axios'

export function getPsalms() {
  return (dispatch) => {
    axios.get('https://forsoul.herokuapp.com/api/needs/psalms')
      .then(response => {
        console.log(response.data, 'DATA');
        dispatch({
          type: 'LOAD_PSALMS_SUCCESS',
          payload: response.data
        })
      })
  }
}