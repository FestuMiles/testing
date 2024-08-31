const highlights = document.querySelector('.highlights');
fetch('/Parts/highlights.html')
.then(res=>res.text())
.then(data=>{
    highlights.innerHTML=data
})