// JavaScript Document

function MM_changeProp(objId,x,theProp,theValue) { //v9.0
//document.getElementById('video1').load();
  var obj = null; with (document) {
      if (getElementById) {
          obj = getElementById(objId);
      }
  }

  if (obj){
    if (theValue == true || theValue == false) {
        eval("obj.style."+theProp+"="+theValue);
    } else {
        eval("obj.style."+theProp+"='"+theValue+"'");
    }
  }
}

function showMovie(objId) {
  obj = document.getElementById(objId);

  var iframeObject = document.getElementById(objId + '_iframe');
  if (obj) {
      obj.style.display = 'block';
      innerDoc = iframeObject.contentDocument || iframeObject.contentWindow.document;
      innerDoc.getElementById(objId + '_video').load();
      innerDoc.getElementById(objId + '_video').play();
  }
}

function hideMovie(objId) {
  obj = document.getElementById(objId);
  var iframeObject = document.getElementById(objId + '_iframe');
  if (obj) {
      obj.style.display = 'none';
      innerDoc = iframeObject.contentDocument || iframeObject.contentWindow.document;
      innerDoc.getElementById(objId + '_video').pause();
  }
}