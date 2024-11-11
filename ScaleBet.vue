<!-- = = = = = = = 
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
         armazena em cada unidade os números de cada grupo
        exemplo: neon[0][1] = grupo um, valores: [0,1,2,3,4]
        neon[1[2] = grupo dois...neon[2][3] = grupo tres...
        para acessar os valores de um grupo, deve-se somar +1 no primeiro vetor 
        e repetir o valor atual [] no segundo. Desta forma, fica mais fácil acessar cada 
        unidade à media que as sequências são obtidas randomicamente unidas
        */
            let neon=[];
            let aux={};
            let arr=this.storex.getGeneral();
            if (arr.length>0){
			Object.entries(arr).forEach( ([kk,vv])=>{
           
                 let yy=vv.vals;
             
                 let xx=vv.name;
                 aux[xx]=yy;
             
                neon.push( aux );
              
               aux={};  

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
                
                final.push(neon[elem-1][elem]);
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
            vv.forEach(ell=>{
                str+=" "+ell;
            });
            return str;
        }
       },
       mounted(){
   
      }  
    }
</script>

<template>

 <span><input type='text' class='form-control' :value="sequenciaCP" />
</span>
<br><br><br>
</template>

