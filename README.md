```
$ tsc  # compiles without error
$ node tmp.js
(node:2751) UnhandledPromiseRejectionWarning: Error: Evaluation failed: ReferenceError: isLeafElement is not defined
    at findEntry (__puppeteer_evaluation_script__:3:17)
    at ExecutionContext._evaluateInternal (/tmp/tmp/node_modules/puppeteer/lib/ExecutionContext.js:122:13)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
    at async ExecutionContext.evaluate (/tmp/tmp/node_modules/puppeteer/lib/ExecutionContext.js:48:12)
    at async /tmp/tmp/tmp.js:8:19
  -- ASYNC --
    at ExecutionContext.<anonymous> (/tmp/tmp/node_modules/puppeteer/lib/helper.js:111:15)
    at DOMWorld.evaluate (/tmp/tmp/node_modules/puppeteer/lib/DOMWorld.js:112:20)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
  -- ASYNC --
    at Frame.<anonymous> (/tmp/tmp/node_modules/puppeteer/lib/helper.js:111:15)
    at Page.evaluate (/tmp/tmp/node_modules/puppeteer/lib/Page.js:863:43)
    at Page.<anonymous> (/tmp/tmp/node_modules/puppeteer/lib/helper.js:112:23)
    at /tmp/tmp/tmp.js:8:30
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
(node:2751) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:2751) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```
