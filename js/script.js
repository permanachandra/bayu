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

            $('#drop').append (`
           
            <div class="dropdown">
                        <button class="dropbtn">Dropdown
            <i class="fa fa-caret-down"></i>
                        </button>
               <div class="dropdown-content">
               <a href="#">${data.englishName}</a>
                  
                </div>
            </div>
              
              
           



            `)






        })

      



    }
});