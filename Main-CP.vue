<script>
import { aStore } from '../store/store1'
import ListBtn from './ListBtn.vue'
import ListGroup from './ListGroup.vue'
import ScaleBet from './ScaleBet.vue'
import aData from '../store/fdata.json'
  

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
            openNotes:false,
            scalex:0,
            //listClear:0,
            listHaveZero:true, 
            numsToInsert:[],
            selColor:'primary',
            toSelect:true,
            openTable:false,
            slate: aData
        }
      },  
       computed:{
        
      },
      methods:{
          initVars(){
            this.listAmount=this.$refs.inputAmount.value;
            this.listColls=this.$refs.inputColls.value;
            this.listHaveZero=this.$refs.inputCheckZero.checked;
            this.toSelect=this.$refs.inputCheckSel.checked;
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
        /*
        Transform this "10 11 12" in 10,11,12 without repeat
        */
        insertNums(){
            let nums=this.$refs.inputNums.value;
            nums=nums.trimStart();
            nums=nums.trimEnd();
            const mya = nums.split(" ");
            let neoa=[];
            mya.forEach(mi=>{
                neoa.push(mi);
            });
            ///for (let i=0; i<=mya.length; i++){ neoa.push(+mya[i]); }
           // this.numsToInsert=neoa;
           this.numsToInsert=this.preNums(neoa);
              this.opNums=(!this.opNums);
            //console.log(neoa);
        },
        insertLot(){
                let idd=this.$refs.inputIdLot.value;
                let vals=this.$refs.inputValsLot.value;
                let myOb={"id":idd,"vals":vals};
                let neoF= this.storex.getSlate();
                if ((idd!='')&&(vals!='')&&(vals.length>3)){
                    neoF.push(myOb);

                    this.storex.setSlate(neoF);
                
                    this.$refs.inputIdLot.value='';
                    this.$refs.inputValsLot.value='';
                    this.slate=this.storex.getSlate();
                }

        },
        /*
        Return a sequence without repeats
        ex: 10,11,11,12 return 10,11,12
        */
         preNums(nar){
            let neoarr=[];
            if (nar.length>0){
                let arr=nar;
                //let len=this.nums.length;
                let i=0;
                arr.forEach(tt=>{
                    if (neoarr.includes(+tt)==false){
                        if (tt!=''){
                            neoarr[i]=+tt;
                            i++;
                        }
                    }
                });
                }
                 return neoarr;
            },
            putVals(val){
                let vy=this.$refs.inputNums.value;
                this.$refs.inputNums.value=vy+" "+val;
            }
    
       

      /*End Methos */    
      },
     /*End Methos */      

      mounted(){
        if (this.storex.getSlateLength()<=0){
            this.storex.setSlate(this.slate);
        } else{
            this.slate=this.storex.getSlate();
        }
        
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
<!-- left --><!-- left -->
<!-- left --><!-- left -->
 <button class="btn btn-sm btn-primary"  @click="clearAll()">New</button><br>
  <div class="row">
     <div class="col-2">
      <br>
        <small>
                        <p>Amount  
            <input type="number" class="" id="inputAmount" ref="inputAmount" :value="listAmount" size="4">
                         </p> 
         
                    <p>Collumns
            <input type="number" class="" id="inputColls" ref="inputColls" :value="listColls" size="4">
                    </p>
           
        

                    <p class="">
        <input class="" type="checkbox" checked id="inputCheckZero" 
        ref="inputCheckZero" >
        <label class="" for="inputCheckZero">&nbsp;Have Zero</label>
        <br>
                    </p>

                  <p>Group
            <input type="number" class="" id="" ref="inputGroup" :value="storex.getGroup()" disabled  size="4">
                 </p> 
                  <p class="" id="">Level
            <input type="number" class="" id="" ref="inputLevel" v-model="storex.config.realLevel" size="4">
                  </p>
                  <p class="" id="">Limit
            <input type="number" class=""  ref="inputLimit" v-model="limitValue" size="4"> 
            <span v-if="storex.getLimit()<=limitValue">{{storex.getLimit()}}</span>
            <span v-if="storex.getLimit()>limitValue"><span class='text-warning bg-dark'>{{storex.getLimit()}}</span></span>
                  </p>
                   <p>  
            <input type='text' class='' value='' ref="inputNums" id="inputNums" />
            <button class="badge bg-secondary" @click="insertNums()">Insert</button>&nbsp;
            <button class="badge bg-secondary" @click="this.$refs.inputNums.value=''; ">Clear</button>
                </p>
             <br> 
            <input type="number" class=""  ref="inputSeq" value="3" @onChange="openscale=false" size="4"> 
             &nbsp;<button class='badge bg-secondary' @click="scaleCards()">Scale Cards</button>
            <br>  <br>  <br>
             <p>
              <button class='badge bg-secondary' @click="openNotes=!openNotes">Notes</button>
             </p> 
               <p>
              <button class='badge bg-secondary' @click="openTable=!openTable">Table</button>
             </p> 
             
          </small>  
        </div>  
  <!-- End left -->         
    <div class="col">
         <div class=""> 

   
    
       
   
       

       

        <div id='centralBtns' class='text-center'> <!-- begin centralBtns  -->
        <span>
        <button class="badge bg-primary"  @click="openListNumbers()"
          :value="nameButton">{{nameButton}}</button>
          &nbsp;
           <button class="badge bg-primary"  @click="localCloseGroup()">Add numbers to group</button>
            &nbsp;
             <small>
                <input class="" type="checkbox" checked id="inputCheckSel" 
                ref="inputCheckSel" @change=" this.toSelect=this.$refs.inputCheckSel.checked;">
                <label class="" for="inputCheckSel">&nbsp;To Select</label>
                 &nbsp;
                  <select class="form-select-sm" id="selectColor" ref="selectColor" @change="this.selColor=this.$refs.selectColor.value;">
                    <option value="primary">Blue</option>
                    <option value="info">Info</option>
                    <option value="warning">Yellow</option>
                    <option value="light">White</option>
                    <option value="dark">Dark</option>
                    <option value="success">Green</option>
                    <option value="danger">Red</option>
                   </select> 
            </small>
        </span>

   <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
        <span v-if="opNums==true">
         
         &nbsp;
         <br><br>
        <ListBtn :amount="listAmount" :colls="listColls" :zero="listHaveZero" 
        :nums="numsToInsert" :toselect="toSelect" :selcolor="selColor" />
       
        </span>
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
   <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
        <span v-if="opNums==false">
         
         &nbsp;
         <br><br>
        <ListBtn :amount="listAmount" :colls="listColls" :zero="listHaveZero" 
        :nums="numsToInsert" :toselect="toSelect" :selcolor="selColor" />
       
        </span>
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
       
        </div> <!-- End centralBtns -->
         <br>
            
               <span v-if="openscale==true">
              <span v-for="vv in +scalex"> <ScaleBet /></span>
             </span>
             <p v-if="openNotes==true"> 
                <textarea class='form-control' :value="storex.getNotes()" ref="inputNotes"> </textarea> 
                 <button class='badge bg-primary' @click="storex.addNotes(this.$refs.inputNotes.value);">Save</button>
             </p>
             <p v-if="openTable==true">
                <p v-for="ity in slate">
                   {{ity.id}} - {{ity.vals}} <button class="badge bg-secondary" 
                   @click="putVals(ity.vals)">[I]</button>
                </p>
                <input type="text" size="4" ref="inputIdLot" placeholder="ID">                
                <input type="text" size="20" ref="inputValsLot" placeholder="Numbers to add">
                <button class="badge bg-primary" @click="insertLot()">Add</button>
             </p>
      </div>
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

     <br><br><br>
</div>
  
</template>

