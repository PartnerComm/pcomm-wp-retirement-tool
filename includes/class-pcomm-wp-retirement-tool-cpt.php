<?php
/**
 * Defines plugin Custom Post Types (CPTs)
 *
 * This class defines all code necessary to register it's custom post types
 *
 * @since      1.0.0
 * @package    Pcomm_Wp_Retirement_tool
 * @subpackage Pcomm_Wp_Retirement_tool/includes
 * @author     PartnerComm <noreply@partnercomm.net>
 */

 class Pcomm_Wp_Retirement_Tool_Cpt
 {
  private $loa_post_slug;

  public function __construct()
  {
      $this->retirement_post_slug = 'retirement_tool_post';
      add_action('init', [$this, 'register_retirement_cpt'], 10);
  }

  function register_retirement_cpt() {
    $post_type = $this->retirement_post_slug;
		$args     = [
			'labels' => array(
				'name' => _x('Retirement Tool Posts', 'post type general name'),
				'singular_name' => _x('Retirement Tool Post', 'post type singular name'),
				'add_new' => _x('Add New', 'retirement-tool-post'),
				'add_new_item' => __('Add New Retirement Tool Post'),
				'edit_item' => __('Edit Retirement Tool Postt'),
				'new_item' => __('New Retirement Tool Post'),
				'all_items' => __('All Retirement Tool Posts'),
				'view_item' => __('View Retirement Tool Post'),
				'search_items' => __('Search Retirement Tool Posts'),
				'not_found' =>  __('No Retirement Tool Posts found'),
				'not_found_in_trash' => __('No Retirement Tool Posts found in Trash'),
				'parent_item_colon' => '',
				'menu_name' => 'Retirement Tool Posts'
			),
			'public' => true,
			'has_archive' => true,
			'supports' => [ 'title', 'editor', 'thumbnail', 'excerpt', 'page-attributes', 'custom-fields', 'revisions', 'page-attributes' ],
			'taxonomies' => [ 'retirement-tool-question' ],
			'menu_icon' => 'dashicons-id',
			'show_in_rest' => true
		];
		register_post_type( $post_type, $args );
	}
 }

 new Pcomm_Wp_Retirement_Tool_Cpt();