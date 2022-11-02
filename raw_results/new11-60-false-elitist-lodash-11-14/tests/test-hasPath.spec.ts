export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthQtFFMBQ = 7.687708492037686;
		const _objectg7T0ADs = {
			"length": _lengthQtFFMBQ
	}
		const _pathnGLK4si = {
		
	}
		const _returnValueQocQGNc = await hasPath(_objectg7T0ADs, _pathnGLK4si)
	});

	it('test for hasPath', async () => {
		const _lengthNNBK6es = undefined;
		const _objectDlCCsv1 = {
			"length": _lengthNNBK6es
	}
		const _patht7tcnfu = 8.76497142637638;
		const _returnValue584owb = await hasPath(_objectDlCCsv1, _patht7tcnfu)
	});

	it('test for hasPath', async () => {
		const _objectEp7HSdT = undefined;
		const _pathLvKphSZ = true;
		const _returnValueqmTIOa = await hasPath(_objectEp7HSdT, _pathLvKphSZ)
	});
})