export {}
import getParsingFlags from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/parsing-flags.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getParsingFlags', () => {
	it('test for getParsingFlags', async () => {
		const _md07o0US = "mpgbmzxBfVKDvfktZgrpl0hJMfWYRms3vqe4cbbiDl";
		const _returnValuezm21omc = await getParsingFlags(_md07o0US)
	});
})