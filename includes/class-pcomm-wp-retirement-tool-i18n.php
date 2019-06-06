<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       www.partnercomm.net
 * @since      1.0.0
 *
 * @package    Pcomm_Wp_Retirement_Tool
 * @subpackage Pcomm_Wp_Retirement_Tool/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Pcomm_Wp_Retirement_Tool
 * @subpackage Pcomm_Wp_Retirement_Tool/includes
 * @author     PartnerComm <code@partnercomm.net>
 */
class Pcomm_Wp_Retirement_Tool_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'pcomm-wp-retirement-tool',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
