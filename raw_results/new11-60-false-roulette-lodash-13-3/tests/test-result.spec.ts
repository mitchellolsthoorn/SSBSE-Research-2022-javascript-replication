export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectsL0z7LN = {
		
	}
		const _lengthUmPHa8c = -5.771725500989732;
		const _pathDqZ3pVG = {
			"length": _lengthUmPHa8c
	}
		const _defaultValueLVWxuTH = "gTet419yHUjAaMMAoO2IH4R3P8OMcwbXbswsoWk5Cnh2YNUE1gqt7JBlATFXuwKbV8edm3DwO";
		const _returnValuentPXLBK = await result(_objectsL0z7LN, _pathDqZ3pVG, _defaultValueLVWxuTH)
	});

	it('test for result', async () => {
		const _objectPx29FAH = null;
		const _pathQXdneX3 = "A2wLBS36SARrSPRlYI7bCIPPXCwx";
		const _returnValuetWFtUeI = "o64bTU1SmxkZ5mXemlB6z5qEggliJ1YAkQBbeDyyuPthb4bw";
		const _defaultValuebGSoQ8b = () => { return _returnValuetWFtUeI };
		const _returnValuevCT1HN = await result(_objectPx29FAH, _pathQXdneX3, _defaultValuebGSoQ8b)
	});

	it('test for result', async () => {
		const _objectrTRyNNk = -3.063681708824796;
		const _pathqzq9UMv = "nxggBPc4eGIAERh5EryS";
		const _defaultValuen9Tg8VV = {
		
	}
		const _returnValueK7Ul6EA = await result(_objectrTRyNNk, _pathqzq9UMv, _defaultValuen9Tg8VV)
	});

	it('test for result', async () => {
		const _objectm9uGMH = undefined;
		const _pathS9ZQpJN = []
		const _defaultValueHZiJpb = undefined;
		const _returnValueIbTepCK = await result(_objectm9uGMH, _pathS9ZQpJN, _defaultValueHZiJpb)
	});
})