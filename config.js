// Configuration file for loading p5 related scripts
// This file loads all necessary p5.js, p5.sound, p5play, and jQuery libraries

(function() {
  // Create a function to load external scripts
  function loadScript(src, integrity = null, crossorigin = null) {
    const script = document.createElement('script');
    script.src = src;
    if (integrity) script.integrity = integrity;
    if (crossorigin) script.crossOrigin = crossorigin;
    script.referrerPolicy = 'no-referrer';
    document.head.appendChild(script);
  }

  // Load p5.js
  
  loadScript(
    'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/p5.js',
    'sha512-bzpp8klYroR6PFgL3RJ+VkvY5hJna7Zd38OA56peUDHSNQpSiN9lDQVnMYtcw7hoAVhbR6mAOdH+ymzg1o+G0A==',
    'anonymous'
  );
  
 // Load q5.js
  
  loadScript(
//"https://q5js.org/q5.js"
  );

  // Load p5.sound
/*
  loadScript(
    'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/addons/p5.sound.js',
    'sha512-TU9AWtV5uUZPX8dbBAH8NQF1tSdigPRRT82vllAQ1Ke28puiqLA6ZVKxtUGlgrH6yWFnkKy+sE6luNEGH9ar0A==',
    'anonymous'
  );
*/
  // Load planck.min.js
  loadScript('https://p5play.org/v3/planck.min.js');

  // Load p5play
  loadScript('https://p5play.org/v3/p5play.js');

  // Load jQuery
  loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');
})();
