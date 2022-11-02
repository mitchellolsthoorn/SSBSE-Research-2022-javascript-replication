export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValuebTkW17 = null;
		const _getAllVerticesVYWXrFf = () => { return _returnValuebTkW17 };
		const _arrayValueNJFlzKj = false;
		const _arrayValueULrbVVl = "gdDvp6sAY6UNn5zK19IuX2ms1PWOsDacQ86I81oqVZBfoICHAvzdYGnfRsslqFqkWxOE6Re8mHTfnSmyIfRDdpEkNp";
		const _returnValuePp5Asn = [_arrayValueNJFlzKj, _arrayValueULrbVVl]
		const _findEdgeCxQpIYw = () => { return _returnValuePp5Asn };
		const _graphRQJ1gwf = {
			"getAllVertices": _getAllVerticesVYWXrFf,
		"findEdge": _findEdgeCxQpIYw
	}
		const _returnValue7bvQ5l = await graphBridges(_graphRQJ1gwf)
	});

	it('test for graphBridges', async () => {
		const _isDirectedW5iQxW = true;
		const _graphXBWWXsF = new Graph(_isDirectedW5iQxW)
		const _returnValuegbriYR3 = "d9X7YEVfi97OO3TUh4UtPi01Sh1WWnTs69fSE6eHnyIpUr8B3QIREaDFsVFyXn";
		const _getKeyGKkmfQ1 = () => { return _returnValuegbriYR3 };
		const _newVertexx3xiTiW = {
			"getKey": _getKeyGKkmfQ1
	}
		const _returnValueeFPSk7 = await _graphXBWWXsF.addVertex(_newVertexx3xiTiW)
		const _returnValueZ7A3ato = await _graphXBWWXsF.getVerticesIndices()
		const _returnValueBeXH24w = await graphBridges(_graphXBWWXsF)
	});
})