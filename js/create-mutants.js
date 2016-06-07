var mutant = {
  mutant_name:'Michaellll',
  real_name: 'miiiiiccchhhhaaaaeel' ,
  power: 'Yeah.'
}
function createMutant(){

  $.post({
    url: url,
    data: {
      mutant: mutant

    },
    succss: function(x){
      alert(x);
    }
  });
}
