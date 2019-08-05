# pcomm-wp-retirement-tool
The official contacts leave of absence tool for PartnerComm WordPress sites.

Use this plugin for any WordPress site, Quick Find or otherwise, that needs a retirement tool.  The plugin will create the appropriate post types and taxonomies needed to build a form-based retirement tool using a PHP/Wordpress powered back-end and a VueJS-based front-end.

## Installation

Add the following to composer.json's repositories section: 

```{
      "type": "vcs",
      "url": "https://github.com/PartnerComm/pcomm-wp-retirement-tool.git"
    },
```

Add the following to the `require` section of the composer.json file:

`"pcomm/pcomm-wp-retirement-tool":"<version number here>"`

From the webdocs directory in your terminal, run `composer update`.

Once the composer update is complete, activate the plugin in the Wordpress Admin.


## Setting up your Retirement tool

On activation two custom post types will be created:

`Retirement Tool Posts` - content posts that can be tagged to display on the results page.
`Retirement Feedback` - where user feedback goes from the feedback form attached to the tool.

Additionally, there will be three taxonomies created that get attached to `Retirement Tool Posts`:

`Retirement Tool Questions` - the general taxonomy used to both build the form and assign answers to posts for displaying on the results page.

`Retirement Tool Timeframes` - a secondary taxonomy used to further narrow down the results posts.

`Retirement Tool Categories` - a third taxonomy used to further narrow down the results posts.

To start building your form, create `Retirement Tool Questions` as a 3-level taxonomy.  Level 1 will be your first question answer choices.  These will be the overarching category that sets the path the user will take through the form.

Next, under each of those Level 1 items, set the next questions (if applicable) as child terms.  We will call these Level 2.  If there are no Level 2 terms, choosing the result on the first page will result in skipping immediately to the results page. 

Level 3 will be child terms of Level 2.  Any Level 3 terms will be answer choices for Level 2 questions.

## Setting content posts

Using the tag `intro-text` will qualify a post to be displayed as the intro paragraph for the results page.  Which post displays will be decided by which Level 1 Retirement Tool Question is assigned to the post.

Using the tag `helpful-resources` will designate the post to be a callout post at the bottom of the retirement tool.

Using the tag `feedback-additional-content` will control content inside the feedback form modal window.  This supports both a title and content.

## Question types

On the retirement tool question items (Level 2) you will have the option of assigning each of these a question type. The question types work as follows:

`Select One` - allows the user to select one of the answers only.  Clicking another answer will unselect the currently selected answer, and select the new one.

`Select Many` - allows the user to select all answers that apply.  If a `None of the above` option exists, clicking it will unselect any answers currently selected.  If another answer is selected, it will unselect `None of the above`.

`Date` - this will turn the question into a datepicker.  The datepicker has no default value and requires a selection to proceed.

For the `Select Many` questions, a tooltip may be added by filling in the `description` field on the term.

For the other questions, a `tip` description may be added by filling in the `description` field.

## API Routes

`/wp-json/wp/v2/retirement_tool_post`

`/wp-json/wp/v2/retirement_feedback`

`/wp-json/wp/v2/retirement_tool_question`

`/wp-json/wp/v2/retirement_tool_timeframe`

`/wp-json/wp/v2/retirement_tool_category`



## Resources

[Datepicker docs](https://www.npmjs.com/package/vuejs-datepicker)


## Changelog
0.9.12 - Complete rule selector logic and UI
0.9.10 - Add basic test UI for rule selector
0.9.7 - Undo 0.9.6
0.9.5 - Adjust Tool Tip to output as html instead of text.
0.9.3 - Add wrapper class for mobile responsive answer icons.  Update readme install instructions and formatting.
0.9.0 - Beta release, all features available and documentation written.
0.0.1 - Initialize git repo, scaffold plugin skeleton.