smalltalk.addPackage('MooseOnWeb', {});
smalltalk.addClass('MWActionList', smalltalk.Widget, ['actions', 'mooseEntity', 'isFetched', 'ul'], 'MooseOnWeb');
smalltalk.addMethod(
"_actionClick_",
smalltalk.method({
selector: "actionClick:",
fn: function (anAction){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$2;
$1=_st((smalltalk.MWAddColumn || MWAddColumn))._new();
_st($1)._colId_(_st(_st(_st(self["@ul"])._asJQuery())._parent_("div"))._attr_("row"));
$3=_st((smalltalk.MWResultWidget || MWResultWidget))._new();
_st($3)._action_(anAction);
_st($3)._sourceEntity_(_st(self)._mooseEntity());
$4=_st($3)._getResult();
$2=_st($1)._content_($4);
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"actionClick:",{anAction:anAction}, smalltalk.MWActionList)})},
messageSends: ["announce:", "colId:", "attr:", "parent:", "asJQuery", "new", "content:", "action:", "sourceEntity:", "mooseEntity", "getResult", "current"]}),
smalltalk.MWActionList);

smalltalk.addMethod(
"_getActions",
smalltalk.method({
selector: "getActions",
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { result=_st(jQuery)._ajax_options_(_st(_st(_st(_st(_st((smalltalk.MWEntryPoint || MWEntryPoint))._restApiLocation()).__comma(_st((smalltalk.MWEntryPoint || MWEntryPoint))._urlEntities())).__comma("/")).__comma(_st(_st(self)._mooseEntity())._id())).__comma("?q=actions"),smalltalk.HashedCollection._fromPairs_([_st("type").__minus_gt("GET"),_st("success").__minus_gt((function(tmp){
return smalltalk.withContext(function($ctx2) {return _st(self)._success_(tmp);
}, function($ctx2) {$ctx2.fillBlock({tmp:tmp},$ctx1)})})),_st("error").__minus_gt((function(a,b,c){
return smalltalk.withContext(function($ctx2) {_st(window)._alert_("error in getting actions list");
return _st((smalltalk.Transcript || Transcript))._show_(_st(_st(_st(_st(_st("error1").__comma(a)).__comma("2")).__comma(b)).__comma("3")).__comma(c));
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b,c:c},$ctx1)})})),_st("dataType").__minus_gt("json")]));
return self}, function($ctx1) {$ctx1.fill(self,"getActions",{result:result}, smalltalk.MWActionList)})},
messageSends: ["ajax:options:", ",", "id", "mooseEntity", "urlEntities", "restApiLocation", "->", "success:", "alert:", "show:"]}),
smalltalk.MWActionList);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
self["@isFetched"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.MWActionList)})},
messageSends: ["initialize"]}),
smalltalk.MWActionList);

smalltalk.addMethod(
"_mooseEntity",
smalltalk.method({
selector: "mooseEntity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@mooseEntity"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"mooseEntity",{}, smalltalk.MWActionList)})},
messageSends: []}),
smalltalk.MWActionList);

smalltalk.addMethod(
"_mooseEntity_",
smalltalk.method({
selector: "mooseEntity:",
fn: function (aMooseEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@mooseEntity"]=aMooseEntity;
return self}, function($ctx1) {$ctx1.fill(self,"mooseEntity:",{aMooseEntity:aMooseEntity}, smalltalk.MWActionList)})},
messageSends: []}),
smalltalk.MWActionList);

smalltalk.addMethod(
"_renderContents_",
smalltalk.method({
selector: "renderContents:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
$1=self["@isFetched"];
if(smalltalk.assert($1)){
_st(self["@actions"])._do_((function(action){
return smalltalk.withContext(function($ctx2) {return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx3) {$4=_st(html)._a();
_st($4)._href_("#");
_st($4)._with_(action);
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st(self)._actionClick_(action);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return $5;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({action:action},$ctx1)})}));
} else {
$2=_st(html)._span();
_st($2)._class_("label label-info");
$3=_st($2)._with_("Loading");
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"renderContents:",{html:html}, smalltalk.MWActionList)})},
messageSends: ["ifFalse:ifTrue:", "class:", "span", "with:", "do:", "href:", "a", "onClick:", "actionClick:", "li"]}),
smalltalk.MWActionList);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._ul();
_st($1)._class_("unstyled");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._renderContents_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@ul"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.MWActionList)})},
messageSends: ["class:", "ul", "with:", "renderContents:"]}),
smalltalk.MWActionList);

smalltalk.addMethod(
"_success_",
smalltalk.method({
selector: "success:",
fn: function (data){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@actions"]=_st(data)._asArray();
self["@isFetched"]=true;
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._announce_(_st((smalltalk.MWSuccess || MWSuccess))._new());
return self}, function($ctx1) {$ctx1.fill(self,"success:",{data:data}, smalltalk.MWActionList)})},
messageSends: ["asArray", "announce:", "new", "current"]}),
smalltalk.MWActionList);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@mooseEntity"])._title();
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{}, smalltalk.MWActionList)})},
messageSends: ["title"]}),
smalltalk.MWActionList);



smalltalk.addClass('MWAnnouncement', smalltalk.Object, ['content'], 'MooseOnWeb');
smalltalk.addMethod(
"_content",
smalltalk.method({
selector: "content",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@content"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"content",{}, smalltalk.MWAnnouncement)})},
messageSends: []}),
smalltalk.MWAnnouncement);

