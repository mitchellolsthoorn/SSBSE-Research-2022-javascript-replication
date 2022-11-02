export {}
const {compileETag} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileETag', () => {
	it('test for compileETag', async () => {
		const _valYu7VNTr = 8.099792529363587;
		const _returnValuerbKqL4F = await compileETag(_valYu7VNTr)
	});

	it('test for compileETag', async () => {
		const _arrayValuepBZ7xW = "2g012GSGeuF7";
		const _arrayValueo2VAZrs = -9.614769054462645;
		const _arrayValueMGlBMZB = -7.608243823254681;
		const _arrayValueYrjSuEo = [_arrayValueMGlBMZB]
		const _arrayValueabCodjf = undefined;
		const _returnValueG0qQkKI = [_arrayValuepBZ7xW, _arrayValueo2VAZrs, _arrayValueYrjSuEo, _arrayValueabCodjf]
		const _valtYkdKOh = () => { return _returnValueG0qQkKI };
		const _returnValueMxMVUC7 = await compileETag(_valtYkdKOh)
	});
})