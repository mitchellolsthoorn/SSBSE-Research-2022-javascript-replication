export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _flagsXmhaBPT = "DQ";
		const _returnValueUUAwMUh = await splitOptionFlags(_flagsXmhaBPT)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueehRNMHC = "CJgxYmwsY4JYRhiF22IpEfVEAo5rVC555sFBgKDWoHvDflRnJrLL2g8vCY";
		const _splitYmEU8wk = () => { return _returnValueehRNMHC };
		const _flagsYcng45I = {
			"split": _splitYmEU8wk
	}
		const _returnValueNp669Un = await splitOptionFlags(_flagsYcng45I)
	});
})