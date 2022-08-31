var btnContainer = document.getElementById('svg-right-group')
      console.log(btnContainer)
      var btns = btnContainer.getElementsByClassName('btn')
      btnContainer.setAttribute('class', 'container')

      // for(let i = 0; i<btns.length; i++) {
      //   btns[i].setAttribute('onclick', 'setActive()')
        // addEventListener('click', function(){
        //   var current = document.getElementsByClassName('active')
        //   current[0].className = current[0].className.replace("active");
        //   this.className += " active";
        // })
      // }