export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _arrayValueO8ZDIAw = null;
		const _returnValuelhxorSQ = [_arrayValueO8ZDIAw]
		const _utcOffsetQKzYGit = () => { return _returnValuelhxorSQ };
		const _arrayValueI2DhIOE = false;
		const _arrayValueVyjFe9N = "zoU6in8sP0FPVdzFBlxiVY5xKuMimnexZNKHInLrCA6kqQi5JJ6dadbDv5hLA5tf7g4QZWaKCy6gmt6dQ";
		const _arrayValueGVWywLI = {
		
	}
		const _returnValueRUyJchL = [_arrayValueI2DhIOE, _arrayValueVyjFe9N, _arrayValueGVWywLI]
		const __tzmATZLyDs = () => { return _returnValueRUyJchL };
		const __iIH6USpJ = null;
		const _configxKMOZ6H = {
			"utcOffset": _utcOffsetQKzYGit,
		"_tzm": __tzmATZLyDs,
		"_i": __iIH6USpJ
	}
		const _returnValueMFZCH0e = await configFromObject(_configxKMOZ6H)
	});
})