const insert=document.getElementById('insert');//get the element with id insert

window.addEventListener('keydown',(e)=>{//add event listener to window for keydown event
    insert.innerHTML=`
    <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>  
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>//
  </div>`;//insert the key, keycode and code into the insert element as innerHTML
});

//keydown is an event that fires when a key is pressed down