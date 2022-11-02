export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthTAv2m93 = -6.227361710528281;
		const _objecto3Pheqm = {
			"length": _lengthTAv2m93
	}
		const _pathxM5QjOa = {
		
	}
		const _returnValueXTZjCed = await hasPath(_objecto3Pheqm, _pathxM5QjOa)
	});

	it('test for hasPath', async () => {
		const _lengthQVR7CPG = null;
		const _objectUKPR93 = {
			"length": _lengthQVR7CPG
	}
		const _arrayValueBJIytk6 = true;
		const _pathwdhjprD = [_arrayValueBJIytk6]
		const _returnValueZ2iruQq = await hasPath(_objectUKPR93, _pathwdhjprD)
	});

	it('test for hasPath', async () => {
		const _objectBjNg1Ff = null;
		const _pathtSLzKOW = undefined;
		const _returnValueFvjGOaP = await hasPath(_objectBjNg1Ff, _pathtSLzKOW)
	});
})