window.addEventListener('load', () => {
  let anchors = document.body.querySelectorAll('a');
  anchors.forEach(a => {
    a.addEventListener('click', e => {
      e.stopPropagation();
      e.preventDefault();

      let height = e.target.height;
      let width = e.target.width;
      let src = e.target.src;

      openInNewTab(src, height, width);
    });
  });

  // workaround for base64
  function openInNewTab(src, height, width) {
    let win = window.open();
    win.document.write('<style>body{background:#242424;color:#fff;}div{margin:0 auto;width:'+width+';display:block;}</style><div><a href="'+src+'" download><img src='+src+'></a></a><p>'+width+'x' +height+ '</p></div>');
  }
});


// let height = document.querySelector('IMG').clientHeight;
// let width = document.querySelector('IMG').clientWidth;

// let height_span = document.getElementById('height');
// let width_span = document.getElementById('width');

// height_span.value = height;
// width_span.value = width;




