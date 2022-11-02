export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _returnValueJqru9Ty = 5.753970896621343;
		const _objectI8JC8cS = () => { return _returnValueJqru9Ty };
		const _path6q1Pni = {
		
	}
		const _returnValueVyZE2xU = await hasPath(_objectI8JC8cS, _path6q1Pni)
	});

	it('test for hasPath', async () => {
		const _arrayValueBkaFM5H = {
		
	}
		const _arrayValueILWu3U = null;
		const _arrayValuedBsiH9Y = false;
		const _lengthEZjJrRl = [_arrayValueBkaFM5H, _arrayValueILWu3U, _arrayValuedBsiH9Y]
		const _objectzorrOW = {
			"length": _lengthEZjJrRl
	}
		const _pathS1ZFGa = -3.58889384327294;
		const _returnValueq76rfPA = await hasPath(_objectzorrOW, _pathS1ZFGa)
	});

	it('test for hasPath', async () => {
		const _objectQ2MJMUJ = undefined;
		const _pathBXSXRXk = null;
		const _returnValue7IXn4P = await hasPath(_objectQ2MJMUJ, _pathBXSXRXk)
	});
})