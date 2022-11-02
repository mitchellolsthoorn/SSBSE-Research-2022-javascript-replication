export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthArK3Ne1 = undefined;
		const _objecti5IriTy = {
			"length": _lengthArK3Ne1
	}
		const _pathsyGPb7F = {
		
	}
		const _returnValueK4Shuna = await hasPath(_objecti5IriTy, _pathsyGPb7F)
	});

	it('test for hasPath', async () => {
		const _lengthsYLqJJq = null;
		const _objectSM73i54 = {
			"length": _lengthsYLqJJq
	}
		const _pathjJL0gEV = "O92WPyXWN8yYmR2s4iPGPJeI8zPrAgL5O7j3lC4zM215od";
		const _returnValueq09D7Qo = await hasPath(_objectSM73i54, _pathjJL0gEV)
	});

	it('test for hasPath', async () => {
		const _objectdJFnaID = undefined;
		const _returnValuexc5rasD = -5.599363949336294;
		const _pathmmnLMU = () => { return _returnValuexc5rasD };
		const _returnValue66mhCE = await hasPath(_objectdJFnaID, _pathmmnLMU)
	});
})