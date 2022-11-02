export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectPtt3Eut = undefined;
		const _lengthdEOyZnL = 8.464450047132907;
		const _pathyMkijO = {
			"length": _lengthdEOyZnL
	}
		const _defaultValue7I5RVP = {
		
	}
		const _returnValueYrbZYxa = await result(_objectPtt3Eut, _pathyMkijO, _defaultValue7I5RVP)
	});

	it('test for result', async () => {
		const _objectaaunwwz = undefined;
		const _pathll1UC4S = null;
		const _defaultValueXytMYy = {
		
	}
		const _returnValueIVxJIpW = await result(_objectaaunwwz, _pathll1UC4S, _defaultValueXytMYy)
	});

	it('test for result', async () => {
		const _objectx0NkYy = undefined;
		const _arrayValuelDb9NRn = undefined;
		const _arrayValueloyT0Q = 3.5343172332208184;
		const _pathxWFCfqC = [_arrayValuelDb9NRn, _arrayValueloyT0Q]
		const _returnValueIGeTQ9V = false;
		const _defaultValueS10iDIx = () => { return _returnValueIGeTQ9V };
		const _returnValueDiM1lve = await result(_objectx0NkYy, _pathxWFCfqC, _defaultValueS10iDIx)
	});

	it('test for result', async () => {
		const _objectUnmwB6P = undefined;
		const _pathzM00obW = []
		const _defaultValuemptCjP = undefined;
		const _returnValueF56ulbb = await result(_objectUnmwB6P, _pathzM00obW, _defaultValuemptCjP)
	});
})