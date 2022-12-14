# SynTest Framework - JavaScript

> The aim of this tool is make it easier for JavaScript developers to test their code in a more effective and efficient way.

A tool to generate synthetic tests for the JavaScript language

### What is SynTest JavaScript?

SynTest JavaScript is a tool for automatically generating test cases for the JavaScript language. This tool is part of the [SynTest Framework](https://www.syntest.org). This framework contains multiple tools related to the generation of synthetic tests.

### Overview

The common core contains the common interfaces for the code control-flow representation, test case structure, genes, and the implementation for the meta-heuristic search algorithms.

## Installation

#### NPM

The simplest way to use syntest-javascript is by installing the [npm package](https://www.npmjs.com/package/syntest/javascript).

```bash
$ npm install @syntest/javascript
```

You can install it in your project as shown in the snippit above or you can install the package globally by using the npm options `-g`.

#### From source

The tool can be used by cloning the project, installing its dependencies, and compiling the TypeScript:

- Clone the projects

```bash
$ git clone git@github.com:syntest-framework/syntest-javascript.git
```

- Install dependencies

```bash
$ cd syntest-javascript; npm install
```

- Build Syntest-javascript

```bash
$ cd syntest-javascript; npm run build
```

## Building the docker container
Building
```bash
docker build --tag="syntest/javascript:new" .
```

Running
```bash
docker run --env time_per_target=5 --env use_type_inference=1 --env type_inference_mode="roulette" --env target_root_directory="./benchmark/top10npm/axios" --env include="./benchmark/top10npm/axios/lib/**/*.js" syntest/javascript:new
```

## Local development

Currently you need to be on the `remove-parsing-from-framework` branch of the syntest-framework.

```bash
cd <PATH_TO_SYNTEST_FRAMEWORK>; git checkout remove-parsing-from-framework; git pull
```

Rebuild the framework

```bash
cd <PATH_TO_SYNTEST_FRAMEWORK>; npm run build
```

Now install the framework into syntest-javascript

```bash
cd <PATH_TO_SYNTEST_JAVASCRIPT>; npm install --save <PATH_TO_SYNTEST_JAVASCRIPT>
```

You can edit `.syntest.js` to change the way the tool behaves.

Finally run the tool

```bash
cd <PATH_TO_SYNTEST_JAVASCRIPT>; npm run run-ts
```

The results can be found in the `syntest` folder

## Usage

To start you need to be in the root of the project folder containing the code you want to create test-cases for. Next, you need to install two dev-dependencies in your project, namely [chai](https://www.npmjs.com/package/chai) and [chai-as-promised](https://www.npmjs.com/package/chai-as-promised). Both are needed to run the tests.

After installing these dependencies together with the tool, you can run the following example command.

```bash
$ syntest-javascript --include="<PATH_TO_YOUR_SOURCE_FOLDER>/src/**/*.js" --search-time=10 --total_time=10
```

This will test all javascript code that is contained in the source folder. It will run for 10 seconds.

Syntest-Javascript is highly configurable and supports a bunch of options and arguments, all of them can be found by providing the `--help` option or `-h` for short. Another way of configuring the tool is by putting a .syntest.js file in the root of your project. The file should have the following structure:

```js
module.exports = {
    population_size: 10,
    max_depth: 5,
    ...
}
```

The tool can be run via two modes, standalone or as a truffle plugin.

#### Standalone

```bash
$ syntest-javascript [options]
```

#### As a truffle plugin

To run syntest-javascript as a plugin of the truffle testing library, you need to create a truffle-config.js with the following contents:

> This file is auto-generated when using the standalone tool.

```js
module.exports = {
  test_directory: ".syntest/tests",
  plugins: ["syntest-javascript"],
};
```

Next, you can run the following truffle command.

```bash
$ truffle run @syntest/javascript [options]
```

## Documentation

For questions and help with how to use this tool, please see the [documentation](https://www.syntest.org).

## Support

For questions and help with how to use this library, please see [SUPPORT.md](SUPPORT.md).

## Contributing

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change. For more information, please see [CONTRIBUTING.md](CONTRIBUTING.md).

## Authors and acknowledgment

- Annibale Panichella (PI)
- Mitchell Olsthoorn (Project Lead)
- Dimitri Stallenberg (Developer)

## License

The code within this project is licensed under the [Apache-2.0 license](LICENSE).
