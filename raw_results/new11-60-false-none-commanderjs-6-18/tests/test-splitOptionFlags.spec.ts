export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _arrayValuewQlCrKi = null;
		const _arrayValueCDwJsr0 = false;
		const _flagsE7pL4aX = [_arrayValuewQlCrKi, _arrayValueCDwJsr0]
		const _returnValueYv9cF9p = await splitOptionFlags(_flagsE7pL4aX)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsTiUeAya = "1GRT8y021Cn8vxExB75BYM8t1u4ckmxTyOiAUyK0km5CnlWLTuz";
		const _returnValueju0XRUS = await splitOptionFlags(_flagsTiUeAya)
	});
})