export {}
const Route = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/router/route.js");

describe('Route', () => {
	it('test for Route', async () => {
		const _path0iJBzG = false;
		const _RouteaHjL58y = new Route(_path0iJBzG)
		const _returnValueE8R0zd2 = undefined;
		const _routeYzL2yDF = () => { return _returnValueE8R0zd2 };
		const _reqFaAEl4v = {
			"route": _routeYzL2yDF
	}
		const _returnValueMthaXSQ = {
		
	}
		const _resiTYP4Dr = () => { return _returnValueMthaXSQ };
		const _returnValueZO8VAPO = 6.373495288969792;
		const _doneKrakwHB = () => { return _returnValueZO8VAPO };
		const _returnValueRDJe8V = await _RouteaHjL58y.dispatch(_reqFaAEl4v, _resiTYP4Dr, _doneKrakwHB)
	});

	it('test for Route', async () => {
		const _pathlQaTdP2 = "T6AAbeXs2kSr1MDXiKrmYCQKHx1BX0nD8vbarkFGL5aPAqqcXDBgRPzhjkPLg98P61bS9oE75K7Tw4zAhBAfO48qAu1c";
		const _Route47jpiF = new Route(_pathlQaTdP2)
		const _returnValueX8M7Xl = await _Route47jpiF.all()
		const _arrayValueQWRJvIF = 7.6262277341801905;
		const _returnValueQO4A59g = null;
		const _arrayValueWVgfJYG = () => { return _returnValueQO4A59g };
		const _arrayValuexLxtduU = false;
		const _arrayValueWd95D9A = -4.475320537033614;
		const _returnValuertyh7Sm = [_arrayValueQWRJvIF, _arrayValueWVgfJYG, _arrayValuexLxtduU, _arrayValueWd95D9A]
		const _routecaWKkVg = () => { return _returnValuertyh7Sm };
		const _reqDYMbcjW = {
			"route": _routecaWKkVg
	}
		const _resV0f6npE = undefined;
		const _returnValuelyID43O = "atc19G8dIeQ4uhXVUscv";
		const _doneMn5pgC6 = () => { return _returnValuelyID43O };
		const _returnValueOgXBShN = await _Route47jpiF.dispatch(_reqDYMbcjW, _resV0f6npE, _doneMn5pgC6)
	});

	it('test for Route', async () => {
		const _pathz9Rki7 = undefined;
		const _RouteW9hbqRn = new Route(_pathz9Rki7)
		const _returnValueWjrf7i2 = undefined;
		const _toLowerCaseACw4UTw = () => { return _returnValueWjrf7i2 };
		const _methodVLOtKR = {
			"toLowerCase": _toLowerCaseACw4UTw
	}
		const _returnValuespP8q0E = await _RouteW9hbqRn._handles_method(_methodVLOtKR)
		const _returnValuetl7BoVK = await _RouteW9hbqRn._options()
		const _returnValueTCNfL4K = true;
		const _toLowerCase9Zy2om = () => { return _returnValueTCNfL4K };
		const _methodOHNLPCX = {
			"toLowerCase": _toLowerCase9Zy2om
	}
		const _returnValueLWMnYc7 = await _RouteW9hbqRn._handles_method(_methodOHNLPCX)
	});
})