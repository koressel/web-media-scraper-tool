# Media Scraper Tool for Chrome
### A Google Chrome extension that offers a clean UI for viewing and downloading media on the web.

![alt text](icon.png "Logo Title Text 1")


```javascript
  let anchor_tags = document.body.querySelectorAll('a');

  anchor_tags.forEach(a => {
    a.addEventListener('click', e => {
      e.stopPropagation();
      e.preventDefault();

      let height = e.target.height;
      let width = e.target.width;
      let src = e.target.src;

      openInNewTab(src, height, width);
    });
  });

  function openInNewTab(src, height, width) {
    let win = window.open();
    win.document.write('<style>body{background:#242424;color:#fff;}div{margin:0 auto;width:'+width+';display:block;}</style><div><a href="'+src+'" download><img src='+src+'></a></a><p>'+width+'x' +height+ '</p></div>');
    }
  });
```
When a linked image is clicked the event is interupted and the media viewer is opened in a new tab.