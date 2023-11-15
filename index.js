function onWindowResize(){
    const width = window.innerWidth
    document.getElementById('width').innerText = ""+width
}
window.addEventListener('resize', onWindowResize)
onWindowResize() //Call manually to display initial width