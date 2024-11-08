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

<div class="container text-center">
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


        <button class="btn btn-sm btn-primary" @click="openListNumbers()">{{nameButton}}</button>
   
        <span v-if="opNums==true"><list :amount="listAmount" :colls="listColls" :zero="listHaveZero" /></span>

     </div>
        <div class="col-1"></div>
        
  </div>
</div>

  
</template>

