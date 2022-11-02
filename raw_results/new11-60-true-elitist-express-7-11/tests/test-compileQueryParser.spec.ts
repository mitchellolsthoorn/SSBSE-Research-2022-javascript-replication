export {}
const {compileQueryParser} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileQueryParser', () => {
	it('test for compileQueryParser', async () => {
		const _valXboNOlM = 1.925799527204406;
		const _returnValueNkAyPaZ = await compileQueryParser(_valXboNOlM)
	});

	it('test for compileQueryParser', async () => {
		const _arrayValuebN5f6Uo = null;
		const _returnValueyolfGz = [_arrayValuebN5f6Uo]
		const _valrOOqjtV = () => { return _returnValueyolfGz };
		const _returnValueIYzakEK = await compileQueryParser(_valrOOqjtV)
	});
})