<?php
$peserta=[
["nama"=>"Alya","status"=>"active","kategori"=>"Web","nilai"=>85],
["nama"=>"Bima","status"=>"active","kategori"=>"Data","nilai"=>75],
["nama"=>"Citra","status"=>"inactive","kategori"=>"Web","nilai"=>901],
["nama"=>"Doni","status"=>"active","kategori"=>"Web","nilai"=>95],
["nama"=>"Eka","status"=>"active","kategori"=>"Data","nilai"=>80]
];

foreach($peserta as $p){
 if($p["status"]==="active" && $p["kategori"]==="Web" && $p["nilai"]>=80){
  echo $p["nama"]." - ".$p["nilai"].PHP_EOL;
 }
}
?>
