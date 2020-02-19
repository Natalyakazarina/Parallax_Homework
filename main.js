function parallax(event){
    this.querySelectorAll('.layer').forEach(function(layer){
        let speed=layer.getAttribute('data-speed');
    layer.style.transform = `translate(${event.clientX*speed/70}px,${event.clientY*speed/70}px)`
     })
}

document.querySelector('.container').addEventListener('mousemove', parallax);