smalltalk.addMethod(
"_content_",
smalltalk.method({
selector: "content:",
fn: function (anContent){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@content"]=anContent;
return self}, function($ctx1) {$ctx1.fill(self,"content:",{anContent:anContent}, smalltalk.MWAnnouncement)})},
messageSends: []}),
smalltalk.MWAnnouncement);



smalltalk.addClass('MWAddColumn', smalltalk.MWAnnouncement, ['colId'], 'MooseOnWeb');
smalltalk.addMethod(
"_colId",
smalltalk.method({
selector: "colId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@colId"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colId",{}, smalltalk.MWAddCol)})},
messageSends: []}),
smalltalk.MWAddColumn);

smalltalk.addMethod(
"_colId_",
smalltalk.method({
selector: "colId:",
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@colId"]=id;
return self}, function($ctx1) {$ctx1.fill(self,"colId:",{id:id}, smalltalk.MWAddCol)})},
messageSends: []}),
smalltalk.MWAddColumn);



smalltalk.addClass('MWDelColumn', smalltalk.MWAnnouncement, ['colId'], 'MooseOnWeb');
smalltalk.addMethod(
"_colId",
smalltalk.method({
selector: "colId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@colId"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colId",{}, smalltalk.MWDelCol)})},
messageSends: []}),
smalltalk.MWDelColumn);

smalltalk.addMethod(
"_colId_",
smalltalk.method({
selector: "colId:",
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@colId"]=id;
return self}, function($ctx1) {$ctx1.fill(self,"colId:",{id:id}, smalltalk.MWDelCol)})},
messageSends: []}),
smalltalk.MWDelColumn);



smalltalk.addClass('MWResetColumn', smalltalk.MWAnnouncement, [], 'MooseOnWeb');


smalltalk.addClass('MWSuccess', smalltalk.MWAnnouncement, [], 'MooseOnWeb');


smalltalk.addClass('MWAnnouncer', smalltalk.Announcer, [], 'MooseOnWeb');

smalltalk.MWAnnouncer.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=smalltalk.Announcer.klass.fn.prototype._new.apply(_st(self), []);
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{}, smalltalk.MWAnnouncer.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.MWAnnouncer.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{}, smalltalk.MWAnnouncer.klass)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.MWAnnouncer.klass);


smalltalk.addClass('MWColumnWidget', smalltalk.Widget, ['content', 'number'], 'MooseOnWeb');
smalltalk.addMethod(
"_close",
smalltalk.method({
selector: "close",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._announce_(_st(_st((smalltalk.MWDelColumn || MWDelColumn))._new())._colId_(_st(self)._number()));
return self}, function($ctx1) {$ctx1.fill(self,"close",{}, smalltalk.MWColumnWidget)})},
messageSends: ["announce:", "colId:", "number", "new", "current"]}),
smalltalk.MWColumnWidget);

smalltalk.addMethod(
"_content",
smalltalk.method({
selector: "content",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@content"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"content",{}, smalltalk.MWRowWidget)})},
messageSends: []}),
smalltalk.MWColumnWidget);

smalltalk.addMethod(
"_content_",
smalltalk.method({
selector: "content:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@content"]=aWidget;
return self}, function($ctx1) {$ctx1.fill(self,"content:",{aWidget:aWidget}, smalltalk.MWRowWidget)})},
messageSends: []}),
smalltalk.MWColumnWidget);

smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "span4";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{}, smalltalk.MWRowWidget)})},
messageSends: []}),
smalltalk.MWColumnWidget);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
self["@content"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.MWColumnWidget)})},
messageSends: ["initialize"]}),
smalltalk.MWColumnWidget);

smalltalk.addMethod(
"_number",
smalltalk.method({
selector: "number",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@number"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@number"]=(1);
$1=self["@number"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"number",{}, smalltalk.MWColWidget)})},
messageSends: ["ifNil:"]}),
smalltalk.MWColumnWidget);

smalltalk.addMethod(
"_number_",
smalltalk.method({
selector: "number:",
fn: function (anInt){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@number"]=anInt;
return self}, function($ctx1) {$ctx1.fill(self,"number:",{anInt:anInt}, smalltalk.MWColWidget)})},
messageSends: []}),
smalltalk.MWColumnWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$6,$2;
$1=_st(html)._div();
_st($1)._class_(_st(self)._cssClass());
_st($1)._at_put_("row",_st(self)._number());
$2=_st($1)._with_((function(element){
return smalltalk.withContext(function($ctx2) {_st(_st(element)._div())._with_((function(cont){
return smalltalk.withContext(function($ctx3) {$3=_st(cont)._span();
_st($3)._class_(" label label-info");
$4=_st($3)._with_(_st(_st(self)._content())._title());
$4;
$5=_st(cont)._button();
_st($5)._class_("pull-right btn btn-mini btn-danger");
_st($5)._type_("button");
_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st(self)._close();
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
$6=_st($5)._with_("X");
return $6;
}, function($ctx3) {$ctx3.fillBlock({cont:cont},$ctx1)})}));
return _st(element)._with_(_st(self)._content());
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.MWColumnWidget)})},
messageSends: ["class:", "cssClass", "div", "at:put:", "number", "with:", "span", "title", "content", "button", "type:", "onClick:", "close"]}),
smalltalk.MWColumnWidget);



