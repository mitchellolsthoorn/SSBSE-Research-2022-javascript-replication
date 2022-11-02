export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueVOuHcon = null;
		const _graphrIadoR = () => { return _returnValueVOuHcon };
		const _returnValueA9HFR03 = await detectDirectedCycle(_graphrIadoR)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedbeZtPvr = false;
		const _graphApoIxlT = new Graph(_isDirectedbeZtPvr)
		const _returnValues2LnaDn = await _graphApoIxlT.getAllVertices()
		const _returnValueC8rAPxu = await _graphApoIxlT.getAllVertices()
		const _returnValueEaGuhG = await _graphApoIxlT.getVerticesIndices()
		const _vertexKeyvFBEuT7 = null;
		const _returnValueZlmx3CH = await _graphApoIxlT.getVertexByKey(_vertexKeyvFBEuT7)
		const _returnValueEfYeg5G = await detectDirectedCycle(_graphApoIxlT)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedfO11nin = false;
		const _graphRzWHhd2 = new Graph(_isDirectedfO11nin)
		const _arrayValuePys0im = "rrh7eBnug6UmnnkS1iWHNn73ZJ4dcPICFHJjCAD3O9lIaf3D80jXp";
		const _arrayValuenUSwcPM = []
		const _arrayValueWo8dLn = [_arrayValuenUSwcPM]
		const _valuewdr1kY = [_arrayValuePys0im, _arrayValueWo8dLn]
		const _returnValueSR7psLr = -1.8529980197218112;
		const _keyCallbackBYoTkla = () => { return _returnValueSR7psLr };
		const _newVertex1DCkgX = new DisjointSetItem(_valuewdr1kY, _keyCallbackBYoTkla)
		const _returnValueO4oZq8d = await _newVertex1DCkgX.getChildren()
		const _returnValuerkRJ57q = "nxG6ouRFl1Xm";
		const _valuedeDQRQ = () => { return _returnValuerkRJ57q };
		const _returnValueuboMEhG = true;
		const _returnValueGaOsFaY = () => { return _returnValueuboMEhG };
		const _keyCallbackIbQD6Cr = () => { return _returnValueGaOsFaY };
		const _childItemjBG9Po8 = new DisjointSetItem(_valuedeDQRQ, _keyCallbackIbQD6Cr)
		const _returnValuenHJOA3J = await _childItemjBG9Po8.getRoot()
		const _valueZ8o5LDs = true;
		const _returnValueAn41BMw = -7.3266395230302255;
		const _keyCallbackvxRKOD9 = () => { return _returnValueAn41BMw };
		const _childItemPnecbtM = new DisjointSetItem(_valueZ8o5LDs, _keyCallbackvxRKOD9)
		const _returnValueULECbaW = await _childItemPnecbtM.isRoot()
		const _returnValueYHfDSpv = await _childItemPnecbtM.getRank()
		const _returnValueYlJyMw1 = await _childItemPnecbtM.getRank()
		const _returnValueEaIRg1r = await _childItemPnecbtM.getRoot()
		const _returnValueaR7kYjO = await _childItemjBG9Po8.addChild(_childItemPnecbtM)
		const _returnValuectKHFS2 = false;
		const _returnValueEUeaW65 = () => { return _returnValuectKHFS2 };
		const _addChilduoSTqtG = () => { return _returnValueEUeaW65 };
		const _parentItemXklZyQc = {
			"addChild": _addChilduoSTqtG
	}
		const _forceSettingParentChildmkSdce9 = false;
		const _returnValueOnmrnrH = await _childItemjBG9Po8.setParent(_parentItemXklZyQc, _forceSettingParentChildmkSdce9)
		const _returnValuexWw9PSw = await _childItemjBG9Po8.getRank()
		const _returnValuedaF7ZbM = await _newVertex1DCkgX.addChild(_childItemjBG9Po8)
		const _returnValueJiWKCXy = await _graphRzWHhd2.addVertex(_newVertex1DCkgX)
		const _returnValueIsIb09C = await detectDirectedCycle(_graphRzWHhd2)
	});
})