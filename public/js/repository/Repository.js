import axios from 'axios';

const baseURL = '/wp-json/wp/v2/';

const Repository = axios.create({
  baseURL,
  headers: {'X-WP-Nonce': wpApiSettings.nonce}
});

const WPAjax = axios.create({
  baseURL: wpApiSettings.ajaxurl
});

export {Repository, WPAjax}
