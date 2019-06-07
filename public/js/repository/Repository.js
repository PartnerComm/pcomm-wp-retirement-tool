import axios from 'axios';

const baseURL = '/wp-json/wp/v2/';

const Repository = axios.create({
  baseURL,
  headers: {'X-WP-Nonce': wpAdminSettings.nonce}
});

const WPAjax = axios.create({
  baseURL: ajaxurl
});

export {Repository, WPAjax}
