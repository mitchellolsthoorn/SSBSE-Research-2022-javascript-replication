export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _arrayValuewEj2rEU = "AyrMBBBCLJN8glCLJncmJ2lh86aKIadfvvv6gUQvm";
		const _graphVTkPMV = [_arrayValuewEj2rEU]
		const _returnValue6yqONT = await graphBridges(_graphVTkPMV)
	});
})