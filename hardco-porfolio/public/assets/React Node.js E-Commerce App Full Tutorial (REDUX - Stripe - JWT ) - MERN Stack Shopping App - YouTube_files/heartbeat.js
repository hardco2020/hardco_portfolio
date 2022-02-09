(function(g){var window=this;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var b6=function(a,b){if(!Number.isFinite(a))return String(a);a=String(a);var c=a.indexOf(".");-1===c&&(c=a.length);var d="-"===a[0]?"-":"";d&&(a=a.substring(1));return d+(0,g.qPa)("0",Math.max(0,b-c))+a},hUa=function(){return{G:"svg",
W:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},U:[{G:"path",W:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}}]}},iUa=function(){return{G:"svg",
W:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},U:[{G:"path",W:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}}]}},d6=function(a){"number"===typeof a?(this.date=jUa(a,0,1),c6(this,1)):g.Oa(a)?(this.date=jUa(a.getFullYear(),a.getMonth(),a.getDate()),c6(this,a.getDate())):(this.date=new Date(g.Ta()),a=this.date.getDate(),
this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),c6(this,a))},jUa=function(a,b,c){b=new Date(a,b,c);
0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b},c6=function(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))},e6=function(a,b){g.oN.call(this,a,{G:"div",
L:"ytp-reminder-menu",W:{role:"menu",tabindex:"-1"},U:[{G:"div",L:"ytp-reminder-menu-contents",U:[{G:"div",L:"ytp-reminder-menu-items"}]}]},100,!0);this.i=b;this.B=[];this.menuPopupRenderer=void 0;this.items=this.Fa("ytp-reminder-menu-items");this.hide()},lUa=function(a){var b=kUa(a),c=0,d={};
for(c=0;c<b.length;d={HB:d.HB},c++){var e=a.B[c];e||(e=new g.W({G:"div",L:"ytp-reminder-menu-item",W:{role:"menuitem",tabindex:"0"},U:[{G:"div",L:"ytp-reminder-menu-item-icon",va:"{{icon}}"},{G:"div",L:"ytp-reminder-menu-item-label",va:"{{text}}"}]}),d.HB=c,e.Ra("click",function(l){return function(){var m=l.HB;a.Eb();m=kUa(a)[m];a.ea("reminderMenuItemClicked",m.serviceEndpoint||m.command)}}(d)),e.Ea(a.items),a.B[c]=e);
var f=b[c],h=null;switch(f.icon&&f.icon.iconType){case "NOTIFICATIONS":h=hUa();break;case "NOTIFICATIONS_NONE":h=iUa();break;case "NOTIFICATIONS_ACTIVE":h=g.AK()}f=f.text?g.$y(f.text):"";e.update({icon:h,text:f})}for(;c<a.B.length;)a.B.pop().dispose();0===c?a.Eb():a.Ad(a.i)},kUa=function(a){return(a.menuPopupRenderer&&a.menuPopupRenderer.items||[]).reduce(function(b,c){c&&c.menuServiceItemRenderer&&b.push(c.menuServiceItemRenderer);
return b},[])},f6=function(a){g.W.call(this,{G:"div",
U:[{G:"button",Ha:["ytp-offline-slate-button","ytp-button"],U:[{G:"div",L:"ytp-offline-slate-button-icon",va:"{{icon}}"},{G:"div",L:"ytp-offline-slate-button-text",va:"{{text}}"}]}]});this.J=a;this.upcomingEventReminderButtonRenderer=this.toggleButtonRenderer=null;this.u=void 0;this.C=this.i=null;(this.D=this.Fa("ytp-offline-slate-button"))&&this.T(this.D,"click",this.I);this.hide()},mUa=function(a,b,c){!a.toggleButtonRenderer&&b&&b.toggleButtonRenderer?a.toggleButtonRenderer=b.toggleButtonRenderer:
b&&b.toggleButtonRenderer||(a.toggleButtonRenderer=null);
!a.upcomingEventReminderButtonRenderer&&c&&c.upcomingEventReminderButtonRenderer?a.upcomingEventReminderButtonRenderer=c.upcomingEventReminderButtonRenderer:c&&c.upcomingEventReminderButtonRenderer||(a.upcomingEventReminderButtonRenderer=null);g6(a)},g6=function(a){if(a.toggleButtonRenderer){var b=a.toggleButtonRenderer;
if(b.isToggled){var c=b.toggledText?g.$y(b.toggledText):"";a.update({text:c,icon:h6(b.toggledIcon)})}else c=b.defaultText?g.$y(b.defaultText):"",a.update({text:c,icon:h6(b.defaultIcon)});a.show()}else a.upcomingEventReminderButtonRenderer?(b=nUa(a))?(c=b.text?g.$y(b.text):"",a.update({text:c,icon:h6(b.icon)}),a.show()):a.hide():a.hide()},pUa=function(a,b,c){a.C||(a.C=new g.wx(a.J.V().Vg));
var d={context:g.Ev(a.C.config_||g.Fv())};g.Vx()&&(d.context.clientScreenNonce=g.Vx());d.params=c;g.Gv(a.C,b,d,{timeout:5E3,onSuccess:function(){a.upcomingEventReminderButtonRenderer&&a.u&&(a.upcomingEventReminderButtonRenderer.currentState=a.u,a.u=void 0)},
onError:function(){oUa(a)},
onTimeout:function(){oUa(a)}})},oUa=function(a){a.toggleButtonRenderer?(a.toggleButtonRenderer.isToggled=!a.toggleButtonRenderer.isToggled,g6(a)):a.upcomingEventReminderButtonRenderer&&(a.u=void 0,g6(a))},h6=function(a){if(!a)return null;
switch(a.iconType){case "NOTIFICATIONS":return hUa();case "NOTIFICATIONS_NONE":return iUa();case "NOTIFICATIONS_ACTIVE":return g.AK();default:return null}},nUa=function(a){if(!a.upcomingEventReminderButtonRenderer)return null;
var b=a.u||a.upcomingEventReminderButtonRenderer.currentState;a=g.q(a.upcomingEventReminderButtonRenderer.states||[]);for(var c=a.next();!c.done;c=a.next())if((c=c.value.upcomingEventReminderButtonStateRenderer)&&c.state===b&&c.button&&c.button.buttonRenderer)return c.button.buttonRenderer;return null},i6=function(a){g.W.call(this,{G:"div",
L:"ytp-offline-slate",U:[{G:"div",L:"ytp-offline-slate-background"},{G:"div",L:"ytp-offline-slate-bar",U:[{G:"span",L:"ytp-offline-slate-icon",U:[{G:"svg",W:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},U:[{G:"path",W:{d:"M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"}},
{G:"circle",W:{cx:"12",cy:"12",r:"3"}}]}]},{G:"span",L:"ytp-offline-slate-messages",U:[{G:"div",L:"ytp-offline-slate-main-text",W:{"aria-label":"{{label}}"},va:"{{mainText}}"},{G:"div",L:"ytp-offline-slate-subtitle-text",va:"{{subtitleText}}"}]},{G:"span",L:"ytp-offline-slate-buttons"}]},{G:"button",Ha:["ytp-offline-slate-close-button","ytp-button"],U:[g.vK()]},{G:"button",Ha:["ytp-offline-slate-open-button","ytp-button"],U:[g.uK()]},{G:"div",L:"ytp-offline-slate-trailer-chip",va:"\u9810\u544a\u7247"}]});
var b=this;this.api=a;this.i=this.u=null;this.background=this.Fa("ytp-offline-slate-background");this.B=this.Fa("ytp-offline-slate-bar");this.D=new g.I(function(){g.L(b.B,"ytp-offline-slate-bar-fade")},15E3);
this.I=!1;this.C=new g.I(function(){g.L(b.element,"ytp-offline-slate-collapsed")},15E3);
g.H(this,this.C);g.H(this,this.D);this.countdownTimer=new g.I(this.GO,1E3,this);this.T(a,"presentingplayerstatechange",this.JO);this.T(a,"livestatedata",this.Qa);a=this.Fa("ytp-offline-slate-close-button");this.T(a,"click",function(){g.L(b.element,"ytp-offline-slate-collapsed")});
a=this.Fa("ytp-offline-slate-open-button");this.T(a,"click",function(){g.Nr(b.element,"ytp-offline-slate-collapsed")});
this.hide();a=this.getVideoData();a.getPlayerResponse()&&(a=a.getPlayerResponse().playabilityStatus)&&this.Qa(a);a=8===this.api.getPresentingPlayerType()&&!this.getVideoData().ej;var c=8===this.api.getPresentingPlayerType();g.M(this.element,"ytp-offline-slate-premiere-trailer",a);g.M(this.element,"ytp-offline-slate-hide-background",c)},j6=function(a,b,c){var d,e,f,h;
if(b){var l=null!=b.subtitleText?g.$y(b.subtitleText):"";c=c?c:null!=b.mainText?g.$y(b.mainText):"";b=null!==(h=null===(f=null===(e=null===(d=b.mainText)||void 0===d?void 0:d.accessibility)||void 0===e?void 0:e.accessibilityData)||void 0===f?void 0:f.label)&&void 0!==h?h:c;a.update({mainText:c,subtitleText:l,label:b});g.M(a.element,"ytp-offline-slate-single-text-line",!l);g.M(a.B,"ytp-offline-slate-bar-hidden",!c&&!l)}},k6=function(a,b){var c=(0,g.P)();
this.trigger=a;this.i=b;this.B=c},m6=function(a){g.FM.call(this,a);
var b=this;this.K=!1;this.S=0;this.D=!1;this.u=new g.I(function(){var e=b.player.V(),f=b.getVideoData();if(l6(b))if(qUa(b)){var h;null!==(h=b.heartbeatParams)&&void 0!==h&&h.url&&(e=g.Ui(b.heartbeatParams.url,{request_id:g.xla()}),f.Sa&&(e=g.Ui(e,{vvt:f.Sa}),f.mdxEnvironment&&(e=g.Ui(e,{mdx_environment:f.mdxEnvironment}))),f.oauthToken&&(e=g.Ui(e,{access_token:f.oauthToken})),rUa(b,f,e))}else sUa(b),tUa(b,e,f)},0);
this.i=this.heartbeatParams=null;this.C=!1;this.I=new g.wi(1E3,6E4,1);this.sequenceNumber=0;this.offlineSlate=null;this.Z=new g.wx(void 0);this.X=this.attestationResponse=void 0;this.utcOffsetMinutes=-(new d6).date.getTimezoneOffset();this.B=new g.JC(this);g.H(this,this.u);g.H(this,this.B);sUa(this);uUa(this);this.B.T(a,"heartbeatparams",this.Kw);this.B.T(a,"presentingplayerstatechange",this.CQ);this.B.T(a,"videoplayerreset",this.DQ);this.B.T(a,g.Vy("heartbeat"),this.onCueRangeEnter);this.C&&this.i&&
vUa(this,this.i);var c=new g.Ty(1E3,0x7ffffffffffff,{priority:1,namespace:"heartbeat"}),d=new g.Ty(0x8000000000000,0x8000000000000,{id:"stream_end",priority:1,namespace:"heartbeat"});a.Ed([c,d]);wUa(this)},wUa=function(a){var b=a.getVideoData();
if(b.jh){var c=b.botguardData;c&&g.YL(c,a.player.V(),g.aM(b.Aa||""))}},sUa=function(a){var b=a.getVideoData();
if(b.jh&&(b=new g.bxa(b),g.WL.isInitialized()||3<=a.sequenceNumber)){var c=null;if(b.videoData.Aa){var d=g.cxa(b);if(d){c={};var e={};d=d.split("&");d=g.q(d);for(var f=d.next();!f.done;f=d.next())f=f.value.split("="),2===f.length&&(e[f[0]]=f[1]);e.r1a&&(c.webResponse=e.r1a);e.r1c&&(c.error=xUa[Number(e.r1c)]);c.challenge=b.videoData.Aa}}a.attestationResponse=c||void 0}},qUa=function(a){var b=a.getVideoData();
if(!g.XF(a.getVideoData())||b.vH)return!1;if(b.useInnertubeDrmService()&&b.I){a="playready"===b.I.flavor&&b.N("html5_innertube_heartbeats_for_playready");var c="widevine"===b.I.flavor&&b.N("html5_innertube_heartbeats_for_widevine");b=g.ED(b.I)&&b.N("html5_innertube_heartbeats_for_fairplay");return!(a||c||b)}return!0},n6=function(a){if(qUa(a))return!!a.heartbeatParams;
var b=a.player.V(),c=a.getVideoData();return b.N("html5_heartbeat_wait_for_drm_killswitch")||!g.XF(a.getVideoData())||!c.useInnertubeDrmService()||c.Tg||c.RF?!!c.heartbeatToken:!1},o6=function(a,b){if(!a.u.isActive()&&a.K){var c=a.getVideoData();
if(n6(a)||c.isLivePlayback){if(void 0===b)if(a.D){var d;b=a.C?7500:(null===(d=a.heartbeatParams)||void 0===d?0:d.interval)?1E3*a.heartbeatParams.interval:a.getVideoData().XO||6E4}else b=1E3;a.u.start(b)}}},rUa=function(a,b,c){b.lj&&(c=g.Ui(c,{internalipoverride:b.lj}));
var d={cpn:b.clientPlaybackNonce};b.contextParams&&(d.context_params=b.contextParams);b.wb&&(d.kpt=b.wb);c=g.Ui(c,d);g.hu(c,{format:"RAW",method:"GET",timeout:3E4,onSuccess:function(e){if(!a.u.isActive()&&l6(a)){a.I.reset();a.sequenceNumber++;e=e.responseText;var f=yUa(e);if(f){a.player.Oa("onHeartbeat",f);var h="ok"===f.status?f.stop_heartbeat?2:0:"stop"===f.status?1:"live_stream_offline"===f.status?0:-1}else h=(h=e.match(zUa))?"0"===h[1]?0:1:-1;AUa(a,f,e,h)}},
onError:function(e){l6(a)&&p6(a,!0,"net-"+e.status)},
onTimeout:function(){l6(a)&&p6(a,!0,"timeout")},
withCredentials:!0})},l6=function(a){var b=a.getVideoData();
return 3===a.player.getPresentingPlayerType()||g.T(a.player.zb(a.getPlayerType()),4)?!1:n6(a)||b.isLivePlayback?!0:(q6(a),!1)},tUa=function(a,b,c){var d,e,f,h={videoId:c.videoId,
sequenceNumber:a.sequenceNumber,heartbeatServerData:null!==(d=a.oa)&&void 0!==d?d:c.heartbeatServerData};a.X=a.attestationResponse;c.jh&&(h.attestationResponse=a.X);var l=g.CM(c),m=null!==(e=l.client)&&void 0!==e?e:{};m.utcOffsetMinutes=a.utcOffsetMinutes;h.context=l;h.cpn=c.clientPlaybackNonce;if(l="undefined"!==typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)m.timeZone=l;m={heartbeatChecks:[]};if(l=c.getPlayerResponse())c.heartbeatToken&&(h.heartbeatToken=c.heartbeatToken),
(l=l.playabilityStatus)&&(l=l.liveStreamability)&&l.liveStreamabilityRenderer&&m.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_LIVE_STREAM_STATUS");c.heartbeatToken&&m.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_YPC");if(g.LE(b)){m.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_UNPLUGGED");var n=BUa(a);l={};null!==n&&(l.clientPlayerPositionUtcMillis=n);n=null===(f=a.player.vb())||void 0===f?void 0:g.TM(f);n=(null===n||void 0===n?void 0:n.freePreviewWatchedDuration)||0;0<n&&(l.freePreviewWatchedDuration={seconds:""+
n});m.unpluggedParams=l}h.heartbeatRequestParams=m;b.N("enable_linear_player_handling")&&c.isLivePlayback&&(b=BUa(a),null!==b&&(h.playbackState||(h.playbackState={}),h.playbackState.playbackPosition={utcTimeMillis:b}));b={timeout:3E4,onSuccess:function(p){var r;if(!a.u.isActive()&&l6(a)){var t=a.getVideoData(),u=t.jh&&null==a.X;t.jh=!(null===(r=p.heartbeatAttestationConfig)||void 0===r||!r.requiresAttestation)||u;r=p.playabilityStatus;t=JSON.stringify(r)||"{}";p.authenticationMismatch&&a.player.Ca("authshear",
"");u=-1;var v=p.playabilityStatus;v&&(a.player.Oa("onHeartbeat",v),"OK"===v.status?u=p.stopHeartbeat?2:0:"UNPLAYABLE"===v.status?u=1:"LIVE_STREAM_OFFLINE"===v.status&&(u=0));a.sequenceNumber&&-1===u||a.I.reset();a.sequenceNumber++;p.heartbeatServerData&&(a.oa=p.heartbeatServerData);AUa(a,r,t,u)}},
onError:function(p){l6(a)&&p6(a,!0,"net-"+p.status)},
onTimeout:function(){l6(a)&&p6(a,!0,"timeout")}};
c.nf()&&(b.mJ="Bearer "+c.nf());g.Gv(a.Z,"player/heartbeat",h,b)},AUa=function(a,b,c,d){-1===d?(b="decode "+g.Fc(c),p6(a,!1,b)):2===d?(q6(a),a.D=!0):(a.S=0,a.u.stop(),1===d?(a.D=!1,a.player.Jf("heartbeat.stop",a.oe(c)),g.Wv("heartbeatActionPlayerHalted",CUa(b))):(a.D=!0,c=0,a.C&&b&&(c=vUa(a,b),a.player.ea("livestatedata",b)),c?o6(a,c):o6(a)))},vUa=function(a,b){var c,d,e=b.liveStreamability&&b.liveStreamability.liveStreamabilityRenderer,f=!(!e||!e.switchStreamsImmediately),h=DUa(e),l=a.getVideoData(),
m=a.player.zb(a.getPlayerType()),n=m.Ec()&&!g.bG(l)&&!a.player.isAtLiveHead(a.getPlayerType());
if(g.RF(l)){var p=(null===(c=a.player.ld())||void 0===c?void 0:c.Kb())||{};p.status=b.status||"";p.dvr=""+ +n;p["switch"]=""+ +f;p.ended=""+ +!(!e||!e.displayEndscreen);a.player.Ca("heartbeat",g.YC(p))}if(n&&!f)return h;f=e&&e.streamTransitionEndpoint&&e.streamTransitionEndpoint.watchEndpoint;if("STREAM_TRANSITION_TIMING_AT_STREAM_END"===(e&&e.transitionTiming))a.getVideoData().aL=f;else{if(n=f)(n=f&&f.videoId)?(a.player.Tj(n,void 0,void 0,!0,!0,f),a.Yz("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT",
b),n=!0):n=!1;if(n)return h}if("OK"===b.status.toUpperCase()){f=e&&e.broadcastId;n=a.i&&a.i.liveStreamability&&a.i.liveStreamability.liveStreamabilityRenderer&&a.i.liveStreamability.liveStreamabilityRenderer.broadcastId;p=f!==n&&(null!=f||a.player.N("web_player_heartbeat_undefined_killswitch"));if(!l.hlsvp&&!l.jb||p)return e={video_id:l.videoId},l.rH&&(e.is_live_destination="1"),a.player.N("web_player_heartbeat_request_watch_next")||(e.disable_watch_next=!0,e.raw_watch_next_response=l.watchNextResponse),
e.autonav_state=l.autonavState,e.oauth_token=l.oauthToken,e.force_gvi=l.Zg,e.Ci=l.Ci,8===a.player.getPresentingPlayerType()&&a.player.Jo(8),m=void 0,l.hlsvp||l.jb?p&&(m=new k6("broadcastIdChanged",n+","+f),a.Yz("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_BROADCAST_ID_CHANGED",b)):(f&&(m=new k6("formatsReceived",""+f)),a.Yz("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_LIVE_STREAM_WENT_ONLINE",b)),a.player.loadVideoByPlayerVars(e,void 0,void 0,
void 0,m),h;a.player.Pd("heartbeat",a.getPlayerType())}e&&e.displayEndscreen&&(a.offlineSlate?(a=a.offlineSlate,a.I=!0,a.yb&&a.api.Ht()):g.BJ(m)&&(l=(null===(d=a.player.ld())||void 0===d?void 0:d.Kb())||{},a.player.Ca("hbse",g.YC(l),!0),a.player.Ht(),a.player.Oa("onLiveMediaEnded",b)));return h},DUa=function(a){var b=0;
a&&a.pollDelayMs&&(a=Number(a.pollDelayMs))&&(b=a);return b},p6=function(a,b,c){if(!a.u.isActive()){a.u.stop();
a.S++;var d=a.getVideoData();if(d.tH||b&&!g.XF(a.getVideoData())&&!n6(a)&&d.isLivePlayback)var e=!1;else{var f;(null===(e=a.heartbeatParams)||void 0===e?0:e.jx)?f=a.heartbeatParams.jx:f=d.sH||5;e=a.S>=f}e?(b?(b="heartbeat.net",e={enforcedPolicyToHaltOnNetworkFailure:!0}):(b="heartbeat.servererror",e=CUa()),g.Wv("heartbeatActionPlayerHalted",e),(e=a.getVideoData())&&e.isLivePlayback?a.player.Jf(b,"\u5f71\u7247\u64ad\u653e\u4e2d\u65b7\u3002\u8acb\u518d\u8a66\u4e00\u6b21\u3002",c):a.player.Jf(b,"\u5f88\u62b1\u6b49\uff0c\u6388\u6b0a\u9019\u90e8\u5f71\u7247\u6642\u767c\u751f\u932f\u8aa4\u3002",
c)):(o6(a,a.I.getValue()),g.xi(a.I))}},CUa=function(a){var b={enforcedPolicyToHaltOnNetworkFailure:!1};
a&&(b.serializedServerContext=a.additionalLoggingData);return b},q6=function(a){a.S=0;
a.u.stop();a.D=!1;a.sequenceNumber=0},uUa=function(a){var b,c=a.getVideoData(),d=a.player.V();
if(c.isLivePlayback)if(g.LD(d.u)){a.C=!0;a.K=!0;if(!g.zE(d)||g.LE(d))a.offlineSlate=new i6(a.player),g.H(a,a.offlineSlate),g.sM(a.player,a.offlineSlate.element,4);(c=c.getPlayerResponse())&&c.playabilityStatus&&(a.i=c.playabilityStatus);if("UNPLAYABLE"!==(null===(b=a.i)||void 0===b?void 0:b.status)||a.player.N("stop_heartbeat_on_unplayable_live_videos_killswitch"))a.i?(c=DUa(a.i.liveStreamability&&a.i.liveStreamability.liveStreamabilityRenderer))?o6(a,c):o6(a,7500):o6(a,1E3)}else a.player.Jf("html5.unsupportedlive",
"HTML5_NO_AVAILABLE_FORMATS_FALLBACK","nolive.1");else!d.N("html5_release_post_live_heartbeat_killswitch")&&g.Wb(c.Ba,"heartbeat")&&a.player.Pd("heartbeat",a.getPlayerType())},BUa=function(a){return(a=a.player.getProgressState(a.getPlayerType()).ingestionTime)&&isFinite(a)?""+Math.floor(1E3*a):null},yUa=function(a){try{var b=JSON.parse(a);
return null!=b?b:void 0}catch(c){}},xUa=["ATTESTATION_ERROR_UNKNOWN",
"ATTESTATION_ERROR_VM_NOT_INITIALIZED","ATTESTATION_ERROR_VM_NO_RESPONSE","ATTESTATION_ERROR_VM_TIMEOUT","ATTESTATION_ERROR_VM_INTERNAL_ERROR"],r6={ERAS:["BC","AD"],ERANAMES:["Before Christ","Anno Domini"],NARROWMONTHS:"JFMAMJJASOND".split(""),STANDALONENARROWMONTHS:"JFMAMJJASOND".split(""),MONTHS:"January February March April May June July August September October November December".split(" "),STANDALONEMONTHS:"January February March April May June July August September October November December".split(" "),
SHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONESHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),WEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),STANDALONEWEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),STANDALONESHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),NARROWWEEKDAYS:"SMTWTFS".split(""),STANDALONENARROWWEEKDAYS:"SMTWTFS".split(""),
SHORTQUARTERS:["Q1","Q2","Q3","Q4"],QUARTERS:["1st quarter","2nd quarter","3rd quarter","4th quarter"],AMPMS:["AM","PM"],DATEFORMATS:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],TIMEFORMATS:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],DATETIMEFORMATS:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],FIRSTDAYOFWEEK:6,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:5};
r6={ERAS:["\u897f\u5143\u524d","\u897f\u5143"],ERANAMES:["\u897f\u5143\u524d","\u897f\u5143"],NARROWMONTHS:"1 2 3 4 5 6 7 8 9 10 11 12".split(" "),STANDALONENARROWMONTHS:"1 2 3 4 5 6 7 8 9 10 11 12".split(" "),MONTHS:"1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),STANDALONEMONTHS:"1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),SHORTMONTHS:"1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
STANDALONESHORTMONTHS:"1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),WEEKDAYS:"\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(" "),STANDALONEWEEKDAYS:"\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(" "),SHORTWEEKDAYS:"\u9031\u65e5 \u9031\u4e00 \u9031\u4e8c \u9031\u4e09 \u9031\u56db \u9031\u4e94 \u9031\u516d".split(" "),
STANDALONESHORTWEEKDAYS:"\u9031\u65e5 \u9031\u4e00 \u9031\u4e8c \u9031\u4e09 \u9031\u56db \u9031\u4e94 \u9031\u516d".split(" "),NARROWWEEKDAYS:"\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split(""),STANDALONENARROWWEEKDAYS:"\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split(""),SHORTQUARTERS:["\u7b2c1\u5b63","\u7b2c2\u5b63","\u7b2c3\u5b63","\u7b2c4\u5b63"],QUARTERS:["\u7b2c1\u5b63","\u7b2c2\u5b63","\u7b2c3\u5b63","\u7b2c4\u5b63"],AMPMS:["\u4e0a\u5348","\u4e0b\u5348"],DATEFORMATS:["y\u5e74M\u6708d\u65e5 EEEE",
"y\u5e74M\u6708d\u65e5","y\u5e74M\u6708d\u65e5","y/M/d"],TIMEFORMATS:["Bh:mm:ss [zzzz]","Bh:mm:ss [z]","Bh:mm:ss","Bh:mm"],DATETIMEFORMATS:["{1} {0}","{1} {0}","{1} {0}","{1} {0}"],FIRSTDAYOFWEEK:6,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:5};g.k=d6.prototype;g.k.nK=r6.FIRSTDAYOFWEEK;g.k.oK=r6.FIRSTWEEKCUTOFFDAY;g.k.clone=function(){var a=new d6(this.date);a.nK=this.nK;a.oK=this.oK;return a};
g.k.getFullYear=function(){return this.date.getFullYear()};
g.k.getMonth=function(){return this.date.getMonth()};
g.k.getDate=function(){return this.date.getDate()};
g.k.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
g.k.add=function(a){if(a.u||a.i){var b=this.getMonth()+a.i+12*a.u,c=this.getFullYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.date.setDate(1);this.date.setFullYear(c);this.date.setMonth(b);this.date.setDate(d)}a.days&&(c=this.getFullYear(),b=0<=c&&99>=c?-1900:0,a=new Date((new Date(c,this.getMonth(),this.getDate(),12)).getTime()+864E5*a.days),this.date.setDate(1),
this.date.setFullYear(a.getFullYear()+b),this.date.setMonth(a.getMonth()),this.date.setDate(a.getDate()),c6(this,a.getDate()))};
g.k.equals=function(a){return!(!a||this.getFullYear()!=a.getFullYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
g.k.toString=function(){var a=this.getFullYear(),b=0>a?"-":1E4<=a?"+":"";return[b+b6(Math.abs(a),b?6:4),b6(this.getMonth()+1,2),b6(this.getDate(),2)].join("")+""};
g.k.valueOf=function(){return this.date.valueOf()};g.w(e6,g.oN);e6.prototype.hide=function(){this.i&&this.i.removeAttribute("aria-haspopup");g.oN.prototype.hide.call(this)};
e6.prototype.show=function(){this.i&&this.i.setAttribute("aria-haspopup","true");g.oN.prototype.show.call(this)};
e6.prototype.ya=function(){(0,g.se)(this.B);g.oN.prototype.ya.call(this)};g.w(f6,g.W);
f6.prototype.I=function(){if(this.toggleButtonRenderer){var a=this.toggleButtonRenderer;a.isToggled?this.B(a.toggledServiceEndpoint):this.B(a.defaultServiceEndpoint);a.isToggled=!a.isToggled;g6(this)}else if(this.upcomingEventReminderButtonRenderer)if(this.i&&this.i.yb)this.i.Eb();else{var b=nUa(this);b&&this.B(b.serviceEndpoint||b.command);b=g.q(b&&b.command&&b.command.commandExecutorCommand&&b.command.commandExecutorCommand.commands||[]);for(var c=b.next();!c.done;c=b.next())if((c=c.value)&&c.openPopupAction&&
c.openPopupAction.popup&&c.openPopupAction.popup.menuPopupRenderer){a=c.openPopupAction.popup.menuPopupRenderer;break}this.i||(this.i=new e6(this.J,this.D),this.i.Ea(this.element),g.H(this,this.i),this.i.subscribe("reminderMenuItemClicked",this.B,this));b=this.i;b.menuPopupRenderer=a;lUa(b)}};
f6.prototype.B=function(a){if(a&&(a.addUpcomingEventReminderEndpoint||a.removeUpcomingEventReminderEndpoint)){if(a.addUpcomingEventReminderEndpoint){var b=a.addUpcomingEventReminderEndpoint;var c="notification/add_upcoming_event_reminder"}else a.removeUpcomingEventReminderEndpoint&&(b=a.removeUpcomingEventReminderEndpoint,c="notification/remove_upcoming_event_reminder");if(c&&b&&b.params)for(pUa(this,c,b.params),a=g.q(b.commands||[]),b=a.next();!b.done;b=a.next())if((b=b.value)&&b.updateUpcomingEventReminderButtonStateCommand){this.u=
b.updateUpcomingEventReminderButtonStateCommand.state;g6(this);break}}};g.w(i6,g.W);g.k=i6.prototype;g.k.getPlayerType=function(){if(8===this.api.getPresentingPlayerType())return 1};
g.k.getVideoData=function(){return this.api.getVideoData(this.getPlayerType())};
g.k.Qa=function(a){var b,c,d=null===(c=null===(b=null===a||void 0===a?void 0:a.liveStreamability)||void 0===b?void 0:b.liveStreamabilityRenderer)||void 0===c?void 0:c.offlineSlate;if(d){this.u=a;d=d.liveStreamOfflineSlateRenderer;d.canShowCountdown?this.GO():j6(this,d);var e,f,h,l,m=null===(l=null===(h=null===(f=null===(e=null===a||void 0===a?void 0:a.liveStreamability)||void 0===e?void 0:e.liveStreamabilityRenderer)||void 0===f?void 0:f.offlineSlate)||void 0===h?void 0:h.liveStreamOfflineSlateRenderer)||
void 0===l?void 0:l.thumbnail;if(m){e=0;f=null;m=m.thumbnails;for(h=0;h<m.length;h++)m[h].width>e&&(e=m[h].width||0,f=m[h].url);f&&(this.background.style.backgroundImage="url("+f+")")}else this.background.style.backgroundImage="";d.actionButtons||d.reminderButton?(this.i||(this.i=new f6(this.api),this.i.Ea(this.Fa("ytp-offline-slate-buttons")),g.H(this,this.i)),mUa(this.i,d.actionButtons&&d.actionButtons[0],d.reminderButton)):this.i&&mUa(this.i,null,null);this.u=a}else this.u=null;this.JO()};
g.k.JO=function(a){if(8===this.api.getPresentingPlayerType())var b=!0;else{var c=this.api.zb(),d=this.getVideoData();b=d.isLivePlayback&&(g.BJ(c)||g.T(c,2)||g.T(c,64));var e=2===d.autonavState&&g.T(c,2);c=c.Ec()&&!g.bG(d)&&!this.api.isAtLiveHead(void 0,!0);b=b&&!c&&!e}b&&this.u?this.yb?(null===a||void 0===a?0:g.lH(a,2))&&!this.getVideoData().ej&&(g.Nr(this.element,"ytp-offline-slate-collapsed"),this.C.stop(),g.Nr(this.B,"ytp-offline-slate-bar-fade"),this.D.start()):(this.show(),this.C.start(),this.api.ea("offlineslatestatechange"),
this.I&&this.api.Ht()):this.yb&&(this.hide(),this.api.ea("offlineslatestatechange"))};
g.k.GO=function(){var a,b,c,d,e=null===(d=null===(c=null===(b=null===(a=this.u)||void 0===a?void 0:a.liveStreamability)||void 0===b?void 0:b.liveStreamabilityRenderer)||void 0===c?void 0:c.offlineSlate)||void 0===d?void 0:d.liveStreamOfflineSlateRenderer;if(e){var f=Math.floor(g.Ta()/1E3),h=e.canShowCountdown&&Number(e.scheduledStartTime);!h||h<=f?(j6(this,e),this.countdownTimer.stop()):(f=g.mL(h-f),j6(this,e,f),g.Fr(this.countdownTimer))}};
g.k.ya=function(){this.countdownTimer.dispose();this.countdownTimer=null;g.W.prototype.ya.call(this)};k6.prototype.u=function(a){return this.trigger&&a.trigger?this.trigger===a.trigger&&this.i===a.i:!1};
k6.prototype.isExpired=function(){return 6E4<(0,g.P)()-this.B};
k6.prototype.toString=function(){return"heartbeat:"+this.trigger+":"+this.i};g.w(m6,g.FM);g.k=m6.prototype;g.k.ya=function(){q6(this);this.player.Ye("heartbeat");g.FM.prototype.ya.call(this)};
g.k.onCueRangeEnter=function(){this.K=!0;o6(this,2E3)};
g.k.Kw=function(a){this.heartbeatParams=a;o6(this,2E3)};
g.k.CQ=function(a){var b;8===this.player.getPresentingPlayerType()||"UNPLAYABLE"===(null===(b=this.i)||void 0===b?void 0:b.status)&&!this.player.N("stop_heartbeat_on_unplayable_live_videos_killswitch")||(g.T(a.state,2)||g.T(a.state,64)?(q6(this),this.C&&(this.K=!0,o6(this,1E3))):(g.T(a.state,1)||g.T(a.state,8))&&o6(this,2E3))};
g.k.DQ=function(){3!==this.player.getPresentingPlayerType()&&o6(this,2E3)};
g.k.getPlayerType=function(){if(8===this.player.getPresentingPlayerType())return 1};
g.k.getVideoData=function(){return this.player.getVideoData(this.getPlayerType())};
g.k.Si=function(a){switch(a){case 4:case 3:return!1}return!0};
g.k.Yz=function(a,b,c){a={trigger:a,reason:b};c&&(a.serializedServerContext=c.additionalLoggingData);g.Wv("heartbeatActionPlayerTransitioned",a)};
g.k.oe=function(a){var b="LICENSE",c=yUa(a);if(c)return c.reason||g.iN[b]||"";(a=a.match(zUa))&&(a=Number(a[1]))&&(b=g.Ota(a));return g.iN[b]||""};
g.k.jw=function(){return!!this.offlineSlate&&this.offlineSlate.yb};
var zUa=/^GLS\/1.0 (\d+) (\w+).*?\r\n\r\n([\S\s]*)$/;g.EM("heartbeat",m6);})(_yt_player);