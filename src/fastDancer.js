var FastDancer = function(top, left, timeBetweenSteps){

  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  Dancer.call(this);

  this.$node.removeClass('dancer');
  this.$node.addClass('fastD');

  Dancer.prototype.step.call(this,timeBetweenSteps,this);

  Dancer.prototype.setPosition.call(this,top,left);

  this.bound = this;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.timeBetweenSteps = Math.floor(timeBetweenSteps/2);

};

FastDancer.prototype = Object.create(Dancer.prototype);

FastDancer.prototype.oldStep = function(time){
  Dancer.prototype.step(time,this);
};

FastDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    this.oldStep(this.timeBetweenSteps);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();
    this.$node.toggleClass('dancing');
};
