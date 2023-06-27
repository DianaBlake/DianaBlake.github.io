let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2300)
  .typeString('<span style="color:#4C0C00; font-family:Times New Roman;  font-size: 2rem">Creada para crear</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

