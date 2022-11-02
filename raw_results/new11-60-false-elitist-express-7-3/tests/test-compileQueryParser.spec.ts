export {}
const {compileQueryParser} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileQueryParser', () => {
	it('test for compileQueryParser', async () => {
		const _valsEcsC0Z = 4.718870364624214;
		const _returnValuedtfP2V = await compileQueryParser(_valsEcsC0Z)
	});

	it('test for compileQueryParser', async () => {
		const _arrayValueOi8s0yU = "7ncLYPOejojkVWdELkuYV27U7vTkNgR";
		const _arrayValueBWrHP02 = true;
		const _arrayValuervoqrTx = 3.674933777088352;
		const _arrayValueKve5loc = "THHul5vfhdAqBXYpBv91qjLRfsnA";
		const _arrayValueZR9tmIO = true;
		const _arrayValuerUwTlgc = 7.276824231139184;
		const _returnValueSq4BsC4 = [_arrayValueZR9tmIO, _arrayValuerUwTlgc]
		const _arrayValuer62qy1K = () => { return _returnValueSq4BsC4 };
		const _returnValue22pJBq = [_arrayValueKve5loc, _arrayValuer62qy1K]
		const _arrayValuebKK5Ia0 = () => { return _returnValue22pJBq };
		const _arrayValueOPTP6Ze = {
		
	}
		const _arrayValuejIS8WOE = false;
		const _arrayValueXsZQdkH = -4.246265493410401;
		const _returnValueimKYOF8 = [_arrayValuebKK5Ia0, _arrayValueOPTP6Ze, _arrayValuejIS8WOE, _arrayValueXsZQdkH]
		const _arrayValueSU6v0c2 = () => { return _returnValueimKYOF8 };
		const _returnValueAveZh65 = [_arrayValueOi8s0yU, _arrayValueBWrHP02, _arrayValuervoqrTx, _arrayValueSU6v0c2]
		const _valg4k5C8o = () => { return _returnValueAveZh65 };
		const _returnValuew512T8h = await compileQueryParser(_valg4k5C8o)
	});
})