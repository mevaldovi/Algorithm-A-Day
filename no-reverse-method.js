
const string = "supercalifragelisticexpialladocious"//35
const string2 = "hello"

const reverse = (str) => { 
        let reversed = "";      
         for (i = str.length - 1; i >= 0; i--){         
           reversed += str[i]; 
         }     
        console.log(reversed);
}
reverse(string);