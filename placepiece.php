<?php
    $turn = $_POST['turn'] % 6;

    $array = [
        0 => "♙",
        1 => "♟",
        2 => "♘",
        3 => "♞",
        4 => "♔",
        5 => "♚",
    ];

    echo json_encode($array[$turn]);
?>
