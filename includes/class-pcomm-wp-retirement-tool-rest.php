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

class Pcomm_Wp_Retirement_Tool_Rest
{
    public function __construct()
    {
        add_action('rest_api_init', array($this, 'create_api_questions_meta_field'));
        add_action('rest_api_init', array($this, 'create_api_answers_meta_field'));
    }

    public function create_api_questions_meta_field()
    {
        register_rest_field('retirement_tool_post', 'questions', array(
            'get_callback' => array($this, 'get_questions_for_api'),
   ));
    }

    public function get_questions_for_api($object)
    {
        die($object);
        $post_id = $object['id'];
        if (get_the_terms($post_id, 'retirement_tool_question')) {
            $questions = get_the_terms($post_id, 'retirement_tool_question');
            $returnable_questions = array_filter($questions, function ($elem) {
                if ($elem->parent === $post_id) {
                    return true;
                }
            });
            $returnable_questions = array_values($returnable_questions);
            return $returnable_questions;
        } else {
            return [];
        }
    }
    public function create_api_answers_meta_field()
    {
        register_rest_field('retirement_tool_question', 'questions', array(
       'get_callback'    => array($this, 'get_answers_for_api'),
     ));
    }

    public function get_answers_for_api($object)
    {
        $post_id = $object['id'];
        $children = get_term_children($post_id, 'retirement_tool_question');
        $returnable_children = array_map(function ($elem) {
            $child_term = get_term_by('id', $elem, 'retirement_tool_question');
            $child_term->question_type = get_term_meta($child_term->term_id, 'question_type', true);
            $child_term->answers = get_term_children($child_term->term_id, 'retirement_tool_question');
            $child_term->answers = array_map(function ($elem) {
                $answer_term = get_term_by('id', $elem, 'retirement_tool_question');
                $answer_term->disqualifier = get_term_meta($answer_term->term_id, 'retirement_tool_disqualifier', true);
                return $answer_term;
            }, $child_term->answers);
            return $child_term;
        }, $children);
        return $returnable_children;
    }
}





new Pcomm_Wp_Retirement_Tool_Rest();
