export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _arrayValueEyPBkq = false;
		const _returnValuegkPeU2T = undefined;
		const _arrayValueBSRFtzO = () => { return _returnValuegkPeU2T };
		const _flagsPPlZKwo = [_arrayValueEyPBkq, _arrayValueBSRFtzO]
		const _returnValuedtRc2fV = await splitOptionFlags(_flagsPPlZKwo)
	});

	it('test for splitOptionFlags', async () => {
		const _flagswMomLFt = "RuQY8z";
		const _returnValueU7TQwT = await splitOptionFlags(_flagswMomLFt)
	});
})