const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
 
  if ((Array.isArray(members) ) !=	true) return false;
    
  let teamName = [];
  
  for(let name of members){
    if ((typeof name) !=	"string") continue;
    else {
      
      for (let i=0; i<name.length; i++){
        if (+name[i] == 0) continue;

        teamName.push(name[i]);
        break;
       }
   }
  }

return teamName.join('').toUpperCase().split('').sort().join('');
};
