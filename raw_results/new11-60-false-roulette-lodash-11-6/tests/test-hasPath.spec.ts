export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _returnValueDPTmH5c = false;
		const _lengthjTttZ86 = () => { return _returnValueDPTmH5c };
		const _objectN4LxCcS = {
			"length": _lengthjTttZ86
	}
		const _returnValueHg7pAhN = null;
		const _pathXRRCWBk = () => { return _returnValueHg7pAhN };
		const _returnValueIbiUzlV = await hasPath(_objectN4LxCcS, _pathXRRCWBk)
	});

	it('test for hasPath', async () => {
		const _objectYk60oBt = null;
		const _patho0YDy79 = "w5G6ugAIJ4pERfq39ilpe2iN2nN2b13HM5FFBiwQq3bzPMbpJaTDBPoUi5PxScosNsGmeEeEHeexPLGwXIEct1qO64or76";
		const _returnValueVaRZ3hO = await hasPath(_objectYk60oBt, _patho0YDy79)
	});

	it('test for hasPath', async () => {
		const _arrayValueD1QKUQD = "36RMsYubXBNmTPQ8MhxANDoY6TcoWvBqR2LCV1E";
		const _arrayValueUa7cql = undefined;
		const _arrayValuep8LriiN = [_arrayValueD1QKUQD, _arrayValueUa7cql]
		const _returnValuenEJwygj = undefined;
		const _arrayValueGDSTKha = () => { return _returnValuenEJwygj };
		const _objectezdwksE = [_arrayValuep8LriiN, _arrayValueGDSTKha]
		const _pathizQjqpi = "1";
		const _returnValuezgfHrH8 = await hasPath(_objectezdwksE, _pathizQjqpi)
	});
})