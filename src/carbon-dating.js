const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  if ((typeof sampleActivity) !=	"string") return false;
  
  if ( isFinite(sampleActivity) != true || Number(sampleActivity) <= 0 || Number(sampleActivity) > 15 ) return false;

    let old= (Math.log(MODERN_ACTIVITY / sampleActivity))/(0.693/HALF_LIFE_PERIOD);
   
    return Math.ceil(old);
  
};
