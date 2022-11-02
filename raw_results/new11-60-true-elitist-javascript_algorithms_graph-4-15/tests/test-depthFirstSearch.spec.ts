export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _graph4k3R5U = "eMNosxoVyAgKk7tAne4j1vu9M7NhTonxmLSzvYGUz0uUPGbfHJha5VfjfPphbPxy";
		const _startVertexkHEr7F5 = undefined;
		const _callbackslVPftdx = null;
		const _returnValueHGg1vRF = await depthFirstSearch(_graph4k3R5U, _startVertexkHEr7F5, _callbackslVPftdx)
	});

	it('test for depthFirstSearch', async () => {
		const _graphAF9ctM = false;
		const _arrayValueJtoDjuq = undefined;
		const _arrayValueL6z1Zu8 = true;
		const _startVertexWYTF1Ye = [_arrayValueJtoDjuq, _arrayValueL6z1Zu8]
		const _callbacksg3PRNcD = undefined;
		const _returnValuec0Rj6Wq = await depthFirstSearch(_graphAF9ctM, _startVertexWYTF1Ye, _callbacksg3PRNcD)
	});
})