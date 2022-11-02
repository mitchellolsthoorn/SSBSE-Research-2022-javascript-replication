export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _returnValueDuuPbd = "qXOFg0RDQlCUNP5wMBrML3j9Sdbn2XJ5vfaAa7lUcwd8UIX3VCcJNr1vRQPwtBuuOLg0yV";
		const _objectIQ3AoHC = () => { return _returnValueDuuPbd };
		const _pathhv1yL2O = {
		
	}
		const _returnValuenZIwnQ = await hasPath(_objectIQ3AoHC, _pathhv1yL2O)
	});

	it('test for hasPath', async () => {
		const _returnValuejno7usu = 2.1439985266818056;
		const _objectdX8BsUw = () => { return _returnValuejno7usu };
		const _pathjODZ2vd = "SnDCuYwy4dNOFBHHzUgAK57LkWaXXNRAsGulA9";
		const _returnValuexm5OfTk = await hasPath(_objectdX8BsUw, _pathjODZ2vd)
	});

	it('test for hasPath', async () => {
		const _objectVwC8IlM = null;
		const _returnValueNff3TAB = undefined;
		const _pathKM60PcH = () => { return _returnValueNff3TAB };
		const _returnValueiXpUEGq = await hasPath(_objectVwC8IlM, _pathKM60PcH)
	});
})