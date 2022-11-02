export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _graphBbHVgUD = null;
		const _startVertexK9J0JfN = "RrSQv2bHdpGJ8cn1eBI0lGLfG2tEcfNb8RFbOUBYYpVT38cyBRcqTCL2ZbHj215";
		const _originalCallbacksETDMBGN = {
		
	}
		const _returnValueaJ8JCLI = await breadthFirstSearch(_graphBbHVgUD, _startVertexK9J0JfN, _originalCallbacksETDMBGN)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueR7y2mqI = "U95yQLZBOcl";
		const _arrayValueKVrZAgU = [_arrayValueR7y2mqI]
		const _arrayValuesna3nlJ = false;
		const _arrayValueQlhhqcg = {
		
	}
		const _returnValueFnqoS1f = [_arrayValueKVrZAgU, _arrayValuesna3nlJ, _arrayValueQlhhqcg]
		const _getNeighborsGx6DXgK = () => { return _returnValueFnqoS1f };
		const _graphuOAaAlY = {
			"getNeighbors": _getNeighborsGx6DXgK
	}
		const _startVertexH73n9Uw = 5.480552524975453;
		const _originalCallbacksO3MdLR = undefined;
		const _returnValuebEFnli6 = await breadthFirstSearch(_graphuOAaAlY, _startVertexH73n9Uw, _originalCallbacksO3MdLR)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueQdcwYMX = false;
		const _graphXKkFVOM = new GraphVertex(_valueQdcwYMX)
		const _arrayValuerJIwePK = 3.714559240529134;
		const _edgew2LCe1J = [_arrayValuerJIwePK]
		const _returnValue7oKJ4x = await _graphXKkFVOM.deleteEdge(_edgew2LCe1J)
		const _startVertexOhqxOsw = null;
		const _arrayValuebDP1pKg = 9.146619432446485;
		const _arrayValuesZb4ses = 2.8259512794944985;
		const _arrayValuelF7NMbs = "74PADrQXoJzVOUrXIF874q2GTukT6JJYK5Usrjr3HEJODTu5Cd3";
		const _returnValuek6E8Yim = [_arrayValuebDP1pKg, _arrayValuesZb4ses, _arrayValuelF7NMbs]
		const _originalCallbacksyr5UU6 = () => { return _returnValuek6E8Yim };
		const _returnValuedvoMMVs = await breadthFirstSearch(_graphXKkFVOM, _startVertexOhqxOsw, _originalCallbacksyr5UU6)
	});
})