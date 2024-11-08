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
            console.log('Button: '+this.nameButton);
           
         },
         testaCheck(){
             console.log('input check zero:'+this.$refs.inputCheckZero.checked);
              //console.log('listHaveZero:'+this.listHaveZero);
         }

      },
      mounted(){
        console.log('Component MainCP');
        
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
          <div class="col-2"></div>
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
        ref="inputCheckZero" @click="testaCheck()">
        <label class="form-check-label" for="inputCheckZero">&nbsp;Have Zero</label>
       </div>


        <span>
        <button class="btn btn-sm btn-primary"m  @click="openListNumbers()"
          :value="nameButton">{{nameButton}}</button>
        </span>
   
        <span v-if="opNums==true"><list :amount="listAmount" :colls="listColls" :zero="listHaveZero" /></span>

     </div>
        <div class="col-1"></div>
        
  </div>
</div>

  
</template>