smalltalk.addClass('MWEntryPoint', smalltalk.Object, [], 'MooseOnWeb');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((smalltalk.MWMenuWidget || MWMenuWidget))._new();
_st((smalltalk.MWMainWidget || MWMainWidget))._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.MWEntryPoint)})},
messageSends: ["new"]}),
smalltalk.MWEntryPoint);


smalltalk.addMethod(
"_colorGroup",
smalltalk.method({
selector: "colorGroup",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "rgb(255,140,0)";
}, function($ctx1) {$ctx1.fill(self,"colorGroup",{}, smalltalk.MWEntryPoint.klass)})},
messageSends: []}),
smalltalk.MWEntryPoint.klass);

smalltalk.addMethod(
"_colorItems",
smalltalk.method({
selector: "colorItems",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "rgb(218, 79, 73)";
}, function($ctx1) {$ctx1.fill(self,"colorItems",{}, smalltalk.MWEntryPoint.klass)})},
messageSends: []}),
smalltalk.MWEntryPoint.klass);

smalltalk.addMethod(
"_colorcolorGroup",
smalltalk.method({
selector: "colorcolorGroup",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "rgb(255,140,0)";
}, function($ctx1) {$ctx1.fill(self,"colorcolorGroup",{}, smalltalk.MWEntryPoint.klass)})},
messageSends: []}),
smalltalk.MWEntryPoint.klass);

smalltalk.addMethod(
"_restApiLocation",
smalltalk.method({
selector: "restApiLocation",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "http://37.139.2.203:8080/mooseOnWeb";
}, function($ctx1) {$ctx1.fill(self,"restApiLocation",{}, smalltalk.MWEntryPoint.klass)})},
messageSends: []}),
smalltalk.MWEntryPoint.klass);

smalltalk.addMethod(
"_urlEntities",
smalltalk.method({
selector: "urlEntities",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "/entities";
}, function($ctx1) {$ctx1.fill(self,"urlEntities",{}, smalltalk.EntryPoint.klass)})},
messageSends: []}),
smalltalk.MWEntryPoint.klass);

smalltalk.addMethod(
"_urlModels",
smalltalk.method({
selector: "urlModels",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "/models";
}, function($ctx1) {$ctx1.fill(self,"urlModels",{}, smalltalk.EntryPoint.klass)})},
messageSends: []}),
smalltalk.MWEntryPoint.klass);


smalltalk.addClass('MWMainWidget', smalltalk.Widget, ['colWidget'], 'MooseOnWeb');
smalltalk.addMethod(
"_addCol_",
smalltalk.method({
selector: "addCol:",
fn: function (aContent){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.MWColumnWidget || MWColumnWidget))._new();
_st($1)._content_(aContent);
$2=_st($1)._number_(_st(_st(_st(self)._colWidget())._size()).__plus((1)));
_st(_st(self)._colWidget())._add_($2);
_st(self)._render();
return self}, function($ctx1) {$ctx1.fill(self,"addCol:",{aContent:aContent}, smalltalk.MWMainWidget)})},
messageSends: ["add:", "content:", "new", "number:", "+", "size", "colWidget", "render"]}),
smalltalk.MWMainWidget);

smalltalk.addMethod(
"_colManage_",
smalltalk.method({
selector: "colManage:",
fn: function (announcement){
var self=this;
var begin,end;
return smalltalk.withContext(function($ctx1) { begin=_st(_st(_st(announcement)._colId())._asNumber()).__plus((1));
end=_st(_st(_st(self)._colWidget())._size()).__plus((1));
_st(_st(self)._colWidget())._removeFrom_to_(begin,end);
_st(self)._addCol_(_st(announcement)._content());
return self}, function($ctx1) {$ctx1.fill(self,"colManage:",{announcement:announcement,begin:begin,end:end}, smalltalk.MWMainWidget)})},
messageSends: ["+", "asNumber", "colId", "size", "colWidget", "removeFrom:to:", "addCol:", "content"]}),
smalltalk.MWMainWidget);

smalltalk.addMethod(
"_colReset",
smalltalk.method({
selector: "colReset",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
self["@colWidget"]=_st((smalltalk.Array || Array))._new();
$1=self["@colWidget"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colReset",{}, smalltalk.MWMainWidget)})},
messageSends: ["new"]}),
smalltalk.MWMainWidget);

smalltalk.addMethod(
"_colResetWith_",
smalltalk.method({
selector: "colResetWith:",
fn: function (aContent){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._colReset();
_st(_st(self)._colWidget())._add_(_st(_st((smalltalk.MWColumnWidget || MWColumnWidget))._new())._content_(aContent));
_st(self)._render();
return self}, function($ctx1) {$ctx1.fill(self,"colResetWith:",{aContent:aContent}, smalltalk.MWMainWidget)})},
messageSends: ["colReset", "add:", "content:", "new", "colWidget", "render"]}),
smalltalk.MWMainWidget);

smalltalk.addMethod(
"_colWidget",
smalltalk.method({
selector: "colWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@colWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self)._colReset();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"colWidget",{}, smalltalk.MWMainWidget)})},
messageSends: ["ifNil:", "colReset"]}),
smalltalk.MWMainWidget);

smalltalk.addMethod(
"_cssClass",
smalltalk.method({
selector: "cssClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "row-fluid";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{}, smalltalk.MWMainWidget)})},
messageSends: []}),
smalltalk.MWMainWidget);

