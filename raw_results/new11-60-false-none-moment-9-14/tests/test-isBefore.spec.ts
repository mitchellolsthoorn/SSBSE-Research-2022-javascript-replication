export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _inputVkeVL9 = "SEu0yu15U27SIi5CO5d7d8iXEdI9VWGb1P13xBqPcDyyqclOPznIXsdfKv66JfeudQJbYhGM";
		const _arrayValueOClEZcw = null;
		const _arrayValuemyxLtXF = undefined;
		const _arrayValue4fQiDF = [_arrayValuemyxLtXF]
		const _unitsg5lWcac = [_arrayValueOClEZcw, _arrayValue4fQiDF]
		const _returnValuejjP8OMg = await isBefore(_inputVkeVL9, _unitsg5lWcac)
	});

	it('test for isBefore', async () => {
		const _inputBdhbcrc = 6.811923179031503;
		const _unitsGe9iQzP = "Nhx3572Es3d7A";
		const _returnValuex6kBJ9h = await isBefore(_inputBdhbcrc, _unitsGe9iQzP)
	});
})