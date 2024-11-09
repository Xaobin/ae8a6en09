<script>
import { aStore } from '../store/store1'
import list from './list.vue'
import ListGroup from './ListGroup.vue'
export default{
    components: { list,ListGroup },
    setup() {
	            const storex = aStore();      
		        return { storex };
	        },
     data() {
        return {
            opNums:false,
            //opNumsII:false,
            opGroup:false,
            nameButton:'Open list',
            listAmount:15,
            listColls:3,
            //listClear:0,
            listHaveZero:false
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
            
            if (this.nameButton=='Open list'){ this.nameButton='Close list'; } 
            else{ this.nameButton='Open list'; }
  
            this.opNums=(!this.opNums);
          //  console.log('Button: '+this.nameButton);
           
         },
         clearFunc(){
            //this.listAmount=this.$refs.inputAmount.value;
            //this.listColls=this.$refs.inputColls.value;
            //this.storex.clearTmpNums();
            //this.storex.clearConfig();
          //  this.storex.clearGeneral();
            //setTimeout(()=>{  this.opNums=false; }, 2000);
            //this.openListNumbers();
             this.initVars();
         },
         localCloseGroup(){
           // this.openListNumbers(); 
           // this.storex.closeGroup();
            let group =this.storex.getGroup();
            let level=this.storex.getLevel();
            let vals =this.storex.getTmpNums();
            let vv={};
            vv['name']=group;
            vv['level']=level;
            vv['vals']=vals;
           // this.addGeneral(this.groupNums);
             let gg=[];
           gg=this.storex.getGeneral();
            gg.push(vv);
            this.storex.general=gg;
            this.storex.clearTmpNums();
            this.storex.incrementGroup();
           // console.log('General:');
          //  console.log(this.storex.getGeneral());
          
         }
        

      },
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

<div class="container text-center mt-3">
  <div class="row">
          <div class="col-2">

          <span v-if="storex.getTmpLength()>0">
            <mark>Selected numbers:</mark><br>
            <span v-for="vall in storex.getTmpNums()"> 
                 <h6 class="badge bg-secondary">{{vall}}</h6>
            </span>
          </span>
          <br>
          <ListGroup />
          </div>
    <div class="col-7">
          

   
    
        <div class="input-group">
                <span class="input-group-text" id="">Amount Numbers</span>   
            <input type="number" class="form-control" id="inputAmount" ref="inputAmount" :value="listAmount" >
            &nbsp;
               <span class="input-group-text" id="" size="30">Collumns</span>
            <input type="number" class="form-control" id="inputColls" ref="inputColls" :value="listColls">
        </div>
   
       

        <div class="input-group">
        <input class="form-check-input" type="checkbox" checked id="inputCheckZero" 
        ref="inputCheckZero" >
        <label class="form-check-label" for="inputCheckZero">&nbsp;Have Zero</label>
       </div>


        <span>
        <button class="btn btn-sm btn-primary"  @click="openListNumbers()"
          :value="nameButton">{{nameButton}}</button>
        </span>

   <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
        <span v-if="opNums==true">
         
         &nbsp;<button class="btn btn-sm btn-primary"  @click="clearFunc()">Clear </button>
         <br><br>
        <list :amount="listAmount" :colls="listColls" :zero="listHaveZero" />
       
        </span>
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->

     </div>
        <div class="col-2">
         <span class="input-group-text" id="">Group</span>   
            <input type="number" class="form-control" id="inputGroup" ref="inputGroup" :value="storex.getGroup()" disabled >
            &nbsp;
               <span class="input-group-text" id="" size="30">Level</span>
            <input type="number" class="form-control" id="inputLevel" ref="inputLevel" v-model="storex.config.realLevel">
            <button class="btn btn-sm btn-primary"  @click="localCloseGroup()">Close Group</button>
        </div>
        
  </div>
</div>

  
</template>

