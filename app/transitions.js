export default function(){
  this.hasClass('modal-if'),
  this.transition(this.use('fade', {
    duration: 600
  }));
  // Add your transitions here, like:
  //   this.transition(
  //     this.fromRoute('people.index'),
  //     this.toRoute('people.detail'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
  //   );
}
