import axios from "axios";


export default {

  habitica: function() {
    return axios.get('https://habitica.com/api/v3/user', {
      headers: { "x-api-user": "MY_API_KEY" }, {"x-api-key": "API_KEY"}
    })
      .then((resp) => {
        console.dir(resp);

      })
      .catch(err => {
        console.log(err);
      });
  }
  }

}
