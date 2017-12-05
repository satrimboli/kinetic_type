import Component, { tracked } from '@glimmer/component';

export default class KineticType extends Component {
  @tracked state = {
    isPlaying: false,
    startTime: null,
    timeElapsed: null,
  }

  toggleState(e) {
    var play = e.type === 'playing';

    this.state = {
      isPlaying: play,
      startTime: play ? window.performance.now() : null
    }

    console.log(play)
    if(play) {
      this.timer = window.requestAnimationFrame(this.tick.bind(this))
    } else {
      console.log(this.timer)
      cancelAnimationFrame(this.timer);
    }
  }

  tick(timestamp) {
    console.log(timestamp)
    console.log(this.state.startTime)
    var timeElapsed = (timestamp - this.state.startTime);
    console.log(timeElapsed)
    this.state = {
      ...this.state,
      timeElapsed
    }
    // console.log('tick');
    // console.log(timestamp)
    // console.log('timeElapsed: ' + this.state.timeElapsed + ' \n');

    this.timer = window.requestAnimationFrame(this.tick.bind(this))
  }
}
