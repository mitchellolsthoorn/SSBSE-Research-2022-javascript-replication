export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _object92lPJn = undefined;
		const _lengthiRbQTmJ = 5.080237948417576;
		const _pathY1RPZoQ = {
			"length": _lengthiRbQTmJ
	}
		const _defaultValueWpC9gru = {
		
	}
		const _returnValuel3r5LAf = await result(_object92lPJn, _pathY1RPZoQ, _defaultValueWpC9gru)
	});

	it('test for result', async () => {
		const _objecttsbEXqN = undefined;
		const _pathzloOH0X = -9.251344556873134;
		const _arrayValuec1O6q0b = -4.8894784585756845;
		const _returnValuevnpl3T3 = []
		const _arrayValueh73qBJz = () => { return _returnValuevnpl3T3 };
		const _defaultValueetgPODE = [_arrayValuec1O6q0b, _arrayValueh73qBJz]
		const _returnValueYUKEY2q = await result(_objecttsbEXqN, _pathzloOH0X, _defaultValueetgPODE)
	});

	it('test for result', async () => {
		const _objectQkEQA8 = undefined;
		const _pathDhg5AbJ = undefined;
		const _returnValuezVe1bQA = undefined;
		const _defaultValueCLQdnEq = () => { return _returnValuezVe1bQA };
		const _returnValueV9Kmkxi = await result(_objectQkEQA8, _pathDhg5AbJ, _defaultValueCLQdnEq)
	});

	it('test for result', async () => {
		const _objectOPXbWep = undefined;
		const _pathgyN1aDM = []
		const _defaultValueei0ZdUr = true;
		const _returnValueXtPCnLu = await result(_objectOPXbWep, _pathgyN1aDM, _defaultValueei0ZdUr)
	});
})