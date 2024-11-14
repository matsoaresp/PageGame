window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; 
    const imagem = document.querySelector('.imagem');
    const maxScale = 1;  
    const minScale = 0.7; 
    const maxScroll = window.innerHeight;
    
   
    let scale = maxScale - (scrollY / maxScroll) * (maxScale - minScale);
    scale = Math.max(scale, minScale); 

    
    imagem.style.transform = `scale(${scale})`;
});


