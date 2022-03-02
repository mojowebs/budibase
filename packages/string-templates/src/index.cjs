const { VM } = require("vm2")
const templates = require("./index.js")
const { setJSRunner } = require("./helpers/javascript")

/**
 * CJS entrypoint for rollup
 */
module.exports.isValid = templates.isValid
module.exports.makePropSafe = templates.makePropSafe
module.exports.getManifest = templates.getManifest
module.exports.isJSBinding = templates.isJSBinding
module.exports.encodeJSBinding = templates.encodeJSBinding
module.exports.decodeJSBinding = templates.decodeJSBinding
module.exports.processStringSync = templates.processStringSync
module.exports.processObjectSync = templates.processObjectSync
module.exports.processString = templates.processString
module.exports.processObject = templates.processObject
module.exports.doesContainStrings = templates.doesContainStrings
module.exports.doesContainString = templates.doesContainString
module.exports.disableEscaping = templates.disableEscaping
module.exports.findAllBindings = templates.findAllBindings

/**
 * Use vm2 to run JS scripts in a node env
 */
setJSRunner((js, context) => {
  const vm = new VM({
    sandbox: context,
    timeout: 1000
  })
  return vm.run(js)
})
