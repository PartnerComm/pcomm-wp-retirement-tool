<?php
/**
 * Defines plugin Ajax functions
 *
 * This class defines all code necessary to register it's ajax functions
 *
 * @since      1.0.0
 * @package    Pcomm_Wp_Retirement_tool
 * @subpackage Pcomm_Wp_Retirement_tool/includes
 * @author     PartnerComm <noreply@partnercomm.net>
 */

 class Pcomm_Wp_Retirement_Tool_Ajax
 {
     public function __construct()
     {
         add_action('wp_ajax_nopriv_feedback_post', [$this, 'create_feedback_post']);
         add_action('wp_ajax_feedback_post', [$this, 'create_feedback_post']);
     }

     public function create_feedback_post()
     {
         $response = $_POST;
         if (! check_ajax_referer('wp_rest', 'security')) {
             wp_send_json_error('Invalid security token sent.');
             die();
         }
         $post_options = array(
        'post_author' => 0,
        'post_content' => sanitize_text_field($_POST['content']),
        'post_title' => sanitize_text_field($_POST['title']),
        'post_type' => 'retirement_feedback',

      );
      
         $post = wp_insert_post($post_options, true);
         add_post_meta($post, 'retirement_feedback_rating', sanitize_text_field($_POST['rating']));
         if (is_wp_error($post)) {
             wp_send_json_error('Post could not be created, please try again');
         }
         wp_send_json_success(['status' => 'success', 'code' => 201]);
     }
 }

 new Pcomm_Wp_Retirement_Tool_Ajax();
