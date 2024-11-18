<?php
 class BaseJson{
    function getValueJsonApi($di){
        $ch = curl_init();
        ///'ultimo'  
        if ($di!='')
        {    $urlx="https://api.guidi.dev.br/loteria/lotomania/".$di;
            
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_URL, $urlx);
            $result = curl_exec($ch);
            curl_close($ch);

            $obj = json_decode($result);
            return $obj;
        } else{
            echo "Value receive is null...".$di;
            return null;
        }
        
    }
    function getFileName(){
        $dr=$_SERVER['DOCUMENT_ROOT'];
        $part="\\src\\store\\";
        $doc="fdata.json";
        return $dr.$part.$doc;
    }
    function getLocalJson(){
        $dr=$this->getFileName();
        $val = file_get_contents($dr);
        return json_decode($val);
    }
    function toFormatObject($uma){
        $v=$this->getValueJsonApi($uma);
        $arr=[];
        $conc=0;
        if ($v!=null){
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
            $lis=ltrim($lis);
        // $um="{\"id\":\"$conc\",\"vals\":\"$lis\"}";
            $um=(object)["id"=>$conc,"vals"=>$lis];
        
            return $um;
        }
        else{ return null; }
    }
    function toFormatII($id,$vals){
        $um= $um=(object)["id"=>$id,"vals"=>$vals];
        return $um;
    }
    function listLocalJson(){
        $arr=$this->getLocalJson();
        $lis=" ";
        foreach ($arr as $ke=>$va){
            //echo "<br>..".var_dump($va);
           
            $lis.=" id:".$va->id;
             $lis.=" vals:".$va->vals.PHP_EOL; 
        }    
        return $lis;
    }
    function setLocalJson($fill){
        $endr=$this->getFileName();
        $str=json_encode($fill);
        file_put_contents($endr,$str);
    }
    function insertLocalJson($myob,$pos='begin',$format='list'){
        $v=$this->getLocalJson();
        if ($pos=='end'){ array_push($v,$myob); }
        if ($pos=='begin'){ array_unshift($v,$myob); }
        $this->setLocalJson($v);
        if ($format=='json') {  return $this->getLocalJson(); }
        if ($format=='list') { return $this->listLocalJson(); }
       
    }
    function del1ElemlocalJson($pos='begin',$format='list'){
        $v=$this->getLocalJson();
        if ($pos=='begin'){ array_shift($v); }
        if ($pos=='end'){ array_pop($v); }
        $this->setLocalJson($v);
        if ($format=='json') {  return $this->getLocalJson(); }
        if ($format=='list') { return $this->listLocalJson(); }
    }

}
    

//$b=new BaseJson();
//$d="{\"id\":\"2699\",\"vals\":\"\"}";
/*
$vals="01 16 20 25 29 34 35 36 51 56 59 60 62 63 66 72 85 86 87 90";
$id="2703";
$object =(object) [ "id" => $id,"vals" => $vals ];
*/
//echo var_dump($object);

//echo print_r($v);
//$v=$b->toFormatObject('ultimo'); ///ok
//array_unshift($arr,$put) -> put on beginning
//array_shift($arr) -> remove on elem from beginning of array
//array_push -> put in end of array
//array_pop -> pop the element off the end of array
//echo var_dump($v);
//    /*

//       */   
//echo $v;
/*
[
    {"id":"2699","vals":"01 16 20 25 29 34 35 36 51 56 59 60 62 63 66 72 85 86 87 90"},
    {"id":"2698","vals":"00 02 07 15 19 24 28 32 34 37 50 51 55 59 69 73 74 87 89 94"},
    {"id":"2697","vals":"06 10 15 22 24 29 30 36 42 45 46 51 54 55 59 62 63 72 79 92"},
    {"id":"2696","vals":"08 17 31 38 39 43 44 47 49 51 59 61 62 63 66 81 82 93 97 98"},
    {"id":"2695","vals":"06 19 26 30 32 37 41 52 53 57 60 63 65 75 81 83 85 90 92 94"},
    {"id":"2694","vals":"02 11 15 21 22 26 28 29 30 33 35 44 49 53 61 67 79 81 87 91"},
    {"id":"2693","vals":"01 09 10 11 19 24 28 36 39 40 42 53 54 61 75 78 85 92 93 98"}
]

*/

?>