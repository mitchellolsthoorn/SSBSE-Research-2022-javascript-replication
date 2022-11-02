export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _graphdwV1QrZ = "g78XoDFurqmoYL";
		const _returnValueN2jbuzk = await hamiltonianCycle(_graphdwV1QrZ)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueswiPpCk = "ooUGuqtkVNr4scBNEHh1mIbSS5P1dxFqVDk";
		const _getVerticesIndicesrfW20q = () => { return _returnValueswiPpCk };
		const _returnValueRWPfl4 = null;
		const _getAdjacencyMatrixPDktjW9 = () => { return _returnValueRWPfl4 };
		const _arrayValueBZs2e6D = true;
		const _arrayValueY46JrDI = {
		
	}
		const _arrayValueaFzcwRM = undefined;
		const _arrayValueehO68qp = [_arrayValueaFzcwRM]
		const _arrayValueOBhXapb = [_arrayValueY46JrDI, _arrayValueehO68qp]
		const _arrayValueHBH9Gyk = "t6zOv6IRTOWlOhuz7zf3LySNThJeB1FWq6D6d9X2lnlQOPawaIAt173E1SBdt";
		const _returnValuerbyxLh = [_arrayValueBZs2e6D, _arrayValueOBhXapb, _arrayValueHBH9Gyk]
		const _getAllVerticesDgwLkLm = () => { return _returnValuerbyxLh };
		const _graphBYYnRe = {
			"getVerticesIndices": _getVerticesIndicesrfW20q,
		"getAdjacencyMatrix": _getAdjacencyMatrixPDktjW9,
		"getAllVertices": _getAllVerticesDgwLkLm
	}
		const _returnValueBsm2I9M = await hamiltonianCycle(_graphBYYnRe)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedRVZtmE = true;
		const _graphEmRUBrq = new Graph(_isDirectedRVZtmE)
		const _returnValuezOfYa9a = await _graphEmRUBrq.getAllEdges()
		const _returnValuejLQkVv = -6.444115235421845;
		const _valuezrYRRnG = () => { return _returnValuejLQkVv };
		const _newVertexTxolt6i = new GraphVertex(_valuezrYRRnG)
		const _vertexmHZnxzM = false;
		const _returnValueIm4pxTz = await _newVertexTxolt6i.findEdge(_vertexmHZnxzM)
		const _returnValueKP26Gdh = await _graphEmRUBrq.addVertex(_newVertexTxolt6i)
		const _returnValuefgtyX58 = await hamiltonianCycle(_graphEmRUBrq)
	});
})