export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthHcDtcU5 = {
		
	}
		const _objectZRRl8g = {
			"length": _lengthHcDtcU5
	}
		const _pathNiggPHP = {
		
	}
		const _returnValuePWUjdR = await hasPath(_objectZRRl8g, _pathNiggPHP)
	});

	it('test for hasPath', async () => {
		const _objectfgN9Ude = 7.160078929338177;
		const _pathbmZ2r6z = null;
		const _returnValueGZvicB8 = await hasPath(_objectfgN9Ude, _pathbmZ2r6z)
	});

	it('test for hasPath', async () => {
		const _objectOaq8biZ = null;
		const _pathn4S72Z8 = "aSSlIX2dfxSpxjOvkLY7exkP0bXIVTxvfvDHCNCf";
		const _returnValueFSvHD8U = await hasPath(_objectOaq8biZ, _pathn4S72Z8)
	});
})