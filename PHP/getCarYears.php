<?php
    require("db_connect.php");

    $sql = "SELECT DISTINCT year FROM CarInfo ORDER BY year DESC";
    $years = array();

    $result = mysqli_query($db, $sql);
    if (mysqli_num_rows($result) > 0) {
        // output data of each row
        while($row = mysqli_fetch_assoc($result)) {
            $years[] = array('year' => $row['year']);
        }
    }
    
    echo json_encode($years, JSON_PRETTY_PRINT);

    $db->close();
?>