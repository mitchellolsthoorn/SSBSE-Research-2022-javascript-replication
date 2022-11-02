export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _graphRruJuBI = "17c9SztN2bWagtDJnC8APKS9dR9GnxzBuqqn61Yh8ygogXjGCf8DkxNtAglT1WRHsv7sXygert9hoKvVeVcK5rbxipmYUAD0vc";
		const _returnValueRpx3dhD = await articulationPoints(_graphRruJuBI)
	});
})