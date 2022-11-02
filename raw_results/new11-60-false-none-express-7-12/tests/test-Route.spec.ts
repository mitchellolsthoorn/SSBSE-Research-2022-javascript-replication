export {}
const Route = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/router/route.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Route', () => {
	it('test for Route', async () => {
		const _pathLGRI19l = {
		
	}
		const _RouteJ0ztA99 = new Route(_pathLGRI19l)
		const _returnValue9iEn6U = await _RouteJ0ztA99._options()
		const _returnValueke5eZnt = await _RouteJ0ztA99._options()
		const _returnValueJGj43Qi = await _RouteJ0ztA99._options()
		const _returnValueW9sKQ0Y = true;
		const _reqHjwXaMU = () => { return _returnValueW9sKQ0Y };
		const _resFR8Seu0 = false;
		const _done19r46c = "XzCA8Vql8fuQzfgoswKuxj99W5EsCdeN4m7DszK8bJS2ljd6DJn8NwfWtoFnAyWV7fGxVq7lejVD";
		const _returnValue5Kn3Jl = await _RouteJ0ztA99.dispatch(_reqHjwXaMU, _resFR8Seu0, _done19r46c)
	});

	it('test for Route', async () => {
		const _patherMdJn9 = false;
		const _RouteUVow0V0 = new Route(_patherMdJn9)
		const _returnValuerm3uvdt = await _RouteUVow0V0._options()
		const _method3bZgIQ = null;
		const _returnValuejiQv9gH = await _RouteUVow0V0._handles_method(_method3bZgIQ)
		const _reqY0AC5YC = 5.865157645372259;
		const _arrayValuesZolMl = "OcMvaVeVLM9X0lqqC6";
		const _arrayValuezQN5fOC = -8.001541070352268;
		const _arrayValuejivVBil = undefined;
		const _arrayValueBgoFjdO = undefined;
		const _resYSbrTy1 = [_arrayValuesZolMl, _arrayValuezQN5fOC, _arrayValuejivVBil, _arrayValueBgoFjdO]
		const _arrayValueGb7FOR = undefined;
		const _arrayValued3EDjlJ = null;
		const _arrayValuekmDjcRW = null;
		const _arrayValueMskp4Ag = undefined;
		const _doneuyj3IRJ = [_arrayValueGb7FOR, _arrayValued3EDjlJ, _arrayValuekmDjcRW, _arrayValueMskp4Ag]
		const _returnValueqTTKvkI = await _RouteUVow0V0.dispatch(_reqY0AC5YC, _resYSbrTy1, _doneuyj3IRJ)
	});

	it('test for Route', async () => {
		const _pathTIj6ino = false;
		const _Routeh85Ssp3 = new Route(_pathTIj6ino)
		const _returnValueAHddP5l = await _Routeh85Ssp3._options()
		const _returnValueKWu7ES4 = await _Routeh85Ssp3.all()
		const _reqzUmlCc = "9cJMuLC6H4Q8MOXtY";
		const _resEDkwIJP = undefined;
		const _doneFOh0BnD = undefined;
		const _returnValuebrgJ2qn = await _Routeh85Ssp3.dispatch(_reqzUmlCc, _resEDkwIJP, _doneFOh0BnD)
	});

	it('test for Route', async () => {
		const _pathlmptJdY = null;
		const _RouteH0gymgm = new Route(_pathlmptJdY)
		const _returnValueUKTwYCB = await _RouteH0gymgm._options()
		const _methodz1T659M = "pGEspGXkzWw8mHN";
		const _returnValuemAqlCcv = await _RouteH0gymgm._handles_method(_methodz1T659M)
	});
})