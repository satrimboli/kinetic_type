import Component, { tracked } from '@glimmer/component';

export default class TypeUnit extends Component {
  @tracked('args')
  get isShowing() {
    console.log(this.args)
    if(this.args.timeElapsed > this.args.start && this.args.timeElapsed < this.args.end) {
      return true;
    } else {
      return false;
    }
  }
}
