export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueq7MPwOO = null;
		const _returnValueyvIGZuL = () => { return _returnValueq7MPwOO };
		const _returnValueJaQv3zX = () => { return _returnValueyvIGZuL };
		const _getNeighborsnPRHZvn = () => { return _returnValueJaQv3zX };
		const _graphtInheWr = {
			"getNeighbors": _getNeighborsnPRHZvn
	}
		const _returnValueKH3ZGk = {
		
	}
		const _startVertexXawCTSu = () => { return _returnValueKH3ZGk };
		const _arrayValuesUUmdPB = 6.018260059107895;
		const _arrayValuebraZxIO = 9.208956503827359;
		const _arrayValueAjvybxR = [_arrayValuesUUmdPB, _arrayValuebraZxIO]
		const _arrayValueHuOUa8H = {
		
	}
		const _arrayValueAp9NAVg = "K8E6yLxSkfYE2ekDk8J5w4Wg7Qcwjggu";
		const _originalCallbacksXC7Xau1 = [_arrayValueAjvybxR, _arrayValueHuOUa8H, _arrayValueAp9NAVg]
		const _returnValueXzDqirD = await breadthFirstSearch(_graphtInheWr, _startVertexXawCTSu, _originalCallbacksXC7Xau1)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueh8TZQAv = "Dn34yYnLolAfryNApUXpE4RevKnDLOO6Ob0uIOf5oEDxN0zuqpeD2YBiSEJltIZfJb7HGSLOYpmHOHovmG5m6R88kq9";
		const _returnValueBBq5kWn = -8.06416414517335;
		const _arrayValuebA6dPtn = () => { return _returnValueBBq5kWn };
		const _arrayValueGzRmSH = []
		const _arrayValueH1uMyMq = null;
		const _valuepPDijML = [_arrayValueh8TZQAv, _arrayValuebA6dPtn, _arrayValueGzRmSH, _arrayValueH1uMyMq]
		const _graphi7m8z8z = new GraphVertex(_valuepPDijML)
		const _returnValueqb73ooE = await _graphi7m8z8z.getKey()
		const _vertexMh6hWmv = null;
		const _returnValueNyvwHso = await _graphi7m8z8z.hasNeighbor(_vertexMh6hWmv)
		const _startVertexOORxgvt = "F9kmLGCO1354Fp0QkgbsmQ0cdg6nEbxMIzywWRMWGQaCC70K0HxnaPCdtckKsxhhlO9d";
		const _originalCallbacksYJp12ZJ = undefined;
		const _returnValuewHAUVrA = await breadthFirstSearch(_graphi7m8z8z, _startVertexOORxgvt, _originalCallbacksYJp12ZJ)
	});

	it('test for breadthFirstSearch', async () => {
		const _valuel2XUOv = 6.528975873847102;
		const _graphMWWHwtJ = new GraphVertex(_valuel2XUOv)
		const _returnValueN5UuyFl = await _graphMWWHwtJ.getEdges()
		const _returnValueKsUqcyl = await _graphMWWHwtJ.getEdges()
		const _edgeOvMrIX = true;
		const _returnValueB9td9Fx = await _graphMWWHwtJ.addEdge(_edgeOvMrIX)
		const _vertexD3gAr8F = 3.0677475542089088;
		const _returnValuepxXhkNr = await _graphMWWHwtJ.findEdge(_vertexD3gAr8F)
		const _startVertexKd2saZW = {
		
	}
		const _originalCallbacksmRt6O6Q = undefined;
		const _returnValueAIv8ra = await breadthFirstSearch(_graphMWWHwtJ, _startVertexKd2saZW, _originalCallbacksmRt6O6Q)
	});
})