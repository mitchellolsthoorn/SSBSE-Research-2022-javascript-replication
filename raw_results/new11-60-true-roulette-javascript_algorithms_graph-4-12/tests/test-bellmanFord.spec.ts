export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphO0BL5CA = "bqqJTpjX73lKOER52VK3Mj2MDHDcqiSdPbJNVLTqWUIcbHu0tdkwOiUd";
		const _getKeyHvn1clL = null;
		const _startVertexL4i6Ul = {
			"getKey": _getKeyHvn1clL
	}
		const _returnValuewOgLamr = await bellmanFord(_graphO0BL5CA, _startVertexL4i6Ul)
	});

	it('test for bellmanFord', async () => {
		const _returnValuezXeHPN = undefined;
		const _getAllVerticeswgY0z4 = () => { return _returnValuezXeHPN };
		const _returnValuepGjiRZ6 = 5.1971554778933875;
		const _getVertexByKeyFy6dhji = () => { return _returnValuepGjiRZ6 };
		const _returnValueUTL4E1l = "TwrY6uRd7Tzgw4eHDj9KW4CkpUZJ6RYx2qe4kFBdrr3b36JI6mDpiFRdqPZglhpBIAKIKzBq3Wuw";
		const _getNeighborsyTfuj7a = () => { return _returnValueUTL4E1l };
		const _returnValuelCRx5E5 = 4.416271758264898;
		const _returnValuevFdM2vl = () => { return _returnValuelCRx5E5 };
		const _findEdgek80pfVi = () => { return _returnValuevFdM2vl };
		const _graphwQo6ts6 = {
			"getAllVertices": _getAllVerticeswgY0z4,
		"getVertexByKey": _getVertexByKeyFy6dhji,
		"getNeighbors": _getNeighborsyTfuj7a,
		"findEdge": _findEdgek80pfVi
	}
		const _returnValueOxoW9r2 = null;
		const _getKeyDkMZFxl = () => { return _returnValueOxoW9r2 };
		const _startVertexdPkaeS7 = {
			"getKey": _getKeyDkMZFxl
	}
		const _returnValuePO9IY0K = await bellmanFord(_graphwQo6ts6, _startVertexdPkaeS7)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedf530lWj = false;
		const _graphFMZKtZm = new Graph(_isDirectedf530lWj)
		const _returnValueatHIT5D = await _graphFMZKtZm.getAllEdges()
		const _returnValueB8oJmXy = await _graphFMZKtZm.getWeight()
		const _valuegOlaTs8 = null;
		const _returnValuevyMjJXB = "1PPaaJ0qG3AGWZKJ";
		const _keyCallbackC6UXHBM = () => { return _returnValuevyMjJXB };
		const _startVertexQyGyv80 = new DisjointSetItem(_valuegOlaTs8, _keyCallbackC6UXHBM)
		const _returnValueRHbg3aC = await _startVertexQyGyv80.getChildren()
		const _valueeJsm7zd = undefined;
		const _returnValuekoMEErv = null;
		const _keyCallbackhVvy8xi = () => { return _returnValuekoMEErv };
		const _parentItemerbjuBG = new DisjointSetItem(_valueeJsm7zd, _keyCallbackhVvy8xi)
		const _returnValuenbuuTwp = await _parentItemerbjuBG.getChildren()
		const _returnValuecZWe98d = await _parentItemerbjuBG.getRoot()
		const _forceSettingParentChildJln9cR = false;
		const _returnValuelatSH6o = await _startVertexQyGyv80.setParent(_parentItemerbjuBG, _forceSettingParentChildJln9cR)
		const _returnValuejUYhcLJ = await _startVertexQyGyv80.getRank()
		const _returnValueMIRYK0Q = await _startVertexQyGyv80.getChildren()
		const _returnValueMSP2GZF = await bellmanFord(_graphFMZKtZm, _startVertexQyGyv80)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedU8QGTDG = false;
		const _graphxgd6qL = new Graph(_isDirectedU8QGTDG)
		const _returnValuewW9XtZy = await _graphxgd6qL.getAdjacencyMatrix()
		const _returnValued4Xo6ES = await _graphxgd6qL.getAllVertices()
		const _returnValuekkTm5kj = undefined;
		const _getKeyR1XQJ10 = () => { return _returnValuekkTm5kj };
		const _newVertexpmMuSGS = {
			"getKey": _getKeyR1XQJ10
	}
		const _returnValueygcpsg = await _graphxgd6qL.addVertex(_newVertexpmMuSGS)
		const _returnValueoUmTtE4 = "AYyMMu7NBgUdneZGKsr7s1lKj2LqC5nHua4oPzSWLrYdcMIAbrh1sXe8bcoIBYGfR6gArqvTeaA4zXU19O5US7yhdDJKaag1gL";
		const _valuezkvVlFu = () => { return _returnValueoUmTtE4 };
		const _returnValuex5gLVMb = null;
		const _keyCallbackbZHS4FF = () => { return _returnValuex5gLVMb };
		const _startVertexNxpkL5r = new DisjointSetItem(_valuezkvVlFu, _keyCallbackbZHS4FF)
		const _returnValueS6nFDwy = await _startVertexNxpkL5r.getChildren()
		const _returnValuewsteA5b = await _startVertexNxpkL5r.getRank()
		const _returnValuegeLR7PC = []
		const _getKeykJ08kyO = () => { return _returnValuegeLR7PC };
		const _arrayValueOryffib = {
		
	}
		const _arrayValueruhUGRf = "Bt0pGFHNVymy5iKQ4Y92bLKPOYtMy27PAtWGbaQyTy2IIT7nkgfTlu9kV0EQLyFt";
		const _returnValueMfRW4Ox = [_arrayValueOryffib, _arrayValueruhUGRf]
		const _setParentSkUgzMB = () => { return _returnValueMfRW4Ox };
		const _childItembkOH2g = {
			"getKey": _getKeykJ08kyO,
		"setParent": _setParentSkUgzMB
	}
		const _returnValuerYVAmCe = await _startVertexNxpkL5r.addChild(_childItembkOH2g)
		const _returnValueMZiYPFR = await _startVertexNxpkL5r.getChildren()
		const _returnValueANGWe1n = await bellmanFord(_graphxgd6qL, _startVertexNxpkL5r)
	});
})