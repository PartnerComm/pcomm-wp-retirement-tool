import {WPAjax} from './Repository';
export default {
  post(action, data) {
    data.append('action', action);
    data.append('security', wpAdminSettings.nonce);
    return WPAjax
      .post(null, data);
  }
}
