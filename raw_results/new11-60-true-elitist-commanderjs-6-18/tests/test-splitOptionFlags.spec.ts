export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueXPayvf = "IdzJixKS678CNgdK5nidCb";
		const _splitQ0A2Tgt = () => { return _returnValueXPayvf };
		const _flagsrNx8etk = {
			"split": _splitQ0A2Tgt
	}
		const _returnValuewNFme0 = await splitOptionFlags(_flagsrNx8etk)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueZCg7x2n = -6.289885680070408;
		const _splitwK33bmn = () => { return _returnValueZCg7x2n };
		const _flagsh3BALjH = {
			"split": _splitwK33bmn
	}
		const _returnValueQkrzebB = await splitOptionFlags(_flagsh3BALjH)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValueB1tFZmE = null;
		const _arrayValueMdBAzrp = null;
		const _returnValuesNgwZBf = [_arrayValueB1tFZmE, _arrayValueMdBAzrp]
		const _splitBGzKN7R = () => { return _returnValuesNgwZBf };
		const _flagsZ2ANTpW = {
			"split": _splitBGzKN7R
	}
		const _returnValuejC7Hy7 = await splitOptionFlags(_flagsZ2ANTpW)
	});
})