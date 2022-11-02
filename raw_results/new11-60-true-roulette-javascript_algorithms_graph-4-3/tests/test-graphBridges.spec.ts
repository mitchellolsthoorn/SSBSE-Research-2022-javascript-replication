export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _arrayValueBacnqxJ = undefined;
		const _arrayValueSGrYqWs = null;
		const _graphEsbPu9H = [_arrayValueBacnqxJ, _arrayValueSGrYqWs]
		const _returnValueJmfxyOj = await graphBridges(_graphEsbPu9H)
	});

	it('test for graphBridges', async () => {
		const _arrayValueT45sd5P = 6.7061495059687;
		const _arrayValuedGWLbQB = undefined;
		const _returnValuemNTzmrM = [_arrayValueT45sd5P, _arrayValuedGWLbQB]
		const _arrayValueiBMiHph = () => { return _returnValuemNTzmrM };
		const _isDirectedgoO9rIU = [_arrayValueiBMiHph]
		const _graphb3S9AfM = new Graph(_isDirectedgoO9rIU)
		const _returnValueJBTKTvG = await _graphb3S9AfM.getAllEdges()
		const _valueZsatWbI = "moDfIkvwGAdiyhSagBimxxxExATuim1U4natJFiCwfbaGRf4ko1DEG9QVytepDebercfOsyS1esUc6O6xoQEzO3QIqXRAdlZCT";
		const _arrayValueYY65Tyy = true;
		const _returnValueXIm8Xc2 = [_arrayValueYY65Tyy]
		const _keyCallbackG63UpCP = () => { return _returnValueXIm8Xc2 };
		const _newVertexCVedh3S = new DisjointSetItem(_valueZsatWbI, _keyCallbackG63UpCP)
		const _valuecAolw9U = {
		
	}
		const _returnValuebKy0wM1 = -7.208840000888271;
		const _keyCallbackSV5FVX = () => { return _returnValuebKy0wM1 };
		const _parentItemlF4dWcw = new DisjointSetItem(_valuecAolw9U, _keyCallbackSV5FVX)
		const _returnValueg5lcNez = await _parentItemlF4dWcw.getRank()
		const _returnValuedjiJ8t6 = await _parentItemlF4dWcw.getChildren()
		const _returnValuezlBilgR = true;
		const _addChildG6kiYYh = () => { return _returnValuezlBilgR };
		const _parentItemY3XgqP8 = {
			"addChild": _addChildG6kiYYh
	}
		const _forceSettingParentChildNW8YLX = false;
		const _returnValueST3Ixpg = await _parentItemlF4dWcw.setParent(_parentItemY3XgqP8, _forceSettingParentChildNW8YLX)
		const _returnValuehs92dPd = null;
		const _addChild2w1x6C = () => { return _returnValuehs92dPd };
		const _parentItemo6FFWeL = {
			"addChild": _addChild2w1x6C
	}
		const _forceSettingParentChildj4QoMml = true;
		const _returnValueI9fUtnm = await _parentItemlF4dWcw.setParent(_parentItemo6FFWeL, _forceSettingParentChildj4QoMml)
		const _forceSettingParentChildoMAjWdx = true;
		const _returnValuebQPDwp = await _newVertexCVedh3S.setParent(_parentItemlF4dWcw, _forceSettingParentChildoMAjWdx)
		const _returnValueVYeGlIi = await _newVertexCVedh3S.getChildren()
		const _returnValueHAE06ZD = await _newVertexCVedh3S.getChildren()
		const _returnValueYTdENr8 = await _newVertexCVedh3S.getRank()
		const _returnValueIDENmC = await _newVertexCVedh3S.isRoot()
		const _returnValueTG8LfS8 = await _graphb3S9AfM.addVertex(_newVertexCVedh3S)
		const _returnValueO0Drg2E = await _graphb3S9AfM.toString()
		const _returnValuexaeSpi9 = await graphBridges(_graphb3S9AfM)
	});
})