export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _graphbRy2B8C = 3.1695202716479294;
		const _startVertexH36tjwm = "Yo";
		const _returnValueIXdK5Ee = await dijkstra(_graphbRy2B8C, _startVertexH36tjwm)
	});

	it('test for dijkstra', async () => {
		const _isDirectedFQe9aQb = true;
		const _graphj9yk1u = new Graph(_isDirectedFQe9aQb)
		const _returnValuePmri2af = []
		const _getNeighborsRVPN67P = () => { return _returnValuePmri2af };
		const _vertexpjkf38E = {
			"getNeighbors": _getNeighborsRVPN67P
	}
		const _returnValueowrnBmz = await _graphj9yk1u.getNeighbors(_vertexpjkf38E)
		const _vertexKeySYsR59Q = -4.961233521603364;
		const _returnValueQGk6oD6 = await _graphj9yk1u.getVertexByKey(_vertexKeySYsR59Q)
		const _returnValuelVQPRx7 = await _graphj9yk1u.getWeight()
		const _arrayValueHN2PAov = "GbEbsTRMTjYw1XogxgHP094COKHlVrwq2knb2PWLUekOBVrnEKcsMq66ik";
		const _arrayValueOgC9QI = null;
		const _valueBPjfO53 = [_arrayValueHN2PAov, _arrayValueOgC9QI]
		const _vertexGlRyJ5p = new GraphVertex(_valueBPjfO53)
		const _returnValuefxJSXVV = await _vertexGlRyJ5p.getDegree()
		const _returnValuei1rjhQ = await _vertexGlRyJ5p.getDegree()
		const _returnValuemSUPhU = await _vertexGlRyJ5p.getNeighbors()
		const _returnValueZunumbO = await _graphj9yk1u.getNeighbors(_vertexGlRyJ5p)
		const _vertexKeyjR6QLMx = "wMrjvbyEraiKdZTzCdcxoR0rUnPyhHSVR49A62aXswz7XynwFOuFV32MFes3wUezfpopBe4ysrgREf0cGMfkAEhSMFCC";
		const _returnValueoobztRO = await _graphj9yk1u.getVertexByKey(_vertexKeyjR6QLMx)
		const _returnValueyDdiQqg = true;
		const _getKeyF1iFLpE = () => { return _returnValueyDdiQqg };
		const _startVertexVrznMmn = {
			"getKey": _getKeyF1iFLpE
	}
		const _returnValuedOjmY0 = await dijkstra(_graphj9yk1u, _startVertexVrznMmn)
	});

	it('test for dijkstra', async () => {
		const _isDirectedn61GmTV = false;
		const _graphB4VvySu = new Graph(_isDirectedn61GmTV)
		const _returnValuenq1RaTs = await _graphB4VvySu.getAllEdges()
		const _returnValueLuq1OiU = await _graphB4VvySu.getWeight()
		const _returnValuesXrvJ17 = await _graphB4VvySu.toString()
		const _valuel1rMFk6 = null;
		const _startVertexD4ncnzL = new GraphVertex(_valuel1rMFk6)
		const _returnValuerfphtaF = await _startVertexD4ncnzL.getDegree()
		const _returnValueWtP86cs = await _startVertexD4ncnzL.getEdges()
		const _returnValueSsSaOtC = await dijkstra(_graphB4VvySu, _startVertexD4ncnzL)
	});
})