$('#btn').click(function(){
    var firstname = $('#firstName').val();
    var lastname = $('#lastName').val();
    var fullname = firstname + ' ' + lastname;
    $('#fullName').val(fullname);
   }
        
        
        
        )
    
    
   $('#checkbox').click(function(){
       $('#pass').attr('type',$('#checkbox').is(':checked')?'text':'password');
   }
        )