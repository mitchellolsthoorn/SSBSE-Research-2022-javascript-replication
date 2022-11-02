export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _arrayValue7Rm9HE = null;
		const _arrayValueQ2pf0og = "bCz1JSR13MkkKgCP";
		const _returnValueIQIPBDl = undefined;
		const _arrayValuerWFXggk = () => { return _returnValueIQIPBDl };
		const _arrayValueOE084s1 = [_arrayValuerWFXggk]
		const _graphH2AyqUS = [_arrayValue7Rm9HE, _arrayValueQ2pf0og, _arrayValueOE084s1]
		const _startVertexUropsYn = 6.020984894795166;
		const _originalCallbacksWhIbpmJ = undefined;
		const _returnValue0Dub12 = await breadthFirstSearch(_graphH2AyqUS, _startVertexUropsYn, _originalCallbacksWhIbpmJ)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuevitjwAH = null;
		const _arrayValuecZxNo9 = [_arrayValuevitjwAH]
		const _arrayValuelPCf0aH = "9htGtEOOiACh1cmBk6Ef2yaSnik8V";
		const _arrayValueqy3iJD3 = "mWCzlUR18dyFgjBASyY6IXlZTh2KPqUgtlHQhVffhnFFnVwt4YVMVrKtGPf9hHNwh";
		const _arrayValuerIu38sr = [_arrayValuelPCf0aH, _arrayValueqy3iJD3]
		const _returnValueb8pnYZ8 = [_arrayValuecZxNo9, _arrayValuerIu38sr]
		const _getNeighborss4PtL4L = () => { return _returnValueb8pnYZ8 };
		const _graphVDA4Hyk = {
			"getNeighbors": _getNeighborss4PtL4L
	}
		const _startVertexSndmok = "WTZpwVxBvafqae6swon4ENsiNeS7kaXxPWJwI7QUXqkmp3LkgwYbwlpRhIsfUdnKZVitG9W53Fu7HxhBm3hWDOeVKsj";
		const _arrayValueR6pKlP8 = true;
		const _arrayValueIn3NAz4 = {
		
	}
		const _arrayValuecFUIUP = "roboRNF";
		const _arrayValueq7f404O = [_arrayValuecFUIUP]
		const _arrayValueRNflupU = [_arrayValueR6pKlP8, _arrayValueIn3NAz4, _arrayValueq7f404O]
		const _originalCallbacksUHFummC = [_arrayValueRNflupU]
		const _returnValueUUbZgql = await breadthFirstSearch(_graphVDA4Hyk, _startVertexSndmok, _originalCallbacksUHFummC)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueW6HSdYZ = true;
		const _valuefBjpWH = () => { return _returnValueW6HSdYZ };
		const _graphdmlZvs4 = new GraphVertex(_valuefBjpWH)
		const _returnValuelqbwVoT = await _graphdmlZvs4.getKey()
		const _returnValuejpnM7hX = await _graphdmlZvs4.getNeighbors()
		const _vertexEDoFFqf = "MUIhPxVTpdcSv257nCcKOciEzfJtNAMGQ2B21c5Jmxin0hyEEJXgozFSwUIGmMftTETIJJJKknnnmY5Ouo4vsWYlIWv";
		const _returnValueGGCWbfW = await _graphdmlZvs4.hasNeighbor(_vertexEDoFFqf)
		const _returnValueASetQyp = await _graphdmlZvs4.getEdges()
		const _startVertexe7E21S3 = "16L9U1vglyDzsZzuAnVmajR2j7XrTakJOrnEIfp8sVhmV8sBEqhJdueFM6z3ruJHQOVV2dMGNJVZ9jBYzSKE8u";
		const _originalCallbacksbJTpOih = undefined;
		const _returnValueNJA7HKt = await breadthFirstSearch(_graphdmlZvs4, _startVertexe7E21S3, _originalCallbacksbJTpOih)
	});
})