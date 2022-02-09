(function(g){var window=this;'use strict';var C6=function(a){g.W.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.pe=!1;this.player=a;this.T(a,"minimized",this.yg);this.T(a,"onStateChange",this.HG)},D6=function(a){g.FM.call(this,a);
this.i=new C6(this.player);this.i.hide();g.sM(this.player,this.i.element,4);a.Le()&&(this.load(),g.M(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(C6,g.W);g.k=C6.prototype;
g.k.BE=function(){this.tooltip=new g.gQ(this.player,this);g.H(this,this.tooltip);g.sM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.wc=new g.yN(this.player);g.H(this,this.wc);this.Dg=new g.W({G:"div",L:"ytp-miniplayer-scrim"});g.H(this,this.Dg);this.Dg.Ea(this.element);this.T(this.Dg.element,"click",this.sA);var a=new g.W({G:"button",Ha:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"\u95dc\u9589"},U:[g.wK()]});g.H(this,a);a.Ea(this.Dg.element);this.T(a.element,"click",
this.Ii);a=new g.Q1(this.player,this);g.H(this,a);a.Ea(this.Dg.element);this.Bp=new g.W({G:"div",L:"ytp-miniplayer-controls"});g.H(this,this.Bp);this.Bp.Ea(this.Dg.element);this.T(this.Bp.element,"click",this.sA);var b=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.H(this,b);b.Ea(this.Bp.element);a=new g.W({G:"div",L:"ytp-miniplayer-play-button-container"});g.H(this,a);a.Ea(this.Bp.element);var c=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.H(this,c);c.Ea(this.Bp.element);this.pN=
new g.YO(this.player,this,!1);g.H(this,this.pN);this.pN.Ea(b.element);b=new g.WO(this.player,this);g.H(this,b);b.Ea(a.element);this.nextButton=new g.YO(this.player,this,!0);g.H(this,this.nextButton);this.nextButton.Ea(c.element);this.Gg=new g.SP(this.player,this);g.H(this,this.Gg);this.Gg.Ea(this.Dg.element);this.Hc=new g.eP(this.player,this);g.H(this,this.Hc);g.sM(this.player,this.Hc.element,4);this.hA=new g.W({G:"div",L:"ytp-miniplayer-buttons"});g.H(this,this.hA);g.sM(this.player,this.hA.element,
4);a=new g.W({G:"button",Ha:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"\u95dc\u9589"},U:[g.wK()]});g.H(this,a);a.Ea(this.hA.element);this.T(a.element,"click",this.Ii);a=new g.W({G:"button",Ha:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"\u95dc\u9589"},U:[g.BK()]});g.H(this,a);a.Ea(this.hA.element);this.T(a.element,"click",this.KV);this.T(this.player,"presentingplayerstatechange",this.Nc);this.T(this.player,"appresize",this.xb);this.T(this.player,"fullscreentoggled",
this.xb);this.xb()};
g.k.show=function(){this.Md=new g.Dr(this.qq,null,this);this.Md.start();this.pe||(this.BE(),this.pe=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Hc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Md&&(this.Md.dispose(),this.Md=void 0);g.W.prototype.hide.call(this);this.player.Le()||(this.pe&&this.Hc.hide(),this.player.loadModule("annotations_module"))};
g.k.ya=function(){this.Md&&(this.Md.dispose(),this.Md=void 0);g.W.prototype.ya.call(this)};
g.k.Ii=function(){this.player.stopVideo();this.player.Oa("onCloseMiniplayer")};
g.k.KV=function(){this.player.playVideo()};
g.k.sA=function(a){if(a.target===this.Dg.element||a.target===this.Bp.element)this.player.V().N("kevlar_miniplayer_play_pause_on_scrim")?g.zJ(this.player.zb())?this.player.pauseVideo():this.player.playVideo():this.player.Oa("onExpandMiniplayer")};
g.k.yg=function(){g.M(this.player.getRootNode(),"ytp-player-minimized",this.player.Le())};
g.k.td=function(){this.Hc.Xb();this.Gg.Xb()};
g.k.qq=function(){this.td();this.Md&&this.Md.start()};
g.k.Nc=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.xb=function(){g.rP(this.Hc,0,this.player.eb().getPlayerSize().width,!1);g.fP(this.Hc)};
g.k.HG=function(a){this.player.Le()&&(0===a?this.hide():this.show())};
g.k.jc=function(){return this.tooltip};
g.k.Te=function(){return!1};
g.k.vf=function(){return!1};
g.k.Bi=function(){return!1};
g.k.fB=function(){};
g.k.xn=function(){};
g.k.rs=function(){};
g.k.Ln=function(){return null};
g.k.tj=function(){return new g.Dm(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.zq=function(a,b,c,d,e){var f=0,h=d=0,l=g.an(a);if(b){c=g.Lr(b,"ytp-prev-button")||g.Lr(b,"ytp-next-button");var m=g.Lr(b,"ytp-play-button"),n=g.Lr(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Zm(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Lr(b,"ytp-miniplayer-button-top-left"),f=g.Zm(b,this.element),b=g.an(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.eb().getPlayerSize().width;e=f+(e||0);l=g.sg(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.jl=function(){};
g.k.Dk=function(){return!1};g.w(D6,g.FM);D6.prototype.create=function(){};
D6.prototype.Si=function(){return!1};
D6.prototype.load=function(){this.player.hideControls();this.i.show()};
D6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.EM("miniplayer",D6);})(_yt_player);
