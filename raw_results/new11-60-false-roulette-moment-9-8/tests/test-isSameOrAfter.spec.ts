export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputY9Tc1J8 = 6.901235644974669;
		const _unitsaHqWIX = "vXXXyqMVG6FrsKM5XI7CLfOjkJrs6rqq4CenCvTBOF5kRQSIg6wMt2B6uI9ojvb6yFbfk";
		const _returnValueOOXD6nd = await isSameOrAfter(_inputY9Tc1J8, _unitsaHqWIX)
	});
})