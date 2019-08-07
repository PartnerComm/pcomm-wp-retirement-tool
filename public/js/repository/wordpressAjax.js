import {WPAjax} from './Repository';
export default {
  post(action, data) {
    data.append('action', action);
    data.append('security', wpApiSettings.nonce);
    return WPAjax
      .post(null, data)
      .catch((e) => console.log(e));
  }
}
