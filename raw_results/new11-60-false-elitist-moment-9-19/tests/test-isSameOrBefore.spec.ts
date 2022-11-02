export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _returnValuelsjeVzS = "tocDmX6m5fJpRWYesXOyD3z9LQjRBQXQcYteAQb4fC9tYduxFsxP7uJWkghKFWK4AF2sRubEK4yCn7oKTMgLI8ud3dcqTyn4";
		const _inputYd06KD7 = () => { return _returnValuelsjeVzS };
		const _units2zkx0p = "UGrkIfIpdjO2Fi2UJ2qvuhPFuFde97spCFdepj8bGMxYKYrbhEUF2AIQUESxFpPs2oY0bcVeJqGW";
		const _returnValueEd9Yq5 = await isSameOrBefore(_inputYd06KD7, _units2zkx0p)
	});
})