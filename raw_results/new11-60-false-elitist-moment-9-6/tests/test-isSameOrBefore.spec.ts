export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _input7iwmRN = "3dumsV1ijrU7d5BFkBeIN5kc1icJ1";
		const _unitsaZs9sw = 7.4071057593709;
		const _returnValueuigiLoN = await isSameOrBefore(_input7iwmRN, _unitsaZs9sw)
	});
})