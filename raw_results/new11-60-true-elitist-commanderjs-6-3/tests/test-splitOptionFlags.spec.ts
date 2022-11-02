export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueHdBDvtL = false;
		const _splitlbiEsmd = () => { return _returnValueHdBDvtL };
		const _flagsXrtoson = {
			"split": _splitlbiEsmd
	}
		const _returnValueSWSITL = await splitOptionFlags(_flagsXrtoson)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValuebvFwb7U = null;
		const _returnValueRmEsL3t = [_arrayValuebvFwb7U]
		const _splitrdw3ck = () => { return _returnValueRmEsL3t };
		const _flagsMXMEGQX = {
			"split": _splitrdw3ck
	}
		const _returnValueVMtepZj = await splitOptionFlags(_flagsMXMEGQX)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValuewC7jw5 = undefined;
		const _arrayValueAgq1MY0 = undefined;
		const _arrayValueH8h4ugO = false;
		const _arrayValueXcXHS4f = [_arrayValueH8h4ugO]
		const _returnValueqFl55HZ = [_arrayValuewC7jw5, _arrayValueAgq1MY0, _arrayValueXcXHS4f]
		const _splitustnPEQ = () => { return _returnValueqFl55HZ };
		const _flagsdKAE6zq = {
			"split": _splitustnPEQ
	}
		const _returnValuetnIyJ9a = await splitOptionFlags(_flagsdKAE6zq)
	});
})