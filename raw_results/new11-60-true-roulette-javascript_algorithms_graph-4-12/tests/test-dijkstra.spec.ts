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
		const _arrayValuejyaDDY9 = "QEHslDlTz8tRm2q7vCsqULuzlVaLvy3bwGz6qy6h7A6iVOI6xPybqacYjLpG9bjbOkXriCuM9q1ROrZIzx";
		const _arrayValuewJH33qb = "sCE8VjPda6wrBi0RV3RhUdvUimRzKSk1qSuNvYxHFXcHaq3B82RylU";
		const _arrayValuecDDtHQs = 7.480910459579121;
		const _arrayValue5JFWSp = "jcCik0BwlZenRNuRXnyrqFfSWgV7SodqaifOFH8vwNu88hPgufOdeJobMEPzJOGRSzQRkMBp7jkgrLPDpxJdVQenFjl1ITLIHH";
		const _graphw7PaYl = [_arrayValuejyaDDY9, _arrayValuewJH33qb, _arrayValuecDDtHQs, _arrayValue5JFWSp]
		const _startVertexCVsxlm = "cf";
		const _returnValueYsxGrKr = await dijkstra(_graphw7PaYl, _startVertexCVsxlm)
	});

	it('test for dijkstra', async () => {
		const _isDirectedVbNvZoP = false;
		const _graphqlh88JC = new Graph(_isDirectedVbNvZoP)
		const _vertexKeyIiyn83P = "Aww8sWVtOxz2cZm1bhcbp5ioG5eTMJhaV6PMEa9NaxfcgNrBnPgK9Gut12NgrWnL7qa3Dagm8mszxVZQbT5o5JN";
		const _returnValuedJ2ZVfn = await _graphqlh88JC.getVertexByKey(_vertexKeyIiyn83P)
		const _returnValueBxGWEC9 = -3.737908719387139;
		const _getKeyiY1Evzj = () => { return _returnValueBxGWEC9 };
		const _startVertexGzixw6f = {
			"getKey": _getKeyiY1Evzj
	}
		const _returnValueQHnMx47 = await dijkstra(_graphqlh88JC, _startVertexGzixw6f)
	});

	it('test for dijkstra', async () => {
		const _isDirectedRtXSBu1 = false;
		const _graphHVdqIL = new Graph(_isDirectedRtXSBu1)
		const _returnValueMhZGwFK = await _graphHVdqIL.getAllEdges()
		const _returnValueFGgOV1I = await _graphHVdqIL.toString()
		const _valuewmmFxfJ = -8.796826600908208;
		const _startVertextLwNE9R = new GraphVertex(_valuewmmFxfJ)
		const _returnValueaa4UlLY = await _startVertextLwNE9R.getNeighbors()
		const _returnValuezZOMhPr = await _startVertextLwNE9R.getKey()
		const _returnValuefX4r08q = await dijkstra(_graphHVdqIL, _startVertextLwNE9R)
	});
})