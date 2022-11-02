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
		const _graphDsd1iKs = "S3qCnmeXhCvC2";
		const _returnValuepTvS9g = await stronglyConnectedComponents(_graphDsd1iKs)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirecteddrxoWpX = true;
		const _graphpYHaqZw = new Graph(_isDirecteddrxoWpX)
		const _returnValueeR2Agy2 = await _graphpYHaqZw.getVerticesIndices()
		const _returnValueMTukS3T = await stronglyConnectedComponents(_graphpYHaqZw)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedP9ZcFP = true;
		const _graphFTGqFEz = new Graph(_isDirectedP9ZcFP)
		const _returnValueNGgthBh = "w45iTK9FDvaJLnxOvN4m7Eku8B9nzlcZFPF1FkCRq9cwqFLEckKigzFKJPZjLnMYDNE7J6yPFs0NTs8BwsfgMIYYN";
		const _valueAOkhMVY = () => { return _returnValueNGgthBh };
		const _newVertexNclDRN1 = new GraphVertex(_valueAOkhMVY)
		const _requiredEdgeuhtoQNv = undefined;
		const _returnValuetW7FKxM = await _newVertexNclDRN1.hasEdge(_requiredEdgeuhtoQNv)
		const _returnValuez77EXw5 = await _graphFTGqFEz.addVertex(_newVertexNclDRN1)
		const _returnValuewU5WBS = await stronglyConnectedComponents(_graphFTGqFEz)
	});
})