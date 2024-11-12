<script>
import { aStore } from '../store/store1'
import ListBtn from './ListBtn.vue'
import ListGroup from './ListGroup.vue'
import ScaleBet from './ScaleBet.vue'
export default{
    components: { ListBtn,ListGroup,ScaleBet },
    setup() {
	            const storex = aStore();      
		        return { storex };
	        },
     data() {
        return {
            opNums:false,
            //opNumsII:false,
            opGroup:false,
            nameButton:'Make/Clear list',
            listAmount:100,
            listColls:10,
            limitValue:50,
            openscale:false,
            scalex:0,
            //listClear:0,
            listHaveZero:true, 
            numsToInsert:[]
        }
      },  
       computed:{
        
      },
      methods:{
          initVars(){
            this.listAmount=this.$refs.inputAmount.value;
            this.listColls=this.$refs.inputColls.value;
            this.listHaveZero=this.$refs.inputCheckZero.checked;
          },  
         openListNumbers(){
            this.initVars();
            
           // if (this.nameButton=='Open list'){ this.nameButton='Close list'; } 
           // else{ this.nameButton='Open list'; }
  
           // this.opNums=(!this.opNums);
           this.clearFunc(); 
           
         },
         clearFunc(){
            this.opNums=(!this.opNums);
            this.storex.clearTmpNums();
         },
         localCloseGroup(){

            let group =this.storex.getGroup();
            let level=this.storex.getLevel();
            let vals =this.storex.getTmpNums();
            let vv={};
            vv['name']=group;
            vv['level']=level;
            vv['vals']=vals;
          
             let gg=[];
           gg=this.storex.getGeneral();
            gg.push(vv);
            this.storex.general=gg;
            this.storex.clearTmpNums();
            this.storex.incrementGroup();
    
          this.opNums=(!this.opNums);
          
          //this.opNums=3;
          
         },
         clearAll(){
            this.storex.clearTmpNums();
            this.storex.clearConfig();
            this.storex.clearGeneral();
            this.storex.clearLimit();
            this.numsToInsert=[];
            this.opNums=(!this.opNums);
            this.openscale=false;;
         },
        
        scaleCards(){
            this.openscale=!this.openscale;
            this.scalex=this.$refs.inputSeq.value;
        },
        insertNums(){
            let nums=this.$refs.inputNums.value;
            const mya = nums.split(" ");
            let neoa=[];
            for (let i=0; i<=mya.length; i++){ neoa.push(+mya[i]); }
            this.numsToInsert=neoa;
              this.opNums=(!this.opNums);
            console.log(neoa);
        }

      /*End Methos */    
      },
     /*End Methos */      

      mounted(){
        //console.log('Component MainCP');
        
      }     
      //      
}
</script>

<template>
 <nav class="navbar-sm navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Lothvi</a>
  </div>
</nav> 

<div class="container  mt-3 ml-4">
<!-- left -->
 <button class="btn btn-sm btn-primary"  @click="clearAll()">New</button><br>
  <div class="row">
     <div class="col-2">
      <br> <br>
        <small>
         <span class="">
                <span class="" id="">Amount Numbers</span>   
            <input type="number" class="" id="inputAmount" ref="inputAmount" :value="listAmount" >
            &nbsp;
               <span class="" id="">Collumns</span>
            <input type="number" class="" id="inputColls" ref="inputColls" :value="listColls">
            
        </span>

        <div class="">
        <input class="" type="checkbox" checked id="inputCheckZero" 
        ref="inputCheckZero" >
        <label class="" for="inputCheckZero">&nbsp;Have Zero</label>
        
       </div>

         <span class="" id="">Group</span>   
            <input type="number" class="" id="" ref="inputGroup" :value="storex.getGroup()" disabled >
            &nbsp;
               <span class="" id="">Level</span>
            <input type="number" class="" id="" ref="inputLevel" v-model="storex.config.realLevel">
            <br> <br>
            <span class="" id="">Limit</span><input type="number" class=""  ref="inputLimit" v-model="limitValue"> 
            <span v-if="storex.getLimit()<=limitValue">{{storex.getLimit()}}</span>
            <span v-if="storex.getLimit()>limitValue"><span class='text-warning bg-dark'>{{storex.getLimit()}}</span></span>
            <input type='text' class='' value='' ref="inputNums" />
            <button class="btn btn-sm btn-secondary" @click="insertNums()">Insert</button>
            <br> <br>
           
          </small>  
        </div>  
  <!-- End left -->         
    <div class="col-7">
          

   
    
       
   
       

       

        <div id='centralBtns' class='text-center'> <!-- begin centralBtns  -->
        <span>
        <button class="btn btn-sm btn-primary"  @click="openListNumbers()"
          :value="nameButton">{{nameButton}}</button>
          &nbsp;&nbsp;
           <button class="btn btn-sm btn-primary"  @click="localCloseGroup()">Add numbers to group</button>
        </span>

   <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
        <span v-if="opNums==true">
         
         &nbsp;<!--button class="btn btn-sm btn-primary"  @click="clearFunc()">Clear </button -->
         <br><br>
        <ListBtn :amount="listAmount" :colls="listColls" :zero="listHaveZero" :nums="numsToInsert" />
       
        </span>
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
   <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
        <span v-if="opNums==false">
         
         &nbsp;<!--button class="btn btn-sm btn-primary"  @click="clearFunc()">Clear </button -->
         <br><br>
        <ListBtn :amount="listAmount" :colls="listColls" :zero="listHaveZero" :nums="numsToInsert" />
       
        </span>
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
        </div> <!-- End centralBtns -->
     </div>
     <div class="col-2">
            <br>
          <span v-if="storex.getTmpLength()>0">
            <mark>Selected numbers:</mark><br>
            <span v-for="vall in storex.getTmpNums()"> 
                 <h6 class="badge bg-primary">{{vall}}</h6>
            </span>
          </span>
          <br>
          <ListGroup />
    </div>
   
        
  </div>
    
    

</div>
<div class="container  mt-3 ml-4">
    <input type="number" class=""  ref="inputSeq" value="3" @onChange="openscale=false"> 
    <button class='btn btn-sm btn-primary' @click="scaleCards()">Scale Cards</button>
    <span v-if="openscale==true">
        <span v-for="vv in +scalex"> <ScaleBet /></span>
        <input type='text' class='form-control' value="" />
    </span>
     <br><br><br>
</div>
  
</template>

