$( function() {
    $( "#dialog" ).dialog({
        autoOpen: false

    });
    
    $( "#open" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
    });

  } 
);

