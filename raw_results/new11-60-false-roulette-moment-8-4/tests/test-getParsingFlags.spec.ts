export {}
import getParsingFlags from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/parsing-flags.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getParsingFlags', () => {
	it('test for getParsingFlags', async () => {
		const _miDj1bza = "vAgRfqnicjnztg15O22KXrxvKIzNCt";
		const _returnValueMzBp2lR = await getParsingFlags(_miDj1bza)
	});
})