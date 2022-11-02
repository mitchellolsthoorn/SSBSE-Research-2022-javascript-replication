export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputL8QktF = "gBsc6wLI9rEbR2b6y4Hd5oFbQKAZ9BV3G4248WykCXlfkzDdsbxX2vktQRs1jgwwQMoj83nYHclgwDMN8w";
		const _unitsrR6xPel = 7.816346923807668;
		const _returnValuewUBf2Ex = await isSameOrAfter(_inputL8QktF, _unitsrR6xPel)
	});
})