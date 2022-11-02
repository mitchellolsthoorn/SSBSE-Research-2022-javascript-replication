export {}
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
import Stack from "../../benchmark/top10npm/lodash/.internal/Stack.js";

describe('transform', () => {
	it('test for transform', async () => {
		const _objectuEXWMbP = "RYv439TOmLubSMBKAkuliGjVsmGP8astMY30k3845hoLRjs6ficv2CuY5vqGLgcU8kxoSgcJzcoV4ETEhBwvnx4Y4U";
		const _returnValueASfQI7 = true;
		const _returnValueUdoK7DO = () => { return _returnValueASfQI7 };
		const _iterateeELPVWXx = () => { return _returnValueUdoK7DO };
		const _accumulatorkZovMXd = false;
		const _returnValuefIkoxD = await transform(_objectuEXWMbP, _iterateeELPVWXx, _accumulatorkZovMXd)
	});

	it('test for transform', async () => {
		const _entriesHHmV3fZ = 3.3296409590985565;
		const _objectBntFeMy = new Stack(_entriesHHmV3fZ)
		const _returnValuef8oQeJ9 = await _objectBntFeMy.clear()
		const _returnValueThg6REU = "";
		const _iterateeXq0utLG = () => { return _returnValueThg6REU };
		const _accumulatorirdqIA5 = null;
		const _returnValuesyO6WdT = await transform(_objectBntFeMy, _iterateeXq0utLG, _accumulatorirdqIA5)
	});

	it('test for transform', async () => {
		const _constructormmoHTxl = undefined;
		const _objectvPqLcCc = {
			"constructor": _constructormmoHTxl
	}
		const _arrayValueAdBQJwK = true;
		const _returnValueYZhB0mV = [_arrayValueAdBQJwK]
		const _iterateecz85web = () => { return _returnValueYZhB0mV };
		const _accumulatorYx93bR = null;
		const _returnValueTiOgAxN = await transform(_objectvPqLcCc, _iterateecz85web, _accumulatorYx93bR)
	});

	it('test for transform', async () => {
		const _arrayValueLQ3pvG = "es6PVIUvshaZVM71cmYnRkrALwo9O7z5M3e";
		const _arrayValueKgUNTRc = null;
		const _arrayValuegdou0Lp = undefined;
		const _objectcP4gYyg = [_arrayValueLQ3pvG, _arrayValueKgUNTRc, _arrayValuegdou0Lp]
		const _returnValuerWbgJDq = 9.496642966428404;
		const _iterateeNWOGhDX = () => { return _returnValuerWbgJDq };
		const _accumulatorcn6Tutd = null;
		const _returnValueV7bsDyQ = await transform(_objectcP4gYyg, _iterateeNWOGhDX, _accumulatorcn6Tutd)
	});
})