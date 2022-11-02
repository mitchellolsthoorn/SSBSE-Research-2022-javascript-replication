export {}
const {compileQueryParser} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileQueryParser', () => {
	it('test for compileQueryParser', async () => {
		const _arrayValueIkxukRy = null;
		const _arrayValueywAxqL = undefined;
		const _arrayValueagnqy8Q = [_arrayValueIkxukRy, _arrayValueywAxqL]
		const _valZIQUFiq = [_arrayValueagnqy8Q]
		const _returnValuej8mr2Kw = await compileQueryParser(_valZIQUFiq)
	});

	it('test for compileQueryParser', async () => {
		const _returnValuewGu5tO8 = true;
		const _valxxdu6Gk = () => { return _returnValuewGu5tO8 };
		const _returnValuednp4tjx = await compileQueryParser(_valxxdu6Gk)
	});
})