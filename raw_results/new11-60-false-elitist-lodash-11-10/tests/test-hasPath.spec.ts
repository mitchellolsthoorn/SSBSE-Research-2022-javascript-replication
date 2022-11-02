export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthPp0jFbI = {
		
	}
		const _objectG4EQLFf = {
			"length": _lengthPp0jFbI
	}
		const _pathUCNk9zm = {
		
	}
		const _returnValuedATZG5n = await hasPath(_objectG4EQLFf, _pathUCNk9zm)
	});

	it('test for hasPath', async () => {
		const _objectp1VLKLP = -9.35213380288757;
		const _pathHdOd2XN = -4.9211860475781;
		const _returnValuecS4hidP = await hasPath(_objectp1VLKLP, _pathHdOd2XN)
	});

	it('test for hasPath', async () => {
		const _objectPUwnzg = undefined;
		const _pathMA26DSG = "8QH68Y3OrbGIWDjaoBGaPwrg2q2CCWNLrlKQVYevCghIzK12Ig84a5pev4Gh3tcXYmIcPxCi45QcTPAz8G78hePzazE89xWHu";
		const _returnValuemkEcKn = await hasPath(_objectPUwnzg, _pathMA26DSG)
	});
})