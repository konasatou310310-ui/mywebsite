<?php
mb_language("Japanese");
mb_internal_encoding("UTF-8");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  header("Location: index.html");
  exit;
}

$to = "info@align-event.com";
$subject = "【スタッフ応募】募集フォームから応募がありました";

function clean($value) {
  $value = trim($value);
  $value = str_replace(array("\r", "\n"), "", $value);
  return htmlspecialchars($value, ENT_QUOTES, "UTF-8");
}

function clean_textarea($value) {
  $value = trim($value);
  return htmlspecialchars($value, ENT_QUOTES, "UTF-8");
}

$name = clean($_POST["name"] ?? "");
$kana = clean($_POST["kana"] ?? "");
$tel = clean($_POST["tel"] ?? "");
$email = clean($_POST["email"] ?? "");
$area = clean($_POST["area"] ?? "");
$work = clean($_POST["work"] ?? "");
$experience = clean($_POST["experience"] ?? "");
$message = clean_textarea($_POST["message"] ?? "");
$privacy = clean($_POST["privacy"] ?? "");

if ($name === "" || $kana === "" || $tel === "" || $email === "" || $work === "" || $privacy === "") {
  exit("必須項目が入力されていません。");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  exit("メールアドレスの形式が正しくありません。");
}

$body = <<<EOT
スタッフ募集フォームから応募がありました。

------------------------------
お名前
{$name}

フリガナ
{$kana}

電話番号
{$tel}

メールアドレス
{$email}

お住まいのエリア
{$area}

希望する働き方
{$work}

イベントスタッフ経験
{$experience}

自己PR・質問など
{$message}

個人情報の取り扱い
{$privacy}
------------------------------

送信日時
EOT;

$body .= date("Y年m月d日 H:i");

$headers = "From: info@align-event.com\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$result = mb_send_mail($to, $subject, $body, $headers);

if ($result) {
  header("Location: thanks.html");
  exit;
} else {
  exit("送信に失敗しました。時間をおいて再度お試しください。");
}
?>