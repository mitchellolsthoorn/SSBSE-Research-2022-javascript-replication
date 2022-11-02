export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthC1D6RSt = null;
		const _objectt5goXrT = {
			"length": _lengthC1D6RSt
	}
		const _path5QNadl = {
		
	}
		const _returnValueXkgbZd = await hasPath(_objectt5goXrT, _path5QNadl)
	});

	it('test for hasPath', async () => {
		const _lengthcCFJDHu = 1.232904365545087;
		const _objectYUicwWV = {
			"length": _lengthcCFJDHu
	}
		const _pathDv1o2U = true;
		const _returnValueClP9tmI = await hasPath(_objectYUicwWV, _pathDv1o2U)
	});

	it('test for hasPath', async () => {
		const _objectkSef7z0 = undefined;
		const _pathBCJaxbE = null;
		const _returnValuetsGRjB = await hasPath(_objectkSef7z0, _pathBCJaxbE)
	});
})