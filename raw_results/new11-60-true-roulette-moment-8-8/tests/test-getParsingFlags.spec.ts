export {}
import getParsingFlags from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/parsing-flags.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getParsingFlags', () => {
	it('test for getParsingFlags', async () => {
		const _mi4HR8XI = "N4CdlsD2G37f0znc0Rrafv5rfk7kSy1Esn1ETPzMq6rJTTrV38h2f5sy4f1l1p6QouRxIbZjn7tXbHvxNp8tCMcjpHtI";
		const _returnValuer2nWfaO = await getParsingFlags(_mi4HR8XI)
	});
})