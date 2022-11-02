export {}
import getParsingFlags from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/parsing-flags.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getParsingFlags', () => {
	it('test for getParsingFlags', async () => {
		const _mqAoMHy1 = "SnL9sUT52Uqh9kXJjLrBXLfflzsPC8FkE1IbRDr4s8Vk4nVMXfYNrIBzrnWSduD2XRX";
		const _returnValueUvTvNbC = await getParsingFlags(_mqAoMHy1)
	});
})