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
		const _graphcSgi2n = 1.2169079763966213;
		const _returnValuepHY8Zfz = await bfTravellingSalesman(_graphcSgi2n)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValuetsxLBx = null;
		const _arrayValuejSMqjhW = () => { return _returnValuetsxLBx };
		const _arrayValueVWKLYQE = "9suintpEcL1zzjIyOH8AQO";
		const _returnValueA0Xf3H = [_arrayValuejSMqjhW, _arrayValueVWKLYQE]
		const _getAllVerticesy3xIsJ4 = () => { return _returnValueA0Xf3H };
		const _returnValuerJOnLq0 = -8.738061087243564;
		const _getAdjacencyMatrixk0iT7VL = () => { return _returnValuerJOnLq0 };
		const _returnValueSb7DnF4 = 5.1334812568078;
		const _getVerticesIndicesdxXqLP = () => { return _returnValueSb7DnF4 };
		const _graphTyfWr7 = {
			"getAllVertices": _getAllVerticesy3xIsJ4,
		"getAdjacencyMatrix": _getAdjacencyMatrixk0iT7VL,
		"getVerticesIndices": _getVerticesIndicesdxXqLP
	}
		const _returnValuexCBnhS3 = await bfTravellingSalesman(_graphTyfWr7)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedbYC4fWe = true;
		const _graphCa3BF7T = new Graph(_isDirectedbYC4fWe)
		const _returnValueew5WD0Z = {
		
	}
		const _getKeyuD2ZMI = () => { return _returnValueew5WD0Z };
		const _newVertexI5ODOII = {
			"getKey": _getKeyuD2ZMI
	}
		const _returnValueZz5ENLw = await _graphCa3BF7T.addVertex(_newVertexI5ODOII)
		const _returnValuexjrWINb = await _graphCa3BF7T.reverse()
		const _returnValueoLxqry = await bfTravellingSalesman(_graphCa3BF7T)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedQhtNhCv = true;
		const _graphShcQBNf = new Graph(_isDirectedQhtNhCv)
		const _returnValuePSTWCF7 = false;
		const _valueLGwxyh5 = () => { return _returnValuePSTWCF7 };
		const _newVertexpG1lELq = new GraphVertex(_valueLGwxyh5)
		const _returnValuekKbQCXh = await _newVertexpG1lELq.getEdges()
		const _returnValueHP66kT = await _newVertexpG1lELq.getDegree()
		const _returnValueR4vE0h4 = await _newVertexpG1lELq.getDegree()
		const _returnValueY7FrgN4 = await _graphShcQBNf.addVertex(_newVertexpG1lELq)
		const _returnValuenfB7Ew8 = await bfTravellingSalesman(_graphShcQBNf)
	});
})