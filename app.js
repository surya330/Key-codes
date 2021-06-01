const insert = document.getElementById('insert')


window.addEventListener('keydown', (ele) => {
    insert.innerHTML = `
    <div class="key">
    ${ele.key === ' ' ? 'Space' : ele.key} 
    <small>event.key</small>
  </div>
  <div class="key">
    ${ele.keyCode}
    <small>event.keyCode</small>
  </div>
  <div class="key">
    ${ele.code}
    <small>event.code</small>
  </div>
  <br>
  <div class = "key-code">
    <h1>Press any key to get the keycode</h1>
  </div>
    `
  })
