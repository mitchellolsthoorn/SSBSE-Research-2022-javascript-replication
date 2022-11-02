export {}
import getParsingFlags from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/parsing-flags.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getParsingFlags', () => {
	it('test for getParsingFlags', async () => {
		const _mZMBVH16 = "GH344gbhyaT84VY9EEi78cshzi2tjIwZ1ms7LN3V3dmROMjrntYWz3e1SFJ3j";
		const _returnValueZgnwrJR = await getParsingFlags(_mZMBVH16)
	});
})