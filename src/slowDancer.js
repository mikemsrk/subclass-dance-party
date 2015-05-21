var SlowDancer = function(top, left, timeBetweenSteps){

  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.call(this,top,left,timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps*2;
  this.$node.removeClass('dancer');
  this.$node.addClass('slowD');
};

SlowDancer.prototype = Object.create(Dancer.prototype);
SlowDancer.prototype.constructor = SlowDancer;

SlowDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();
    //this.$node.slideToggle();
    this.$node.toggleClass('dancing');
};
