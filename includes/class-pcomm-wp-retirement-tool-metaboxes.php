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

 class Pcomm_Wp_Retirement_Tool_Metaboxes
 {

     public function __construct()
     {
         add_action('add_meta_boxes', [$this, 'retirement_tool_rules']);
     }
     
     public function retirement_tool_rules() 
     {
      $post_types = ['retirement_tool_post'];
      foreach($post_types as $type) {
        add_meta_box(
          'retirement_tool_rules',
          'Retirement Tool Rules',
          [$this, 'create_rule_generator'],
          $type
        );
      }
     }
     public function create_rule_generator() 
     {
      ?>
        <div id="pcretirementtooladmin">
          <rule-generator></rule-generator>
        </div>
      <?php
     }
 }

 new Pcomm_Wp_Retirement_Tool_Metaboxes();