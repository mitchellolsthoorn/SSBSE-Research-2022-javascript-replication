export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _returnValuegbuEA2J = null;
		const _lengthWXzOJsJ = () => { return _returnValuegbuEA2J };
		const _objectKPhVeMp = {
			"length": _lengthWXzOJsJ
	}
		const _pathj31qyPD = {
		
	}
		const _returnValueXydfM38 = await hasPath(_objectKPhVeMp, _pathj31qyPD)
	});

	it('test for hasPath', async () => {
		const _lengthnVCfZ7P = true;
		const _objectvCQdk4A = {
			"length": _lengthnVCfZ7P
	}
		const _path7QoGP7 = undefined;
		const _returnValueMLf9bgM = await hasPath(_objectvCQdk4A, _path7QoGP7)
	});

	it('test for hasPath', async () => {
		const _objectJ8gika = null;
		const _pathbNRz9cu = -2.1645370667516453;
		const _returnValuecX5TgM8 = await hasPath(_objectJ8gika, _pathbNRz9cu)
	});
})