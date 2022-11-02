export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputSx9XvjG = undefined;
		const _unitsVDZz1dv = "eYiTBfRQkXzwAAnWbYrQZaRBiqrCzFF0OMzFnWjsaAtqT9qzRiRsRgifxfABFcK9KuJ9mBIvzyaTeRelpOYasTUwY9lB";
		const _returnValueWtR4Pbc = await isSameOrAfter(_inputSx9XvjG, _unitsVDZz1dv)
	});
})