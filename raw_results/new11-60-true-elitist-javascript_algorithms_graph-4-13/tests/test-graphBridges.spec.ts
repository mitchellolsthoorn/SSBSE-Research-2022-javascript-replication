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
		const _returnValueagK7u3T = null;
		const _getAllVerticesEleMJYp = () => { return _returnValueagK7u3T };
		const _returnValue7YNLOI = {
		
	}
		const _findEdgecOU7kE5 = () => { return _returnValue7YNLOI };
		const _graphDcJVuma = {
			"getAllVertices": _getAllVerticesEleMJYp,
		"findEdge": _findEdgecOU7kE5
	}
		const _returnValueXYOGL98 = await graphBridges(_graphDcJVuma)
	});

	it('test for graphBridges', async () => {
		const _isDirectedpQZJjGx = true;
		const _graphyjkj6iJ = new Graph(_isDirectedpQZJjGx)
		const _returnValueyZiZAM3 = await _graphyjkj6iJ.getAllVertices()
		const _valueuRy7gBu = null;
		const _returnValueTu6y5gM = undefined;
		const _keyCallbackRrHPXwS = () => { return _returnValueTu6y5gM };
		const _newVertexnm2ZE6O = new DisjointSetItem(_valueuRy7gBu, _keyCallbackRrHPXwS)
		const _returnValueVjEHYz9 = await _newVertexnm2ZE6O.getRank()
		const _returnValueddqmcPC = await _newVertexnm2ZE6O.getRoot()
		const _parentItemWMPxXZX = "oSuwqztTeHCLgbSr5BBBlN5p8uq5aysoF";
		const _forceSettingParentChildlh2mSaN = false;
		const _returnValueklQ6UvM = await _newVertexnm2ZE6O.setParent(_parentItemWMPxXZX, _forceSettingParentChildlh2mSaN)
		const _returnValue8ohKDX = await _newVertexnm2ZE6O.getChildren()
		const _returnValuejDafFhI = await _graphyjkj6iJ.addVertex(_newVertexnm2ZE6O)
		const _vertexKeyYWIaEhc = null;
		const _returnValueSQHnApP = await _graphyjkj6iJ.getVertexByKey(_vertexKeyYWIaEhc)
		const _returnValueOvCdNSI = {
		
	}
		const _vertexKeytRUqnj = () => { return _returnValueOvCdNSI };
		const _returnValueMyQX8j = await _graphyjkj6iJ.getVertexByKey(_vertexKeytRUqnj)
		const _returnValueLNfGIkC = await graphBridges(_graphyjkj6iJ)
	});
})