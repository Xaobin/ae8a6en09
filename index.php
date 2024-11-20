<?php
include 'BaseJson.php';
$b= new BaseJson();
$list=[];
$inputID="";
$responseID="";
$responseVals="";
$inputBeginEnd="";
$formApi='false';
$sendApi='false';
$dellist='false';
$slate='';
if (isset($_POST['inputBeginEnd']) ){ $inputBeginEnd=$_POST['inputBeginEnd']; }

if (isset($_POST['responseID'])){ $responseID=$_POST['responseID']; }

if (isset($_POST['inputID'])){ $inputID=$_POST['inputID']; }

if (isset($_POST['responseVals'])){ $responseVals=$_POST['responseVals']; }

if (isset($_POST['formApi'])){ $formApi=$_POST['formApi']; }

if (isset($_POST['sendApi'])){ $sendApi=$_POST['sendApi']; }

if (isset($_POST['dellist'])){ $dellist=$_POST['dellist']; }

if ($formApi=='true'){
    $object=$b->toFormatObject($inputID);
    //$str.="id:".$object->id." Vals:".$object->vals;
    if ($object!=null) {    $responseID=$object->id; $responseVals=$object->vals; }
    //$formApi='false';
}
if($sendApi=='true'){
    $object=$b->toFormatII($responseID,$responseVals);
    $list=$b->insertLocalJson($object,$inputBeginEnd,'list');
    $sendApi==false;
} else{
    $list=$b->listLocalJson();
}
if ($dellist=='true'){
    $list=$b->del1ElemlocalJson($inputBeginEnd,'list');
    $dellist='false';
}
//$slate=$b->stringFlyJson();
$slate=json_encode($b->getLocalJson());


?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Lothvi Base</title>
    <!-- Link para o CSS do Bootstrap mais recente -->
    <!--link href="https://maxcdn.bootstrapcdn.com/bootstrap/5.3.3/css/bootstrap.min.css" rel="stylesheet" -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"  crossorigin="anonymous">
</head>
<body>

<nav class="navbar-sm navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Lothvi Base Config</a>
  </div>
</nav> 

<div class="container  mt-3 ml-4">
    <div class="row">
             <div class="col-2"></div>
             <div class="col"><!-- Content -->

                Values Listed:
                <textarea class="form-control" rows="10" style="heigth:50%"><?php echo $list; ?></textarea>
                <hr>
                <form action="index.php" method="POST"><input type="text" name="inputID" 
                value="<?php echo $inputID;  ?>" 
                placeholder="ultimo, 2000">
                <input type='hidden' value='true' name='formApi'>
                <input type="submit" value="Search Value" class="btn btn-sm btn-secondary">

                </form>
                <hr>
                <form action="index.php" method="POST">
                    <?php if (($formApi=='true')&&($responseID!="")){
                            echo $responseID." - ".$responseVals;
                            echo "<br><br>Begin or end of the list";
                            echo "<br><input type='radio' name='inputBeginEnd' value='begin'>Begin
                            <input type='radio' name='inputBeginEnd' value='end'>End";
                            echo "<input type='hidden' value='$responseID' name='responseID'>";
                            echo "<input type='hidden' value='$responseVals' name='responseVals'>";
                            echo "<input type='hidden' value='true' name='sendApi'>";
                            echo "&nbsp;<input type='submit' class='btn btn-sm btn-secondary' value='Add Value'>";
                    } ?>
                </form>
                <hr><hr>
                <form action="index.php" method="POST">
                Delete one element from list
                        <br><input type='radio' name='inputBeginEnd' value='begin'>Begin
                            <input type='radio' name='inputBeginEnd' value='end'>End
                            
                            <input type='hidden' value="true" name="dellist">
                             &nbsp;<input type='submit' class='btn btn-sm btn-secondary' value='Del'>
                </form>
                <hr>  
                <hr>
                <input type="hidden" value='<?php echo $slate; ?>' id="inputSlate">
                <button class="btn btn-sm btn-primary" onclick="saveSlate()">Save LocalStorage</button>
                <hr>  
            </div><!-- End Content -->    
    </div>    
</div>





</body>
</html>
<script>
function saveSlate() { 
      let slate = document.getElementById('inputSlate').value; 
       localStorage.setItem('sla', slate); 
}
 function loadSlate() {
     const slate = localStorage.getItem('sla'); 
     if (sla) {
         document.getElementById('inputSlate').innerText = slate; 
    } 
         else { 
            document.getElementById('inputSlate').innerText = ''; 
    } 
}
</script>    