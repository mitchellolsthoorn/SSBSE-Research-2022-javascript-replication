export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputEsWk1K8 = -5.310612266897769;
		const _unitsw4iN7I7 = -1.2275733763280865;
		const _returnValuevfVXzK5 = await isSameOrAfter(_inputEsWk1K8, _unitsw4iN7I7)
	});
})