smalltalk.addMethod(
"_cssId",
smalltalk.method({
selector: "cssId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "#main";
}, function($ctx1) {$ctx1.fill(self,"cssId",{}, smalltalk.MWMainWidget)})},
messageSends: []}),
smalltalk.MWMainWidget);

smalltalk.addMethod(
"_delCol_",
smalltalk.method({
selector: "delCol:",
fn: function (num){
var self=this;
var i;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._colWidget())._removeFrom_to_(num,_st(_st(_st(_st(self)._colWidget())._size()).__minus(num)).__plus((2)));
i=(1);
_st(_st(self)._colWidget())._do_((function(col){
return smalltalk.withContext(function($ctx2) {_st(col)._number_(i);
i=_st(i).__plus((1));
return i;
}, function($ctx2) {$ctx2.fillBlock({col:col},$ctx1)})}));
_st(self)._render();
return self}, function($ctx1) {$ctx1.fill(self,"delCol:",{num:num,i:i}, smalltalk.MWMainWidget)})},
messageSends: ["removeFrom:to:", "+", "-", "size", "colWidget", "do:", "number:", "render"]}),
smalltalk.MWMainWidget);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._on_do_((smalltalk.MWSuccess || MWSuccess),(function(announcement){
return smalltalk.withContext(function($ctx2) {return _st(self)._render();
}, function($ctx2) {$ctx2.fillBlock({announcement:announcement},$ctx1)})}));
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._on_do_((smalltalk.MWAddColumn || MWAddColumn),(function(announcement){
return smalltalk.withContext(function($ctx2) {return _st(self)._colManage_(announcement);
}, function($ctx2) {$ctx2.fillBlock({announcement:announcement},$ctx1)})}));
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._on_do_((smalltalk.MWResetColumn || MWResetColumn),(function(announcement){
return smalltalk.withContext(function($ctx2) {return _st(self)._colResetWith_(_st(announcement)._content());
}, function($ctx2) {$ctx2.fillBlock({announcement:announcement},$ctx1)})}));
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._on_do_((smalltalk.MWDelColumn || MWDelColumn),(function(announcement){
return smalltalk.withContext(function($ctx2) {return _st(self)._delCol_(_st(announcement)._colId());
}, function($ctx2) {$ctx2.fillBlock({announcement:announcement},$ctx1)})}));
_st(self)._render();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.MWMainWidget)})},
messageSends: ["initialize", "on:do:", "render", "current", "colManage:", "colResetWith:", "content", "delCol:", "colId"]}),
smalltalk.MWMainWidget);

smalltalk.addMethod(
"_render",
smalltalk.method({
selector: "render",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._cssId())._asJQuery())._empty();
_st(self)._appendToJQuery_(_st(_st(self)._cssId())._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"render",{}, smalltalk.MWMainWidget)})},
messageSends: ["empty", "asJQuery", "cssId", "appendToJQuery:"]}),
smalltalk.MWMainWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
var div,size;
return smalltalk.withContext(function($ctx1) { var $1;
div=_st(_st(html)._div())._class_(_st(self)._cssClass());
size=_st(_st(self)._colWidget())._size();
$1=_st(size).__lt((4));
if(smalltalk.assert($1)){
_st(_st(self)._colWidget())._do_((function(c){
return smalltalk.withContext(function($ctx2) {return _st(div)._with_(c);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}));
} else {
_st(_st(_st(size).__minus((2)))._to_(size))._do_((function(i){
return smalltalk.withContext(function($ctx2) {return _st(div)._with_(_st(_st(self)._colWidget())._at_(i));
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,div:div,size:size}, smalltalk.MWMainWidget)})},
messageSends: ["class:", "cssClass", "div", "size", "colWidget", "ifTrue:ifFalse:", "do:", "with:", "at:", "to:", "-", "<"]}),
smalltalk.MWMainWidget);

smalltalk.addMethod(
"_showActions_",
smalltalk.method({
selector: "showActions:",
fn: function (mooseEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.MWActionList || MWActionList))._new();
_st($1)._mooseEntity_(mooseEntity);
_st($1)._getActions();
$2=_st($1)._yourself();
_st(self)._addCol_($2);
return self}, function($ctx1) {$ctx1.fill(self,"showActions:",{mooseEntity:mooseEntity}, smalltalk.MWMainWidget)})},
messageSends: ["addCol:", "mooseEntity:", "new", "getActions", "yourself"]}),
smalltalk.MWMainWidget);


smalltalk.MWMainWidget.klass.iVarNames = ['colWidget'];

smalltalk.addClass('MWMenuWidget', smalltalk.Widget, ['content'], 'MooseOnWeb');
smalltalk.addMethod(
"_buttonTitle",
smalltalk.method({
selector: "buttonTitle",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "Models";
}, function($ctx1) {$ctx1.fill(self,"buttonTitle",{}, smalltalk.MWMenuWidget)})},
messageSends: []}),
smalltalk.MWMenuWidget);

smalltalk.addMethod(
"_cssId",
smalltalk.method({
selector: "cssId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "#models-menu";
}, function($ctx1) {$ctx1.fill(self,"cssId",{}, smalltalk.MWMenuWidget)})},
messageSends: []}),
smalltalk.MWMenuWidget);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
_st(self)._render();
_st((smalltalk.MWModelRoot || MWModelRoot))._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.MWMenuWidget)})},
messageSends: ["initialize", "render", "new"]}),
smalltalk.MWMenuWidget);

