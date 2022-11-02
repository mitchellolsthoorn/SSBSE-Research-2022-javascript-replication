export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputbHw87Z = true;
		const _unitsXvxkpo2 = "TsCyqCqgNB17H9vD";
		const _returnValuelVcpWKh = await isSameOrBefore(_inputbHw87Z, _unitsXvxkpo2)
	});
})