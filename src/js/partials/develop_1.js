try{

    function scalePage(){

        function scaleMain(){
            if($(window).width()<1000){
                var val = $(window).width()/1000;
                console.log(val);
                $('.mbox').css({'transform':'scale('+val+')'});
            }
            else{
                $('.mbox').css({'transform':'scale(1)'});
            }
        }

        scaleMain();

        $(window).resize(function(){

            scaleMain();

        });

    }


    $(document).ready(function(){

        scalePage();

    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_1.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}