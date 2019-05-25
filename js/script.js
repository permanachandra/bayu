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
           
            <div class="dropdown">
        
                <a class="dropdown-item" href="#">${data.englishName}</a>
             
            </div> 
            
                
            
            
  
             
           `)






        })

      



    }
});