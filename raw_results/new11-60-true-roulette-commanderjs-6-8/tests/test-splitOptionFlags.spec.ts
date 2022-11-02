export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _flags2IRW5p = "2ZkxOTZwrudMl2DGVGl2SmMxqzwh6aMuRCwKElQ2bS1wq4HHVaKsrsFcQwkpHp6LmWi633pX";
		const _returnValueRskr3Gq = await splitOptionFlags(_flags2IRW5p)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValuezRTi03b = "95d1eynxyXBvEleSsM2ye3Cn4QKlN";
		const _split3bbfvH = () => { return _returnValuezRTi03b };
		const _flagskg7qt1 = {
			"split": _split3bbfvH
	}
		const _returnValueOVuRBu = await splitOptionFlags(_flagskg7qt1)
	});
})