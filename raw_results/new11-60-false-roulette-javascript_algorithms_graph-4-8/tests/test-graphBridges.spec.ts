export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _arrayValueKEdEnNc = "7sXyAPYFe2GrAHEi6IM5";
		const _arrayValuetsnMlur = true;
		const _arrayValueADHXRkd = null;
		const _graphBabFvrg = [_arrayValueKEdEnNc, _arrayValuetsnMlur, _arrayValueADHXRkd]
		const _returnValuezZUanyb = await graphBridges(_graphBabFvrg)
	});

	it('test for graphBridges', async () => {
		const _isDirectedIyumBp0 = null;
		const _graphjRYMTJN = new Graph(_isDirectedIyumBp0)
		const _valuePd7ZvHK = null;
		const _returnValueNBEhcLm = 9.794119623155474;
		const _keyCallbackp2enGjK = () => { return _returnValueNBEhcLm };
		const _newVertexrryJCdk = new DisjointSetItem(_valuePd7ZvHK, _keyCallbackp2enGjK)
		const _returnValuexrJDRY5 = await _newVertexrryJCdk.getRoot()
		const _returnValueJcWhlWu = await _newVertexrryJCdk.getRoot()
		const _returnValueCMEyYSc = await _newVertexrryJCdk.getKey()
		const _returnValueX1EnxP5 = await _graphjRYMTJN.addVertex(_newVertexrryJCdk)
		const _returnValueiCYIlQl = {
		
	}
		const _getKeyT3iW6I = () => { return _returnValueiCYIlQl };
		const _newVertexNK8SvXQ = {
			"getKey": _getKeyT3iW6I
	}
		const _returnValuehWvxICP = await _graphjRYMTJN.addVertex(_newVertexNK8SvXQ)
		const _vertexKeyDQ5ODuZ = {
		
	}
		const _returnValuezPYc9Y3 = await _graphjRYMTJN.getVertexByKey(_vertexKeyDQ5ODuZ)
		const _returnValuewIUiFmT = await _graphjRYMTJN.getAllVertices()
		const _returnValueqsKwyVs = await _graphjRYMTJN.reverse()
		const _returnValuewjrHA8U = await graphBridges(_graphjRYMTJN)
	});
})