<?php
  require("db_connect.php");

  $make = mysqli_real_escape_string($db, $_POST['make']);
  $model = mysqli_real_escape_string($db, $_POST['model']);
  $year = mysqli_real_escape_string($db, $_POST['year']);
  $url = "https://api.cars.com/modellistingaggregate/2.0/rest/compare/?apikey=<YOUR_API_KEY_HERE>&criteria=pricing,fuelEconomy,convenience,specifications,overview&vehicle='$make'-'$model'-'$year'";
 
  // Use file_get_contents to GET the URL in question.
  $contents = json_decode(file_get_contents($url));
  
  // If $contents is not a boolean FALSE value.
  if($contents !== false){
      // Print out the contents.
      echo json_encode($contents, JSON_PRETTY_PRINT);
  } else {
    http_response_code(500);
  }
?>