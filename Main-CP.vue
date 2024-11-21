<script>
import { aStore } from '../store/store1'
import ListBtn from './ListBtn.vue'
import ListGroup from './ListGroup.vue'
import ScaleBet from './ScaleBet.vue'
//import aData from '../assets/base/fdata.json'
  

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
            //slate: aData
            slate:[],
            openCompare:false,
            resultCompare:0,
            dkClass:'bg-dark text-white',
            dataBsTheme:'dark'
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
                neoa.push(+mi);
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
                    //this.slate=this.storex.getSlate();
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
            },
            copyV(vi){
                navigator.clipboard.writeText(vi);
            },
            openTab(){
                this.openTable=!this.openTable;
            },
            makeCompare(){
                let valys=this.$refs.inputCompare.value;
               
                 const mya = valys.split(" "); //arr string
                let neomya=[]
                mya.forEach(mii=>{ neomya.push(+mii) }); //arr int
                 let cc=0;
                 let arx=this.storex.getTmpNums();
                
                 arx.forEach(vaa=>{
                    if (neomya.includes(vaa)){
                        cc++;
                    }
                 });
                 this.resultCompare=cc;
                // */
                
            },
            putCompare(val){
                this.openCompare=true;
                this.$refs.inputCompare.value=val;
            },
            setDark(um){
                if (um==1){ this.dataBsTheme="dark"; this.dkClass="bg-dark text-white"; }
                if (um==0){ this.dataBsTheme=""; this.dkClass=""; }
            },
            changeTheme(){
                //data-bs-theme="dark"
               if (this.dataBsTheme=="dark"){
                    this.dkClass=""; this.dataBsTheme="";
                    this.storex.setTheme(0); this.setDark(0);
               }
               else{
                   this.setDark(1);
                    this.storex.setTheme(1);
               }

            }
    
       

      /*End Methos */    
      },
     /*End Methos */      

      mounted(){
        //if (this.storex.getSlateLength()<=0){
           // this.storex.setSlate(this.slate);
       // } else{
            this.slate=this.storex.getSlate();
            if (this.storex.getTheme()==1){ this.setDark(1); }
       // }
        
      }     
      //      
}
</script>

<template>
<div :class="dkClass" :data-bs-theme="dataBsTheme">
<li class="bg-dark">
&nbsp;&nbsp;<span class="text-white">Lothvi</span>
    <span class="float-end">
    <small><button class="badge bg-dark" @click="changeTheme()">Dark mode</button></small>
    &nbsp;&nbsp;
    </span>
</li>
  

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
              <button class='badge bg-secondary' @click="openCompare=!openCompare">Comparator</button>
             </p> 
             <p>
              <button class='badge bg-secondary' @click="openNotes=!openNotes">Notes</button>
             </p> 
               <p>
              <button class='badge bg-secondary' @click="openTab()">Open Table</button>
            
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
        <div class="" v-if="opNums==true">
         <br>
        <ListBtn :amount="listAmount" :colls="listColls" :zero="listHaveZero" 
        :nums="numsToInsert" :toselect="toSelect" :selcolor="selColor" />
         <br>
        </div>
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
   <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
        <div class="" v-if="opNums==false">
         <br>
        <ListBtn :amount="listAmount" :colls="listColls" :zero="listHaveZero" 
        :nums="numsToInsert" :toselect="toSelect" :selcolor="selColor" />
         <br>       
        </div>
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
<!-- Table, Compare, Notes -->
           <span v-if="((openscale==true)||(openCompare==true)||(openNotes==true))"><hr></span>
           
            <small>
               <div class="card" style="overflow:auto" v-if="openscale==true">
              
                 <span v-for="vv in +scalex"> <ScaleBet /></span>
              </div>
            <div class="" v-if="openCompare==true"> 
            
                <input type="text" class=''  ref="inputCompare" value="" size="42"> {{resultCompare}} &nbsp;
                 <button class='badge bg-secondary' @click="makeCompare()">Compare</button>
             </div>
             <div class="card" v-if="openNotes==true" style="overflow:auto"> 
                <p>
                <textarea class='form-control' :value="storex.getNotes()" ref="inputNotes"> </textarea> 
                 <button class='badge bg-secondary' @click="storex.addNotes(this.$refs.inputNotes.value);">Save</button>
                </p>
             </div>
            
                
            <div v-if="openTable==true" class="scrollbar-auto">
             <hr>
                <span class="row" v-for="ity in slate">
                    <p class="col">
                    {{ity.id}} - {{ity.vals}} 
                        <button class="badge bg-secondary" 
                        @click="putVals(ity.vals)">[I]</button>&nbsp;
                        <button class="badge bg-secondary" @click="copyV(ity.vals)">Copy</button>
                        &nbsp;<button class="badge bg-secondary" @click="putCompare(ity.vals)">Cp</button>
                    </p> 
                </span>
              </div>  
            </small>


        </div> <!-- End centralBtns, table and more -->
         
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


</div>
</template>

<style scoped>
.scrollbar-auto {
            scrollbar-width: auto;
            height: 150px;
            width: auto;
            overflow-y: scroll;
        }
        

</style>
