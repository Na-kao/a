var images= [
    "https://www.psicologosberrini.com.br/wp-content/uploads/10-dicas-de-saude-mental-para-mulheres-1024x768.jpg";
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCtS0WSXeeh_b4d3xEE3hGYbOIuvNYC2oArw&usqp=CAU";
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTVcdsUMz1_XQEX6NBj9J8jL7EKA3S0MOi2A&usqp=CAU";
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTVm7QeztbyDOcpM3u2DouCNS-m0hF8HsCxA&usqp=CAU";
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxZ-rAfE47tPTmJyZq_qdiC0P-h9mrw16tvg&usqp=CAU";
  ]
  var i= 1
  function mover(){
   if (i == 5)
     {
       i=0;
     }
    document.getElementById("mm").src = images[i];
    i++;
  }