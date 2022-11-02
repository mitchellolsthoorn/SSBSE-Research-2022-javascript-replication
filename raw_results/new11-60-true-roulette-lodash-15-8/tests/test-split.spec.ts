export {}
import split from "../../.syntest/instrumented/benchmark/top10npm/lodash/split.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('split', () => {
	it('test for split', async () => {
		const _stringztfXuF = "arU7mIICy8wEduRfnUDLJ4NOCfhBf1fiVuUzDv9iyCYhEqPB1Po399GBSOPorVstrKgpr";
		const _separatorok05YBI = null;
		const _limitaTEQMrg = {
		
	}
		const _returnValuehM8YEey = await split(_stringztfXuF, _separatorok05YBI, _limitaTEQMrg)
	});

	it('test for split', async () => {
		const _stringeD9TV1K = "aSzqq8cTFvLvG76RL";
		const _separatorDQcCrAL = null;
		const _limitHC1AaVO = -3.705323048405578;
		const _returnValueXDER7LO = await split(_stringeD9TV1K, _separatorDQcCrAL, _limitHC1AaVO)
	});

	it('test for split', async () => {
		const _arrayValueaRzyC3P = false;
		const _arrayValueTgDCn0z = null;
		const _stringkEcpcDz = [_arrayValueaRzyC3P, _arrayValueTgDCn0z]
		const _separatorTRgleHE = null;
		const _limitw6EjqsX = undefined;
		const _returnValueh3nxBhg = await split(_stringkEcpcDz, _separatorTRgleHE, _limitw6EjqsX)
	});

	it('test for split', async () => {
		const _stringZ9ckyRa = "IZTvSlo684i2UIljpEoXs7V8DcSy5gkwGTIAyvJACGcqQIy0KCw4hKZE7PAsS5PT";
		const _returnValuek45sERT = false;
		const _separator3qGqS4 = () => { return _returnValuek45sERT };
		const _limitarod0C = undefined;
		const _returnValueVByPzzL = await split(_stringZ9ckyRa, _separator3qGqS4, _limitarod0C)
	});
})