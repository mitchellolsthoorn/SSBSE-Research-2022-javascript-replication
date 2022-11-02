export {}
const {compileQueryParser} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileQueryParser', () => {
	it('test for compileQueryParser', async () => {
		const _valG9qrba9 = "dkrBKLrBaL9neGP1mMIHTCGmw5gSX6jxIdwD6OUxzvUCoOd657MGGAnuHx8HmxojGnrfHUCNJ5UwfdaKJrCJ";
		const _returnValuemnZQSC8 = await compileQueryParser(_valG9qrba9)
	});

	it('test for compileQueryParser', async () => {
		const _returnValueIKURpF2 = null;
		const _valPbcAsi = () => { return _returnValueIKURpF2 };
		const _returnValueAr4CrMR = await compileQueryParser(_valPbcAsi)
	});
})