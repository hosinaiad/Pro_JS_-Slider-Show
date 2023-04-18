// Lesson (73) v (75) Explain:  How to create professional slider show “photo show”:
// شرح كيفية انشاء عارض صور إحترافي - slider
// .......................................................................
// nTarget:  How to control features via JS, src, etc.
// .......................................................................

// Ex (1):
class Slider {
  constructor() {
    this.images = [];
    this.images[0] = "img/ball-01.jpg";
    this.images[1] = "img/ball.jpg";
    this.images[2] = "img/D-ball.jpg";

    this.links = [];
    this.links[0] = "#";
    this.links[1] = "#";
    this.links[2] = "#";

    this.counter = 0;
    // Create variable for counter.
    this.playSlider();
    setInterval(() => {
      this.playSlider();
    }, 3000);
  }

  playSlider() {
    if (this.counter < this.images.length - 1) {
      this.counter++;
      // To add (1) for counter.
    } else {
      this.counter = 0;
    }
    document.slider_show.src = this.images[this.counter];
    document.getElementById("LinkImg").href = this.links[this.counter];
  }
}
onload = new Slider();
// ........................    Succeeded    ...........................

// Note (1): This lesson need to use CSS lang to improve it's appearance "look", it's important before publish.

// Note (2):
// -We put(-1), because the length feature bring numbers of elements within array, count start from(1 instead 0), and array element start from(0), so we add(-1) to be length of array element equal length of count of array.
// -In this example when bring a count of element within images variable array via length feature it'll bring value (3), because (4) elements within images variable, and when we store data within array the first element it's start position from (0) not(1), and in if statement we should put (-1) to be equal with number "count" of elements in images variable.
