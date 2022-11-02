export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputHhDP1LW = "fAkvs2OOsMxRE3sMW3x6EoA8VQCZuc";
		const _unitsO62Z8sm = 7.6209362111108305;
		const _returnValuerS6cobb = await isSameOrBefore(_inputHhDP1LW, _unitsO62Z8sm)
	});
})