window.addEventListener('scroll', function() {
  // Replace 'navbar' with the actual ID or a suitable selector for your nav element
  const navbar = document.getElementById('navbar');
  // Adjust '100' to the scroll distance at which you want the style to change
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
