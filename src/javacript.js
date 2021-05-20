dropArea = document.getElementById("drop-area")

$("#files").on("change", "input", function(event){
  $('#files').append(' <input type="file" name="file[]" />')
});

let picsList = []
// Prevent default drag behaviors
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false)
  document.body.addEventListener(eventName, preventDefaults, false)
})

// Highlight drop area when item is dragged over it
;['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false)
})

;['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight, false)
})

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false)

function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}

function highlight(e) {
  /* change dropArea border style*/
  dropArea.classList.add('highlight')
}

function unhighlight(e) {
  /* change dropArea border style*/
  dropArea.classList.remove('active')
}

function handleDrop(e) {
  var dt = e.dataTransfer
  var files = dt.files

  handleFiles(files)
}


function handleFiles(files) {
  files = [...files]
  /* show file with mini preview */
  files.forEach(prepFiles)
}

function prepFiles(file) {
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = function() {
    let img = document.createElement('img')
    img.src = reader.result
    picsList.push(file)
    document.getElementById('gallery').appendChild(img)
  }
}

function uploadFiles() 
{
  /* test to see if we can get the uploaded pics from the html element */ 
  //var property = document.getElementById("fileElem");
  var file = picsList[1];
  var name = file.name;
  alert(name)

}
