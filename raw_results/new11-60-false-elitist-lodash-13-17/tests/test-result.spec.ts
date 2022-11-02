export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectXQnlj6a = undefined;
		const _lengthiBXRyj = 3.5935044117307164;
		const _pathKRdxnes = {
			"length": _lengthiBXRyj
	}
		const _defaultValuetaWm0T = {
		
	}
		const _returnValueWDGODdr = await result(_objectXQnlj6a, _pathKRdxnes, _defaultValuetaWm0T)
	});

	it('test for result', async () => {
		const _objectigP75Kk = undefined;
		const _arrayValueAfWxnJL = "xLm49Y78KgUPqRjpFwi4EUBUkWUfnWO8LoQ2LQv5FBura4muFNRiPcX6ErUn8KxOt1lKub22JsuRUpClPfuAfVas0k96XEcKto";
		const _pathtUiUM3v = [_arrayValueAfWxnJL]
		const _defaultValueWN7n9Vm = {
		
	}
		const _returnValuedy41WV = await result(_objectigP75Kk, _pathtUiUM3v, _defaultValueWN7n9Vm)
	});

	it('test for result', async () => {
		const _objectlojPtFu = undefined;
		const _pathBf99KUU = []
		const _defaultValueEVy3DOb = "dp2bXICPdtWrTG22htk7mtSIXIhvtvb4FZwPthrz8op8eQ1PF5jHEGAn";
		const _returnValueBZyYRdA = await result(_objectlojPtFu, _pathBf99KUU, _defaultValueEVy3DOb)
	});

	it('test for result', async () => {
		const _objectkDEEBaA = undefined;
		const _pathgQks54U = true;
		const _returnValuemKfkXa = null;
		const _defaultValueRztiHM = () => { return _returnValuemKfkXa };
		const _returnValueWeU45TD = await result(_objectkDEEBaA, _pathgQks54U, _defaultValueRztiHM)
	});
})