$wnd.jsme.runAsyncCallback2('var C4="Any",D4="Aromatic",E4="Nonring",F4="Reset",G4="Ring";function H4(a,b){if(0>b||b>=a.lb.options.length)throw new LD;}function I4(a,b){H4(a,b);return a.lb.options[b].value}function J4(){this.lb=$doc.createElement("select");this.lb[gi]="gwt-ListBox"}x(404,381,Lm,J4);function K4(){K4=y}\nfunction L4(a,b){if(null==b)throw new wA("Missing message: awt.103");var c=-1,d,e,f;f=a.rd.a.lb;e=$doc.createElement(ok);e.text=b;e.removeAttribute("bidiwrapped");e.value=b;d=f.options.length;(0>c||c>d)&&(c=d);c==d?f.add(e,null):(c=f.options[c],f.add(e,c))}function M4(){K4();KG.call(this);new Pp;this.rd=new N4((LG(),this))}x(470,457,{57:1,59:1,66:1,83:1,93:1},M4);_.kf=function(){return QG(this.rd,this)};\n_.zf=function(){return(null==this.od&&(this.od=tG(this)),this.od)+Zb+this.zd+Zb+this.Ad+Zb+this.wd+Wl+this.ld+(this.vd?n:",hidden")+",current="+I4(this.rd.a,this.rd.a.lb.selectedIndex)};function O4(){x0.call(this,7)}x(484,1,gn,O4);function P4(a){a.rd.eg(a.k);!vG(a)&&W_(a);Q_(a)}\nfunction Q4(a,b,c){K0.call(this);this.rd&&this.rd.fg(!1);p0(this,!1);ZG(this,new x0(0));a=new A0(a,1);S_(this,a,null);a=new dH;S_(a,this.j,null);S_(this,a,null);b&&(this.k=zG(b),o0(this),J0(this.k,~~(nx(b.bd.lb,kk)/2)-~~(this.wd/2),~~(nx(b.bd.lb,ik)/2)-~~(this.ld/2)));c&&O_(this,c)}x(666,667,gY,Q4);_.Hi=function(){return qY};x(701,593,on);_.Zd=function(){P4(new Q4(this.b,this.a,this.a.H))};x(703,593,on);_.Zd=function(){this.a.yc?this.a.yc.rd.vf()?this.a.yc.rd.hg():P4(this.a.yc):this.a.yc=new R4(this.a)};\nfunction S4(a,b){L_(b)==a.a?O_(b,(zH(),KH)):O_(b,a.a)}\nfunction T4(a){var b,c,d,e;e=n;d=!1;L_(U4)!=a.a?(e=Vb,d=!0):L_(V4)!=a.a?(e="!#6",d=!0):L_(W4)!=a.a?(O_(X4,(zH(),KH)),O_(Y4,KH),O_(Z4,KH),O_($4,KH),e="F,Cl,Br,I"):(b=L_(a5)!=a.a,c=L_(b5)!=a.a,L_(c5)!=a.a&&(b?e+="c,":c?e+="C,":e+="#6,"),L_(d5)!=a.a&&(b?e+="n,":c?e+="N,":e+="#7,"),L_(e5)!=a.a&&(b?e+="o,":c?e+="O,":e+="#8,"),L_(f5)!=a.a&&(b?e+="s,":c?e+="S,":e+="#16,"),L_(g5)!=a.a&&(b?e+="p,":c?e+="P,":e+="#15,"),L_(X4)!=a.a&&(e+="F,"),L_(Y4)!=a.a&&(e+="Cl,"),L_(Z4)!=a.a&&(e+="Br,"),L_($4)!=a.a&&(e+=\n"I,"),Zr(e,Zb)&&(e=$r(e,0,e.length-1)),1>e.length&&!a.b&&(b?e=uh:c?e=be:(O_(U4,(zH(),KH)),e=Vb)));b=n;d&&L_(a5)!=a.a&&(b+=";a");d&&L_(b5)!=a.a&&(b+=";A");L_(h5)!=a.a&&(b+=";R");L_(i5)!=a.a&&(b+=";!R");L_(U4)!=a.a&&0<b.length?e=$r(b,1,b.length):e+=b;d=j5.rd.a.lb.selectedIndex;0<d&&(--d,e+=";H"+d);d=k5.rd.a.lb.selectedIndex;0<d&&(--d,e+=";D"+d);L_(l5)!=a.a&&(e=am);L_(m5)!=a.a&&(e=Hd);L_(n5)!=a.a&&(e=Yd);L_(o5)!=a.a&&(e="!@");RI(a.e,e)}\nfunction p5(a){q5(a);r5(a);var b=j5.rd.a;H4(b,0);b.lb.options[0].selected=!0;b=k5.rd.a;H4(b,0);b.lb.options[0].selected=!0;O_(a5,a.a);O_(b5,a.a);O_(h5,a.a);O_(i5,a.a);O_(j5,a.a);O_(k5,a.a);s5(a)}function q5(a){O_(c5,a.a);O_(d5,a.a);O_(e5,a.a);O_(f5,a.a);O_(g5,a.a);O_(X4,a.a);O_(Y4,a.a);O_(Z4,a.a);O_($4,a.a)}function r5(a){O_(U4,a.a);O_(V4,a.a);O_(W4,a.a)}function s5(a){O_(l5,a.a);O_(m5,a.a);O_(n5,a.a);O_(o5,a.a);a.b=!1}\nfunction R4(a){s0.call(this,"Atom/Bond Query");this.j=new j0(this.Hi());sH(this.s,new L0(this));this.c=a;this.a=a.H;this.d||(a=zG(a),this.d=new C0(a),J0(this.d,-150,10));this.k=this.d;ZG(this,new O4);O_(this,this.a);a=new dH;ZG(a,new fI(0,3,1));S_(a,new z0("Atom type :"),null);U4=new j0(C4);V4=new j0("Any except C");W4=new j0("Halogen");S_(a,U4,null);S_(a,V4,null);S_(a,W4,null);S_(this,a,null);a=new dH;ZG(a,new fI(0,3,1));S_(a,new A0("Or select one or more from the list :",0),null);S_(this,a,null);\na=new dH;ZG(a,new fI(0,3,1));c5=new j0(Be);d5=new j0($f);e5=new j0(gg);f5=new j0(Dg);g5=new j0(ig);X4=new j0(gf);Y4=new j0(Me);Z4=new j0(Ae);$4=new j0(zf);S_(a,c5,null);S_(a,d5,null);S_(a,e5,null);S_(a,f5,null);S_(a,g5,null);S_(a,X4,null);S_(a,Y4,null);S_(a,Z4,null);S_(a,$4,null);S_(this,a,null);a=new dH;ZG(a,new fI(0,3,1));j5=new M4;L4(j5,C4);L4(j5,pd);L4(j5,rd);L4(j5,vd);L4(j5,xd);S_(a,new z0("Number of hydrogens :  "),null);S_(a,j5,null);S_(this,a,null);a=new dH;ZG(a,new fI(0,3,1));k5=new M4;L4(k5,\nC4);L4(k5,pd);L4(k5,rd);L4(k5,vd);L4(k5,xd);L4(k5,Ad);L4(k5,Bd);L4(k5,Gd);S_(a,new A0("Number of connections :",0),null);S_(a,k5,null);S_(a,new A0(" (H\'s don\'t count.)",0),null);S_(this,a,null);a=new dH;ZG(a,new fI(0,3,1));S_(a,new z0("Atom is :"),null);a5=new j0(D4);S_(a,a5,null);b5=new j0("Nonaromatic");S_(a,b5,null);h5=new j0(G4);S_(a,h5,null);i5=new j0(E4);S_(a,i5,null);S_(this,a,null);a=new dH;O_(a,RH(L_(this)));ZG(a,new fI(0,3,1));S_(a,new z0("Bond is :"),null);l5=new j0(C4);S_(a,l5,null);m5=\nnew j0(D4);S_(a,m5,null);n5=new j0(G4);S_(a,n5,null);o5=new j0(E4);S_(a,o5,null);S_(this,a,null);a=new dH;ZG(a,new fI(1,3,1));this.e=new TI(Vb,20);S_(a,this.e,null);S_(a,new j0(F4),null);S_(a,this.j,null);S_(this,a,null);this.rd&&this.rd.fg(!1);p0(this,!1);q5(this);r5(this);s5(this);O_(a5,this.a);O_(b5,this.a);O_(h5,this.a);O_(i5,this.a);O_(j5,this.a);O_(k5,this.a);S4(this,U4);o0(this);this.rd.eg(this.k);!vG(this)&&W_(this);Q_(this)}x(720,667,gY,R4);\n_.Ii=function(a,b){var c;Q(b,F4)?(p5(this),S4(this,U4),T4(this)):E(a.f,56)?(s5(this),kB(a.f)===kB(U4)?(q5(this),r5(this)):kB(a.f)===kB(V4)?(q5(this),r5(this)):kB(a.f)===kB(W4)?(q5(this),r5(this)):kB(a.f)===kB(h5)?O_(i5,this.a):kB(a.f)===kB(i5)?(O_(h5,this.a),O_(a5,this.a)):kB(a.f)===kB(a5)?(O_(b5,this.a),O_(i5,this.a)):kB(a.f)===kB(b5)?O_(a5,this.a):kB(a.f)===kB(l5)||kB(a.f)===kB(m5)||kB(a.f)===kB(n5)||kB(a.f)===kB(o5)?(p5(this),this.b=!0):r5(this),S4(this,a.f),T4(this)):E(a.f,57)&&(s5(this),c=a.f,\n0==c.rd.a.lb.selectedIndex?O_(c,this.a):O_(c,(zH(),KH)),T4(this));107!=this.c.o&&(this.c.o=107,iH(this.c));return!0};_.a=null;_.b=!1;_.c=null;_.d=null;var U4=_.e=null,l5=null,V4=null,a5=null,m5=null,Z4=null,c5=null,k5=null,j5=null,Y4=null,X4=null,W4=null,$4=null,d5=null,b5=null,i5=null,o5=null,e5=null,g5=null,h5=null,n5=null,f5=null;function N4(a){DW();FW.call(this);this.a=new J4;sD(this.a,new t5(this,a),(jZ(),jZ(),kZ))}x(774,772,{},N4);_.dg=function(){return this.a};_.a=null;\nfunction t5(a,b){this.a=a;this.b=b}x(775,1,{},t5);_.fe=function(a){LG();N0(a,this.b,I4(this.a.a,this.a.a.lb.selectedIndex))};_.a=null;_.b=null;x(814,781,{});_.hg=function(){C1(this.c)};Z(666);Z(720);Z(470);Z(774);Z(775);Z(404);U(dY)(2);\n//@ sourceURL=2.js\n')
