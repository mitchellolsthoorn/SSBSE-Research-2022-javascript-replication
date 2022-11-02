export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthGzGm4vv = true;
		const _objectRMIEkJe = {
			"length": _lengthGzGm4vv
	}
		const _pathDyq1Ok7 = {
		
	}
		const _returnValuehFuvDuF = await hasPath(_objectRMIEkJe, _pathDyq1Ok7)
	});

	it('test for hasPath', async () => {
		const _lengthnNmpa9U = {
		
	}
		const _objectg7MuHPU = {
			"length": _lengthnNmpa9U
	}
		const _arrayValuePTIlJdf = null;
		const _arrayValueUQREBdt = [_arrayValuePTIlJdf]
		const _arrayValueXj8zElU = "pqPaAQn3p";
		const _arrayValueufcMMjs = null;
		const _pathgCuATx = [_arrayValueUQREBdt, _arrayValueXj8zElU, _arrayValueufcMMjs]
		const _returnValueba2LN5 = await hasPath(_objectg7MuHPU, _pathgCuATx)
	});

	it('test for hasPath', async () => {
		const _lengthTaMav9D = -3.665720763044286;
		const _objectfyBZKsg = {
			"length": _lengthTaMav9D
	}
		const _pathcfARggW = undefined;
		const _returnValueUbqAVak = await hasPath(_objectfyBZKsg, _pathcfARggW)
	});

	it('test for hasPath', async () => {
		const _objectFPjaNhI = undefined;
		const _pathYQj6Qc = -8.651211601642586;
		const _returnValueB6biDh4 = await hasPath(_objectFPjaNhI, _pathYQj6Qc)
	});
})