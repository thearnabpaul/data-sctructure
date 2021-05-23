const boxes = [1,2,3,4,5];
const items = ['a','b','c','d','e']
function permu(mask){
  for (i=0;i<mask.length;i++){
    for (j=0;j<mask.length;j++){
      console.log(mask[i],mask[j])
    }
  }
};

function permu1(mask){
  for (i=0;i<mask.length;i++){
    for (j=0;j<mask.length;j++){
      console.log(mask[i],'+',mask[j],'=',mask[i]+mask[j])
    }
  }
};

permu(boxes);
permu1(boxes);
