// write a jquery script that will make the opacity of #dialog to 100% when the user clicks on #open

$(document).ready(function(){
  $('#open').click(function(){
    $('#dialog').css('opacity', '100%');
  });

  $('#close').click(function(){
    $('#dialog').css('opacity', '0%');
  });

  $('#minimize').click(function(){
    $('#dialog').css('width', '550px');
    $('#dialog').css('height', '500px');
  });

  $(function() {
    var resizeable = false;
    
    // if mouse on wrapper but not on dialog, set resizeable to true
    // if mouse on dialog or not on wrapper, set resizeable to false
    $('#wrapper').on('mouseenter', function() {
        resizeable = true;
        $(this).css('cursor', 'move');
    }).on('mouseleave', function() {
        resizeable = false;
        $(this).css('cursor', 'default');
    });
    
    $('#dialog').on('mouseenter', function() {
        resizeable = false;
        $(this).css('cursor', 'default');
    }).on('mouseleave', function() {
        resizeable = true;
        $(this).css('cursor', 'move');
    });

   // check if we can start resizing
   $('#wrapper').on('mousedown', function() {
        if (resizeable) {
            console.log('resize');

            // get the current width and height of the dialog
            var width = $('#dialog').width();
            var height = $('#dialog').height();

            // check if mouse moved
            $(document).on('mousemove', function(e) {
                // resize the dialog
                $('#dialog').width(width + e.pageX);
                $('#dialog').height(height + e.pageY);
            });

        }
   });

   // on mouse up, stop resizing
    $(document).on('mouseup', function() {
        $(document).off('mousemove');
    });

});
  
});

