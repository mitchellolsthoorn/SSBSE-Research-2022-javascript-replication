export {}
import {configFromRFC2822} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-string.js";

describe('configFromRFC2822', () => {
	it('test for configFromRFC2822', async () => {
		const _utcOffsetkQ5DQt1 = "9r1pjoX6iNQzegZLdazNEvFbVQDTYqhxKEjrzOXjReCOkWBNSMoHtUyenLHXc5v4P4TKfTjM5J7QOoB2HRAAK6o0KT";
		const __tzmDZBYSQ = {
		
	}
		const __iSjRjG0r = "HGiUi8WOn8JvFnfbmPOk26P00OVKkCBgsOD1drkuQQFPVLPt9GXGbkkwlISLkdmuQ2pJyWCd5hG1R4jeeEPLDXnzer4";
		const _configKzQtHVh = {
			"utcOffset": _utcOffsetkQ5DQt1,
		"_tzm": __tzmDZBYSQ,
		"_i": __iSjRjG0r
	}
		const _returnValuerVOXXig = await configFromRFC2822(_configKzQtHVh)
	});
})