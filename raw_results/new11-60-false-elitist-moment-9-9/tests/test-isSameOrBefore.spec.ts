export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputEeEgKo = true;
		const _unitsZVBmpCN = "pl6VARNnvBeyPzR7gaggMQvfM14cTAKY";
		const _returnValueaPwclM5 = await isSameOrBefore(_inputEeEgKo, _unitsZVBmpCN)
	});
})