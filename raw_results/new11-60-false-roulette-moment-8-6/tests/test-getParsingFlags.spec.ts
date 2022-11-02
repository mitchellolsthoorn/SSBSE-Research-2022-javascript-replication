export {}
import getParsingFlags from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/parsing-flags.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getParsingFlags', () => {
	it('test for getParsingFlags', async () => {
		const _mBT2eeGR = "XzqjUoL3wggfqh5ozt8VsfmkFHK5VXG1mOpwGFOOq2K";
		const _returnValueWXKBwwr = await getParsingFlags(_mBT2eeGR)
	});
})