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

 class Pcomm_Wp_Retirement_Tool_Taxonomy
 {
     public function __construct()
     {
         add_action('init', [$this, 'create_questions_taxonomy'], 10);
     }
     public function create_questions_taxonomy()
     {
        $labels = array(
        'name' => _x('Retirement Tool Questions', 'taxonomy general name'),
        'singular_name' => _x('Retirement Tool Question', 'taxonomy singular name'),
        'search_items' =>  __('Retirement Tool Questions'),
        'all_items' => __('Retirement Tool Questions'),
        'parent_item' => __('Parent Retirement Tool Question'),
        'parent_item_colon' => __('Parent Retirement Tool Question:'),
        'edit_item' => __('Retirement Tool Question'),
        'update_item' => __('Retirement Tool Question'),
        'add_new_item' => __('Retirement Tool Question'),
        'new_item_name' => __('Retirement Tool Question'),
        'menu_name' => __('Retirement Tool Questions'),
      );
  
    register_taxonomy('retirement_tool_question', array('retirement_tool_post'), array(
      'hierarchical' => true,
      'labels' => $labels,
      'show_ui' => true,
      'query_var' => true,
      'show_in_rest' => true,
      'rewrite' => array( 'slug' => 'retirement-tool-question' ),
    ));
     }
 }

 new Pcomm_Wp_Retirement_Tool_Taxonomy();
