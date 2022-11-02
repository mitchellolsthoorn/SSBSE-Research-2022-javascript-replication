export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _graphGhv5VRP = "zDJywUEqbjwGj4Cfcww320lbiX3mgjzmt7mH7YirAlbiBu3v83kSNoATHfdnmE9FOSUyenPyOFVt1ukEW6gtygCmlBWOVGvF";
		const _returnValueNpjoXbX = await prim(_graphGhv5VRP)
	});

	it('test for prim', async () => {
		const _isDirectedAnjTie = "BNKk";
		const _returnValueYwmstYF = true;
		const _getAllVerticesJKDe1Q = () => { return _returnValueYwmstYF };
		const _graphLipiUpw = {
			"isDirected": _isDirectedAnjTie,
		"getAllVertices": _getAllVerticesJKDe1Q
	}
		const _returnValueMzYxDdS = await prim(_graphLipiUpw)
	});

	it('test for prim', async () => {
		const _isDirectedvxMI8X = false;
		const _graphMCbljUt = new Graph(_isDirectedvxMI8X)
		const _returnValueSWMD9po = await _graphMCbljUt.reverse()
		const _value6nVM5M = null;
		const _arrayValuelC0WTiw = undefined;
		const _returnValueUgiCmCx = [_arrayValuelC0WTiw]
		const _keyCallbackkQTlgwf = () => { return _returnValueUgiCmCx };
		const _newVertexx7FDXRp = new DisjointSetItem(_value6nVM5M, _keyCallbackkQTlgwf)
		const _returnValuexx7klN = await _newVertexx7FDXRp.getRoot()
		const _returnValuepMXMqiZ = await _newVertexx7FDXRp.getKey()
		const _returnValuej4dEB8k = await _newVertexx7FDXRp.getRoot()
		const _returnValuesL0tcsG = await _newVertexx7FDXRp.isRoot()
		const _returnValueEbLdjVV = await _graphMCbljUt.addVertex(_newVertexx7FDXRp)
		const _returnValuegkPdhC5 = await prim(_graphMCbljUt)
	});
})