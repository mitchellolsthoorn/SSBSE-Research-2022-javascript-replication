export {}
const {Help} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/help.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Help', () => {
	it('test for Help', async () => {
		const _HelpAO01gLC = new Help()
		const _arrayValue1DBDnp = false;
		const _arrayValueBodcEAD = undefined;
		const _arrayValueexZTeh = -2.280545868300816;
		const _arrayValuejj2bezo = [_arrayValueBodcEAD, _arrayValueexZTeh]
		const _arrayValuexXLobwQ = [_arrayValuejj2bezo]
		const _arrayValuek6C4xBW = true;
		const _cmdFTscBbp = [_arrayValue1DBDnp, _arrayValuexXLobwQ, _arrayValuek6C4xBW]
		const _returnValueH6hvIbc = await _HelpAO01gLC.commandDescription(_cmdFTscBbp)
		const _cmdXXddyis = "mAQtYv2SVr456brEakjGae5oLAiBULAV5mTmrrwFboe9djKepcdXzp";
		const _helperxWyImo6 = "r3eUsVgXSs9DgSvetLQdfaf89tzanRk";
		const _returnValueF9OyCyB = await _HelpAO01gLC.longestSubcommandTermLength(_cmdXXddyis, _helperxWyImo6)
	});

	it('test for Help', async () => {
		const _HelpZIGpcgg = new Help()
		const _cmdnrlunN6 = "TRNJVaUzUbMceirHBuuHF";
		const _returnValuek60eEhe = await _HelpZIGpcgg.subcommandTerm(_cmdnrlunN6)
	});

	it('test for Help', async () => {
		const _HelpbcJAi80 = new Help()
		const _cmdyEJXL4g = 7.985291692362711;
		const _returnValueN4WLOk = await _HelpbcJAi80.visibleOptions(_cmdyEJXL4g)
		const _arrayValueaqKP5D9 = {
		
	}
		const _returnValuejAGt5H4 = [_arrayValueaqKP5D9]
		const _strSLHvt4j = () => { return _returnValuejAGt5H4 };
		const _widthkpza0F = "AKCDExVAl96";
		const _indentSa8KYTy = false;
		const _minColumnWidthauzWYPo = null;
		const _returnValueE9NdHyO = await _HelpbcJAi80.wrap(_strSLHvt4j, _widthkpza0F, _indentSa8KYTy, _minColumnWidthauzWYPo)
	});

	it('test for Help', async () => {
		const _HelpP9PiItm = new Help()
		const _strrbmlsmz = null;
		const _widthzEbIaMb = -0.814776374512455;
		const _returnValuefp4NXOG = 4.76833531583001;
		const _indentmDTVGf9 = () => { return _returnValuefp4NXOG };
		const _minColumnWidthBBHrjX = null;
		const _returnValueyjGcXc8 = await _HelpP9PiItm.wrap(_strrbmlsmz, _widthzEbIaMb, _indentmDTVGf9, _minColumnWidthBBHrjX)
		const _cmdD3mX612 = []
		const _returnValuecjQCCUe = await _HelpP9PiItm.visibleOptions(_cmdD3mX612)
		const _argumentE9daTlK = false;
		const _returnValueYXleJ2 = await _HelpP9PiItm.argumentDescription(_argumentE9daTlK)
		const _optionXAanckG = undefined;
		const _returnValuehAuT9Pp = await _HelpP9PiItm.optionDescription(_optionXAanckG)
	});

	it('test for Help', async () => {
		const _HelpUujRcLZ = new Help()
		const _cmdaWkLyKb = null;
		const _arrayValuehDqdABo = null;
		const _helpertOFdck0 = [_arrayValuehDqdABo]
		const _returnValuedR1KdS7 = await _HelpUujRcLZ.longestArgumentTermLength(_cmdaWkLyKb, _helpertOFdck0)
		const _arrayValueQed6rnQ = "OD9uJvoRY9rcmOKw43D9Kr";
		const _arrayValueWPGP4Qt = null;
		const _arrayValuevvE7MFG = true;
		const _cmdhZWgPmY = [_arrayValueQed6rnQ, _arrayValueWPGP4Qt, _arrayValuevvE7MFG]
		const _returnValueiDHkW5N = undefined;
		const _helperOzseu9 = () => { return _returnValueiDHkW5N };
		const _returnValueK41yCGB = await _HelpUujRcLZ.formatHelp(_cmdhZWgPmY, _helperOzseu9)
		const _argumentJeQTfe = 8.914716296123636;
		const _returnValueCYeVj9 = await _HelpUujRcLZ.argumentTerm(_argumentJeQTfe)
		const _cmdWime1bV = {
		
	}
		const _returnValuexNI1Q2I = await _HelpUujRcLZ.commandUsage(_cmdWime1bV)
	});

	it('test for Help', async () => {
		const _HelpNuQyKA5 = new Help()
		const _cmdQGPZgLO = undefined;
		const _helperNSStvVZ = true;
		const _returnValueJUQNcmQ = await _HelpNuQyKA5.longestSubcommandTermLength(_cmdQGPZgLO, _helperNSStvVZ)
		const _cmdTbyZULX = {
		
	}
		const _returnValuevBjhSO = await _HelpNuQyKA5.visibleOptions(_cmdTbyZULX)
		const _arrayValuebEyFa5v = "5kRmCuYu5cH2tAquq9fgC8EhtrgLltnV8ENTXOWyjuOoeld7j6XUfqxWX";
		const _arrayValueSaT2Jc8 = null;
		const _arrayValueqmF68W = null;
		const _cmdBFqdyXJ = [_arrayValuebEyFa5v, _arrayValueSaT2Jc8, _arrayValueqmF68W]
		const _helpergzWERTJ = {
		
	}
		const _returnValueyTekAt = await _HelpNuQyKA5.padWidth(_cmdBFqdyXJ, _helpergzWERTJ)
		const _optiong2xDVMI = false;
		const _returnValueX0kXzlo = await _HelpNuQyKA5.optionDescription(_optiong2xDVMI)
	});

	it('test for Help', async () => {
		const _HelpYunJVr0 = new Help()
		const _cmdBzY3fCe = -7.205438024924088;
		const _helperdHGth8X = undefined;
		const _returnValueio20a6g = await _HelpYunJVr0.formatHelp(_cmdBzY3fCe, _helperdHGth8X)
		const _strIdj4TZi = 0.7569220938064287;
		const _widthK6t7U1D = null;
		const _indentSEMXual = "rGYqn8Ldc9nw7WZFm";
		const _minColumnWidthOAieL2c = true;
		const _returnValueJ6YEC56 = await _HelpYunJVr0.wrap(_strIdj4TZi, _widthK6t7U1D, _indentSEMXual, _minColumnWidthOAieL2c)
		const _cmdpzE4TCZ = false;
		const _helperB2tfAd = false;
		const _returnValuegEhn9jk = await _HelpYunJVr0.longestOptionTermLength(_cmdpzE4TCZ, _helperB2tfAd)
	});

	it('test for Help', async () => {
		const _HelpDPuLzZH = new Help()
		const _optionBSmxLJI = false;
		const _returnValuelYFV6eq = await _HelpDPuLzZH.optionDescription(_optionBSmxLJI)
		const _cmdvF6lESi = {
		
	}
		const _helperMWa7XIQ = null;
		const _returnValueKcj5MHH = await _HelpDPuLzZH.longestSubcommandTermLength(_cmdvF6lESi, _helperMWa7XIQ)
	});

	it('test for Help', async () => {
		const _HelpfNFSE8u = new Help()
		const _cmdTzKrKHD = false;
		const _helperuwcYhr = undefined;
		const _returnValueZqIWEKk = await _HelpfNFSE8u.longestOptionTermLength(_cmdTzKrKHD, _helperuwcYhr)
		const _argumentPnNwzxk = undefined;
		const _returnValueJ0tfeuN = await _HelpfNFSE8u.argumentDescription(_argumentPnNwzxk)
		const _argumentkvKIcxX = true;
		const _returnValued8eIwlC = await _HelpfNFSE8u.argumentDescription(_argumentkvKIcxX)
		const _returnValueNDE35k0 = -6.702651520542679;
		const _arrayValueDEP1LP9 = () => { return _returnValueNDE35k0 };
		const _cmdqgQoaCE = [_arrayValueDEP1LP9]
		const _helperMxQB3gS = null;
		const _returnValuer4hxxK6 = await _HelpfNFSE8u.formatHelp(_cmdqgQoaCE, _helperMxQB3gS)
		const _cmdBoXzksQ = true;
		const _returnValueld8uf5K = await _HelpfNFSE8u.subcommandTerm(_cmdBoXzksQ)
	});

	it('test for Help', async () => {
		const _HelpqqkiIE8 = new Help()
		const _cmduHWr25U = false;
		const _returnValueS8we5hk = await _HelpqqkiIE8.visibleArguments(_cmduHWr25U)
		const _optionYvpbJlr = undefined;
		const _returnValueUgwo8T2 = await _HelpqqkiIE8.optionTerm(_optionYvpbJlr)
		const _cmdXaLaAFc = "3fSROC4xmdSsjuHUO6ucp2yTaHAnfGJRe75vwmAQm8m7Vp6lmpyvnrrovQis79xHmwdMWqOB2on6daHUnd";
		const _helperhhIjci = -4.054372690140921;
		const _returnValue3dTgXJ = await _HelpqqkiIE8.padWidth(_cmdXaLaAFc, _helperhhIjci)
	});

	it('test for Help', async () => {
		const _HelpKDLSDPx = new Help()
		const _argumentkrStty = true;
		const _returnValueFuFUQpv = await _HelpKDLSDPx.argumentDescription(_argumentkrStty)
	});

	it('test for Help', async () => {
		const _HelpqF9uLJq = new Help()
		const _argumentDS1Kfj1 = null;
		const _returnValueWr768Fg = await _HelpqF9uLJq.argumentTerm(_argumentDS1Kfj1)
		const _arrayValueR4q8Zzf = undefined;
		const _arrayValuexBxf22 = null;
		const _cmdRO93Ga4 = [_arrayValueR4q8Zzf, _arrayValuexBxf22]
		const _returnValuet7BgDpB = await _HelpqF9uLJq.commandUsage(_cmdRO93Ga4)
	});

	it('test for Help', async () => {
		const _HelpOgMmKfz = new Help()
		const _cmdARs3aGk = undefined;
		const _helperuT0ON1O = "yuuWlUV6NeEPJq3GDTSncgjgK9XEL7rF8C1hvmbqqn2lAxCjQIB6zU6Ad7Few";
		const _returnValuezXDofCc = await _HelpOgMmKfz.padWidth(_cmdARs3aGk, _helperuT0ON1O)
		const _cmdzUyg0z9 = "14mzRLKgCIlCJxfQFXu46FKCg6BUmDalCcjdG2YNzxmpSaZqP7ouW1JP6WLtO6QCprLYiH0Rokb7ifUSJ4pL368ZfYlj2iPI2V";
		const _helperSD3wI7U = null;
		const _returnValuei9m73GH = await _HelpOgMmKfz.longestSubcommandTermLength(_cmdzUyg0z9, _helperSD3wI7U)
		const _optionIKo0wy8 = "qvC9h8CrkfwQ5UOQAyasQdrdwV3ir1XEe5atol0jnrmrc1";
		const _returnValueCrAtJeI = await _HelpOgMmKfz.optionTerm(_optionIKo0wy8)
		const _cmdVfwQkPe = {
		
	}
		const _helperHQ4iIpB = 3.7911419398070194;
		const _returnValuevAbQcYo = await _HelpOgMmKfz.longestSubcommandTermLength(_cmdVfwQkPe, _helperHQ4iIpB)
		const _cmdkzbMmow = 0.3548709747788692;
		const _helperynFc6Jf = {
		
	}
		const _returnValueXZH87ba = await _HelpOgMmKfz.formatHelp(_cmdkzbMmow, _helperynFc6Jf)
	});

	it('test for Help', async () => {
		const _HelpliEwXGY = new Help()
		const _cmdzoTKMkt = null;
		const _returnValueAt5KDdc = await _HelpliEwXGY.subcommandDescription(_cmdzoTKMkt)
		const _cmdLB2bD5t = undefined;
		const _helperd5GN3PS = "uQ0LuohwA9BkBTTTKGA6tJu1mFjYg1UDBP7s38zX2NMJaH7dhyhRuf9JgCAEuqtNtXE2uY2ThtWKPDwTYjjnPs";
		const _returnValueIsnIEnw = await _HelpliEwXGY.longestSubcommandTermLength(_cmdLB2bD5t, _helperd5GN3PS)
		const _strbyLcoZL = undefined;
		const _widthmhNMEY5 = 0.3673914947447283;
		const _indentpOMnNnE = 8.64318253625796;
		const _minColumnWidthOHZEyCp = true;
		const _returnValueNWXsZXl = await _HelpliEwXGY.wrap(_strbyLcoZL, _widthmhNMEY5, _indentpOMnNnE, _minColumnWidthOHZEyCp)
		const _cmdM7dqYb = null;
		const _arrayValueaZNllho = undefined;
		const _arrayValueWKJFZEx = 4.159282134251217;
		const _arrayValueI5BgHOH = null;
		const _arrayValueVmKfvwv = "4J1uBiooyHf2GGBUqiCj4u5eyeddhXIspp4zgqiJ7Rdp2fHlQq2yIiUIYy6HRlUFBY3f6tVbKpXUJolrXljno97sqkX4seN";
		const _arrayValueaR7npem = [_arrayValueaZNllho, _arrayValueWKJFZEx, _arrayValueI5BgHOH, _arrayValueVmKfvwv]
		const _arrayValueNhszI9R = "uSAj3MTNypyzOuJldM7I5OKS";
		const _arrayValuedgvFZlT = {
		
	}
		const _arrayValueEpbX5n4 = [_arrayValueaR7npem, _arrayValueNhszI9R, _arrayValuedgvFZlT]
		const _arrayValuePfejdJS = undefined;
		const _arrayValuewLzfO0S = true;
		const _arrayValueZag0Ua = [_arrayValueEpbX5n4, _arrayValuePfejdJS, _arrayValuewLzfO0S]
		const _arrayValueLahXDzS = null;
		const _helperrtWOixH = [_arrayValueZag0Ua, _arrayValueLahXDzS]
		const _returnValuedy5VZI = await _HelpliEwXGY.formatHelp(_cmdM7dqYb, _helperrtWOixH)
	});

	it('test for Help', async () => {
		const _HelpgBldmH = new Help()
		const _cmdP3tIFre = -1.213243580199732;
		const _returnValueEbFTDh = await _HelpgBldmH.commandUsage(_cmdP3tIFre)
		const _arrayValuezMLPh5V = null;
		const _cmdcYUzE0P = [_arrayValuezMLPh5V]
		const _returnValuerX7VVow = await _HelpgBldmH.subcommandDescription(_cmdcYUzE0P)
		const _argumentUOKTcbN = null;
		const _returnValueM5Syx0v = await _HelpgBldmH.argumentDescription(_argumentUOKTcbN)
	});

	it('test for Help', async () => {
		const _Helpzq8uA4y = new Help()
		const _optionvcscf7X = undefined;
		const _returnValuepOX5q6v = await _Helpzq8uA4y.optionTerm(_optionvcscf7X)
		const _cmdpGUEjkG = 9.03515655145668;
		const _helperZntUcf1 = "ATaz81qQXFioKUQRozgn4jHKABE";
		const _returnValuehhBsS3R = await _Helpzq8uA4y.padWidth(_cmdpGUEjkG, _helperZntUcf1)
	});

	it('test for Help', async () => {
		const _HelpwrZxUJ8 = new Help()
		const _cmdExOuvN3 = "mo9MfphqltXy2pcG1u";
		const _returnValueNJAEi1R = await _HelpwrZxUJ8.visibleCommands(_cmdExOuvN3)
		const _cmdJBNvLbi = -6.729038540271133;
		const _returnValuemx4Bg3u = await _HelpwrZxUJ8.commandDescription(_cmdJBNvLbi)
		const _cmdH2vTBdX = null;
		const _helperpoZLlim = {
		
	}
		const _returnValuePPjEv8G = await _HelpwrZxUJ8.longestArgumentTermLength(_cmdH2vTBdX, _helperpoZLlim)
		const _cmdmOW6fBV = undefined;
		const _helperGgQGJHl = 6.800139928770395;
		const _returnValueC6TspP = await _HelpwrZxUJ8.longestArgumentTermLength(_cmdmOW6fBV, _helperGgQGJHl)
		const _cmdPRogG4 = true;
		const _helperxMoUCAO = undefined;
		const _returnValueMCgOsiC = await _HelpwrZxUJ8.padWidth(_cmdPRogG4, _helperxMoUCAO)
	});

	it('test for Help', async () => {
		const _Help5JpgMR = new Help()
		const _str8LVb7P = "zxl33S8cz9bhqWW4QoKsByrICTqPkLIULqMNE18Z95jPAvxC10UOeKuTp5ayxRPpVWJZuMMEmni9WVYKIXX";
		const _widthpg2z2F = undefined;
		const _indentMRGbdOQ = null;
		const _arrayValueGa9iXuE = false;
		const _arrayValuejFDaEDy = {
		
	}
		const _minColumnWidthgqltcUf = [_arrayValueGa9iXuE, _arrayValuejFDaEDy]
		const _returnValuexNy07sW = await _Help5JpgMR.wrap(_str8LVb7P, _widthpg2z2F, _indentMRGbdOQ, _minColumnWidthgqltcUf)
	});

	it('test for Help', async () => {
		const _HelpPcmoEol = new Help()
		const _stryXkHGZa = "8p63rQo4ceF3l7cAQ8Pi6j4XzSFlI5NOtWaoiDJPBVVbiIXPWCpDEAQTeLIRhRh11IliS4cK8lWoShQf9rxzLOxYGIVZJMF1u";
		const _widthUZTZnFM = null;
		const _indentQCYL2nn = 3.2293580685115124;
		const _minColumnWidthAgCZd6 = false;
		const _returnValueqqMTmnY = await _HelpPcmoEol.wrap(_stryXkHGZa, _widthUZTZnFM, _indentQCYL2nn, _minColumnWidthAgCZd6)
		const _cmddiy2BDm = true;
		const _helpery1BKDkQ = null;
		const _returnValueb1qp3bO = await _HelpPcmoEol.longestArgumentTermLength(_cmddiy2BDm, _helpery1BKDkQ)
	});
})