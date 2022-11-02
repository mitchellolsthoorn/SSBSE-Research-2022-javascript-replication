export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromUkyLRqx = undefined;
		const _arrayValueUhmCYWK = null;
		const _arrayValueReiib2O = null;
		const _arrayValuesphvxZC = undefined;
		const _toMRXO8mK = [_arrayValueUhmCYWK, _arrayValueReiib2O, _arrayValuesphvxZC]
		const _unitsqZjPQ9h = -7.712173080889835;
		const _returnValuej9SXtKn = -6.73361823123914;
		const _inclusivitywoB0fL6 = () => { return _returnValuej9SXtKn };
		const _returnValuev4MzqFS = await isBetween(_fromUkyLRqx, _toMRXO8mK, _unitsqZjPQ9h, _inclusivitywoB0fL6)
	});
})