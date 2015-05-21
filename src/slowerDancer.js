var SlowerDancer = function(top,left,timeBetweenSteps){
  SlowDancer.call(this, top, left, timeBetweenSteps);
};

SlowerDancer.prototype = Object.create(SlowDancer.prototype);

SlowerDancer.prototype.step = function(){

  this.oldStep(this.timeBetweenSteps);

  this.$node.toggleClass('newDance');
};
