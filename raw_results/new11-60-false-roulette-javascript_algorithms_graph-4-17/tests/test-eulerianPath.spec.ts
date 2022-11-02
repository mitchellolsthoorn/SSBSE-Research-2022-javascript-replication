export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _arrayValueWNOyu4C = -7.521134401545488;
		const _arrayValueUiKkDMd = "wDesukj2Dx9nE5ndWdWCjL9t7bro8kIzxgGQo3X2YdFje";
		const _arrayValueawvvag = "yJOngTG1ufQurWMv5V6zgYN4LsThHlyewJlIB";
		const _arrayValueRezU3JJ = true;
		const _arrayValueB6wKLxa = [_arrayValueUiKkDMd, _arrayValueawvvag, _arrayValueRezU3JJ]
		const _arrayValueEipgUNe = {
		
	}
		const _arrayValuejAZJ0gA = [_arrayValueWNOyu4C, _arrayValueB6wKLxa, _arrayValueEipgUNe]
		const _arrayValuePAsi7uu = undefined;
		const _graphvwjiqBx = [_arrayValuejAZJ0gA, _arrayValuePAsi7uu]
		const _returnValuePMFFMNs = await eulerianPath(_graphvwjiqBx)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedktt4Qtx = false;
		const _graphqgBdUki = new Graph(_isDirectedktt4Qtx)
		const _returnValueefLMny = []
		const _vertexKeyXnERpAV = () => { return _returnValueefLMny };
		const _returnValuedbM7wLf = await _graphqgBdUki.getVertexByKey(_vertexKeyXnERpAV)
		const _returnValuehneVbe = await _graphqgBdUki.getAllEdges()
		const _returnValuek84OZ8 = await eulerianPath(_graphqgBdUki)
	});
})