smalltalk.addMethod(
"_render",
smalltalk.method({
selector: "render",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._cssId())._asJQuery())._empty();
_st(self)._appendToJQuery_(_st(_st(self)._cssId())._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"render",{}, smalltalk.MWMenuWidget)})},
messageSends: ["empty", "asJQuery", "cssId", "appendToJQuery:"]}),
smalltalk.MWMenuWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=_st(html)._a();
_st($1)._href_("#");
_st($1)._class_("dropdown-toggle");
_st($1)._at_put_("data-toggle","dropdown");
_st($1)._with_(_st(self)._buttonTitle());
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(html)._tag_("b"))._class_("caret");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(html)._ul();
_st($3)._class_("dropdown-menu");
$4=_st($3)._id_("models-list");
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.MWMenuWidget)})},
messageSends: ["href:", "a", "class:", "at:put:", "with:", "buttonTitle", "tag:", "ul", "id:"]}),
smalltalk.MWMenuWidget);



smalltalk.addClass('MWModelRoot', smalltalk.Widget, ['models', 'ul'], 'MooseOnWeb');
smalltalk.addMethod(
"_click_",
smalltalk.method({
selector: "click:",
fn: function (entity){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.MWActionList || MWActionList))._new();
_st($1)._mooseEntity_(entity);
_st($1)._getActions();
$2=_st($1)._yourself();
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._announce_(_st(_st((smalltalk.MWResetColumn || MWResetColumn))._new())._content_($2));
return self}, function($ctx1) {$ctx1.fill(self,"click:",{entity:entity}, smalltalk.MWModelRoot)})},
messageSends: ["announce:", "content:", "mooseEntity:", "new", "getActions", "yourself", "current"]}),
smalltalk.MWModelRoot);

smalltalk.addMethod(
"_cssId",
smalltalk.method({
selector: "cssId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "#models-list";
}, function($ctx1) {$ctx1.fill(self,"cssId",{}, smalltalk.MWModelRoot)})},
messageSends: []}),
smalltalk.MWModelRoot);

smalltalk.addMethod(
"_getModels",
smalltalk.method({
selector: "getModels",
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { result=_st(jQuery)._ajax_options_(_st(_st((smalltalk.MWEntryPoint || MWEntryPoint))._restApiLocation()).__comma(_st((smalltalk.MWEntryPoint || MWEntryPoint))._urlModels()),smalltalk.HashedCollection._fromPairs_([_st("type").__minus_gt("GET"),_st("success").__minus_gt((function(tmp){
return smalltalk.withContext(function($ctx2) {return _st(self)._success_(tmp);
}, function($ctx2) {$ctx2.fillBlock({tmp:tmp},$ctx1)})})),_st("error").__minus_gt((function(a,b,c){
return smalltalk.withContext(function($ctx2) {_st(window)._alert_("error in getting models list");
return _st((smalltalk.Transcript || Transcript))._show_(_st(_st(_st(_st(_st("error1").__comma(a)).__comma("2")).__comma(b)).__comma("3")).__comma(c));
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b,c:c},$ctx1)})})),_st("dataType").__minus_gt("json")]));
return self}, function($ctx1) {$ctx1.fill(self,"getModels",{result:result}, smalltalk.MWModelRoot)})},
messageSends: ["ajax:options:", ",", "urlModels", "restApiLocation", "->", "success:", "alert:", "show:"]}),
smalltalk.MWModelRoot);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
self["@models"]=_st((smalltalk.Array || Array))._new();
_st(self)._getModels();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.MWModelRoot)})},
messageSends: ["initialize", "new", "getModels"]}),
smalltalk.MWModelRoot);

smalltalk.addMethod(
"_render",
smalltalk.method({
selector: "render",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._cssId())._asJQuery())._empty();
_st(self)._appendToJQuery_(_st(_st(self)._cssId())._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"render",{}, smalltalk.MWModelRoot)})},
messageSends: ["empty", "asJQuery", "cssId", "appendToJQuery:"]}),
smalltalk.MWModelRoot);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (menu){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$2;
_st(self["@models"])._do_((function(e){
return smalltalk.withContext(function($ctx2) {$1=_st(menu)._li();
_st($1)._href_("#");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {$3=_st(menu)._a();
_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st(self)._click_(e);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
$4=_st($3)._with_(_st(e)._name());
return $4;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{menu:menu}, smalltalk.MWModelRoot)})},
messageSends: ["do:", "href:", "li", "with:", "onClick:", "click:", "a", "name"]}),
smalltalk.MWModelRoot);

