export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _arrayValuehSMiIbd = "i5m4yWyds9ei2WhvqAOftVAFht6i65g7ot";
		const _arrayValueEM3Uwfr = {
		
	}
		const _returnValuesEfgXsF = [_arrayValuehSMiIbd, _arrayValueEM3Uwfr]
		const _getAllVerticesazIWafx = () => { return _returnValuesEfgXsF };
		const _returnValuebP8Wryj = "eG4aiWBuH8VGFlVwrJVolwCEcOYBGYftxp7IHcqcEVrfxNi";
		const _arrayValuejhfxMvd = () => { return _returnValuebP8Wryj };
		const _arrayValuex84ixo = undefined;
		const _arrayValuebQPeF4q = [_arrayValuejhfxMvd, _arrayValuex84ixo]
		const _arrayValueQafKvW5 = null;
		const _arrayValuetiZ5GRu = undefined;
		const _arrayValueJbiLMIe = "azwsKCfuLFetd4sTkJFKsLD3sjEyjivPJH";
		const _arrayValuealD0gdX = [_arrayValuetiZ5GRu, _arrayValueJbiLMIe]
		const _arrayValueJLZgs7D = {
		
	}
		const _getAllEdgesbG2GEQO = [_arrayValuebQPeF4q, _arrayValueQafKvW5, _arrayValuealD0gdX, _arrayValueJLZgs7D]
		const _graphSpm4IuN = {
			"getAllVertices": _getAllVerticesazIWafx,
		"getAllEdges": _getAllEdgesbG2GEQO
	}
		const _returnValueu5PXuub = await detectUndirectedCycleUsingDisjointSet(_graphSpm4IuN)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueFEPCFeq = "rJYfVB5dUN476km87wjZT7nUlmDkag";
		const _isDirectedAh7JFIx = () => { return _returnValueFEPCFeq };
		const _graphMECw67l = new Graph(_isDirectedAh7JFIx)
		const _returnValueT1JI2r = await _graphMECw67l.getVerticesIndices()
		const _returnValueAPCwKp = await detectUndirectedCycleUsingDisjointSet(_graphMECw67l)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueoo0QHFO = []
		const _getAllVerticesKdChFxc = () => { return _returnValueoo0QHFO };
		const _arrayValueNhIyb2B = 1.6116798724086134;
		const _arrayValueEIVUtn = true;
		const _arrayValuex7DFoct = "RyB8lUwJsYLBuGZZmKj47IDQ7AMp5PnfQsQvJa2WfdTrWPwUanpCgD0DLYPpN9mwKsTc1";
		const _returnValuedIXcNPM = [_arrayValueNhIyb2B, _arrayValueEIVUtn, _arrayValuex7DFoct]
		const _getAllEdgesf8VZdvO = () => { return _returnValuedIXcNPM };
		const _graphF7mlnku = {
			"getAllVertices": _getAllVerticesKdChFxc,
		"getAllEdges": _getAllEdgesf8VZdvO
	}
		const _returnValuetGAbVOT = await detectUndirectedCycleUsingDisjointSet(_graphF7mlnku)
	});
})