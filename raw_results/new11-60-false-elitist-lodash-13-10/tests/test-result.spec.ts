export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectGTGKyti = "7cnQ2zniKAeTXoWFLHIeJWoXdpolR4e2YS1KOa5nLmW";
		const _lengthKOCpyJa = 7.896697535646489;
		const _pathsSN0kuI = {
			"length": _lengthKOCpyJa
	}
		const _defaultValuewN6XzfO = {
		
	}
		const _returnValueDIPXqKL = await result(_objectGTGKyti, _pathsSN0kuI, _defaultValuewN6XzfO)
	});

	it('test for result', async () => {
		const _objectEsQlp6c = undefined;
		const _pathUMykmX = true;
		const _defaultValueezcrbi = {
		
	}
		const _returnValueUiwdNaB = await result(_objectEsQlp6c, _pathUMykmX, _defaultValueezcrbi)
	});

	it('test for result', async () => {
		const _objectzJhAi21 = undefined;
		const _pathN6ooyCd = []
		const _defaultValuePHuXaxe = undefined;
		const _returnValueN4w8F2o = await result(_objectzJhAi21, _pathN6ooyCd, _defaultValuePHuXaxe)
	});

	it('test for result', async () => {
		const _objectANFfsw = undefined;
		const _pathnjWN6k = -5.913177686147354;
		const _returnValueZgVORvU = -6.408396199307839;
		const _defaultValuetcNBFbh = () => { return _returnValueZgVORvU };
		const _returnValuebhzogUb = await result(_objectANFfsw, _pathnjWN6k, _defaultValuetcNBFbh)
	});
})