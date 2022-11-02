export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueAF0dEg4 = -8.471738755393623;
		const _flagsZucuFwh = () => { return _returnValueAF0dEg4 };
		const _returnValuenKlDLr = await splitOptionFlags(_flagsZucuFwh)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsNbx5TOJ = "fOQxilj6DE7O2oTyJyWEPbp87ywyKy7lS1SOY2nHaATCoMS6HjQ4q2viU03XNjMcKIs";
		const _returnValueqw7sOPm = await splitOptionFlags(_flagsNbx5TOJ)
	});
})