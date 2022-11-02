export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueM5gq1c = undefined;
		const _arrayValueDuLfM0i = () => { return _returnValueM5gq1c };
		const _arrayValueHg1C0yx = false;
		const _arrayValueoReEJe = null;
		const _arrayValuewql8ZLZ = false;
		const _arrayValueWlfmuTv = 2.8238711628878903;
		const _arrayValuerNGYLM = -0.3483703111390444;
		const _arrayValueEKVJMzB = "rC7LaO6OFqTO6C63v9wrTCQ74fWkTxXA8bhpfm5";
		const _arrayValueYlTcAKK = [_arrayValuerNGYLM, _arrayValueEKVJMzB]
		const _arrayValueYaT9hPY = [_arrayValuewql8ZLZ, _arrayValueWlfmuTv, _arrayValueYlTcAKK]
		const _arrayValueUCj776 = {
		
	}
		const _arrayValueOifuAd4 = [_arrayValueYaT9hPY, _arrayValueUCj776]
		const _graphhQaP78S = [_arrayValueDuLfM0i, _arrayValueHg1C0yx, _arrayValueoReEJe, _arrayValueOifuAd4]
		const _returnValue36VRKn = await graphBridges(_graphhQaP78S)
	});

	it('test for graphBridges', async () => {
		const _isDirectedZPAgqwv = false;
		const _graphB9VKewM = new Graph(_isDirectedZPAgqwv)
		const _returnValuep5o98cr = 4.485622088947395;
		const _returnValuevXX491 = () => { return _returnValuep5o98cr };
		const _returnValueLUMxVnU = () => { return _returnValuevXX491 };
		const _getKeyfC2VeX = () => { return _returnValueLUMxVnU };
		const _newVertexaurEw9M = {
			"getKey": _getKeyfC2VeX
	}
		const _returnValueSG9DyWM = await _graphB9VKewM.addVertex(_newVertexaurEw9M)
		const _returnValuet0UNnS = await graphBridges(_graphB9VKewM)
	});
})