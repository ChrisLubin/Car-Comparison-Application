<?php
    require("db_connect.php");

    $year = mysqli_real_escape_string($db, $_POST['year']);
    $make = mysqli_real_escape_string($db, $_POST['make']);

    $sql = "SELECT DISTINCT model FROM CarInfo WHERE year = $year AND make = '$make' ORDER BY model ASC";
    $models = array();

    $result = mysqli_query($db, $sql);
    if (mysqli_num_rows($result) > 0) {
        // Output data of each row
        while($row = mysqli_fetch_assoc($result)) {
            $models[] = array('model' => $row['model']);
        }
    }
    
    echo json_encode($models, JSON_PRETTY_PRINT);

    $db->close();
?>