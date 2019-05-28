<?php
    require("db_connect.php");

    $year = mysqli_real_escape_string($db, $_POST['year']);

    $sql = "SELECT DISTINCT make FROM CarInfo WHERE year = $year ORDER BY make ASC";
    $makes = array();

    $result = mysqli_query($db, $sql);
    if (mysqli_num_rows($result) > 0) {
        // Output data of each row
        while($row = mysqli_fetch_assoc($result)) {
            $makes[] = array('make' => $row['make']);
        }
    }
    
    echo json_encode($makes, JSON_PRETTY_PRINT);

    $db->close();
?>