export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueQe62kWj = 1.8654398973886224;
		const _arrayValueAr3p3s = () => { return _returnValueQe62kWj };
		const _arrayValuev6zGWkq = [_arrayValueAr3p3s]
		const _arrayValueUwhiQtI = "3";
		const _arrayValuesOLikJ = -6.068593905248829;
		const _arrayValueagZ9cWn = null;
		const _arrayValuesVVIK2F = true;
		const _arrayValueGYVcRTR = -0.32343561471958715;
		const _arrayValueVh1Zl1Y = [_arrayValueagZ9cWn, _arrayValuesVVIK2F, _arrayValueGYVcRTR]
		const _arrayValueZ212K2x = undefined;
		const _arrayValuedK5oA40 = -9.22659366187224;
		const _returnValueEbDevV = null;
		const _arrayValuedZHUZQI = () => { return _returnValueEbDevV };
		const _arrayValueLVKce1A = [_arrayValueVh1Zl1Y, _arrayValueZ212K2x, _arrayValuedK5oA40, _arrayValuedZHUZQI]
		const _arrayValueMIlIOUk = [_arrayValueUwhiQtI, _arrayValuesOLikJ, _arrayValueLVKce1A]
		const _arrayValuee7wXrc = [_arrayValueMIlIOUk]
		const _graphIKJYKkm = [_arrayValuev6zGWkq, _arrayValuee7wXrc]
		const _returnValueweX9noZ = await stronglyConnectedComponents(_graphIKJYKkm)
	});
})