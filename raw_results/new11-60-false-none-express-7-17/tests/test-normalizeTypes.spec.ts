export {}
const {normalizeTypes} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeTypes', () => {
	it('test for normalizeTypes', async () => {
		const _arrayValuevtbepb = true;
		const _arrayValueFGuC5JU = null;
		const _arrayValueDMfsiDU = "NHhz2GmL96eQ6DInqwHpLUXxcIk6fllK2WI7KduCDXNH3doBmeT7LJwhIRSxPJ9AwlkpBlqwvZQFteJhpDeOM8";
		const _arrayValueOku4juc = "Tq1kxyIF6MGzBrdAeEzC2oxd6tWBkoegLvJBDYI8BHFmIHl2DbNN0pBYuHPIUpV5W42bhZxCZBjo3RtV5gBiOOE";
		const _arrayValuefREkGH = true;
		const _arrayValueEmvdFtC = [_arrayValuevtbepb, _arrayValueFGuC5JU, _arrayValueDMfsiDU, _arrayValueOku4juc, _arrayValuefREkGH]
		const _arrayValueqpdE252 = null;
		const _arrayValuegGiALH7 = {
		
	}
		const _arrayValueEm5nqo = [_arrayValueEmvdFtC, _arrayValueqpdE252, _arrayValuegGiALH7]
		const _typesZXDpie2 = [_arrayValueEm5nqo]
		const _returnValued33nMGZ = await normalizeTypes(_typesZXDpie2)
	});

	it('test for normalizeTypes', async () => {
		const _typesyjTqrDs = -4.546289647326968;
		const _returnValueyOojX25 = await normalizeTypes(_typesyjTqrDs)
	});
})