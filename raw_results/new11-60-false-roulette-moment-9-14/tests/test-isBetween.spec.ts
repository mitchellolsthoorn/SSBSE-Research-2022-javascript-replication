export {}
import {isBetween} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBetween', () => {
	it('test for isBetween', async () => {
		const _fromo4iWLrx = false;
		const _toXX3XLmf = null;
		const _unitszkd5wpI = null;
		const _returnValueQPgYeeX = 3.9663761259827233;
		const _inclusivityg9YK0Rn = () => { return _returnValueQPgYeeX };
		const _returnValueiZTEASq = await isBetween(_fromo4iWLrx, _toXX3XLmf, _unitszkd5wpI, _inclusivityg9YK0Rn)
	});
})