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
            if (this.opNums==true){ this.opNums=false; }
            else{ this.opNums=true; }
            if (this.nameButton=='Open list'){ this.nameButton='Close list'; } 
            else{ this.nameButton='Open List'; }
           
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
  <header>
   

    <div class="wrapper">
    
    </div>
  </header>

  <main>
    
    <form>
    <div class="mb-3">
    <label for="inputNum" class="form-label">Amount Numbers:</label>
    <input type="number" class="form-control" id="inputAmount" ref="inputAmount" value="15">
     <label for="inputColls" class="form-label">Collumns:</label>
    <input type="number" class="form-control" id="inputColls" ref="inputColls" value="3">
    </div>
    <div class="form-check">
     <input class="form-check-input" type="checkbox" checked id="inputCheckZero" 
     ref="inputCheckZero" @click="testaCheck()">
     <label class="form-check-label" for="inputCheckZero">Have Zero</label>
   </div>
    </form>
    <button class="btn btn-sm btn-primary" @click="openListNumbers()">{{nameButton}}</button>
   
        <span v-if="opNums==true"><list :amount="listAmount" :colls="listColls" :zero="listHaveZero" /></span>
  </main>
</template>

