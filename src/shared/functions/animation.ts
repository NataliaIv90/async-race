function animation(car, distance, animationTime) {
    const state = {};
    const startTime = new Date().getTime();
    async function getInterval() {
      const currentTime = new Date().getTime();
      const passedDistance = Math.round((currentTime - startTime) * (distance / animationTime));
  
      const carStyle = car.style;
      carStyle.transform = `translateX(${Math.min(passedDistance, distance)}px)`;
      if (passedDistance < distance) {
        state.id = window.requestAnimationFrame(getInterval);
      }
    }
    state.id = window.requestAnimationFrame(getInterval);
    return state;
  }
  
  export default animation;