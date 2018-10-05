import Component, { tracked } from '@glimmer/component';
import 'jquery';

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

    if(play) {
      this.timer = window.requestAnimationFrame(this.tick.bind(this))
    } else {
      cancelAnimationFrame(this.timer);
    }
  }

  tick(timestamp) {
    var timeElapsed = (timestamp - this.state.startTime);

    this.state = {
      ...this.state,
      timeElapsed
    }

    this.timer = window.requestAnimationFrame(this.tick.bind(this))
  }

  didInsertElement() {
    $('audio').one('canplaythrough', function() {
      console.log(this)
      $(this)[0].currentTime = 14
        console.log(this.currentTime)
    })
  }
}
