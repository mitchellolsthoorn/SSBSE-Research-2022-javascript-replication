export {}
import getParsingFlags from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/parsing-flags.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('getParsingFlags', () => {
	it('test for getParsingFlags', async () => {
		const _mDYH1rGu = "8xoliqKsBpJHMIIQtH8b9v78Ik61cPUP4tDYxgtfLszMU6yE9jFuR1NSDzx1H4h";
		const _returnValueN2LCeu6 = await getParsingFlags(_mDYH1rGu)
	});
})