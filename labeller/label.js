
const Readable = require('./readable.js');

async function _label(url) {

  console.log('Making Readable', url);
  const _ = await Readable.run(url);
  //console.log(_);

  console.log('Labelling text');
  const readableLines = _.readable.text.split('\n');
  for (let line of _.original.text.split('\n')) {

    if (line === '') {
      console.log('');
    } else {
      var label;
      if (readableLines.includes(line)) {
        label = '__label__keep';
      } else {
        label = '__label__delete';
      }
      console.log(label, line);
    }

  }
}

async function run(urlFilePath) {
  console.log('Reading URLS from', urlFilePath);
  var urls = require('fs').readFileSync(urlFilePath, 'utf-8')
      .split('\n')
      .filter(Boolean);
  for (let url of urls) {
    await _label(url);
    // TODO: write to a file with the URL name
  }
}

run(process.argv[2]);
