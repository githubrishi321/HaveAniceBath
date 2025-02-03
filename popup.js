document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    "Believe you can and you're halfway there.",
    "Act as if what you do makes a difference. It does.",
    "Success is not how high you have climbed, but how you make a positive difference.",
    "Opportunities don't happen. You create them.",
    "Do what you can, with what you have, where you are."
  ];

  const topics = [
    "Is AI a boon or a bane?",
    "Should social media platforms regulate free speech?",
    "Impact of climate change on future generations.",
    "Remote work vs. Office work – Which is better?",
    "Should cryptocurrency be regulated?"
  ];

  function getRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function updateContent() {
    document.getElementById("quote").innerText = getRandomItem(quotes);
    document.getElementById("gd-topic").innerText = getRandomItem(topics);
  }

  // Set initial content
  updateContent();

  // Update content when button is clicked
  document.getElementById("refresh").addEventListener("click", updateContent);
});
