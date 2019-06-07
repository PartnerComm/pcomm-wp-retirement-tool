<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              www.partnercomm.net
 * @since             1.0.0
 * @package           Pcomm_Wp_Retirement_Tool
 *
 * @wordpress-plugin
 * Plugin Name:       Partnercomm Retirement Tool
 * Plugin URI:        www.partnercomm.net
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.0.0
 * Author:            PartnerComm
 * Author URI:        www.partnercomm.net
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       pcomm-wp-retirement-tool
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'PCOMM_WP_RETIREMENT_TOOL_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-pcomm-wp-retirement-tool-activator.php
 */
function activate_pcomm_wp_retirement_tool() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-pcomm-wp-retirement-tool-activator.php';
	Pcomm_Wp_Retirement_Tool_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-pcomm-wp-retirement-tool-deactivator.php
 */
function deactivate_pcomm_wp_retirement_tool() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-pcomm-wp-retirement-tool-deactivator.php';
	Pcomm_Wp_Retirement_Tool_Deactivator::deactivate();
}



register_activation_hook( __FILE__, 'activate_pcomm_wp_retirement_tool' );
register_deactivation_hook( __FILE__, 'deactivate_pcomm_wp_retirement_tool' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-pcomm-wp-retirement-tool.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_pcomm_wp_retirement_tool() {

	$plugin = new Pcomm_Wp_Retirement_Tool();
	$plugin->run();

}
run_pcomm_wp_retirement_tool();
