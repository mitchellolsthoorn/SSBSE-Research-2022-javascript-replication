export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputye5FINP = "OpaFwR3nij";
		const _returnValueqEG5GQc = undefined;
		const _unitsR4wfag2 = () => { return _returnValueqEG5GQc };
		const _returnValuea5AJkHj = await isSameOrAfter(_inputye5FINP, _unitsR4wfag2)
	});
})