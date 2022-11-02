export {}
const {compileQueryParser} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileQueryParser', () => {
	it('test for compileQueryParser', async () => {
		const _valOiSfpzl = 4.831030937325602;
		const _returnValueM6lPCZ = await compileQueryParser(_valOiSfpzl)
	});

	it('test for compileQueryParser', async () => {
		const _returnValuexbUcEqU = -4.993329939648637;
		const _valNgzOkmR = () => { return _returnValuexbUcEqU };
		const _returnValueRIaD8mV = await compileQueryParser(_valNgzOkmR)
	});
})