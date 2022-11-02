export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _arrayValueSMr7GSQ = false;
		const _arrayValueQQ16emk = -8.357913981049276;
		const _arrayValuelzA4G5O = false;
		const _arrayValuecB9DPWM = false;
		const _returnValueOw4mHfn = 7.414645675105287;
		const _arrayValueRBY9ukU = () => { return _returnValueOw4mHfn };
		const _arrayValuehovJolm = [_arrayValuelzA4G5O, _arrayValuecB9DPWM, _arrayValueRBY9ukU]
		const _graphz6ojfL6 = [_arrayValueSMr7GSQ, _arrayValueQQ16emk, _arrayValuehovJolm]
		const _returnValuemElGX4w = await bfTravellingSalesman(_graphz6ojfL6)
	});

	it('test for bfTravellingSalesman', async () => {
		const _arrayValuex46bSQ6 = true;
		const _arrayValuenqCZgSB = -8.228093787480965;
		const _arrayValueP1wXug5 = [_arrayValuex46bSQ6, _arrayValuenqCZgSB]
		const _arrayValueLCeV0X = [_arrayValueP1wXug5]
		const _arrayValuewvRvgW = null;
		const _returnValuepyZMLxR = [_arrayValueLCeV0X, _arrayValuewvRvgW]
		const _getAllVerticesDveNdNZ = () => { return _returnValuepyZMLxR };
		const _returnValueC1LA6yi = null;
		const _getAdjacencyMatrixKyJRMFA = () => { return _returnValueC1LA6yi };
		const _returnValuecrhOEr = null;
		const _getVerticesIndicesQlOXHG4 = () => { return _returnValuecrhOEr };
		const _graphadUCWRP = {
			"getAllVertices": _getAllVerticesDveNdNZ,
		"getAdjacencyMatrix": _getAdjacencyMatrixKyJRMFA,
		"getVerticesIndices": _getVerticesIndicesQlOXHG4
	}
		const _returnValues9qRD5t = await bfTravellingSalesman(_graphadUCWRP)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirected9DVL5r = false;
		const _graphtUeHnm = new Graph(_isDirected9DVL5r)
		const _vertexKeyW78UTlJ = null;
		const _returnValueQ1EWGS = await _graphtUeHnm.getVertexByKey(_vertexKeyW78UTlJ)
		const _returnValueh87VO0H = await _graphtUeHnm.getVerticesIndices()
		const _returnValueLikbSYY = 0.34865065794084416;
		const _getKeyNNP1shU = () => { return _returnValueLikbSYY };
		const _newVertexhGSUJtm = {
			"getKey": _getKeyNNP1shU
	}
		const _returnValueHnQkrp = await _graphtUeHnm.addVertex(_newVertexhGSUJtm)
		const _returnValueAfGfIC = await _graphtUeHnm.getWeight()
		const _returnValueGGL8rhY = await _graphtUeHnm.getAllEdges()
		const _returnValueABkwvRN = await bfTravellingSalesman(_graphtUeHnm)
	});
})