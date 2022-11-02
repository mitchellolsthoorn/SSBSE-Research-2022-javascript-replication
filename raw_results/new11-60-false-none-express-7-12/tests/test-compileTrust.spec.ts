export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _arrayValueoZK4H3p = undefined;
		const _arrayValueNoUG5fU = [_arrayValueoZK4H3p]
		const _arrayValueSRXsA7J = -5.892162728663475;
		const _arrayValueOmbzNfj = false;
		const _arrayValueASKmYqJ = "0z7qUbwBmk2m7HeuoVvONGLA";
		const _returnValuezrDzsuf = [_arrayValueSRXsA7J, _arrayValueOmbzNfj, _arrayValueASKmYqJ]
		const _arrayValueFVSuRYd = () => { return _returnValuezrDzsuf };
		const _arrayValueotbQptt = 5.960698064659777;
		const _arrayValueohE3FO = 4.037597194531958;
		const _valPEJwuEF = [_arrayValueNoUG5fU, _arrayValueFVSuRYd, _arrayValueotbQptt, _arrayValueohE3FO]
		const _returnValueAHwz6II = await compileTrust(_valPEJwuEF)
	});

	it('test for compileTrust', async () => {
		const _valjrdPQQj = -2.111660382900097;
		const _returnValueYFtbcOg = await compileTrust(_valjrdPQQj)
	});

	it('test for compileTrust', async () => {
		const _valJm9eHRk = "cRWSsm4kTqZGp7SUqVCvU9bPMFXAzvucnzRI";
		const _returnValueDlm0Vhj = await compileTrust(_valJm9eHRk)
	});

	it('test for compileTrust', async () => {
		const _valf9d2JZW = true;
		const _returnValueZu4KvRj = await compileTrust(_valf9d2JZW)
	});

	it('test for compileTrust', async () => {
		const _returnValuedwMXaQ9 = false;
		const _valQPzwk1H = () => { return _returnValuedwMXaQ9 };
		const _returnValueVMVz1CO = await compileTrust(_valQPzwk1H)
	});
})