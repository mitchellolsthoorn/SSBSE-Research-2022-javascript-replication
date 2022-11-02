export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValuemNw5ISy = "uHwEUpWhuGDxa90ZBsrHLwePvBGg7iGQdJtZmdFC6fAk9q2S";
		const _splitOQnrR63 = () => { return _returnValuemNw5ISy };
		const _flagslxJbqrC = {
			"split": _splitOQnrR63
	}
		const _returnValueYhBGlqB = await splitOptionFlags(_flagslxJbqrC)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValuegHVQCn = -6.242953261730616;
		const _splitbNtMECm = () => { return _returnValuegHVQCn };
		const _flagsPiGOMg9 = {
			"split": _splitbNtMECm
	}
		const _returnValueQd2RomI = await splitOptionFlags(_flagsPiGOMg9)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueginEcJw = []
		const _splitE6gfCB3 = () => { return _returnValueginEcJw };
		const _flagsqt2bp8x = {
			"split": _splitE6gfCB3
	}
		const _returnValuerIDufg = await splitOptionFlags(_flagsqt2bp8x)
	});
})