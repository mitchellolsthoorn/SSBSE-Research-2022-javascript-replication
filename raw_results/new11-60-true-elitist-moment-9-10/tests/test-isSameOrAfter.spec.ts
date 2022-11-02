export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _returnValueDvw5g6 = 6.807244269501883;
		const _inputttHPZB = () => { return _returnValueDvw5g6 };
		const _unitsZxON20J = undefined;
		const _returnValuetC8OFbv = await isSameOrAfter(_inputttHPZB, _unitsZxON20J)
	});
})