document.querySelector('form').addEventListener('submit', function(dets){
    dets.preventDefault()
    console.log('Form submitted');
    document.querySelector('form input').value = ''
})