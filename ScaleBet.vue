<!-- = = = = = = = 
__   ___   _  ___ 
\ \ / | | | |/ _ \
 \ V /| |_| |  __/
  \_/  \__,_|\___|            
 =  =  =  =  =  =  -->
<script>
import { aStore } from '../store/store1'

export default {
           data(){ return {} },
      setup() {
	            const storex = aStore();      
		        return { storex };
	        },
      methods:{
      /* - - - - - - - -  - - - - - - -*/  
        getLevels(){
            /*
            escalona em níveis(levels) os grupos obtidos, de forma a agrupar
            os níveis existentes em categoria inteira e crescente
             exemplo: [ [ 1, 5 ], [ 2 ], [ 3, 4 ], [ 6 ] ]
             Este array possui no primeiro nível(level)  os grupos 1 e 5
            */
            let neo=[]; 
           
            let len=0;
            let arr=this.storex.getGeneral();
            len=arr.length;
			let cc=0;
			let group=[];
           if (len>0){
			for (let lev=0; lev<=15; lev++){
			 for (let i = 0; i < len; i++) {
				if (lev==arr[i].level){	
					group.push(arr[i].name);	
				}	
               
			 }	
				if ((group.length>0) ){
					
				 neo.push(group);
				 
				 group=[];
				} 
            }
           }
            return neo;
        },
    /* - - - - - - - -  - - - - - - -*/    
        getGroups(){
        /*
        
        */
            let neon=[];
           // let aux=[];
            let arr=this.storex.getGeneral();
            if (arr.length>0){
			Object.entries(arr).forEach( ([kk,vv])=>{
           
                 let yy=vv.vals;
             
                 let xx=vv.name;
                 //aux[xx]=yy;
                neon[xx]=yy;
                //neon.push( aux );
              
               //aux=[];  

			}); 
            } 
            return neon;
        },
        /* obtido no mozilla. org gera valores randômicos */
   /* - - - - - - - -  - - - - - - -*/     
         getRandomInt(min, max) {
                const minCeiled = Math.ceil(min);
                const maxFloored = Math.floor(max);
                return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
              },
    /* - - - - - - - -  - - - - - - -*/
      genSequence(){
        /* gera uma sequência baseada nos grupos escolhidos pelo usuário */
        let neo = this.getLevels();
        let neon = this.getGroups();
        let len=neo.length;
        let rand=[];
         let final=[];
         let nums=[];
        if (len>0){
            for (let i = 0; i < len; i++) {
                    let ma=neo[i].length;
                    let mi=0;
                    let numRa=this.getRandomInt(mi,ma);
                    rand.push(neo[i][numRa]);     
            }    

            
           
            rand.forEach(elem=>{
                
                final.push(neon[elem]);
            });
        
          
           final.forEach(ell=>{
             ell.forEach(tnn=>{
                nums.push(tnn);
             })
           });
        } 
           return nums;
       }
     /* - End methods - */  
      },
     /* - - - - - - - -  - - - - - - -*/  
       computed:{
        sequenciaCP(){
            let vv= this.genSequence();
            let str='';
            let cc=0;
            vv.forEach(ent=>{
                if (+ent<10){str+=" 0"+ent; }
                else{ str+=" "+ent; }
                cc++;
            });
            return str+" total:"+cc;
        }
       },
       mounted(){
   
      }  
    }
</script>

<template>
<small>
 <span><br>{{sequenciaCP}}
</span>
</small>

</template>

