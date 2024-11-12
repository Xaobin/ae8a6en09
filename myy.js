let arr=[{"name":1,"level":1,"vals":[2,4,6,10,12,14]},{"name":2,"level":1,"vals":[2,4,6,15,13,11]},{"name":3,"level":2,"vals":[20,22,24,27,29,31]},{"name":5,"level":3,"vals":[38,39,40,43,41,45,44,47,49,51,53,55,57,59,58]},{"name":6,"level":3,"vals":[38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,57,59,61,63]},{"name":7,"level":2,"vals":[21,23,25,27,30]},{"name":8,"level":4,"vals":[70,72,74,76,78,80,83,84,85]},{"name":9,"level":4,"vals":[71,73,75,77,79,80,83,84,85]},{"name":10,"level":5,"vals":[89,91,93,95,97,99]},{"name":11,"level":5,"vals":[88,90,92,94,96,98]}];


			
			/* 
            vetor neo
            vetor que escalona em níveis(levels) 
            os grupos obtidos, de forma a agrupar
            os níveis existentes em categoria
             inteira e crescente
             exemplo:
             [ [ 1, 5 ], [ 2 ], [ 3, 4 ], [ 6 ] ]
             Este array possui no primeiro nível(level)  
             os grupos 1 e 5
            */
            let neo=[]; 
           
            let len=0;
            //let gg=[]
            len=arr.length;
			let cc=0;
			let group=[];
           // let lev=0;
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
            console.log(neo); //perfect!!

            console.log('---------');
           	//console.log(typeof arr); //object
            ///oth way
            //aux2=[xx,yy];
            //neon2.push(aux2);
            /*
        refatorado 
        obtem o valor de um grupo
        exemplo: quero os valores(vals)
        do grupo numero 8, escreo então
         neon[8] e obtenho os valores
        [70,72,74,76,78,80,83,84,85]
            */

            let neon=[];
            let aux={};
            let aux2=[];
			Object.entries(arr).forEach( ([kk,vv])=>{
              //  xx=vv.name;
                 let yy=vv.vals;
                // let zz=vv.name.toString();
                 let xx=vv.name;
                 //aux[xx]=yy;
                  aux2=[xx,yy];
                //neon.push(aux2);
                neon[xx]=yy;
                //aux[(xx.toString()]=yy;
				//neon.push(aux);
                //neon.push( aux );
               // console.log(vv.vals);
               //aux={};  
               aux2=[];

			});  
          //  let vvv=5;
			//console.log(neon[vvv-1]);
           // console.log(Object.values(neon[vvv-1]));
           // console.log(Object.keys(neon[vvv-1]));
           // console.log(neon[vvv-1][vvv]);
          //  console.log('xxxxxxxx');
           
        /* function get in mozilla.org */
            function getRandomInt(min, max) {
                const minCeiled = Math.ceil(min);
                const maxFloored = Math.floor(max);
                return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
              }
            
             /*
              function getValues(ff){
                for (let i = 0; i < neon.length; i++) {
                     console.log(Object.keys(neon[i]));

                }   
              }
             */   
              console.log(' %%%%%%%%%% ');
           // console.log(getValues(1));
		
			len=neo.length;
            let rand=[];
         // /*  
           
                for (let i = 0; i < len; i++) {
                    let ma=neo[i].length;
                    let mi=0;
                    let numRa=getRandomInt(mi,ma);
                    rand.push(neo[i][numRa]);
                 
            }    
           // */
            //console.log(neo[0][0]);
            //console.log(neo[0][1]);
           
           // console.log(neon);
            console.log(' $$$$$$$$$$$$ ');
            //rand=[ 1, 7, 5, 8, 10 ];
            console.log(rand);
            let final=[];
           
           /// console.log(neon[5]);
            //console.log(neon[7]);
           /// console.log(neon[8]);
            //console.log(neon[10]);
            rand.forEach(elem=>{
              //  console.log(neon[elem]);
              //  console.log(elem);
                final.push(neon[elem]);
            });
             console.log(' xxxxxxxxxxxxx ');
           // console.log(final);
        ///*   
           let nums=[];
           final.forEach(ell=>{
             ell.forEach(tnn=>{
                nums.push(tnn);
             })
           });

           let str='';
           nums.forEach(ell=>{
               str+=" "+ell;
           });
          // console.log(nums); 
           console.log(str);
    //*/		
