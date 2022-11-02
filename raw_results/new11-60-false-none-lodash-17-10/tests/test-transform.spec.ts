export {}
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('transform', () => {
	it('test for transform', async () => {
		const _objectc08gbUt = 6.462627639537267;
		const _iterateeTDXg59 = "77jHNf9Rc1uXNRsv8ZsBbV34jQ4Itz5YrCsA4Lwls1TR5Ui6jD6HYntbblIMNjJWFsyNLI6YN2c4Qbcvskn2l2qqxmRH";
		const _arrayValueUWBIuR5 = undefined;
		const _arrayValue8zXzKC = null;
		const _accumulatorvRrbYTr = [_arrayValueUWBIuR5, _arrayValue8zXzKC]
		const _returnValueEQQl9C5 = await transform(_objectc08gbUt, _iterateeTDXg59, _accumulatorvRrbYTr)
	});

	it('test for transform', async () => {
		const _returnValueTVvdD3T = {
		
	}
		const _objectRIMmSz9 = () => { return _returnValueTVvdD3T };
		const _iteratee6T7Fx0 = true;
		const _accumulatornzxg5Us = undefined;
		const _returnValueMut4Mxn = await transform(_objectRIMmSz9, _iteratee6T7Fx0, _accumulatornzxg5Us)
	});

	it('test for transform', async () => {
		const _arrayValueJ31hA6A = undefined;
		const _arrayValueWWGa5kp = null;
		const _arrayValueuZOPlXv = [_arrayValueWWGa5kp]
		const _returnValueUo4GQ1P = [_arrayValueJ31hA6A, _arrayValueuZOPlXv]
		const _arrayValueEZLpGC1 = () => { return _returnValueUo4GQ1P };
		const _objectmweC7R4 = [_arrayValueEZLpGC1]
		const _returnValuecl0ZPE = -5.353229752366756;
		const _arrayValuenydpX3 = () => { return _returnValuecl0ZPE };
		const _iterateelKds0Xo = [_arrayValuenydpX3]
		const _accumulatorcws0hXS = null;
		const _returnValuedDAcZig = await transform(_objectmweC7R4, _iterateelKds0Xo, _accumulatorcws0hXS)
	});
})