smalltalk.addMethod(
"_success_",
smalltalk.method({
selector: "success:",
fn: function (data){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(data)._entities())._do_((function(e){
return smalltalk.withContext(function($ctx2) {$1=_st((smalltalk.MWMooseEntity || MWMooseEntity))._new();
_st($1)._name_(_st(e)._name());
_st($1)._id_(_st(e)._id());
_st($1)._type_(_st(e)._type());
$2=_st($1)._yourself();
return _st(self["@models"])._add_($2);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(self)._render();
return self}, function($ctx1) {$ctx1.fill(self,"success:",{data:data}, smalltalk.MWModelRoot)})},
messageSends: ["do:", "add:", "name:", "name", "new", "id:", "id", "type:", "type", "yourself", "entities", "render"]}),
smalltalk.MWModelRoot);



smalltalk.addClass('MWMooseEntity', smalltalk.Widget, ['id', 'name', 'type', 'properties', 'isFetched', 'div'], 'MooseOnWeb');
smalltalk.addMethod(
"_clickFrom_",
smalltalk.method({
selector: "clickFrom:",
fn: function (colId){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.MWAddColumn || MWAddColumn))._new();
_st($1)._content_(self);
$2=_st($1)._colId_(colId);
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._announce_($2);
_st(self)._getProperties();
return self}, function($ctx1) {$ctx1.fill(self,"clickFrom:",{colId:colId}, smalltalk.MWMooseEntity)})},
messageSends: ["announce:", "content:", "new", "colId:", "current", "getProperties"]}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_getProperties",
smalltalk.method({
selector: "getProperties",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(jQuery)._ajax_options_(_st(_st(_st(_st((smalltalk.MWEntryPoint || MWEntryPoint))._restApiLocation()).__comma(_st((smalltalk.MWEntryPoint || MWEntryPoint))._urlEntities())).__comma("/")).__comma(_st(self)._id()),smalltalk.HashedCollection._fromPairs_([_st("type").__minus_gt("GET"),_st("success").__minus_gt((function(tmp){
return smalltalk.withContext(function($ctx2) {return _st(self)._success_(tmp);
}, function($ctx2) {$ctx2.fillBlock({tmp:tmp},$ctx1)})})),_st("error").__minus_gt((function(a,b,c){
return smalltalk.withContext(function($ctx2) {_st(window)._alert_("error in getting models list");
return _st((smalltalk.Transcript || Transcript))._show_(_st(_st(_st(_st(_st("error1").__comma(a)).__comma("2")).__comma(b)).__comma("3")).__comma(c));
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b,c:c},$ctx1)})})),_st("dataType").__minus_gt("json")]));
return self}, function($ctx1) {$ctx1.fill(self,"getProperties",{}, smalltalk.MWMooseEntity)})},
messageSends: ["ajax:options:", ",", "id", "urlEntities", "restApiLocation", "->", "success:", "alert:", "show:"]}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_id",
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@id"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"id",{}, smalltalk.MWMooseEntity)})},
messageSends: []}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_id_",
smalltalk.method({
selector: "id:",
fn: function (anId){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@id"]=anId;
return self}, function($ctx1) {$ctx1.fill(self,"id:",{anId:anId}, smalltalk.MWMooseEntity)})},
messageSends: []}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
self["@isFetched"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.MWMooseEntity)})},
messageSends: ["initialize"]}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@name"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"name",{}, smalltalk.MWMooseEntity)})},
messageSends: []}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
fn: function (anName){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@name"]=anName;
return self}, function($ctx1) {$ctx1.fill(self,"name:",{anName:anName}, smalltalk.MWMooseEntity)})},
messageSends: []}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_properties",
smalltalk.method({
selector: "properties",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@properties"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@properties"]=_st((smalltalk.Dictionary || Dictionary))._new();
$1=self["@properties"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"properties",{}, smalltalk.MWMooseEntity)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
_st(_st(self)._properties())._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {return _st(_st(html)._li())._with_((function(li){
return smalltalk.withContext(function($ctx3) {$1=_st(value)._isKindOf_((smalltalk.MWMooseGroup || MWMooseGroup));
if(smalltalk.assert($1)){
$2=_st(li)._a();
_st($2)._style_(_st(_st("color: ").__comma(_st((smalltalk.MWEntryPoint || MWEntryPoint))._colorGroup())).__comma(";\x22"));
_st($2)._href_("#");
_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st(value)._clickFrom_(_st(_st(_st(self["@div"])._asJQuery())._parents_("div"))._attr_("row"));
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
$3=_st($2)._with_(_st(key).__comma(" : "));
$3;
} else {
$4=_st(li)._span();
_st($4)._style_(_st(_st("color: ").__comma(_st((smalltalk.MWEntryPoint || MWEntryPoint))._colorItems())).__comma(";\x22"));
$5=_st($4)._with_(_st(key).__comma(" : "));
$5;
};
return _st(_st(li)._span())._with_(value);
}, function($ctx3) {$ctx3.fillBlock({li:li},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.MWMooseEntity)})},
messageSends: ["keysAndValuesDo:", "with:", "ifTrue:ifFalse:", "style:", ",", "colorGroup", "a", "href:", "onClick:", "clickFrom:", "attr:", "parents:", "asJQuery", "colorItems", "span", "isKindOf:", "li", "properties"]}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=self["@isFetched"];
if(smalltalk.assert($1)){
$2=_st(html)._ul();
_st($2)._class_("unstyled");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._renderContentOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@div"]=$3;
self["@div"];
} else {
_st(_st(html)._span())._with_("Loading");
};
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.MWMooseEntity)})},
messageSends: ["ifTrue:ifFalse:", "class:", "ul", "with:", "renderContentOn:", "span"]}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_success_",
smalltalk.method({
selector: "success:",
fn: function (data){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@isFetched"]=true;
_st(data)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._properties())._at_put_(key,_st(value)._asMooseGroup());
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._announce_(_st((smalltalk.MWSuccess || MWSuccess))._new());
return self}, function($ctx1) {$ctx1.fill(self,"success:",{data:data}, smalltalk.MWMooseEntity)})},
messageSends: ["keysAndValuesDo:", "at:put:", "asMooseGroup", "properties", "announce:", "new", "current"]}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._name();
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{}, smalltalk.MWMooseEntity)})},
messageSends: ["name"]}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_type",
smalltalk.method({
selector: "type",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@type"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"type",{}, smalltalk.MWMooseEntity)})},
messageSends: []}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_type_",
smalltalk.method({
selector: "type:",
fn: function (anType){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@type"]=anType;
return self}, function($ctx1) {$ctx1.fill(self,"type:",{anType:anType}, smalltalk.MWMooseEntity)})},
messageSends: []}),
smalltalk.MWMooseEntity);



