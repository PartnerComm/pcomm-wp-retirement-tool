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
         add_action('init', [$this, 'create_retirement_questions_taxonomy'], 10);
         add_action('init', [$this, 'create_retirement_timeframe_taxonomy'], 10);
         add_action('init', [$this, 'create_retirement_category_taxonomy'], 10);
     }
     public function create_retirement_questions_taxonomy()
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
     public function create_retirement_timeframe_taxonomy()
     {
         $labels = array(
        'name' => _x('Retirement Tool Timeframes', 'taxonomy general name'),
        'singular_name' => _x('Retirement Tool Timeframe', 'taxonomy singular name'),
        'search_items' =>  __('Retirement Tool Timeframes'),
        'all_items' => __('Retirement Tool Timeframes'),
        'parent_item' => __('Parent Retirement Tool Timeframe'),
        'parent_item_colon' => __('Parent Retirement Tool Timeframe:'),
        'edit_item' => __('Retirement Tool Timeframe'),
        'update_item' => __('Retirement Tool Timeframe'),
        'add_new_item' => __('Retirement Tool Timeframe'),
        'new_item_name' => __('Retirement Tool Timeframe'),
        'menu_name' => __('Retirement Tool Timeframes'),
      );
  
         register_taxonomy('retirement_tool_timeframe', array('retirement_tool_post'), array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'query_var' => true,
        'show_in_rest' => true,
        'rewrite' => array( 'slug' => 'retirement-tool-timeframe' ),
      ));
     }
     
     public function create_retirement_category_taxonomy()
     {
         $labels = array(
        'name' => _x('Retirement Tool Categories', 'taxonomy general name'),
        'singular_name' => _x('Retirement Tool Category', 'taxonomy singular name'),
        'search_items' =>  __('Retirement Tool Categories'),
        'all_items' => __('Retirement Tool Categories'),
        'parent_item' => __('Parent Retirement Tool Category'),
        'parent_item_colon' => __('Parent Retirement Tool Category:'),
        'edit_item' => __('Retirement Tool Category'),
        'update_item' => __('Retirement Tool Category'),
        'add_new_item' => __('Retirement Tool Category'),
        'new_item_name' => __('Retirement Tool Category'),
        'menu_name' => __('Retirement Tool Categories'),
      );
  
         register_taxonomy('retirement_tool_category', array('retirement_tool_post'), array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'query_var' => true,
        'show_in_rest' => true,
        'rewrite' => array( 'slug' => 'retirement-tool-category' ),
      ));
     }
 }

 new Pcomm_Wp_Retirement_Tool_Taxonomy();
