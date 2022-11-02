export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValueEfHSTKG = false;
		const _getAllVerticesiksoj4p = () => { return _returnValueEfHSTKG };
		const _returnValueRtzslOW = null;
		const _getAdjacencyMatrixVvGAJ7 = () => { return _returnValueRtzslOW };
		const _returnValuel2t1b24 = true;
		const _getVerticesIndicesy77SHwL = () => { return _returnValuel2t1b24 };
		const _graphYIEIcp = {
			"getAllVertices": _getAllVerticesiksoj4p,
		"getAdjacencyMatrix": _getAdjacencyMatrixVvGAJ7,
		"getVerticesIndices": _getVerticesIndicesy77SHwL
	}
		const _returnValueniPcv8C = await bfTravellingSalesman(_graphYIEIcp)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedhWdPIQh = true;
		const _graphz828XXF = new Graph(_isDirectedhWdPIQh)
		const _returnValuePmNsT0w = await _graphz828XXF.getAllVertices()
		const _returnValuepufEtpV = await _graphz828XXF.getAllEdges()
		const _returnValueLHtVR4B = -3.118997901968382;
		const _returnValueXCwGJl = () => { return _returnValueLHtVR4B };
		const _getKeyaUFjrZV = () => { return _returnValueXCwGJl };
		const _newVertexYGO5HKm = {
			"getKey": _getKeyaUFjrZV
	}
		const _returnValue2ONY2w = await _graphz828XXF.addVertex(_newVertexYGO5HKm)
		const _returnValueA0IWE6w = await _graphz828XXF.getVerticesIndices()
		const _returnValueddLtNDs = await bfTravellingSalesman(_graphz828XXF)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedHAgWYyd = true;
		const _graphSBOPCMS = new Graph(_isDirectedHAgWYyd)
		const _valuegdxwtbs = false;
		const _newVertexy0EXvAW = new GraphVertex(_valuegdxwtbs)
		const _arrayValueSCll06h = true;
		const _arrayValueUhejRw = null;
		const _arrayValueeWDNW48 = false;
		const _vertexgCjNuya = [_arrayValueSCll06h, _arrayValueUhejRw, _arrayValueeWDNW48]
		const _returnValueOAgrV6R = await _newVertexy0EXvAW.findEdge(_vertexgCjNuya)
		const _returnValuertToBLP = await _graphSBOPCMS.addVertex(_newVertexy0EXvAW)
		const _returnValuetUc8UvC = "MareUn4Y4EVJt9pPD2pdC5om4";
		const _getNeighborshAHEKdh = () => { return _returnValuetUc8UvC };
		const _vertexy2kU9S9 = {
			"getNeighbors": _getNeighborshAHEKdh
	}
		const _returnValuex2JUTrV = await _graphSBOPCMS.getNeighbors(_vertexy2kU9S9)
		const _returnValueavKO2I7 = await _graphSBOPCMS.getWeight()
		const _returnValuej5xxVfM = await bfTravellingSalesman(_graphSBOPCMS)
	});
})