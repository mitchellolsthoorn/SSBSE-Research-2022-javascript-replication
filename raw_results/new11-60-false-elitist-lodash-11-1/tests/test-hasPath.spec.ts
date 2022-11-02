export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthPSyOnaH = "bwzGMXs2FNf8xWvzmLLVrMsuSDKb6UPZ7nqamgUJ1Or6x32F7qgE1tM188Wr1k2vh3P";
		const _objectiGoHDw0 = {
			"length": _lengthPSyOnaH
	}
		const _pathB9xeVwF = {
		
	}
		const _returnValueo4h0tbi = await hasPath(_objectiGoHDw0, _pathB9xeVwF)
	});

	it('test for hasPath', async () => {
		const _lengthuZhqT9 = false;
		const _objectXKhnqDO = {
			"length": _lengthuZhqT9
	}
		const _pathyhuiR8A = null;
		const _returnValueFeZPnsf = await hasPath(_objectXKhnqDO, _pathyhuiR8A)
	});

	it('test for hasPath', async () => {
		const _objecthyT773J = undefined;
		const _pathouWsyL = undefined;
		const _returnValueLDR6BHU = await hasPath(_objecthyT773J, _pathouWsyL)
	});
})