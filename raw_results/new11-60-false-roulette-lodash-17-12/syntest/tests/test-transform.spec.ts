export {}
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
import ListCache from "../../benchmark/top10npm/lodash/.internal/ListCache.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('transform', () => {
	it('test for transform', async () => {
		const _constructorImuy94r = "uDrYfEqCsW1AMo4p7XUC";
		const _objecty0CYglx = {
			"constructor": _constructorImuy94r
	}
		const _returnValueSIoffWg = undefined;
		const _iteratees5I5OTA = () => { return _returnValueSIoffWg };
		const _accumulatorvGjlqB = {
		
	}
		const _returnValueUOZi0ax = await transform(_objecty0CYglx, _iteratees5I5OTA, _accumulatorvGjlqB)
	});

	it('test for transform', async () => {
		const _returnValuef82p9wA = "RSv8UtYicElJLuCHY";
		const _entriesTYXu6ej = () => { return _returnValuef82p9wA };
		const _objectQSuyEcH = new ListCache(_entriesTYXu6ej)
		const _keybw2Jof = 5.389360945542158;
		const _returnValueFZ1JagI = await _objectQSuyEcH.delete(_keybw2Jof)
		const _keyjMXGGiV = false;
		const _returnValueV0cMdVU = await _objectQSuyEcH.has(_keyjMXGGiV)
		const _returnValueU3CDK5b = -8.937014604171456;
		const _iterateeRAzqLUP = () => { return _returnValueU3CDK5b };
		const _accumulatorzS25QH = null;
		const _returnValuemUUnljq = await transform(_objectQSuyEcH, _iterateeRAzqLUP, _accumulatorzS25QH)
	});

	it('test for transform', async () => {
		const _arrayValueIC0HGUo = {
		
	}
		const _arrayValuedWxtSt = "yqC5lA9OHipi1FTKel1fcIQ7a4a";
		const _objectDqMBDOs = [_arrayValueIC0HGUo, _arrayValuedWxtSt]
		const _returnValueycYM4rw = 6.139421583872775;
		const _iterateeOV4equq = () => { return _returnValueycYM4rw };
		const _accumulatorKQQp4Ao = null;
		const _returnValueK4KvjE = await transform(_objectDqMBDOs, _iterateeOV4equq, _accumulatorKQQp4Ao)
	});

	it('test for transform', async () => {
		const _constructoreLFexh = 3.002623888439981;
		const _objecttRz6Q91 = {
			"constructor": _constructoreLFexh
	}
		const _arrayValuenwnOeyB = 6.433997859962599;
		const _arrayValueNc0EMzB = true;
		const _arrayValueKW1XaGW = [_arrayValuenwnOeyB, _arrayValueNc0EMzB]
		const _arrayValueKnTelCc = undefined;
		const _iterateeH2jljIR = [_arrayValueKW1XaGW, _arrayValueKnTelCc]
		const _accumulatorDnAZttr = null;
		const _returnValueEo2BCrm = await transform(_objecttRz6Q91, _iterateeH2jljIR, _accumulatorDnAZttr)
	});
})