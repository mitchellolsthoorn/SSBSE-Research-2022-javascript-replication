export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValuebw2DfY1 = "2Tk1zoSG72SNEsHI38vNcvs1GCPUe5JiJTQ212DcJocwinB81rYQ6";
		const _reverseTOmMq15 = () => { return _returnValuebw2DfY1 };
		const _graphoTaWkp2 = {
			"reverse": _reverseTOmMq15
	}
		const _returnValueKrxuZAf = await stronglyConnectedComponents(_graphoTaWkp2)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirected60P05I = true;
		const _graphYI8sFTw = new Graph(_isDirected60P05I)
		const _arrayValueYn9HKWg = {
		
	}
		const _arrayValueS3EO6hT = null;
		const _vertexKeybALEHE = [_arrayValueYn9HKWg, _arrayValueS3EO6hT]
		const _returnValuekC1VbRw = await _graphYI8sFTw.getVertexByKey(_vertexKeybALEHE)
		const _returnValueOvqQ6zb = await stronglyConnectedComponents(_graphYI8sFTw)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedjiFmMKj = false;
		const _graphCyi0e1w = new Graph(_isDirectedjiFmMKj)
		const _returnValueNW4VBO8 = await _graphCyi0e1w.getVerticesIndices()
		const _returnValueqIjQGgC = "UDACCJo3GY6pX27HsXdv1LNjRJQw7MojKz1QkN9uNwDDxded4cSeLQcMGUTPzIuwx6FgpFsrlydgLLm1M7o9SEW6w8OfwZYmgMq";
		const _getNeighborsMsIj9cO = () => { return _returnValueqIjQGgC };
		const _vertexNkHy2CP = {
			"getNeighbors": _getNeighborsMsIj9cO
	}
		const _returnValueMdHDMI = await _graphCyi0e1w.getNeighbors(_vertexNkHy2CP)
		const _valueV2naQuI = "2CfSU6IYCgmntQz6fTPR13xMvo7kCiuQd8gIydZ2rB1xf9Cg15swLKzNwjgMFWrsIqKDpTfC5YKSTanerW12omWSsyu";
		const _newVertexFSio4xr = new GraphVertex(_valueV2naQuI)
		const _returnValuetJ97wui = await _newVertexFSio4xr.getDegree()
		const _requiredEdgeeAWPsrz = true;
		const _returnValuekKnllKK = await _newVertexFSio4xr.hasEdge(_requiredEdgeeAWPsrz)
		const _returnValueevMFawd = undefined;
		const _arrayValueUyAm5S = () => { return _returnValueevMFawd };
		const _arrayValueYpF5igx = 9.08553954888027;
		const _returnValueE8Mqe4B = [_arrayValueUyAm5S, _arrayValueYpF5igx]
		const _requiredEdgeRKsF4oy = () => { return _returnValueE8Mqe4B };
		const _returnValueFmFoSHq = await _newVertexFSio4xr.hasEdge(_requiredEdgeRKsF4oy)
		const _returnValuesinze2M = await _graphCyi0e1w.addVertex(_newVertexFSio4xr)
		const _returnValueMN584Vd = undefined;
		const _getNeighborsPrBny2h = () => { return _returnValueMN584Vd };
		const _vertex4ApwAn = {
			"getNeighbors": _getNeighborsPrBny2h
	}
		const _returnValueoWIJrPk = await _graphCyi0e1w.getNeighbors(_vertex4ApwAn)
		const _returnValueul86ZIx = await stronglyConnectedComponents(_graphCyi0e1w)
	});
})