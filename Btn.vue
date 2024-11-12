<!-- = = = = = = = 
import MyComponent from './MyComponent.vue'

export default {
  components: {
    MyComponent
  }
}

__   ___   _  ___ 
\ \ / | | | |/ _ \
 \ V /| |_| |  __/
  \_/  \__,_|\___|            
 =  =  =  =  =  =  -->
<script>
import { aStore } from '../store/store1'
export default {
      setup() {
	            const storex = aStore();      
		        return { storex };
	        },
      data() {
        return {
        
            realClass:'',
            defaultClass:'btn btn-secondary',
            selectedClass:'btn btn-primary',
            thirdClass:'btn btn-info',
        }
      },
      props:['nameID','nameGroup','nums'],  
      computed:{
        nameValueCP(){
            if ( +this.nameID<10 ){
                return "0"+this.nameID;
            }
            else return this.nameID;
        }
      },
      methods:{
         changeButton(idd){
            if ((this.realClass==this.selectedClass)||(this.realClass==this.thirdClass)){
                this.realClass=this.defaultClass;
            } else{
            this.realClass=this.selectedClass;
            }
           //this.storex.setNums(this.storex.getNameGroup(), this.storex.getLevel,this.nameID);
           this.storex.addTmpNum(idd);
          // console.log(this.storex.getTmpNums());
         },
        verifyNumsToInsert(){
            let nti=this.nums;
            if (nti.length>0){
                //console.log('__'+nti);
                if (nti.includes(this.nameID)){
                    this.storex.addTmpNum(this.nameID);
                    return true;
                }
            }
            return false;
        }
      },
      mounted(){
        this.realClass=this.defaultClass;
        if (this.verifyNumsToInsert()){ this.realClass=this.thirdClass; }
        
      }
    }
</script>

<template>
  <button :class="realClass" :name="nameID" @click="changeButton(nameID)">{{nameValueCP}}</button>
</template>

