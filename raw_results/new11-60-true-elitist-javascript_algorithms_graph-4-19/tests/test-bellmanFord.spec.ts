export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValuelusg6qp = "MR08";
		const _returnValuezimtEtT = () => { return _returnValuelusg6qp };
		const _grapheKqtenL = () => { return _returnValuezimtEtT };
		const _returnValueJClMDeP = 5.666510894647548;
		const _getKeyN4EStsV = () => { return _returnValueJClMDeP };
		const _startVertexa7Zuf59 = {
			"getKey": _getKeyN4EStsV
	}
		const _returnValueM90xhjz = await bellmanFord(_grapheKqtenL, _startVertexa7Zuf59)
	});

	it('test for bellmanFord', async () => {
		const _returnValueqSc8eJY = []
		const _getAllVerticeslLhXqTK = () => { return _returnValueqSc8eJY };
		const _arrayValueJwf7gD = "mJIzSKNDtJ0NOVDDOt6miUT";
		const _returnValueb6TIFkY = 3.2450335802663073;
		const _arrayValuesh7zLg0 = () => { return _returnValueb6TIFkY };
		const _arrayValueqP2JGsr = undefined;
		const _arrayValueTKxhDz3 = "vPlSD";
		const _returnValueEh0Uwai = [_arrayValueJwf7gD, _arrayValuesh7zLg0, _arrayValueqP2JGsr, _arrayValueTKxhDz3]
		const _getVertexByKeyGIDoz4I = () => { return _returnValueEh0Uwai };
		const _returnValuelVzKLep = {
		
	}
		const _getNeighborsyfRaw3T = () => { return _returnValuelVzKLep };
		const _returnValueGZahpz = true;
		const _findEdgeXEjXBpc = () => { return _returnValueGZahpz };
		const _graphC66gykF = {
			"getAllVertices": _getAllVerticeslLhXqTK,
		"getVertexByKey": _getVertexByKeyGIDoz4I,
		"getNeighbors": _getNeighborsyfRaw3T,
		"findEdge": _findEdgeXEjXBpc
	}
		const _returnValueMUVijB2 = false;
		const _getKeyrbaaAoL = () => { return _returnValueMUVijB2 };
		const _startVertexzVq7lb = {
			"getKey": _getKeyrbaaAoL
	}
		const _returnValueAmLa1Kg = await bellmanFord(_graphC66gykF, _startVertexzVq7lb)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedYUxnumL = true;
		const _graphNbhMWox = new Graph(_isDirectedYUxnumL)
		const _returnValuefg71K9i = await _graphNbhMWox.reverse()
		const _returnValuePOivQP6 = await _graphNbhMWox.getAllVertices()
		const _arrayValuejTZx2IJ = null;
		const _arrayValueZPWCA3I = 5.114593527385827;
		const _arrayValueitO9GwO = 8.0361860912071;
		const _returnValueGurjXlN = [_arrayValuejTZx2IJ, _arrayValueZPWCA3I, _arrayValueitO9GwO]
		const _getKeyx3QxQ2C = () => { return _returnValueGurjXlN };
		const _newVertexooZgG8D = {
			"getKey": _getKeyx3QxQ2C
	}
		const _returnValuePTF7vPS = await _graphNbhMWox.addVertex(_newVertexooZgG8D)
		const _valueFLi9ocW = 8.68489753725931;
		const _returnValuesyTitrm = true;
		const _keyCallbackhfmIRTO = () => { return _returnValuesyTitrm };
		const _startVertexk6912NN = new DisjointSetItem(_valueFLi9ocW, _keyCallbackhfmIRTO)
		const _returnValuec8eXq6j = await _startVertexk6912NN.getKey()
		const _returnValueNlXI0K4 = await bellmanFord(_graphNbhMWox, _startVertexk6912NN)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedvJOBIls = false;
		const _graph3yhPM1 = new Graph(_isDirectedvJOBIls)
		const _valueKyXGREE = undefined;
		const _arrayValueMm3B9a2 = null;
		const _arrayValueo2Y9Lcy = undefined;
		const _returnValueCx0UYEr = [_arrayValueMm3B9a2, _arrayValueo2Y9Lcy]
		const _keyCallbackWHW3Mfz = () => { return _returnValueCx0UYEr };
		const _newVertexAE3oq6a = new DisjointSetItem(_valueKyXGREE, _keyCallbackWHW3Mfz)
		const _returnValuec0PPKkQ = await _newVertexAE3oq6a.getKey()
		const _returnValueh4h4f7e = await _newVertexAE3oq6a.getRank()
		const _returnValued1r0SRL = await _graph3yhPM1.addVertex(_newVertexAE3oq6a)
		const _returnValueMzbP0Sm = await _graph3yhPM1.reverse()
		const _arrayValuei8IssYv = -1.1206373617223804;
		const _arrayValueQ44yYTo = false;
		const _valueAMTbFb = [_arrayValuei8IssYv, _arrayValueQ44yYTo]
		const _returnValueVbnNkKe = -5.052334097229997;
		const _arrayValuehEcHHoy = () => { return _returnValueVbnNkKe };
		const _arrayValueoRcGFR5 = "X89cjaqDjlENtQFniz09mNbSKj";
		const _arrayValueE0KkVVx = "xzaz9VNsQqHqlv4zadHeEsVuVNVSLtmagSruILjrGOoK9n21cjEWfDMkQjBtHhDaQ8JAPRzMy3yy";
		const _arrayValuear42OQH = undefined;
		const _returnValueCcEctLv = [_arrayValuehEcHHoy, _arrayValueoRcGFR5, _arrayValueE0KkVVx, _arrayValuear42OQH]
		const _keyCallbackrzCsaLV = () => { return _returnValueCcEctLv };
		const _newVertexWfZErpL = new DisjointSetItem(_valueAMTbFb, _keyCallbackrzCsaLV)
		const _returnValueGxZGJUA = await _newVertexWfZErpL.getRank()
		const _returnValuesAc9a0 = await _newVertexWfZErpL.getRank()
		const _returnValueagh661J = await _graph3yhPM1.addVertex(_newVertexWfZErpL)
		const _returnValueR1wLIb = 7.391853576991231;
		const _getKeymnaq5Ww = () => { return _returnValueR1wLIb };
		const _startVertexdCm9xj = {
			"getKey": _getKeymnaq5Ww
	}
		const _returnValueUNAWrUl = await bellmanFord(_graph3yhPM1, _startVertexdCm9xj)
	});
})