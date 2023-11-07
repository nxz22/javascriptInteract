function generate(name) {
    var messages = [
      "expect a fishy odor from above, as unlikely as a salmon falling from the sky!",
      "beware of wooden cubes, they might just change your life.",
      "you will find joy in the most unexpected places.",
      "today, drawing the wrong character might just spark an unforgettable adventure.",
      "look forward to electrifying friendships, possibly with a talking cat.",
      "the wind of change blows strongly for you – it may sweep away your house of cards.",
      "a misfired laser might just lead to a new perspective on life.",
      "keep an eye out for runaway dogs – they could be carrying your destiny on their back!",
      "you may feel like an inanimate object brought to life, with a thirst for knowledge.",
      "you might find yourself in a high-stakes game of hot potato with a twist of fate.",
      "today, a misplaced vial could lead to an explosion of hilarity.",
      "like a jump rope session gone wild, your plans may take on a life of their own.",
      "watch for falling objects – they may just be a sign to duck into new opportunities.",
      "a chance encounter with a wayward robot may present a shocking turn of events.",
      "you could be swept up in an absurd relay race that leads you to unexpected places.",
    ];// All of these are based on a TV show I really like. 

    var randomIndex = Math.floor(Math.random() * messages.length);
    var message = `${name}, ${messages[randomIndex]}`;
    var outText = document.getElementById('output');
    outText.innerText = message;
  
    restyle(outText);
  }

  function restyle(outText) {
    var colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF"];
    var fonts = ["'Courier New', Courier, monospace", "'Lucida Console', Monaco, monospace", "Arial, sans-serif", "Tahoma, Geneva, sans-serif"];
    var fontSizes = ["16px", "20px", "24px", "28px"];
  
    var colorIndex = Math.floor(Math.random() * colors.length);
    var fontIndex = Math.floor(Math.random() * fonts.length);
    var fontSizeIndex = Math.floor(Math.random() * fontSizes.length);
  
    outText.style.color = colors[colorIndex];
    outText.style.fontFamily = fonts[fontIndex];
    outText.style.fontSize = fontSizes[fontSizeIndex];
  }

  