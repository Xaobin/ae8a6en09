<script>
import { aStore } from '../store/store1'
import list from './components/list.vue'
export defaullt{
    setup() {
	            const storex = useStore();      
		        return { storex };
	        },
     data() {
        return {
            opNums:false,
            opGroup:false,
            nameButton:'Open list',
            listAmount:0,
            listColls:0
        }
      },  
       computed:{
        
      },
      methods:{
         openListNumbers(){
            this.listAmount=this.$ref.inputAmount.value;
            this.listColls=this.$ref.inputColls.value;
            if (this.opNums==true){ this.opNums=false; }
            else{ this.opNums=true; }
            if (this.nameButton=='Open list'){ this.nameButton='Close list'; } 
            else{ this.nameButton='Open List'; }
            
         }
      },
      mounted(){
        
      }     
      //      
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <list />
    </div>
  </header>

  <main>
    
    <form>
    <div class="mb-3">
    <label for="inputNum" class="form-label">Amount Numbers:</label>
    <input type="number" class="form-control" id="inputAmount" ref="inputAmount">
     <label for="inputColls" class="form-label">Collumns:</label>
    <input type="number" class="form-control" id="inputColls" ref="inputColls">
    </div>
    <button class="btn btn-sm btn-primary" @click="openListNumbers()">{{nameButton}}</button>
    </form>
        <span v-if="opNums==true"><list :amount="listAmount" :colls="listColls" /></span>
  </main>
</template>

