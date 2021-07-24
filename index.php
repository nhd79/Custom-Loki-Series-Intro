<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Loki</title>
  <link rel="stylesheet" href="loki.css">
  <script src="loki.js"></script>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-L1N5QCCS6Q"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-L1N5QCCS6Q');
  </script>
</head>

<body onload="rand();">
  <audio autoplay loop>
    <source src="LOKI Opening Theme.mp3" type="audio/mpeg">
  </audio>
  <div id="container" class="container">
    <h3 class="your-name">Your name?</h3>
    <form action="javascript:void(0);">
      <input id="inputName" type="text" placeholder="Type here..." value="">
      <button onClick=seeVarriants()>See Variants</button>
    </form>
    <h2 id="name" class="loki">
      <p class="letter">L</p>
      <p class="letter">O</p>
      <p class="letter">K</p>
      <p class="letter">I</p>
    </h2>
  </div>
</body>

</html>