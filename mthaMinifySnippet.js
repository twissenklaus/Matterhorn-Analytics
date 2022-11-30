/*!
 * device-uuid.js v1.0.1 (https://github.com/biggora/device-uuid/)
 * Copyright 2016-2017 Alexey Gordeyev
 * Licensed under MIT (https://github.com/biggora/device-uuid/blob/master/LICENSE)
 */ if(!function(e){"use strict";var t=RegExp("^.*(\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/|googlebot|baiduspider|gurujibot|yandexbot|slurp|msnbot|bingbot|facebookexternalhit|linkedinbot|twitterbot|slackbot|telegrambot|applebot|pingdom|tumblr |Embedly|spbot).*$"),i=function(e){e=e||{};var s={version:!1,language:!1,platform:!0,os:!0,pixelDepth:!0,colorDepth:!0,resolution:!1,isAuthoritative:!0,silkAccelerated:!0,isKindleFire:!0,isDesktop:!0,isMobile:!0,isTablet:!0,isWindows:!0,isLinux:!0,isLinux64:!0,isChromeOS:!0,isMac:!0,isiPad:!0,isiPhone:!0,isiPod:!0,isAndroid:!0,isSamsung:!0,isSmartTV:!0,isRaspberry:!0,isBlackberry:!0,isTouchScreen:!0,isOpera:!1,isIE:!1,isEdge:!1,isIECompatibilityMode:!1,isSafari:!1,isFirefox:!1,isWebkit:!1,isChrome:!1,isKonqueror:!1,isOmniWeb:!1,isSeaMonkey:!1,isFlock:!1,isAmaya:!1,isPhantomJS:!1,isEpiphany:!1,source:!1,cpuCores:!1};for(var r in e)e.hasOwnProperty(r)&&void 0!==s[r]&&(s[r]=e[r]);return this.options=s,this.version="1.0.0",this._Versions={Edge:/Edge\/([\d\w\.\-]+)/i,Firefox:/firefox\/([\d\w\.\-]+)/i,IE:/msie\s([\d\.]+[\d])|trident\/\d+\.\d+;.*[rv:]+(\d+\.\d)/i,Chrome:/chrome\/([\d\w\.\-]+)/i,Chromium:/(?:chromium|crios)\/([\d\w\.\-]+)/i,Safari:/version\/([\d\w\.\-]+)/i,Opera:/version\/([\d\w\.\-]+)|OPR\/([\d\w\.\-]+)/i,Ps3:/([\d\w\.\-]+)\)\s*$/i,Psp:/([\d\w\.\-]+)\)?\s*$/i,Amaya:/amaya\/([\d\w\.\-]+)/i,SeaMonkey:/seamonkey\/([\d\w\.\-]+)/i,OmniWeb:/omniweb\/v([\d\w\.\-]+)/i,Flock:/flock\/([\d\w\.\-]+)/i,Epiphany:/epiphany\/([\d\w\.\-]+)/i,WinJs:/msapphost\/([\d\w\.\-]+)/i,PhantomJS:/phantomjs\/([\d\w\.\-]+)/i,UC:/UCBrowser\/([\d\w\.]+)/i},this._Browsers={Edge:/edge/i,Amaya:/amaya/i,Konqueror:/konqueror/i,Epiphany:/epiphany/i,SeaMonkey:/seamonkey/i,Flock:/flock/i,OmniWeb:/omniweb/i,Chromium:/chromium|crios/i,Chrome:/chrome/i,Safari:/safari/i,IE:/msie|trident/i,Opera:/opera|OPR/i,PS3:/playstation 3/i,PSP:/playstation portable/i,Firefox:/firefox/i,WinJs:/msapphost/i,PhantomJS:/phantomjs/i,UC:/UCBrowser/i},this._OS={Windows10:/windows nt 10\.0/i,Windows81:/windows nt 6\.3/i,Windows8:/windows nt 6\.2/i,Windows7:/windows nt 6\.1/i,UnknownWindows:/windows nt 6\.\d+/i,WindowsVista:/windows nt 6\.0/i,Windows2003:/windows nt 5\.2/i,WindowsXP:/windows nt 5\.1/i,Windows2000:/windows nt 5\.0/i,WindowsPhone8:/windows phone 8\./,OSXCheetah:/os x 10[._]0/i,OSXPuma:/os x 10[._]1(\D|$)/i,OSXJaguar:/os x 10[._]2/i,OSXPanther:/os x 10[._]3/i,OSXTiger:/os x 10[._]4/i,OSXLeopard:/os x 10[._]5/i,OSXSnowLeopard:/os x 10[._]6/i,OSXLion:/os x 10[._]7/i,OSXMountainLion:/os x 10[._]8/i,OSXMavericks:/os x 10[._]9/i,OSXYosemite:/os x 10[._]10/i,OSXElCapitan:/os x 10[._]11/i,OSXSierra:/os x 10[._]12/i,Mac:/os x/i,Linux:/linux/i,Linux64:/linux x86_64/i,ChromeOS:/cros/i,Wii:/wii/i,PS3:/playstation 3/i,PSP:/playstation portable/i,iPad:/\(iPad.*os (\d+)[._](\d+)/i,iPhone:/\(iPhone.*os (\d+)[._](\d+)/i,Bada:/Bada\/(\d+)\.(\d+)/i,Curl:/curl\/(\d+)\.(\d+)\.(\d+)/i},this._Platform={Windows:/windows nt/i,WindowsPhone:/windows phone/i,Mac:/macintosh/i,Linux:/linux/i,Wii:/wii/i,Playstation:/playstation/i,iPad:/ipad/i,iPod:/ipod/i,iPhone:/iphone/i,Android:/android/i,Blackberry:/blackberry/i,Samsung:/samsung/i,Curl:/curl/i},this.DefaultAgent={isAuthoritative:!0,isMobile:!1,isTablet:!1,isiPad:!1,isiPod:!1,isiPhone:!1,isAndroid:!1,isBlackberry:!1,isOpera:!1,isIE:!1,isEdge:!1,isIECompatibilityMode:!1,isSafari:!1,isFirefox:!1,isWebkit:!1,isChrome:!1,isKonqueror:!1,isOmniWeb:!1,isSeaMonkey:!1,isFlock:!1,isAmaya:!1,isPhantomJS:!1,isEpiphany:!1,isDesktop:!1,isWindows:!1,isLinux:!1,isLinux64:!1,isMac:!1,isChromeOS:!1,isBada:!1,isSamsung:!1,isRaspberry:!1,isBot:!1,isCurl:!1,isAndroidTablet:!1,isWinJs:!1,isKindleFire:!1,isSilk:!1,isCaptive:!1,isSmartTV:!1,isUC:!1,isTouchScreen:!1,silkAccelerated:!1,colorDepth:-1,pixelDepth:-1,resolution:[],cpuCores:-1,language:"unknown",browser:"unknown",version:"unknown",os:"unknown",platform:"unknown",geoIp:{},source:"",hashInt:function(e){var t,i,s,r=0;if(0===e.length)return r;for(t=0,s=e.length;t<s;t++)r=(r<<5)-r+(i=e.charCodeAt(t)),r|=0;return r},hashMD5:function(e){function t(e,t){return e<<t|e>>>32-t}function i(e,t){var i,s,r,n,o;return r=2147483648&e,n=2147483648&t,i=1073741824&e,s=1073741824&t,o=(1073741823&e)+(1073741823&t),i&s?2147483648^o^r^n:i|s?1073741824&o?3221225472^o^r^n:1073741824^o^r^n:o^r^n}function s(e,t,i){return e&t|~e&i}function r(e,t,i){return e&i|t&~i}function n(e,t,i){return e^t^i}function o(e,t,i){return t^(e|~i)}function a(e,s,r,n,o,a,h){var u,c,_;return e=i(e,i(i((u=s,c=r,u&c|~u&(_=n)),o),h)),i(t(e,a),s)}function h(e,s,r,n,o,a,h){var u,c,_;return e=i(e,i(i((u=s,c=r,u&(_=n)|c&~_),o),h)),i(t(e,a),s)}function u(e,s,r,n,o,a,h){var u,c,_;return e=i(e,i(i((u=s,c=r,u^c^(_=n)),o),h)),i(t(e,a),s)}function c(e,s,r,n,o,a,h){var u,c,_;return e=i(e,i(i((u=s,c=r,c^(u|~(_=n))),o),h)),i(t(e,a),s)}function _(e){var t,i,s="",r="";for(i=0;i<=3;i++)s+=(r="0"+(t=e>>>8*i&255).toString(16)).substr(r.length-2,2);return s}var g,$,d,l,m,A,p,w,S,f=[];for(f=function e(t){for(var i,s=t.length,r=s+8,n=16*((r-r%64)/64+1),o=Array(n-1),a=0,h=0;h<s;)i=(h-h%4)/4,a=h%4*8,o[i]=o[i]|t.charCodeAt(h)<<a,h++;return i=(h-h%4)/4,a=h%4*8,o[i]=o[i]|128<<a,o[n-2]=s<<3,o[n-1]=s>>>29,o}(e=function e(t){t=t.replace(/\r\n/g,"\n");for(var i="",s=0;s<t.length;s++){var r=t.charCodeAt(s);r<128?i+=String.fromCharCode(r):r>127&&r<2048?(i+=String.fromCharCode(r>>6|192),i+=String.fromCharCode(63&r|128)):(i+=String.fromCharCode(r>>12|224),i+=String.fromCharCode(r>>6&63|128),i+=String.fromCharCode(63&r|128))}return i}(e)),A=1732584193,p=4023233417,w=2562383102,S=271733878,g=0;g<f.length;g+=16)$=A,d=p,l=w,m=S,A=a(A,p,w,S,f[g+0],7,3614090360),S=a(S,A,p,w,f[g+1],12,3905402710),w=a(w,S,A,p,f[g+2],17,606105819),p=a(p,w,S,A,f[g+3],22,3250441966),A=a(A,p,w,S,f[g+4],7,4118548399),S=a(S,A,p,w,f[g+5],12,1200080426),w=a(w,S,A,p,f[g+6],17,2821735955),p=a(p,w,S,A,f[g+7],22,4249261313),A=a(A,p,w,S,f[g+8],7,1770035416),S=a(S,A,p,w,f[g+9],12,2336552879),w=a(w,S,A,p,f[g+10],17,4294925233),p=a(p,w,S,A,f[g+11],22,2304563134),A=a(A,p,w,S,f[g+12],7,1804603682),S=a(S,A,p,w,f[g+13],12,4254626195),w=a(w,S,A,p,f[g+14],17,2792965006),p=a(p,w,S,A,f[g+15],22,1236535329),A=h(A,p,w,S,f[g+1],5,4129170786),S=h(S,A,p,w,f[g+6],9,3225465664),w=h(w,S,A,p,f[g+11],14,643717713),p=h(p,w,S,A,f[g+0],20,3921069994),A=h(A,p,w,S,f[g+5],5,3593408605),S=h(S,A,p,w,f[g+10],9,38016083),w=h(w,S,A,p,f[g+15],14,3634488961),p=h(p,w,S,A,f[g+4],20,3889429448),A=h(A,p,w,S,f[g+9],5,568446438),S=h(S,A,p,w,f[g+14],9,3275163606),w=h(w,S,A,p,f[g+3],14,4107603335),p=h(p,w,S,A,f[g+8],20,1163531501),A=h(A,p,w,S,f[g+13],5,2850285829),S=h(S,A,p,w,f[g+2],9,4243563512),w=h(w,S,A,p,f[g+7],14,1735328473),p=h(p,w,S,A,f[g+12],20,2368359562),A=u(A,p,w,S,f[g+5],4,4294588738),S=u(S,A,p,w,f[g+8],11,2272392833),w=u(w,S,A,p,f[g+11],16,1839030562),p=u(p,w,S,A,f[g+14],23,4259657740),A=u(A,p,w,S,f[g+1],4,2763975236),S=u(S,A,p,w,f[g+4],11,1272893353),w=u(w,S,A,p,f[g+7],16,4139469664),p=u(p,w,S,A,f[g+10],23,3200236656),A=u(A,p,w,S,f[g+13],4,681279174),S=u(S,A,p,w,f[g+0],11,3936430074),w=u(w,S,A,p,f[g+3],16,3572445317),p=u(p,w,S,A,f[g+6],23,76029189),A=u(A,p,w,S,f[g+9],4,3654602809),S=u(S,A,p,w,f[g+12],11,3873151461),w=u(w,S,A,p,f[g+15],16,530742520),p=u(p,w,S,A,f[g+2],23,3299628645),A=c(A,p,w,S,f[g+0],6,4096336452),S=c(S,A,p,w,f[g+7],10,1126891415),w=c(w,S,A,p,f[g+14],15,2878612391),p=c(p,w,S,A,f[g+5],21,4237533241),A=c(A,p,w,S,f[g+12],6,1700485571),S=c(S,A,p,w,f[g+3],10,2399980690),w=c(w,S,A,p,f[g+10],15,4293915773),p=c(p,w,S,A,f[g+1],21,2240044497),A=c(A,p,w,S,f[g+8],6,1873313359),S=c(S,A,p,w,f[g+15],10,4264355552),w=c(w,S,A,p,f[g+6],15,2734768916),p=c(p,w,S,A,f[g+13],21,1309151649),A=c(A,p,w,S,f[g+4],6,4149444226),S=c(S,A,p,w,f[g+11],10,3174756917),w=c(w,S,A,p,f[g+2],15,718787259),p=c(p,w,S,A,f[g+9],21,3951481745),A=i(A,$),p=i(p,d),w=i(w,l),S=i(S,m);return(_(A)+_(p)+_(w)+_(S)).toLowerCase()}},this.Agent={},this.getBrowser=function(e){switch(!0){case this._Browsers.Edge.test(e):return this.Agent.isEdge=!0,"Edge";case this._Browsers.PhantomJS.test(e):return this.Agent.isPhantomJS=!0,"PhantomJS";case this._Browsers.Konqueror.test(e):return this.Agent.isKonqueror=!0,"Konqueror";case this._Browsers.Amaya.test(e):return this.Agent.isAmaya=!0,"Amaya";case this._Browsers.Epiphany.test(e):return this.Agent.isEpiphany=!0,"Epiphany";case this._Browsers.SeaMonkey.test(e):return this.Agent.isSeaMonkey=!0,"SeaMonkey";case this._Browsers.Flock.test(e):return this.Agent.isFlock=!0,"Flock";case this._Browsers.OmniWeb.test(e):return this.Agent.isOmniWeb=!0,"OmniWeb";case this._Browsers.Opera.test(e):return this.Agent.isOpera=!0,"Opera";case this._Browsers.Chromium.test(e):return this.Agent.isChrome=!0,"Chromium";case this._Browsers.Chrome.test(e):return this.Agent.isChrome=!0,"Chrome";case this._Browsers.Safari.test(e):return this.Agent.isSafari=!0,"Safari";case this._Browsers.WinJs.test(e):return this.Agent.isWinJs=!0,"WinJs";case this._Browsers.IE.test(e):return this.Agent.isIE=!0,"IE";case this._Browsers.PS3.test(e):return"ps3";case this._Browsers.PSP.test(e):return"psp";case this._Browsers.Firefox.test(e):return this.Agent.isFirefox=!0,"Firefox";case this._Browsers.UC.test(e):return this.Agent.isUC=!0,"UCBrowser";default:return 0!==e.indexOf("Mozilla")&&/^([\d\w\-\.]+)\/[\d\w\.\-]+/i.test(e)?(this.Agent.isAuthoritative=!1,RegExp.$1):"unknown"}},this.getBrowserVersion=function(e){var t;switch(this.Agent.browser){case"Edge":if(this._Versions.Edge.test(e))return RegExp.$1;break;case"PhantomJS":if(this._Versions.PhantomJS.test(e))return RegExp.$1;break;case"Chrome":if(this._Versions.Chrome.test(e))return RegExp.$1;break;case"Chromium":if(this._Versions.Chromium.test(e))return RegExp.$1;break;case"Safari":if(this._Versions.Safari.test(e))return RegExp.$1;break;case"Opera":if(this._Versions.Opera.test(e))return RegExp.$1?RegExp.$1:RegExp.$2;break;case"Firefox":if(this._Versions.Firefox.test(e))return RegExp.$1;break;case"WinJs":if(this._Versions.WinJs.test(e))return RegExp.$1;break;case"IE":if(this._Versions.IE.test(e))return RegExp.$2?RegExp.$2:RegExp.$1;break;case"ps3":if(this._Versions.Ps3.test(e))return RegExp.$1;break;case"psp":if(this._Versions.Psp.test(e))return RegExp.$1;break;case"Amaya":if(this._Versions.Amaya.test(e))return RegExp.$1;break;case"Epiphany":if(this._Versions.Epiphany.test(e))return RegExp.$1;break;case"SeaMonkey":if(this._Versions.SeaMonkey.test(e))return RegExp.$1;break;case"Flock":if(this._Versions.Flock.test(e))return RegExp.$1;break;case"OmniWeb":if(this._Versions.OmniWeb.test(e))return RegExp.$1;break;case"UCBrowser":if(this._Versions.UC.test(e))return RegExp.$1;break;default:if("unknown"!==this.Agent.browser&&(t=RegExp(this.Agent.browser+"[\\/ ]([\\d\\w\\.\\-]+)","i")).test(e))return RegExp.$1}},this.getOS=function(e){switch(!0){case this._OS.WindowsVista.test(e):return this.Agent.isWindows=!0,"Windows Vista";case this._OS.Windows7.test(e):return this.Agent.isWindows=!0,"Windows 7";case this._OS.Windows8.test(e):return this.Agent.isWindows=!0,"Windows 8";case this._OS.Windows81.test(e):return this.Agent.isWindows=!0,"Windows 8.1";case this._OS.Windows10.test(e):return this.Agent.isWindows=!0,"Windows 10.0";case this._OS.Windows2003.test(e):return this.Agent.isWindows=!0,"Windows 2003";case this._OS.WindowsXP.test(e):return this.Agent.isWindows=!0,"Windows XP";case this._OS.Windows2000.test(e):return this.Agent.isWindows=!0,"Windows 2000";case this._OS.WindowsPhone8.test(e):return"Windows Phone 8";case this._OS.Linux64.test(e):return this.Agent.isLinux=!0,this.Agent.isLinux64=!0,"Linux 64";case this._OS.Linux.test(e):return this.Agent.isLinux=!0,"Linux";case this._OS.ChromeOS.test(e):return this.Agent.isChromeOS=!0,"Chrome OS";case this._OS.Wii.test(e):return"Wii";case this._OS.PS3.test(e):case this._OS.PSP.test(e):return"Playstation";case this._OS.OSXCheetah.test(e):return this.Agent.isMac=!0,"OS X Cheetah";case this._OS.OSXPuma.test(e):return this.Agent.isMac=!0,"OS X Puma";case this._OS.OSXJaguar.test(e):return this.Agent.isMac=!0,"OS X Jaguar";case this._OS.OSXPanther.test(e):return this.Agent.isMac=!0,"OS X Panther";case this._OS.OSXTiger.test(e):return this.Agent.isMac=!0,"OS X Tiger";case this._OS.OSXLeopard.test(e):return this.Agent.isMac=!0,"OS X Leopard";case this._OS.OSXSnowLeopard.test(e):return this.Agent.isMac=!0,"OS X Snow Leopard";case this._OS.OSXLion.test(e):return this.Agent.isMac=!0,"OS X Lion";case this._OS.OSXMountainLion.test(e):return this.Agent.isMac=!0,"OS X Mountain Lion";case this._OS.OSXMavericks.test(e):return this.Agent.isMac=!0,"OS X Mavericks";case this._OS.OSXYosemite.test(e):return this.Agent.isMac=!0,"OS X Yosemite";case this._OS.OSXElCapitan.test(e):return this.Agent.isMac=!0,"OS X El Capitan";case this._OS.OSXSierra.test(e):return this.Agent.isMac=!0,"macOS Sierra";case this._OS.Mac.test(e):return this.Agent.isMac=!0,"OS X";case this._OS.iPad.test(e):return this.Agent.isiPad=!0,e.match(this._OS.iPad)[0].replace("_",".");case this._OS.iPhone.test(e):return this.Agent.isiPhone=!0,e.match(this._OS.iPhone)[0].replace("_",".");case this._OS.Bada.test(e):return this.Agent.isBada=!0,"Bada";case this._OS.Curl.test(e):return this.Agent.isCurl=!0,"Curl";default:return"unknown"}},this.getPlatform=function(e){switch(!0){case this._Platform.Windows.test(e):return"Microsoft Windows";case this._Platform.WindowsPhone.test(e):return this.Agent.isWindowsPhone=!0,"Microsoft Windows Phone";case this._Platform.Mac.test(e):return"Apple Mac";case this._Platform.Curl.test(e):return"Curl";case this._Platform.Android.test(e):return this.Agent.isAndroid=!0,"Android";case this._Platform.Blackberry.test(e):return this.Agent.isBlackberry=!0,"Blackberry";case this._Platform.Linux.test(e):return"Linux";case this._Platform.Wii.test(e):return"Wii";case this._Platform.Playstation.test(e):return"Playstation";case this._Platform.iPad.test(e):return this.Agent.isiPad=!0,"iPad";case this._Platform.iPod.test(e):return this.Agent.isiPod=!0,"iPod";case this._Platform.iPhone.test(e):return this.Agent.isiPhone=!0,"iPhone";case this._Platform.Samsung.test(e):return this.Agent.isiSamsung=!0,"Samsung";default:return"unknown"}},this.testCompatibilityMode=function(){var e=this;if(this.Agent.isIE&&/Trident\/(\d)\.0/i.test(e.Agent.source)){var t=parseInt(RegExp.$1,10),i=parseInt(e.Agent.version,10);7===i&&7===t&&(e.Agent.isIECompatibilityMode=!0,e.Agent.version=11),7===i&&6===t&&(e.Agent.isIECompatibilityMode=!0,e.Agent.version=10),7===i&&5===t&&(e.Agent.isIECompatibilityMode=!0,e.Agent.version=9),7===i&&4===t&&(e.Agent.isIECompatibilityMode=!0,e.Agent.version=8)}},this.testSilk=function(){return!0===/silk/gi.test(this.Agent.source)&&(this.Agent.isSilk=!0),/Silk-Accelerated=true/gi.test(this.Agent.source)&&(this.Agent.SilkAccelerated=!0),!!this.Agent.isSilk&&"Silk"},this.testKindleFire=function(){switch(!0){case/KFOT/gi.test(this.Agent.source):return this.Agent.isKindleFire=!0,"Kindle Fire";case/KFTT/gi.test(this.Agent.source):return this.Agent.isKindleFire=!0,"Kindle Fire HD";case/KFJWI/gi.test(this.Agent.source):return this.Agent.isKindleFire=!0,"Kindle Fire HD 8.9";case/KFJWA/gi.test(this.Agent.source):return this.Agent.isKindleFire=!0,"Kindle Fire HD 8.9 4G";case/KFSOWI/gi.test(this.Agent.source):return this.Agent.isKindleFire=!0,"Kindle Fire HD 7";case/KFTHWI/gi.test(this.Agent.source):return this.Agent.isKindleFire=!0,"Kindle Fire HDX 7";case/KFTHWA/gi.test(this.Agent.source):return this.Agent.isKindleFire=!0,"Kindle Fire HDX 7 4G";case/KFAPWI/gi.test(this.Agent.source):return this.Agent.isKindleFire=!0,"Kindle Fire HDX 8.9";case/KFAPWA/gi.test(this.Agent.source):return this.Agent.isKindleFire=!0,"Kindle Fire HDX 8.9 4G";default:return!1}},this.testCaptiveNetwork=function(){var e=this;return!0===/CaptiveNetwork/gi.test(e.Agent.source)&&(e.Agent.isCaptive=!0,e.Agent.isMac=!0,e.Agent.platform="Apple Mac","CaptiveNetwork")},this.testMobile=function(){var e=this;switch(!0){case e.Agent.isWindows:case e.Agent.isLinux:case e.Agent.isMac:case e.Agent.isChromeOS:e.Agent.isDesktop=!0;break;case e.Agent.isAndroid:case e.Agent.isSamsung:e.Agent.isMobile=!0,e.Agent.isDesktop=!1}switch(!0){case e.Agent.isiPad:case e.Agent.isiPod:case e.Agent.isiPhone:case e.Agent.isBada:case e.Agent.isBlackberry:case e.Agent.isAndroid:case e.Agent.isWindowsPhone:e.Agent.isMobile=!0,e.Agent.isDesktop=!1}/mobile/i.test(e.Agent.source)&&(e.Agent.isMobile=!0,e.Agent.isDesktop=!1)},this.testTablet=function(){var e=this;switch(!0){case e.Agent.isiPad:case e.Agent.isAndroidTablet:case e.Agent.isKindleFire:e.Agent.isTablet=!0}/tablet/i.test(e.Agent.source)&&(e.Agent.isTablet=!0)},this.testNginxGeoIP=function(e){var t=this;Object.keys(e).forEach(function(i){/^GEOIP/i.test(i)&&(t.Agent.geoIp[i]=e[i])})},this.testBot=function(){var e=this,i=t.exec(e.Agent.source.toLowerCase());i?e.Agent.isBot=i[1]:e.Agent.isAuthoritative||(e.Agent.isBot=/bot/i.test(e.Agent.source))},this.testSmartTV=function(){var e=this,t=RegExp("smart-tv|smarttv|googletv|appletv|hbbtv|pov_tv|netcast.tv","gi").exec(e.Agent.source.toLowerCase());t&&(e.Agent.isSmartTV=t[1])},this.testAndroidTablet=function(){var e=this;e.Agent.isAndroid&&!/mobile/i.test(e.Agent.source)&&(e.Agent.isAndroidTablet=!0)},this.testTouchSupport=function(){var e=this;e.Agent.isTouchScreen="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},this.getLaguage=function(){var e=this;e.Agent.language=(navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||"").toLowerCase()},this.getColorDepth=function(){var e=this;e.Agent.colorDepth=screen.colorDepth||-1},this.getScreenResolution=function(){var e=this;e.Agent.resolution=[screen.availWidth,screen.availHeight]},this.getPixelDepth=function(){var e=this;e.Agent.pixelDepth=screen.pixelDepth||-1},this.getCPU=function(){var e=this;e.Agent.cpuCores=navigator.hardwareConcurrency||-1},this.reset=function(){var e=this;for(var t in e.DefaultAgent)e.DefaultAgent.hasOwnProperty(t)&&(e.Agent[t]=e.DefaultAgent[t]);return e},this.parse=function(e){e=e||navigator.userAgent;var t=new i;return t.Agent.source=e.replace(/^\s*/,"").replace(/\s*$/,""),t.Agent.os=t.getOS(t.Agent.source),t.Agent.platform=t.getPlatform(t.Agent.source),t.Agent.browser=t.getBrowser(t.Agent.source),t.Agent.version=t.getBrowserVersion(t.Agent.source),t.testBot(),t.testSmartTV(),t.testMobile(),t.testAndroidTablet(),t.testTablet(),t.testCompatibilityMode(),t.testSilk(),t.testKindleFire(),t.testCaptiveNetwork(),t.testTouchSupport(),t.getLaguage(),t.getColorDepth(),t.getPixelDepth(),t.getScreenResolution(),t.getCPU(),t.Agent},this.get=function(e){var t="a",i=this.parse(),s=[];for(var r in this.options)this.options.hasOwnProperty(r)&&!0===this.options[r]&&s.push(i[r]);e&&s.push(e),!this.options.resolution&&i.isMobile&&s.push(i.resolution),t="b";var n=i.hashMD5(s.join(":"));return[n.slice(0,8),n.slice(8,12),"4"+n.slice(12,15),t+n.slice(15,18),n.slice(20)].join("-")},this.Agent=this.DefaultAgent,this};return e.DeviceUUID=i,new i(navigator.userAgent)}(this),void 0===matterhornKeeper)var matterhornKeeper={pagename:window.location.pathname};var n_matterhorn_vid=!1;function matterhorn_send(e){console.log(e),headers={"Content-Type":"application/json"};var t=new XMLHttpRequest;for(var i in t.open("POST","https://25db-177-60-73-11.sa.ngrok.io/mhc",!0),headers)t.setRequestHeader(i,headers[i]);t.onreadystatechange=function(){if(t.readyState===XMLHttpRequest.DONE){var e=t.status;(0===e||e>=200&&e<400)&&console.log("Done")}},t.send(JSON.stringify(e))}function matterhorn_event(e,t){var i=new DeviceUUID().parse(),s="";i.isDesktop?s="desktop":i.isMobile?s="mobile":i.isTablet?s="tablet":i.isSmartTV&&(s="smart_tv");var r=new Date;matterhorn_send({ts:new Date().getTime(),tab:sessionStorage.getItem("tab"),mid:new DeviceUUID().get(),vid:localStorage.getItem("matterhorn_vid"),uid:matterhornKeeper.uid?matterhornKeeper.uid:"null",fv:n_matterhorn_vid,url:window.location.href,hn:window.location.hostname,t:document.title,pn:matterhornKeeper.pagename.trim().length>0?matterhornKeeper.pagename:window.location.pathname,sr:sessionStorage.getItem("sr"),md:sessionStorage.getItem("md"),ca:sessionStorage.getItem("ca"),o:sessionStorage.getItem("o"),dv:s,os:i.os,br:i.browser,l:i.language,pla:i.platform,at:"Web",ua:i.source,ti:"",y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),dt:[r.getFullYear(),r.getMonth()+1,r.getDate()].join("-"),h:r.getHours(),mi:r.getMinutes(),e:e,ee:t})}function sanitize(e,t){var i,s,r;if(!e)return"";if(r="string"==typeof(t=t||{}).spacer?t.spacer:"_",e=e.toLowerCase().replace(/^\s+/,"").replace(/\s+$/,"").replace(/\s+/g,"_").replace(/[áàâãåäæª]/g,"a").replace(/[éèêëЄ€]/g,"e").replace(/[íìîï]/g,"i").replace(/[óòôõöøº]/g,"o").replace(/[úùûü]/g,"u").replace(/[ç¢©]/g,"c").replace(/[^a-z0-9_\-]/g,"_"),t.capitalized){for(s=0,i=e.replace(/^_+|_+$/g,"").split(/_+/g);s<i.length;s++)i[s]&&(i[s]=i[s][0].toUpperCase()+i[s].slice(1));return i.join(r)}return e.replace(/^_+|_+$/g,"").replace(/_+/g,r)}!function(){if(null===sessionStorage.getItem("tab")){var e=new Date().getTime();sessionStorage.setItem("tab",e),sessionStorage.setItem("o",document.referrer);var t=new URL(window.location.href).searchParams;sessionStorage.setItem("sr",t.get("utm_source")),sessionStorage.setItem("md",t.get("utm_medium")),sessionStorage.setItem("ca",t.get("utm_campaign"))}else var e=sessionStorage.getItem("tab");var i=localStorage.getItem("matterhorn_vid"),s="null"==String(i)||i.length<3;i=s?String(new Date().getTime())+"."+String(Math.floor(1e6*Math.random())):i,s&&localStorage.setItem("matterhorn_vid",i)}(),matterhorn_event("page_view",{});