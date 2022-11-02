export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _arrayValuebEKZSfv = false;
		const _returnValuewtEnBNJ = 9.966574830049147;
		const _arrayValueEJOWCRe = () => { return _returnValuewtEnBNJ };
		const _arrayValueeeiCJWm = -9.697516590028796;
		const _flagsWRok24 = [_arrayValuebEKZSfv, _arrayValueEJOWCRe, _arrayValueeeiCJWm]
		const _returnValueydXAcu5 = await splitOptionFlags(_flagsWRok24)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsA0G3KTN = "iXFwCP8298kBqsFGXS94ng4VmW4E0SsFTCaiqBp";
		const _returnValuePRPWzj4 = await splitOptionFlags(_flagsA0G3KTN)
	});
})