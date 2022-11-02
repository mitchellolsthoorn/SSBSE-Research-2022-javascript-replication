export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _object44VZ8q = undefined;
		const _lengthemvm5z = -2.0313778624325716;
		const _pathnMl0gwB = {
			"length": _lengthemvm5z
	}
		const _defaultValueB9cUjFj = {
		
	}
		const _returnValuelq7h9Jg = await result(_object44VZ8q, _pathnMl0gwB, _defaultValueB9cUjFj)
	});

	it('test for result', async () => {
		const _objectlvz7o7z = undefined;
		const _pathFZJMwj = "5nMHpGTdln8uv2SoUpa4m827";
		const _defaultValueskXOxxM = {
		
	}
		const _returnValuehCxpbVj = await result(_objectlvz7o7z, _pathFZJMwj, _defaultValueskXOxxM)
	});

	it('test for result', async () => {
		const _objectTHA7Wr8 = undefined;
		const _pathH3GBXXV = []
		const _defaultValueRi2iCN = {
		
	}
		const _returnValueJTB5rO = await result(_objectTHA7Wr8, _pathH3GBXXV, _defaultValueRi2iCN)
	});

	it('test for result', async () => {
		const _objectIqevQFm = undefined;
		const _pathdCvQzbC = -7.463785095828853;
		const _returnValueGrmh3O = true;
		const _defaultValue9okflW = () => { return _returnValueGrmh3O };
		const _returnValueYQ4AZA = await result(_objectIqevQFm, _pathdCvQzbC, _defaultValue9okflW)
	});
})