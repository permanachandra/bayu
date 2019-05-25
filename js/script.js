$.ajax({
    url       : "source/surah/surah_1.json",
    type        : "GET",
    dataType    : "json",
    cache: false,
    
    success     : function(result) {        
       
            let surat = result;
              
        $.each(surat, function(i, data){
            //console.log(data.englishName);

            $('#list-surat').append (`   

              <option>${data.name}</option>    
              
             
           `)
        })
    }
});

