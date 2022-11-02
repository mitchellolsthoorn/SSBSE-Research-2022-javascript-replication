export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _returnValuekbvDMNx = "nrvD3Mex2YxUS53UlxgrmTWmdloPcjsFqM4JWWFNfkeqVMY7s1d0FcR7zgGPVoPGKIgr7XNCghOjLrEWrYW";
		const _objectdTKPhOj = () => { return _returnValuekbvDMNx };
		const _pathatK29pv = {
		
	}
		const _returnValueuUuU1CI = await hasPath(_objectdTKPhOj, _pathatK29pv)
	});

	it('test for hasPath', async () => {
		const _objectghsQkeL = {
		
	}
		const _returnValuet5cCYke = -1.8963821620299672;
		const _path4mGlhf = () => { return _returnValuet5cCYke };
		const _returnValuea1nKA7S = await hasPath(_objectghsQkeL, _path4mGlhf)
	});

	it('test for hasPath', async () => {
		const _objectBIJHjB = undefined;
		const _pathtzyuA3c = "cEgx6cXJYf7eJRANIA42r3gaUVhEdonJRpcL";
		const _returnValuesQTkson = await hasPath(_objectBIJHjB, _pathtzyuA3c)
	});

	it('test for hasPath', async () => {
		const _objectKxoWVtn = "qRXNfamq6ex";
		const _pathIVrWRiX = "5";
		const _returnValuedYr5CZY = await hasPath(_objectKxoWVtn, _pathIVrWRiX)
	});
})