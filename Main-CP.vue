<script>
import { aStore } from '../store/store1'
import list from './list.vue'
export default{
    components: { list },
    setup() {
	            const storex = aStore();      
		        return { storex };
	        },
     data() {
        return {
            opNums:false,
            opGroup:false,
            nameButton:'Open list',
            listAmount:0,
            listColls:0,
            //listClear:0,
            listHaveZero:false
        }
      },  
       computed:{
        
      },
      methods:{
         openListNumbers(){
            this.listAmount=this.$refs.inputAmount.value;
            this.listColls=this.$refs.inputColls.value;
            this.listHaveZero=this.$refs.inputCheckZero.checked;
            
            if (this.nameButton=='Open list'){ this.nameButton='Close list'; } 
            else{ this.nameButton='Open list'; }
  
            this.opNums=(!this.opNums);
          //  console.log('Button: '+this.nameButton);
           
         },
         clearList(){
            //this.listAmount=this.$refs.inputAmount.value;
            //this.listColls=this.$refs.inputColls.value;
            this.storex.clearTmpNums();
            //setTimeout(()=>{  this.opNums=false; }, 2000);
            this.openListNumbers();
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
          
          </div>
    <div class="col-7">
          

   
    
        <div class="input-group">
                <span class="input-group-text" id="">Amount Numbers</span>   
            <input type="number" class="form-control" id="inputAmount" ref="inputAmount" value="15" >
            &nbsp;
               <span class="input-group-text" id="" size="30">Collumns</span>
            <input type="number" class="form-control" id="inputColls" ref="inputColls" value="3">
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

   
        <span v-if="opNums==true">
         
         &nbsp;<button class="btn btn-sm btn-primary"  @click="clearList()">Clear List</button>
         <br><br>
        <list :amount="listAmount" :colls="listColls" :zero="listHaveZero" />
       
        </span>

     </div>
        <div class="col-2">
         <span class="input-group-text" id="">Group</span>   
            <input type="number" class="form-control" id="inputGroup" ref="inputGroup" :value="storex.getGroup()" disabled >
            &nbsp;
               <span class="input-group-text" id="" size="30">Level</span>
            <input type="number" class="form-control" id="inputLevel" ref="inputLevel" :value="storex.getLevel()">
            <button class="btn btn-sm btn-primary"  @click="openListNumbers(); storex.closeGroup();">Close Group</button>
        </div>
        
  </div>
</div>

  
</template>

