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
            //insertN:true,    
            realClass:'',
            defaultClass:'btn btn-secondary',
            selectedClass:'btn btn-primary',
            thirdClass:'btn btn-info',
            partClass:'btn btn-'
        }
      },
      props:['nameID','nameGroup','nums','toselect','selcolor'],  
      computed:{
        nameValueCP(){
            if ( +this.nameID<10 ){
                return "0"+this.nameID;
            }
            else return this.nameID;
        }
      },
      methods:{
         insertNum(nuu){
            if (this.toselect==true){
                this.storex.addTmpNum(nuu);
            }
         },
         changeButton(idd){
            let coloredClass=this.partClass+this.selcolor;
            if (coloredClass!=this.realClass){
                this.realClass=coloredClass;
            } else{
                this.realClass=this.defaultClass;
            }
             this.insertNum(idd);
           // if (this.clickClass!=this.defaultClass){ this.realClass=clickClass }
          //  else { this.realClass=this.defaultClass; }
           // if ((this.realClass==this.selectedClass)||(this.realClass==this.thirdClass)){
          ///      this.realClass=this.defaultClass;
          ///  } else{
          //  this.realClass=this.selectedClass;
          /// }
         // console.log('Colored class:'+coloredClass);
         // console.log('Real class:'+this.realClass);
               
            },
         
         
        verifyNumsToInsert(){
            let nti=this.nums;
            if (nti.length>0){
                //console.log('__'+nti);
                if (nti.includes(this.nameID)){
                    this.insertNum(this.nameID);
                    return true;
                }
            }
            return false;
        }
      },
      mounted(){
        this.realClass=this.defaultClass;
        if (this.verifyNumsToInsert()){ this.realClass=this.partClass+this.selcolor; }
        
      }
    }
</script>

<template>
  <button :class="realClass" :name="nameID" @click="changeButton(nameID)">{{nameValueCP}}</button>
</template>

