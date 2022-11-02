export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _arrayValueofN0suZ = {
		
	}
		const _graphQ3gvgw = [_arrayValueofN0suZ]
		const _returnValuegrfeWlw = await graphBridges(_graphQ3gvgw)
	});

	it('test for graphBridges', async () => {
		const _isDirectedmzRFIAR = false;
		const _graphV8qqZcG = new Graph(_isDirectedmzRFIAR)
		const _valuez6YUMGn = false;
		const _newVertexn5iMxRl = new GraphVertex(_valuez6YUMGn)
		const _returnValueuWe1cKp = await _newVertexn5iMxRl.deleteAllEdges()
		const _requiredEdgekDox4Zc = {
		
	}
		const _returnValueMbxAXyU = await _newVertexn5iMxRl.hasEdge(_requiredEdgekDox4Zc)
		const _arrayValueusdQxZR = true;
		const _arrayValuerp46aKT = undefined;
		const _returnValuej18xfae = [_arrayValueusdQxZR, _arrayValuerp46aKT]
		const _callbackXrT0iz7 = () => { return _returnValuej18xfae };
		const _returnValueufybLJ = await _newVertexn5iMxRl.toString(_callbackXrT0iz7)
		const _vertexnDgATh6 = undefined;
		const _returnValueYbAwrV = await _newVertexn5iMxRl.hasNeighbor(_vertexnDgATh6)
		const _returnValuedZmSiXc = await _graphV8qqZcG.addVertex(_newVertexn5iMxRl)
		const _returnValuepo3HKJr = await graphBridges(_graphV8qqZcG)
	});
})