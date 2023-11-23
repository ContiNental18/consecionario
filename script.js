document.addEventListener('DOMContentLoaded', function() {
    let isDragging = false;
    let currentX;
    let currentY;
  
    const images = document.querySelectorAll('.movable-image');
  
    images.forEach(image => {
      image.addEventListener('mousedown', startDragging);
      image.addEventListener('mouseup', stopDragging);
      image.addEventListener('mouseleave', stopDragging);
      image.addEventListener('mousemove', dragImage);
    });
  
    function startDragging(e) {
      isDragging = true;
      currentX = e.clientX;
      currentY = e.clientY;
    }
  
    function stopDragging() {
      isDragging = false;
    }
  
    function dragImage(e) {
      if (!isDragging) return;
  
      const deltaX = e.clientX - currentX;
      const deltaY = e.clientY - currentY;
  
      const newLeft = e.target.offsetLeft + deltaX;
      const newTop = e.target.offsetTop + deltaY;
  
      e.target.style.left = `${newLeft}px`;
      e.target.style.top = `${newTop}px`;
  
      currentX = e.clientX;
      currentY = e.clientY;
    }
  });
  