smalltalk.addClass('MWMooseGroup', smalltalk.Widget, ['id', 'name', 'type', 'entities', 'ul'], 'MooseOnWeb');
smalltalk.addMethod(
"_addAll_",
smalltalk.method({
selector: "addAll:",
fn: function (anObjectCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(anObjectCollection)._do_((function(e){
return smalltalk.withContext(function($ctx2) {$1=_st((smalltalk.MWMooseEntity || MWMooseEntity))._new();
_st($1)._id_(_st(e)._id());
_st($1)._type_(_st(e)._type());
$2=_st($1)._name_(_st(e)._name());
return _st(_st(self)._entities())._add_($2);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addAll:",{anObjectCollection:anObjectCollection}, smalltalk.MWMooseGroup)})},
messageSends: ["do:", "add:", "id:", "id", "new", "type:", "type", "name:", "name", "entities"]}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_clickFrom_",
smalltalk.method({
selector: "clickFrom:",
fn: function (colId){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.MWAddColumn || MWAddColumn))._new();
_st($1)._content_(self);
$2=_st($1)._colId_(colId);
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"clickFrom:",{colId:colId}, smalltalk.MWMooseGroup)})},
messageSends: ["announce:", "content:", "new", "colId:", "current"]}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_entities",
smalltalk.method({
selector: "entities",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@entities"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@entities"]=_st((smalltalk.Array || Array))._new();
$1=self["@entities"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"entities",{}, smalltalk.MWMooseGroup)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_id",
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@id"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"id",{}, smalltalk.MWMooseGroup)})},
messageSends: []}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_id_",
smalltalk.method({
selector: "id:",
fn: function (anId){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@id"]=anId;
return self}, function($ctx1) {$ctx1.fill(self,"id:",{anId:anId}, smalltalk.MWMooseGroup)})},
messageSends: []}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@name"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"name",{}, smalltalk.MWMooseGroup)})},
messageSends: []}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
fn: function (anName){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@name"]=anName;
return self}, function($ctx1) {$ctx1.fill(self,"name:",{anName:anName}, smalltalk.MWMooseGroup)})},
messageSends: []}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(_st(self)._entities())._do_((function(e){
return smalltalk.withContext(function($ctx2) {$1=_st(html)._a();
_st($1)._href_("#");
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(e)._clickFrom_(_st(_st(_st(self["@ul"])._asJQuery())._parents_("div"))._attr_("row"));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$2=_st($1)._with_(_st(e)._name());
return _st(_st(html)._li())._with_($2);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.MWMooseGroup)})},
messageSends: ["do:", "with:", "href:", "a", "onClick:", "clickFrom:", "attr:", "parents:", "asJQuery", "name", "li", "entities"]}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$2;
$1=_st(html)._pre();
_st($1)._class_("pre-scrollable");
$3=_st(html)._ul();
_st($3)._class_("unstyled");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._renderContentOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._with_($4);
self["@ul"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.MWMooseGroup)})},
messageSends: ["class:", "pre", "with:", "ul", "renderContentOn:"]}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._name();
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{}, smalltalk.MWMooseGroup)})},
messageSends: ["name"]}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_type",
smalltalk.method({
selector: "type",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@type"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"type",{}, smalltalk.MWMooseGroup)})},
messageSends: []}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_type_",
smalltalk.method({
selector: "type:",
fn: function (anType){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@type"]=anType;
return self}, function($ctx1) {$ctx1.fill(self,"type:",{anType:anType}, smalltalk.MWMooseGroup)})},
messageSends: []}),
smalltalk.MWMooseGroup);



smalltalk.addClass('MWResultWidget', smalltalk.Widget, ['sourceEntity', 'action', 'result', 'isFetched'], 'MooseOnWeb');
smalltalk.addMethod(
"_action",
smalltalk.method({
selector: "action",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@action"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"action",{}, smalltalk.MWResultWidget)})},
messageSends: []}),
smalltalk.MWResultWidget);

smalltalk.addMethod(
"_action_",
smalltalk.method({
selector: "action:",
fn: function (anAction){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@action"]=anAction;
return self}, function($ctx1) {$ctx1.fill(self,"action:",{anAction:anAction}, smalltalk.MWResultWidget)})},
messageSends: []}),
smalltalk.MWResultWidget);

