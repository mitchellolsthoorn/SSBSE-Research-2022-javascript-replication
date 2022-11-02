export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _returnValueTXEZlbK = "yHxM2FAHUA8JjTzppLyoy4jN5VHJo6s6qDTatXK8b7Wip2rpTjMCUkoCIK35IU1xP1msvATr5gEMacomIHQAwh9c5yGF";
		const _objectRf4qY8u = () => { return _returnValueTXEZlbK };
		const _pathL2bONG = {
		
	}
		const _returnValueRNQmZSI = await hasPath(_objectRf4qY8u, _pathL2bONG)
	});

	it('test for hasPath', async () => {
		const _lengthkHKtEHG = undefined;
		const _object4DidqY = {
			"length": _lengthkHKtEHG
	}
		const _arrayValuetAwEVMM = undefined;
		const _arrayValueTOImc1I = null;
		const _arrayValuePoD6UA5 = "RyffrjCBLjPTTKvzQLoJ8mMHt9BNl3CMKIAx3jUgGUFSTDk7RwOYh4AV7gmLox9bwjG9l24BmkzJkSHGVxNDY4b";
		const _arrayValueLqTHZ9y = 7.619985701679056;
		const _arrayValueqnTSGZU = false;
		const _arrayValueLkVPXGh = [_arrayValueLqTHZ9y, _arrayValueqnTSGZU]
		const _arrayValuebw1QCX = null;
		const _arrayValueoWAuR6E = undefined;
		const _arrayValueirLHTXS = [_arrayValuebw1QCX, _arrayValueoWAuR6E]
		const _arrayValueW8LZoaw = [_arrayValuePoD6UA5, _arrayValueLkVPXGh, _arrayValueirLHTXS]
		const _arrayValuefVMpoQw = undefined;
		const _pathSXCwSWy = [_arrayValuetAwEVMM, _arrayValueTOImc1I, _arrayValueW8LZoaw, _arrayValuefVMpoQw]
		const _returnValue1kLzp8 = await hasPath(_object4DidqY, _pathSXCwSWy)
	});

	it('test for hasPath', async () => {
		const _returnValuedqkJbXT = {
		
	}
		const _objectS0bnDLI = () => { return _returnValuedqkJbXT };
		const _returnValueB9yFXdg = -3.3252303233404152;
		const _pathIbXsZ63 = () => { return _returnValueB9yFXdg };
		const _returnValueUkFmr3d = await hasPath(_objectS0bnDLI, _pathIbXsZ63)
	});

	it('test for hasPath', async () => {
		const _objectR0fFzCR = null;
		const _pathuxVZaD = false;
		const _returnValueZ0RzGbw = await hasPath(_objectR0fFzCR, _pathuxVZaD)
	});
})