function eventLoop() {
  setTimeout(() => console.log('setTimeout', "I'm FIRST!"), 0);

  Promise.resolve().then(value => console.log('Promise', 'Am I second????'));

  console.log('console.log', 'JavaScript ROCKS!?!');
}

async function eventLoop2() {
  setTimeout(() => console.log('setTimeout', "I'm FIRST!"), 0);

  const promise = new Promise((resolve, reject) => {
    console.log('Inside Promise')
    resolve('test')
  })
  const val = await promise
  console.log('Promise await', 'Am I second????')

  console.log('console.log', 'JavaScript ROCKS!?!');

  return val
}

async function main() {
  console.log(await eventLoop2())
}

//main()