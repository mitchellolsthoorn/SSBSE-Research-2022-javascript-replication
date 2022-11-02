export {}
const {isAbsolute} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAbsolute', () => {
	it('test for isAbsolute', async () => {
		const _arrayValueclxysEs = null;
		const _arrayValuep6TEZ7S = [_arrayValueclxysEs]
		const _arrayValuegSdwyLY = undefined;
		const _arrayValuej8F96r3 = -9.059742864515242;
		const _returnValueucOLq7 = true;
		const _arrayValuelXr3rz3 = () => { return _returnValueucOLq7 };
		const _pathnCT4fxA = [_arrayValuep6TEZ7S, _arrayValuegSdwyLY, _arrayValuej8F96r3, _arrayValuelXr3rz3]
		const _returnValueBbqsxMm = await isAbsolute(_pathnCT4fxA)
	});
})