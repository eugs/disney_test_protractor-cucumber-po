var {defineSupportCode} = require('cucumber');

function CustomWorld() {
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})

defineSupportCode(function({setDefaultTimeout}) {
  setDefaultTimeout(60 * 1000);
});
