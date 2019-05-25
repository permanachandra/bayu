$.ajax({
    url         : "http://api.alquran.cloud/v1/surah",
    type        : "GET",
    dataType    : "json",
    cache: false,
    //data        : {get_param : 'value'},
    success     : function(result) {
        
       
            let surat = result.data;
              
        $.each(surat, function(i, data){
            //console.log(data.englishName);

            $('#list-surat').append (`   

              <option>${data.englishName}</option>    
             
           `)






        })

      



    }
});