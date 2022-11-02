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
		const _graphJ30bNdT = -2.256630292835994;
		const _returnValuerTR4fx = await graphBridges(_graphJ30bNdT)
	});

	it('test for graphBridges', async () => {
		const _isDirectedJlAu84W = false;
		const _graphQKMs6g3 = new Graph(_isDirectedJlAu84W)
		const _returnValueBsw5YS8 = await _graphQKMs6g3.reverse()
		const _valueTD0in3G = -1.82913620752905;
		const _returnValuebJlBM9i = 1.4342531352016081;
		const _keyCallbackabeUjau = () => { return _returnValuebJlBM9i };
		const _newVertexzcVi6n6 = new DisjointSetItem(_valueTD0in3G, _keyCallbackabeUjau)
		const _returnValue1OQ5At = await _newVertexzcVi6n6.isRoot()
		const _returnValuedqFFVku = await _newVertexzcVi6n6.getChildren()
		const _returnValueZ92h2Lb = await _newVertexzcVi6n6.getRoot()
		const _returnValueXomGUOn = await _newVertexzcVi6n6.isRoot()
		const _returnValueUNasFr = await _graphQKMs6g3.addVertex(_newVertexzcVi6n6)
		const _returnValuexwLn8ML = await graphBridges(_graphQKMs6g3)
	});
})