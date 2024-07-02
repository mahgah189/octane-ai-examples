// The examples below demonstrate how to use an event listener with octane.quiz.completed to
// create personalized, dynamic code that triggers on completion of an Octane AI quiz.

// A simple event handler to expose quiz results data
document.addEventListener("octane.quiz.completed", function(event) {
  console.log("Quiz completion event", event.detail);
}, false);

