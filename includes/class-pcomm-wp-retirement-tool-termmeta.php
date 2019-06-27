<?php
/**
 * Defines plugin Tax Term Meta (CPTs)
 *
 * This class defines all code necessary to register it's custom tax term meta
 *
 * @since      1.0.0
 * @package    Pcomm_Wp_Retirement_tool
 * @subpackage Pcomm_Wp_Retirement_tool/includes
 * @author     PartnerComm <noreply@partnercomm.net>
 */

 class Pcomm_Wp_Retirement_Tool_Term_Meta
 {
     public function __construct()
     {
         add_action("retirement_tool_question_add_form_fields", [$this, 'add_question_type_meta_field'], 10, 2);
         add_action('retirement_tool_question_edit_form_fields', [$this, 'edit_question_type_meta_field'], 10, 2);
         add_action('edited_retirement_tool_question', [$this,'save_question_type_meta_field']);
         add_action('create_retirement_tool_question', [$this,'save_question_type_meta_field']);

          add_action("retirement_tool_timeframe_add_form_fields", [$this, 'add_numeric_value_meta_field'], 10, 2);
          add_action('retirement_tool_timeframe_edit_form_fields', [$this, 'edit_numeric_value_meta_field'], 10, 2);
          add_action('edited_retirement_tool_timeframe', [$this,'save_numeric_value_meta_field']);
          add_action('create_retirement_tool_timeframe', [$this,'save_numeric_value_meta_field']);

          $fields_needing_alternate_title = ['category', 'timeframe'];
          foreach($fields_needing_alternate_title as $field) {
            add_action("retirement_tool_".$field."_add_form_fields", [$this, 'add_secondary_title_meta_field'], 10, 2);
            add_action("retirement_tool_".$field."_edit_form_fields", [$this, 'edit_secondary_title_meta_field'], 10, 2);
            add_action("edited_retirement_tool_".$field, [$this,'save_secondary_title_meta_field']);
            add_action("create_retirement_tool_".$field, [$this,'save_secondary_title_meta_field']);
          }
          
     }

     public static function add_question_type_meta_field($term)
     {
         ?>
      <div class="form-field">
        <label for="question_type"><?php _e('Question Type'); ?></label>
        <select name="question_type" id="question_type" value="question">
          <option value="select-one">Select One</option>
          <option value="select-many">Select Many</option>
          <option value="date">Date</option>
        </select>
        <p class="description"><?php _e('Enter a value for this field'); ?></p>
      </div>
    <?php
     }

     public static function edit_question_type_meta_field($term)
     {
    
      // put the term ID into a variable
         $id = $term->term_id;
     
         $term_value = esc_attr(get_term_meta($id, 'question_type', true)); ?>
      <tr class="form-field">
        <th><label for="question_type"><?php _e('Disqualifier'); ?></label></th>
        <td>	 
          <select name="question_type" id="question_type" value="<?php echo ($term_value) ? $term_value : 'select-one'; ?>">
            <option value="select-one" <?php echo ($term_value === 'select-one') ? 'selected' : ''; ?>>Select One</option>
            <option value="select-many" <?php echo ($term_value === 'select-many') ? 'selected' : ''; ?>>Select Many</option>
            <option value="date" <?php echo ($term_value === 'date') ? 'selected' : ''; ?>>Date</option>
          </select>
        </td>
      </tr>
    <?php
     }
    
     public static function save_question_type_meta_field($term_id)
     {
         if (isset($_POST['question_type'])) {
             $term_value = sanitize_text_field($_POST['question_type']);
             if ($term_value) {
                 update_term_meta($term_id, 'question_type', $term_value);
             }
         }
     }


     public static function add_numeric_value_meta_field($term)
     {
         ?>
      <div class="form-field">
        <label for="numeric_value"><?php _e('Numeric Value'); ?></label>
        <input name="numeric_value" id="numeric_value" value="" />
        <p class="description"><?php _e('Enter a number that corresponds to the title'); ?></p>
      </div>
    <?php
     }

     public static function edit_numeric_value_meta_field($term)
     {
      $id = $term->term_id;
     
      $term_value = esc_attr(get_term_meta($id, 'numeric_value', true)); ?>
      <tr class="form-field">
        <th><label for="numeric_value"><?php _e('Numeric Value'); ?></label></th>
        <td>	 
          <input name="numeric_value" id="numeric_value" value="<?php echo ($term_value) ? $term_value : ''; ?>" />
        </td>
      </tr>
    <?php
     }
    
     public static function save_numeric_value_meta_field($term_id)
     {
         if (isset($_POST['numeric_value'])) {
             $term_value = sanitize_text_field($_POST['numeric_value']);
             if ($term_value) {
                 update_term_meta($term_id, 'numeric_value', $term_value);
             }
         }
     }

     public static function add_secondary_title_meta_field($term)
     {
         ?>
      <div class="form-field">
        <label for="secondary_title"><?php _e('Secondary Title'); ?></label>
        <input name="secondary_title" id="secondary_title" value="" />
        <p class="description"><?php _e('Enter a number that corresponds to the title'); ?></p>
      </div>
    <?php
     }

     public static function edit_secondary_title_meta_field($term)
     {
      $id = $term->term_id;
     
      $term_value = esc_attr(get_term_meta($id, 'secondary_title', true)); ?>
      <tr class="form-field">
        <th><label for="secondary_title"><?php _e('Secondary Title'); ?></label></th>
        <td>	 
          <input name="secondary_title" id="secondary_title" value="<?php echo ($term_value) ? $term_value : ''; ?>" />
        </td>
      </tr>
    <?php
     }
    
     public static function save_secondary_title_meta_field($term_id)
     {
         if (isset($_POST['secondary_title'])) {
             $term_value = sanitize_text_field($_POST['secondary_title']);
             if ($term_value) {
                 update_term_meta($term_id, 'secondary_title', $term_value);
             }
         }
     }
     
 }

  

 new Pcomm_Wp_Retirement_Tool_Term_Meta();
