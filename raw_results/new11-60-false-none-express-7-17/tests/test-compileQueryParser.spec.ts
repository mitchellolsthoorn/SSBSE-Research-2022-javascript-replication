export {}
const {compileQueryParser} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileQueryParser', () => {
	it('test for compileQueryParser', async () => {
		const _returnValueLHM9P6v = false;
		const _valrDnCWxE = () => { return _returnValueLHM9P6v };
		const _returnValueSc1YAXE = await compileQueryParser(_valrDnCWxE)
	});

	it('test for compileQueryParser', async () => {
		const _valwyoG4Jl = 4.1798480203377135;
		const _returnValueKzpQrxe = await compileQueryParser(_valwyoG4Jl)
	});
})