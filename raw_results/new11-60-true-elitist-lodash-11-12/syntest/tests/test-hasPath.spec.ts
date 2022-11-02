export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthe08iNqq = -7.018884255252853;
		const _objectyaWedgg = {
			"length": _lengthe08iNqq
	}
		const _pathmrJlaXF = {
		
	}
		const _returnValuevf07Muj = await hasPath(_objectyaWedgg, _pathmrJlaXF)
	});

	it('test for hasPath', async () => {
		const _lengthK0YTkKu = null;
		const _objectw0SgkgJ = {
			"length": _lengthK0YTkKu
	}
		const _pathnRgF1cM = 5.835386375443253;
		const _returnValuem6aEfDX = await hasPath(_objectw0SgkgJ, _pathnRgF1cM)
	});

	it('test for hasPath', async () => {
		const _objectNzF5kJT = null;
		const _pathAFETQEU = null;
		const _returnValueSr10aR = await hasPath(_objectNzF5kJT, _pathAFETQEU)
	});
})