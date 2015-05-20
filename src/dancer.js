// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.timeBetweenSteps = timeBetweenSteps;

  this.top = top;
  this.left = left;

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

};

Dancer.prototype.step = function(time,newCon){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step

    var setTimeoutNew = function(cb,duration,context){
      return setTimeout(function(){
        cb.call(context);
      },duration);
    };

    setTimeoutNew(newCon.step || this.step, time , newCon || this);
};

Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    this.top = top;
    this.left = left;

    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
};
