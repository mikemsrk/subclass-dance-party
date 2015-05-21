var SlowerDancer = function(top,left,timeBetweenSteps){
  SlowDancer.call(this, top, left, timeBetweenSteps);
};

SlowerDancer.prototype = Object.create(SlowDancer.prototype);

SlowerDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);
  this.$node.toggleClass('newDance');
};
