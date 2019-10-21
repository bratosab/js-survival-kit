function eventLoop() {
  setTimeout(() => console.log('setTimeout', "I'm FIRST!"), 0);

  Promise.resolve().then(value => console.log('Promise', 'Am I second????'));

  console.log('console.log', 'JavaScript ROCKS!?!');
}
