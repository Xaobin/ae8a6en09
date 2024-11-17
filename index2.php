<?php
 class BaseJson{
    function getValueJson($di){
        $ch = curl_init();
        ///'ultimo'  
        $urlx="https://api.guidi.dev.br/loteria/lotomania/".$di;
        
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL, $urlx);
        $result = curl_exec($ch);
        curl_close($ch);

        $obj = json_decode($result);
        return $obj;
    }
    function getLocalJson(){
        $dr=$_SERVER['DOCUMENT_ROOT'];
        $doc="fdata.json";
        $val = file_get_contents($dr."\\src\\store\\".$doc);
        return $val;
    }
    function transUma($uma){
        $v=$this->getValueJson($uma);
        $arr=[];
        $conc=0;
        foreach ($v as $ke=>$va){
        // echo "<br>";
            //echo var_dump($va);
            if ($ke=='listaDezenas'){
            // echo "Array:<br>";
                //echo var_dump($va);
                $arr=$va;
                //$peg=true;
            }
            if ($ke=='numero'){
            $conc=$va;
            }
        }
        $lis="";
        foreach ($arr as $vi){
            $lis.=" ".$vi;
        }
        $um="{\"id\":\"$conc\",\"vals\":\"$lis\"}";

        return $um;


    }
}
    

$b=new BaseJson();
//$v=$b->getLocalJson();
//$v=$b->transUma('ultimo'); ///ok


///echo $v;
/*
$arr=array(20)=> { [0]=> string(2) "01" [1]=> string(2) "16" [2]=> string(2) "20" [3]=> string(2) "25" [4]=> string(2) "29" [5]=> string(2) "34" [6]=> string(2) "35" [7]=> string(2) "36" [8]=> string(2) "51" [9]=> string(2) "56" [10]=> string(2) "59" [11]=> string(2) "60" [12]=> string(2) "62" [13]=> string(2) "63" [14]=> string(2) "66" [15]=> string(2) "72" [16]=> string(2) "85" [17]=> string(2) "86" [18]=> string(2) "87" [19]=> string(2) "90" };
*/


?>