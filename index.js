function addingEventListener() {
    const input = document.getElementById('input');
                   //the input node will be doing the listening
  input.addEventListener('click', function(event) {
  // invoke event listener('event', call back function)   
    alert('I was clicked!');
    // work that will be executed 
  });
  }
  