smalltalk.addMethod(
"_getResult",
smalltalk.method({
selector: "getResult",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(jQuery)._ajax_options_(_st(_st(_st(_st(_st(_st((smalltalk.MWEntryPoint || MWEntryPoint))._restApiLocation()).__comma(_st((smalltalk.MWEntryPoint || MWEntryPoint))._urlEntities())).__comma("/")).__comma(_st(_st(self)._sourceEntity())._id())).__comma("?action=")).__comma(_st(self)._action()),smalltalk.HashedCollection._fromPairs_([_st("type").__minus_gt("GET"),_st("success").__minus_gt((function(tmp){
return smalltalk.withContext(function($ctx2) {return _st(self)._success_(tmp);
}, function($ctx2) {$ctx2.fillBlock({tmp:tmp},$ctx1)})})),_st("error").__minus_gt((function(a,b,c){
return smalltalk.withContext(function($ctx2) {_st(window)._alert_("error in getting actions result");
return _st((smalltalk.Transcript || Transcript))._show_(_st(_st(_st(_st(_st("error1").__comma(a)).__comma("2")).__comma(b)).__comma("3")).__comma(c));
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b,c:c},$ctx1)})})),_st("dataType").__minus_gt("json")]));
return self}, function($ctx1) {$ctx1.fill(self,"getResult",{}, smalltalk.MWResultWidget)})},
messageSends: ["ajax:options:", ",", "action", "id", "sourceEntity", "urlEntities", "restApiLocation", "->", "success:", "alert:", "show:"]}),
smalltalk.MWResultWidget);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
self["@isFetched"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.MWResultWidget)})},
messageSends: ["initialize"]}),
smalltalk.MWResultWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@isFetched"];
if(smalltalk.assert($1)){
_st(html)._with_(self["@result"]);
} else {
_st(_st(html)._div())._with_("Loading");
};
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.MWResultWidget)})},
messageSends: ["ifFalse:ifTrue:", "with:", "div"]}),
smalltalk.MWResultWidget);

smalltalk.addMethod(
"_sourceEntity",
smalltalk.method({
selector: "sourceEntity",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@sourceEntity"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sourceEntity",{}, smalltalk.MWResultWidget)})},
messageSends: []}),
smalltalk.MWResultWidget);

smalltalk.addMethod(
"_sourceEntity_",
smalltalk.method({
selector: "sourceEntity:",
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@sourceEntity"]=anEntity;
return self}, function($ctx1) {$ctx1.fill(self,"sourceEntity:",{anEntity:anEntity}, smalltalk.MWResultWidget)})},
messageSends: []}),
smalltalk.MWResultWidget);

smalltalk.addMethod(
"_success_",
smalltalk.method({
selector: "success:",
fn: function (data){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
self["@isFetched"]=true;
_st((function(){
return smalltalk.withContext(function($ctx2) {$1=_st((smalltalk.MWMooseGroup || MWMooseGroup))._new();
_st($1)._addAll_(_st(data)._entities());
$2=_st($1)._yourself();
self["@result"]=$2;
return self["@result"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_((smalltalk.MessageNotUnderstood || MessageNotUnderstood),(function(){
return smalltalk.withContext(function($ctx2) {self["@result"]=data;
self["@result"];
return _st(window)._alert_("not entities");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._announce_(_st((smalltalk.MWSuccess || MWSuccess))._new());
return self}, function($ctx1) {$ctx1.fill(self,"success:",{data:data}, smalltalk.MWResultWidget)})},
messageSends: ["on:do:", "alert:", "addAll:", "entities", "new", "yourself", "announce:", "current"]}),
smalltalk.MWResultWidget);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._action();
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{}, smalltalk.MWResultWidget)})},
messageSends: ["action"]}),
smalltalk.MWResultWidget);



smalltalk.addMethod(
"_asMooseGroup",
smalltalk.method({
selector: "asMooseGroup",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._asMooseObject();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asMooseGroup",{}, smalltalk.Object)})},
messageSends: ["asMooseObject"]}),
smalltalk.Object);

smalltalk.addMethod(
"_asMooseObject",
smalltalk.method({
selector: "asMooseObject",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asMooseObject",{}, smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_asMooseObject",
smalltalk.method({
selector: "asMooseObject",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=_st(self)._isEmpty();
if(! smalltalk.assert($1)){
$2=_st(_st(self)._first())._isKindOf_((smalltalk.JSObjectProxy || JSObjectProxy));
if(smalltalk.assert($2)){
$3=_st(_st((smalltalk.MWMooseGroup || MWMooseGroup))._new())._addAll_(_st(self)._collect_((function(e){
return smalltalk.withContext(function($ctx2) {return _st(e)._asMooseObject();
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})})));
return $3;
} else {
$4=_st(self)._value();
return $4;
};
};
return nil;
}, function($ctx1) {$ctx1.fill(self,"asMooseObject",{}, smalltalk.Array)})},
messageSends: ["ifFalse:", "ifTrue:ifFalse:", "addAll:", "collect:", "asMooseObject", "new", "value", "isKindOf:", "first", "isEmpty"]}),
smalltalk.Array);

smalltalk.addMethod(
"_asMooseGroup",
smalltalk.method({
selector: "asMooseGroup",
fn: function (){
var self=this;
var group;
return smalltalk.withContext(function($ctx1) { var $1;
group=_st((smalltalk.MWMooseGroup || MWMooseGroup))._new();
_st(_st(group)._entities())._add_(_st(self)._asMooseObject());
$1=group;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asMooseGroup",{group:group}, smalltalk.JSObjectProxy)})},
messageSends: ["new", "add:", "asMooseObject", "entities"]}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
"_asMooseObject",
smalltalk.method({
selector: "asMooseObject",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.MWMooseEntity || MWMooseEntity))._new();
_st($2)._id_(_st(self)._id());
_st($2)._type_(_st(self)._type());
$3=_st($2)._name_(_st(self)._name());
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asMooseObject",{}, smalltalk.JSObjectProxy)})},
messageSends: ["id:", "id", "new", "type:", "type", "name:", "name"]}),
smalltalk.JSObjectProxy);

