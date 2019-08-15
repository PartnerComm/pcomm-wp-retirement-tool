<style>
table {
    margin: 8px;
}

th {
    font-family: Arial, Helvetica, sans-serif;
    font-size: .7em;
    background: #3777BC;
    color: #FFF;
    font-weight: 700;
    padding: .5rem 1rem;
    font-size: 18px;
    border-collapse: separate;
    border: 1px solid #000;
}

td {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    border: 1px solid #DDD;
    padding: .25rem;
}
</style>
<?php 
$ratings = [1, 2, 3, 4, 5];
foreach($ratings as $number) {
  // ${'meta_query_' . $number} = get_posts( array(
  //   'meta_key'   => 'retirement_feedback_rating',
  //   'meta_value' => $int_number,
  // ) );
  $args = array(
    'posts_per_page'   => -1,
    'post_type'        => 'retirement_feedback',
    'meta_key' => 'retirement_feedback_rating',
    'meta_value' => $number
  );
  ${'meta_query_' . $number} = new WP_Query( $args );
}

?>


<div class="retirement-feedback-results">
  <table>
    <thead>
      <tr>
      <th>Rating</th>
      <th>Total Number</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Rating: 1</td>
        <td><?php echo count($meta_query_1->posts); ?></td>
      </tr>
      <tr>
        <td>Rating: 2</td>
        <td><?php echo count($meta_query_2->posts); ?></td>
      </tr>
      <tr>
        <td>Rating: 3</td>
        <td><?php echo count($meta_query_3->posts); ?></td>
      </tr>
      <tr>
        <td>Rating: 4</td>
        <td><?php echo count($meta_query_4->posts); ?></td>
      </tr>
      <tr>
        <td>Rating: 5</td>
        <td><?php echo count($meta_query_5->posts); ?></td>
      </tr>
    </tbody>
  </table>
</div>