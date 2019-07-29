
( function () {
    'use strict';
    // Keep track of the output commands
    const outputCommands = [];
  
    // Add button to page
    const button = document.createElement( 'button' );
    button.textContent = 'Script Search';
    button.className = 'btn btn-sm';
    document.body
      .getElementsByClassName( '.search-filters-bar--jobs-search' )[ 0 ]
      .appendChild( button );
    
    button.onclick = function (){
        let body = document.body.getElementsByClassName('jobs-search-two-pane_details')
        body.search()
    }  
}) 