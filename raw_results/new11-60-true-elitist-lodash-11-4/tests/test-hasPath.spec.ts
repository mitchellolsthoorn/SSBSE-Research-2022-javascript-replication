export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthtCFQsj5 = true;
		const _objectLTfLjCN = {
			"length": _lengthtCFQsj5
	}
		const _pathk5aH6Sk = {
		
	}
		const _returnValueHIQSNP = await hasPath(_objectLTfLjCN, _pathk5aH6Sk)
	});

	it('test for hasPath', async () => {
		const _objectTA6zKlN = "8rRDARbFPnnOVcM8EaC";
		const _pathVfCZHsI = -6.260974876483317;
		const _returnValuebYnD4G4 = await hasPath(_objectTA6zKlN, _pathVfCZHsI)
	});

	it('test for hasPath', async () => {
		const _objectav7CdXi = null;
		const _pathNPYwFl1 = null;
		const _returnValueiqIzKh = await hasPath(_objectav7CdXi, _pathNPYwFl1)
	});
})