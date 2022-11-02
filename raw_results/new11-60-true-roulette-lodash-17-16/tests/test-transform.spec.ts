export {}
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
import MapCache from "../../benchmark/top10npm/lodash/.internal/MapCache.js";
import Hash from "../../benchmark/top10npm/lodash/.internal/Hash.js";

describe('transform', () => {
	it('test for transform', async () => {
		const _returnValuepAGx3yV = "tYHix";
		const _arrayValueJE322Oq = () => { return _returnValuepAGx3yV };
		const _arrayValuer0yDekI = "mMKnSEkHYxpPyzdEQXnJumCMakWeAr9byDWAep";
		const _arrayValuecei2MhF = null;
		const _objectSkyFG4x = [_arrayValueJE322Oq, _arrayValuer0yDekI, _arrayValuecei2MhF]
		const _returnValuefgU2YH5 = null;
		const _iterateerfGlLjJ = () => { return _returnValuefgU2YH5 };
		const _accumulatorl1gWihz = null;
		const _returnValueAkiIUCu = await transform(_objectSkyFG4x, _iterateerfGlLjJ, _accumulatorl1gWihz)
	});

	it('test for transform', async () => {
		const _returnValueSzJVrLp = null;
		const _entries340JCn = () => { return _returnValueSzJVrLp };
		const _objectCuzfNPS = new MapCache(_entries340JCn)
		const _keym2XxidM = undefined;
		const _valueDlclYxx = true;
		const _returnValueM8ZGs5v = await _objectCuzfNPS.set(_keym2XxidM, _valueDlclYxx)
		const _keyR9Y4U8N = {
		
	}
		const _valueu51IFYz = null;
		const _returnValuejcyrys = await _objectCuzfNPS.set(_keyR9Y4U8N, _valueu51IFYz)
		const _returnValueFdqNgqb = false;
		const _iterateeFx3kr5a = () => { return _returnValueFdqNgqb };
		const _accumulatoryTZ7t2z = null;
		const _returnValueYquCtvu = await transform(_objectCuzfNPS, _iterateeFx3kr5a, _accumulatoryTZ7t2z)
	});

	it('test for transform', async () => {
		const _returnValueCbve0WO = true;
		const _length17z9hd = () => { return _returnValueCbve0WO };
		const _entriesKhxi8xO = {
			"length": _length17z9hd
	}
		const _objectng4mpUd = new Hash(_entriesKhxi8xO)
		const _keyoz3ItY3 = 8.30237894277521;
		const _returnValueM8M6B4y = await _objectng4mpUd.has(_keyoz3ItY3)
		const _keyE4INJLc = 7.428895657600055;
		const _returnValuermCLIRD = await _objectng4mpUd.has(_keyE4INJLc)
		const _keyhZQertU = {
		
	}
		const _returnValueTsZw5K = await _objectng4mpUd.has(_keyhZQertU)
		const _returnValueCvnTaqd = -2.6842241699228584;
		const _iterateegq98ley = () => { return _returnValueCvnTaqd };
		const _accumulatorEBzB17u = {
		
	}
		const _returnValueAHH9hho = await transform(_objectng4mpUd, _iterateegq98ley, _accumulatorEBzB17u)
	});

	it('test for transform', async () => {
		const _constructormZczzfp = undefined;
		const _objecthWnYAlV = {
			"constructor": _constructormZczzfp
	}
		const _returnValueBj6GPjF = -8.066900529482682;
		const _iterateedJCRhD = () => { return _returnValueBj6GPjF };
		const _accumulatorehq8SXU = null;
		const _returnValuebTlWUO9 = await transform(_objecthWnYAlV, _iterateedJCRhD, _accumulatorehq8SXU)
	});
})