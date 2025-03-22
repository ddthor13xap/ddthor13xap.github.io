<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Wonderful Website</title>
  <style>
    body {
      background: linear-gradient(to right, rgb(109, 21, 109), rgb(16, 16, 230));
      color: white;
      font-family: 'Comic Sans MS', cursive, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh; /* Adjusted for full-screen height */
      margin: 0;
      text-shadow: 1px 1px 5px black;
      text-align: center;
    }

    .image-container {
      position: relative;
      display: inline-block;
      margin: 10px;
    }

    .image-container .description {
      visibility: hidden;
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 5px;
      border-radius: 5px;
      font-size: 14px;
      white-space: nowrap;
    }

    .image-container:hover .description {
      visibility: visible;
    }

    .disclaimer {
      margin-top: 20px;
      font-size: 14px;
      color: lightgray;
      text-align: center;
    }

    .audio-container {
      margin-top: 20px;
    }

    audio {
      margin: 10px;
    }
  </style>
</head>
<body>
  <!-- Background music -->
  <audio autoplay loop>
    <source src="toby fox - UNDERTALE Soundtrack - 52 Uwa!! So HEATS!!♫.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>

  <h1>My Wonderful Website!</h1>
  <p>Put something here</p>
  <h1>My Wonderful Images</h1>

  <div class="image-container">
    <img src="image1.jpg" alt="Description of Image 1" width="300">
    <div class="description">jaking it</div>
  </div>
  
  <div class="image-container">
    <img src="image2.png" alt="Description of Image 2" width="300">
    <div class="description">my favorite undertale character, mad mew mew</div>
  </div>

  <!-- Audio Section -->
  <h1>Audio Section</h1>
  <div class="audio-container">
    <audio controls>
      <source src="audio1.wav" type="audio/wav">
      Your browser does not support the audio element.
    </audio>
    <audio controls>
      <source src="audio2.wav" type="audio/wav">
      Your browser does not support the audio element.
    </audio>
  </div>

  <!-- Disclaimer Section -->
  <div class="disclaimer">
    <p>Disclaimer: The images and audio files on this website are not my own and belong to their respective owners.</p>
  </div>
</body>
</html>
