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
return smalltalk.withContext(function($ctx2) {return _st(window)._alert_("error in getting actions list");
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b,c:c},$ctx1)})})),_st("dataType").__minus_gt("json")]));
return self}, function($ctx1) {$ctx1.fill(self,"getActions",{result:result}, smalltalk.MWActionList)})},
messageSends: ["ajax:options:", ",", "id", "mooseEntity", "urlEntities", "restApiLocation", "->", "success:", "alert:"]}),
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
_st(self["@actions"])._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx3) {$4=_st(html)._a();
_st($4)._href_("#");
_st($4)._with_(key);
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {return _st(self)._actionClick_(key);
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return $5;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
} else {
$2=_st(html)._span();
_st($2)._class_("label label-info");
$3=_st($2)._with_("Loading");
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"renderContents:",{html:html}, smalltalk.MWActionList)})},
messageSends: ["ifFalse:ifTrue:", "class:", "span", "with:", "keysAndValuesDo:", "href:", "a", "onClick:", "actionClick:", "li"]}),
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
return smalltalk.withContext(function($ctx1) { var $1,$2;
self["@actions"]=_st((smalltalk.Dictionary || Dictionary))._new();
_st(data)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {return _st(self["@actions"])._at_put_(key,value);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
self["@isFetched"]=true;
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._announce_(_st((smalltalk.MWSuccess || MWSuccess))._new());
$1=_st((smalltalk.MWSuccessForSearch || MWSuccessForSearch))._new();
_st($1)._actions_(self["@actions"]);
$2=_st($1)._yourself();
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"success:",{data:data}, smalltalk.MWActionList)})},
messageSends: ["new", "keysAndValuesDo:", "at:put:", "announce:", "current", "actions:", "yourself"]}),
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


smalltalk.addClass('MWSuccessForSearch', smalltalk.MWAnnouncement, ['actions'], 'MooseOnWeb');
smalltalk.addMethod(
"_actions",
smalltalk.method({
selector: "actions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@actions"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"actions",{}, smalltalk.MWSuccessForSearch)})},
messageSends: []}),
smalltalk.MWSuccessForSearch);

smalltalk.addMethod(
"_actions_",
smalltalk.method({
selector: "actions:",
fn: function (actionArray){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@actions"]=actionArray;
return self}, function($ctx1) {$ctx1.fill(self,"actions:",{actionArray:actionArray}, smalltalk.MWSuccessForSearch)})},
messageSends: []}),
smalltalk.MWSuccessForSearch);



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


smalltalk.addClass('MWColumnWidget', smalltalk.Widget, ['content', 'number', 'isGroupColumn'], 'MooseOnWeb');
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
"_renderHeaderOn_",
smalltalk.method({
selector: "renderHeaderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$8,$9,$7;
_st(_st(html)._div())._with_((function(cont){
return smalltalk.withContext(function($ctx2) {$1=_st(cont)._span();
_st($1)._class_(" label label-info");
$2=_st($1)._with_(_st(_st(self)._content())._title());
$2;
$3=_st(cont)._button();
_st($3)._class_("pull-right btn btn-mini btn-danger");
_st($3)._type_("button");
_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._close();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4=_st($3)._with_("X");
$4;
$5=_st(self["@content"])._isSearchableColumn();
if(smalltalk.assert($5)){
$6=_st(cont)._a();
_st($6)._href_("#searchModal");
_st($6)._at_put_("role","button");
_st($6)._at_put_("data-toggle","modal");
_st($6)._class_("pull-right btn btn-mini btn-info");
_st($6)._with_("Search");
$7=_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {$8=_st((smalltalk.MWSearch || MWSearch))._new();
_st($8)._group_(_st(self)._content());
$9=_st($8)._anchor_(_st(self)._number());
return $9;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $7;
};
}, function($ctx2) {$ctx2.fillBlock({cont:cont},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderHeaderOn:",{html:html}, smalltalk.MWColumnWidget)})},
messageSends: ["with:", "class:", "span", "title", "content", "button", "type:", "onClick:", "close", "ifTrue:", "href:", "a", "at:put:", "group:", "new", "anchor:", "number", "isSearchableColumn", "div"]}),
smalltalk.MWColumnWidget);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(html)._div();
_st($1)._class_(_st(self)._cssClass());
_st($1)._at_put_("row",_st(self)._number());
$2=_st($1)._with_((function(element){
return smalltalk.withContext(function($ctx2) {_st(self)._renderHeaderOn_(element);
_st(element)._br();
return _st(element)._with_(_st(self)._content());
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.MWColumnWidget)})},
messageSends: ["class:", "cssClass", "div", "at:put:", "number", "with:", "renderHeaderOn:", "br", "content"]}),
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
return smalltalk.withContext(function($ctx1) { return "http://localhost:8080/mooseOnWeb";
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
_st(self)._addCol_asGroup_($2,false);
return self}, function($ctx1) {$ctx1.fill(self,"showActions:",{mooseEntity:mooseEntity}, smalltalk.MWMainWidget)})},
messageSends: ["addCol:asGroup:", "mooseEntity:", "new", "getActions", "yourself"]}),
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
return smalltalk.withContext(function($ctx2) {return _st(window)._alert_("error in getting models list");
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b,c:c},$ctx1)})})),_st("dataType").__minus_gt("json")]));
return self}, function($ctx1) {$ctx1.fill(self,"getModels",{result:result}, smalltalk.MWModelRoot)})},
messageSends: ["ajax:options:", ",", "urlModels", "restApiLocation", "->", "success:", "alert:"]}),
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
_st(data)._do_((function(e){
return smalltalk.withContext(function($ctx2) {$1=_st((smalltalk.MWMooseEntity || MWMooseEntity))._new();
_st($1)._name_(_st(e)._name());
_st($1)._id_(_st(e)._id());
_st($1)._type_(_st(e)._type());
$2=_st($1)._yourself();
return _st(self["@models"])._add_($2);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(self)._render();
return self}, function($ctx1) {$ctx1.fill(self,"success:",{data:data}, smalltalk.MWModelRoot)})},
messageSends: ["do:", "add:", "name:", "name", "new", "id:", "id", "type:", "type", "yourself", "render"]}),
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
return smalltalk.withContext(function($ctx1) { _st(_st(self)._properties())._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {return _st(_st(html)._li())._with_((function(li){
return smalltalk.withContext(function($ctx3) {_st(self)._renderHeaderOn_withKey_withValue_(li,key,value);
return _st(_st(li)._span())._with_(value);
}, function($ctx3) {$ctx3.fillBlock({li:li},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.MWMooseEntity)})},
messageSends: ["keysAndValuesDo:", "with:", "renderHeaderOn:withKey:withValue:", "span", "li", "properties"]}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
"_renderHeaderOn_withKey_withValue_",
smalltalk.method({
selector: "renderHeaderOn:withKey:withValue:",
fn: function (html,key,value){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
$1=_st(value)._isKindOf_((smalltalk.MWMooseGroup || MWMooseGroup));
if(smalltalk.assert($1)){
$2=_st(html)._a();
_st($2)._href_("#");
_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {return _st(value)._clickFrom_(_st(_st(_st(self["@div"])._asJQuery())._parents_("div"))._attr_("row"));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st($2)._with_(_st(key).__comma(" : "));
$3=_st($2)._style_(_st("color: ").__comma(_st((smalltalk.MWEntryPoint || MWEntryPoint))._colorGroup()));
$3;
} else {
$4=_st(html)._span();
_st($4)._style_(_st("color: ").__comma(_st((smalltalk.MWEntryPoint || MWEntryPoint))._colorItems()));
$5=_st($4)._with_(_st(key).__comma(" : "));
$5;
};
return self}, function($ctx1) {$ctx1.fill(self,"renderHeaderOn:withKey:withValue:",{html:html,key:key,value:value}, smalltalk.MWMooseEntity)})},
messageSends: ["ifTrue:ifFalse:", "href:", "a", "onClick:", "clickFrom:", "attr:", "parents:", "asJQuery", "with:", ",", "style:", "colorGroup", "colorItems", "span", "isKindOf:"]}),
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
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._properties())._at_put_(key,_st(value)._asMooseGroupWithAction_withParentId_(key,_st(self)._id()));
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._announce_(_st((smalltalk.MWSuccess || MWSuccess))._new());
return self}, function($ctx1) {$ctx1.fill(self,"success:",{data:data}, smalltalk.MWMooseEntity)})},
messageSends: ["keysAndValuesDo:", "at:put:", "asMooseGroupWithAction:withParentId:", "id", "properties", "announce:", "new", "current"]}),
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



smalltalk.addClass('MWMooseGroup', smalltalk.Widget, ['id', 'name', 'type', 'entities', 'ul', 'action', 'parentId', 'isSearchable'], 'MooseOnWeb');
smalltalk.addMethod(
"_action",
smalltalk.method({
selector: "action",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@action"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"action",{}, smalltalk.MWMooseGroup)})},
messageSends: []}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_action_",
smalltalk.method({
selector: "action:",
fn: function (anAction){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@action"]=anAction;
return self}, function($ctx1) {$ctx1.fill(self,"action:",{anAction:anAction}, smalltalk.MWMooseGroup)})},
messageSends: []}),
smalltalk.MWMooseGroup);

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
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@isSearchable"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.MWMooseGroup)})},
messageSends: []}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_isSearchableColumn",
smalltalk.method({
selector: "isSearchableColumn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@isSearchable"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSearchableColumn",{}, smalltalk.MWMooseGroup)})},
messageSends: []}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_isSearchableColumn_",
smalltalk.method({
selector: "isSearchableColumn:",
fn: function (aBool){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@isSearchable"]=aBool;
return self}, function($ctx1) {$ctx1.fill(self,"isSearchableColumn:",{aBool:aBool}, smalltalk.MWMooseGroup)})},
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
"_parentId",
smalltalk.method({
selector: "parentId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@parentId"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parentId",{}, smalltalk.MWMooseGroup)})},
messageSends: []}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
"_parentId_",
smalltalk.method({
selector: "parentId:",
fn: function (anId){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
self["@parentId"]=anId;
$1=_st(anId).__eq((-1));
if(smalltalk.assert($1)){
_st(self)._isSearchableColumn_(false);
};
return self}, function($ctx1) {$ctx1.fill(self,"parentId:",{anId:anId}, smalltalk.MWMooseGroup)})},
messageSends: ["ifTrue:", "isSearchableColumn:", "="]}),
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
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._name();
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st(self)._action();
return $3;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{}, smalltalk.MWMooseGroup)})},
messageSends: ["ifNil:", "action", "name"]}),
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



smalltalk.addClass('MWResultWidget', smalltalk.Widget, ['sourceEntity', 'action', 'result', 'isFetched', 'isSearchableColumn'], 'MooseOnWeb');
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
"_entities",
smalltalk.method({
selector: "entities",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@result"])._entities();
return $1;
}, function($ctx1) {$ctx1.fill(self,"entities",{}, smalltalk.MWResultWidget)})},
messageSends: ["entities"]}),
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
"_isSearchableColumn",
smalltalk.method({
selector: "isSearchableColumn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@isSearchableColumn"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSearchableColumn",{}, smalltalk.MWResultWidget)})},
messageSends: ["ifNil:"]}),
smalltalk.MWResultWidget);

smalltalk.addMethod(
"_parentId",
smalltalk.method({
selector: "parentId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@sourceEntity"])._id();
return $1;
}, function($ctx1) {$ctx1.fill(self,"parentId",{}, smalltalk.MWResultWidget)})},
messageSends: ["id"]}),
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
return smalltalk.withContext(function($ctx1) { self["@isFetched"]=true;
_st((function(){
var group;
return smalltalk.withContext(function($ctx2) {group=_st(_st((smalltalk.MWMooseGroup || MWMooseGroup))._new())._addAll_(_st(data)._entities());
group;
_st(group)._action_(_st(self)._action());
_st(group)._parentId_(_st(self["@sourceEntity"])._id());
self["@result"]=group;
self["@result"];
self["@isSearchableColumn"]=true;
return self["@isSearchableColumn"];
}, function($ctx2) {$ctx2.fillBlock({group:group},$ctx1)})}))._on_do_((smalltalk.MessageNotUnderstood || MessageNotUnderstood),(function(){
return smalltalk.withContext(function($ctx2) {self["@result"]=data;
return self["@result"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._announce_(_st((smalltalk.MWSuccess || MWSuccess))._new());
return self}, function($ctx1) {$ctx1.fill(self,"success:",{data:data}, smalltalk.MWResultWidget)})},
messageSends: ["on:do:", "addAll:", "entities", "new", "action:", "action", "parentId:", "id", "announce:", "current"]}),
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



smalltalk.addClass('MWSearch', smalltalk.Widget, ['group', 'isListUpdated', 'actionsList', 'selectedAction', 'selectedOperator', 'valueInput', 'anchor'], 'MooseOnWeb');
smalltalk.addMethod(
"_actionChosen_",
smalltalk.method({
selector: "actionChosen:",
fn: function (a){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._selectedAction_(a);
return self}, function($ctx1) {$ctx1.fill(self,"actionChosen:",{a:a}, smalltalk.MWSearch)})},
messageSends: ["selectedAction:"]}),
smalltalk.MWSearch);

smalltalk.addMethod(
"_anchor",
smalltalk.method({
selector: "anchor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@anchor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"anchor",{}, smalltalk.MWSearch)})},
messageSends: []}),
smalltalk.MWSearch);

smalltalk.addMethod(
"_anchor_",
smalltalk.method({
selector: "anchor:",
fn: function (a){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@anchor"]=a;
return self}, function($ctx1) {$ctx1.fill(self,"anchor:",{a:a}, smalltalk.MWSearch)})},
messageSends: []}),
smalltalk.MWSearch);

smalltalk.addMethod(
"_cssId",
smalltalk.method({
selector: "cssId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return "#searchModal";
}, function($ctx1) {$ctx1.fill(self,"cssId",{}, smalltalk.MWSearch)})},
messageSends: []}),
smalltalk.MWSearch);

smalltalk.addMethod(
"_group_",
smalltalk.method({
selector: "group:",
fn: function (aMooseGroup){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@group"]=aMooseGroup;
_st(self)._updateList();
return self}, function($ctx1) {$ctx1.fill(self,"group:",{aMooseGroup:aMooseGroup}, smalltalk.MWSearch)})},
messageSends: ["updateList"]}),
smalltalk.MWSearch);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._on_do_((smalltalk.MWSuccessForSearch || MWSuccessForSearch),(function(announcement){
return smalltalk.withContext(function($ctx2) {return _st(self)._updateListSuccess_(_st(announcement)._actions());
}, function($ctx2) {$ctx2.fillBlock({announcement:announcement},$ctx1)})}));
self["@isListUpdated"]=false;
_st(self)._render();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.MWSearch)})},
messageSends: ["initialize", "on:do:", "updateListSuccess:", "actions", "current", "render"]}),
smalltalk.MWSearch);

smalltalk.addMethod(
"_render",
smalltalk.method({
selector: "render",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(self)._cssId())._asJQuery())._empty();
_st(self)._appendToJQuery_(_st(_st(self)._cssId())._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"render",{}, smalltalk.MWSearch)})},
messageSends: ["empty", "asJQuery", "cssId", "appendToJQuery:"]}),
smalltalk.MWSearch);

smalltalk.addMethod(
"_renderActionListOn_",
smalltalk.method({
selector: "renderActionListOn:",
fn: function (content){
var self=this;
var dropdown;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$5,$6,$7,$8,$9,$4;
$1=_st(content)._a();
_st($1)._class_("btn dropdown-toggle");
_st($1)._at_put_("data-toggle","dropdown");
$2=_st($1)._href_("#");
dropdown=$2;
_st(dropdown)._with_("Choose an action");
_st(dropdown)._with_(_st(_st(content)._span())._class_("caret"));
$3=_st(content)._ul();
_st($3)._class_("dropdown-menu");
$4=_st($3)._with_((function(elem){
return smalltalk.withContext(function($ctx2) {$5=self["@isListUpdated"];
if(smalltalk.assert($5)){
return _st(self["@actionsList"])._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx3) {$6=_st(elem)._a();
_st($6)._href_("#");
_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {$7=_st(dropdown)._asJQuery();
_st($7)._empty();
$8=_st($7)._append_(key);
$8;
self["@selectedAction"]=key;
return self["@selectedAction"];
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
$9=_st($6)._with_(key);
return _st(_st(elem)._li())._with_($9);
}, function($ctx3) {$ctx3.fillBlock({key:key,value:value},$ctx1)})}));
};
}, function($ctx2) {$ctx2.fillBlock({elem:elem},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderActionListOn:",{content:content,dropdown:dropdown}, smalltalk.MWSearch)})},
messageSends: ["class:", "a", "at:put:", "href:", "with:", "span", "ul", "ifTrue:", "keysAndValuesDo:", "onClick:", "empty", "asJQuery", "append:", "li"]}),
smalltalk.MWSearch);

smalltalk.addMethod(
"_renderBodyOn_",
smalltalk.method({
selector: "renderBodyOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$6,$2;
$1=_st(html)._div();
_st($1)._class_(" modal-body");
_st($1)._at_put_("max-height","200");
$2=_st($1)._with_((function(el){
return smalltalk.withContext(function($ctx2) {$3=_st(el)._div();
_st($3)._class_("btn-group");
$4=_st($3)._with_((function(content){
return smalltalk.withContext(function($ctx3) {return _st(self)._renderActionListOn_(content);
}, function($ctx3) {$ctx3.fillBlock({content:content},$ctx1)})}));
$4;
$5=_st(el)._div();
_st($5)._class_("btn-group");
$6=_st($5)._with_((function(content){
return smalltalk.withContext(function($ctx3) {return _st(self)._renderOperatorsOn_(content);
}, function($ctx3) {$ctx3.fillBlock({content:content},$ctx1)})}));
$6;
return _st(self)._renderValueInputOn_(el);
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBodyOn:",{html:html}, smalltalk.MWSearch)})},
messageSends: ["class:", "div", "at:put:", "with:", "renderActionListOn:", "renderOperatorsOn:", "renderValueInputOn:"]}),
smalltalk.MWSearch);

smalltalk.addMethod(
"_renderFooterOn_",
smalltalk.method({
selector: "renderFooterOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$6,$2;
$1=_st(html)._div();
_st($1)._class_("modal-footer");
$2=_st($1)._with_((function(el){
return smalltalk.withContext(function($ctx2) {$3=_st(el)._button();
_st($3)._class_("btn");
_st($3)._at_put_("data-dismiss","modal");
_st($3)._at_put_("aria-hidden","true");
$4=_st($3)._with_("Close");
$4;
$5=_st(el)._button();
_st($5)._class_("btn btn-primary");
_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._search();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$6=_st($5)._with_("Search");
return $6;
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderFooterOn:",{html:html}, smalltalk.MWSearch)})},
messageSends: ["class:", "div", "with:", "button", "at:put:", "onClick:", "search"]}),
smalltalk.MWSearch);

smalltalk.addMethod(
"_renderHeaderOn_",
smalltalk.method({
selector: "renderHeaderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$5,$6,$2;
$1=_st(html)._div();
_st($1)._class_("modal-header");
$2=_st($1)._with_((function(el){
return smalltalk.withContext(function($ctx2) {$3=_st(el)._button();
_st($3)._type_("button");
_st($3)._class_("close");
_st($3)._at_put_("data-dismiss","modal");
_st($3)._at_put_("aria-hidden","true");
$4=_st($3)._with_("×");
$4;
$5=_st(el)._h3();
_st($5)._id_("myModalLabel");
$6=_st($5)._with_("Search");
return $6;
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderHeaderOn:",{html:html}, smalltalk.MWSearch)})},
messageSends: ["class:", "div", "with:", "type:", "button", "at:put:", "id:", "h3"]}),
smalltalk.MWSearch);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._renderHeaderOn_(html);
_st(self)._renderBodyOn_(html);
_st(self)._renderFooterOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.MWSearch)})},
messageSends: ["renderHeaderOn:", "renderBodyOn:", "renderFooterOn:"]}),
smalltalk.MWSearch);

smalltalk.addMethod(
"_renderOperatorsOn_",
smalltalk.method({
selector: "renderOperatorsOn:",
fn: function (content){
var self=this;
var dropdown;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$5,$6,$7,$8,$4;
$1=_st(content)._a();
_st($1)._class_("btn dropdown-toggle");
_st($1)._at_put_("data-toggle","dropdown");
$2=_st($1)._href_("#");
dropdown=$2;
_st(dropdown)._with_("Choose an operator");
_st(dropdown)._with_(_st(_st(content)._span())._class_("caret"));
$3=_st(content)._ul();
_st($3)._class_("dropdown-menu");
$4=_st($3)._with_((function(elem){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st((smalltalk.MWSearch || MWSearch))._operatorsDictionnary())._keys())._do_((function(op){
return smalltalk.withContext(function($ctx3) {$5=_st(elem)._a();
_st($5)._href_("#");
_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {$6=_st(dropdown)._asJQuery();
_st($6)._empty();
$7=_st($6)._append_(_st(op)._asString());
$7;
self["@selectedOperator"]=op;
return self["@selectedOperator"];
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
$8=_st($5)._with_(op);
return _st(_st(elem)._li())._with_($8);
}, function($ctx3) {$ctx3.fillBlock({op:op},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({elem:elem},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOperatorsOn:",{content:content,dropdown:dropdown}, smalltalk.MWSearch)})},
messageSends: ["class:", "a", "at:put:", "href:", "with:", "span", "ul", "do:", "onClick:", "empty", "asJQuery", "append:", "asString", "li", "keys", "operatorsDictionnary"]}),
smalltalk.MWSearch);

smalltalk.addMethod(
"_renderValueInputOn_",
smalltalk.method({
selector: "renderValueInputOn:",
fn: function (content){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$2;
$1=_st(content)._div();
_st($1)._class_("pull-right");
$3=_st(content)._input();
_st($3)._class_("input-large search-query");
_st($3)._type_("text");
$4=_st($3)._placeholder_("Text input");
self["@valueInput"]=$4;
$2=_st($1)._with_(self["@valueInput"]);
return self}, function($ctx1) {$ctx1.fill(self,"renderValueInputOn:",{content:content}, smalltalk.MWSearch)})},
messageSends: ["class:", "div", "with:", "input", "type:", "placeholder:"]}),
smalltalk.MWSearch);

smalltalk.addMethod(
"_search",
smalltalk.method({
selector: "search",
fn: function (){
var self=this;
var value;
return smalltalk.withContext(function($ctx1) { value=_st(_st(self["@valueInput"])._asJQuery())._val();
_st(jQuery)._ajax_options_(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st((smalltalk.MWEntryPoint || MWEntryPoint))._restApiLocation()).__comma(_st((smalltalk.MWEntryPoint || MWEntryPoint))._urlEntities())).__comma("/")).__comma(_st(self["@group"])._parentId())).__comma("?q=search&onAction=")).__comma(_st(self["@group"])._action())).__comma("&key=")).__comma(self["@selectedAction"])).__comma("&op=")).__comma(_st(_st((smalltalk.MWSearch || MWSearch))._operatorsDictionnary())._at_(self["@selectedOperator"]))).__comma("&value=")).__comma(value),smalltalk.HashedCollection._fromPairs_([_st("type").__minus_gt("GET"),_st("success").__minus_gt((function(tmp){
return smalltalk.withContext(function($ctx2) {return _st(self)._searchSuccess_(tmp);
}, function($ctx2) {$ctx2.fillBlock({tmp:tmp},$ctx1)})})),_st("error").__minus_gt((function(a,b,c){
return smalltalk.withContext(function($ctx2) {return _st(window)._alert_("Error in searching");
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b,c:c},$ctx1)})})),_st("dataType").__minus_gt("json")]));
_st(_st(_st(self)._cssId())._asJQuery())._modal_("toggle");
return self}, function($ctx1) {$ctx1.fill(self,"search",{value:value}, smalltalk.MWSearch)})},
messageSends: ["val", "asJQuery", "ajax:options:", ",", "at:", "operatorsDictionnary", "action", "parentId", "urlEntities", "restApiLocation", "->", "searchSuccess:", "alert:", "modal:", "cssId"]}),
smalltalk.MWSearch);

smalltalk.addMethod(
"_searchSuccess_",
smalltalk.method({
selector: "searchSuccess:",
fn: function (data){
var self=this;
var name;
return smalltalk.withContext(function($ctx1) { var $1,$2;
name=_st(_st(_st(_st(_st(_st(_st(self["@group"])._action()).__comma(" where ")).__comma(self["@selectedAction"])).__comma(" ")).__comma(_st(self["@selectedOperator"])._asString())).__comma(" ")).__comma(_st(_st(self["@valueInput"])._asJQuery())._val());
$1=_st((smalltalk.MWAddColumn || MWAddColumn))._new();
_st($1)._colId_(_st(_st(self)._anchor())._asString());
$2=_st($1)._content_(_st(data)._asMooseGroupWithAction_withParentId_(name,(-1)));
_st(_st((smalltalk.MWAnnouncer || MWAnnouncer))._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"searchSuccess:",{data:data,name:name}, smalltalk.MWSearch)})},
messageSends: [",", "val", "asJQuery", "asString", "action", "announce:", "colId:", "anchor", "new", "content:", "asMooseGroupWithAction:withParentId:", "current"]}),
smalltalk.MWSearch);

smalltalk.addMethod(
"_selectedAction",
smalltalk.method({
selector: "selectedAction",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@selectedAction"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedAction",{}, smalltalk.MWSearch)})},
messageSends: []}),
smalltalk.MWSearch);

smalltalk.addMethod(
"_selectedAction_",
smalltalk.method({
selector: "selectedAction:",
fn: function (anAction){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@selectedAction"]=anAction;
return self}, function($ctx1) {$ctx1.fill(self,"selectedAction:",{anAction:anAction}, smalltalk.MWSearch)})},
messageSends: []}),
smalltalk.MWSearch);

smalltalk.addMethod(
"_updateList",
smalltalk.method({
selector: "updateList",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$3,$5;
$1=_st((smalltalk.MWActionList || MWActionList))._new();
$2=$1;
$4=_st(self["@group"])._isSearchableColumn();
if(smalltalk.assert($4)){
$3=_st(_st(self["@group"])._entities())._at_((1));
};
_st($2)._mooseEntity_($3);
$5=_st($1)._getActions();
return self}, function($ctx1) {$ctx1.fill(self,"updateList",{}, smalltalk.MWSearch)})},
messageSends: ["mooseEntity:", "ifTrue:", "at:", "entities", "isSearchableColumn", "new", "getActions"]}),
smalltalk.MWSearch);

smalltalk.addMethod(
"_updateListSuccess_",
smalltalk.method({
selector: "updateListSuccess:",
fn: function (actions){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@actionsList"]=actions;
self["@isListUpdated"]=true;
_st(self)._render();
return self}, function($ctx1) {$ctx1.fill(self,"updateListSuccess:",{actions:actions}, smalltalk.MWSearch)})},
messageSends: ["render"]}),
smalltalk.MWSearch);


smalltalk.addMethod(
"_operatorsDictionnary",
smalltalk.method({
selector: "operatorsDictionnary",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st((smalltalk.Dictionary || Dictionary))._new();
_st($2)._at_put_(smalltalk.symbolFor(">="),"ge");
_st($2)._at_put_(smalltalk.symbolFor(">"),"gt");
_st($2)._at_put_(smalltalk.symbolFor("="),"eq");
_st($2)._at_put_(smalltalk.symbolFor("<="),"le");
_st($2)._at_put_(smalltalk.symbolFor("<"),"lt");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"operatorsDictionnary",{}, smalltalk.MWSearch.klass)})},
messageSends: ["at:put:", "new", "yourself"]}),
smalltalk.MWSearch.klass);


smalltalk.addMethod(
"_asMooseGroupWithAction_withParentId_",
smalltalk.method({
selector: "asMooseGroupWithAction:withParentId:",
fn: function (anAction,id){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._asMooseObject();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asMooseGroupWithAction:withParentId:",{anAction:anAction,id:id}, smalltalk.Object)})},
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
"_isSearchableColumn",
smalltalk.method({
selector: "isSearchableColumn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return false;
}, function($ctx1) {$ctx1.fill(self,"isSearchableColumn",{}, smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
"_asMooseGroupWithAction_withParentId_",
smalltalk.method({
selector: "asMooseGroupWithAction:withParentId:",
fn: function (anAction,id){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$5,$3,$6,$8,$9,$7;
$1=_st(self)._isEmpty();
if(! smalltalk.assert($1)){
$2=_st(_st(self)._first())._isKindOf_((smalltalk.JSObjectProxy || JSObjectProxy));
if(smalltalk.assert($2)){
$4=_st((smalltalk.MWMooseGroup || MWMooseGroup))._new();
_st($4)._action_(anAction);
_st($4)._parentId_(id);
$5=_st($4)._addAll_(_st(self)._collect_((function(e){
return smalltalk.withContext(function($ctx2) {return _st(e)._asMooseObject();
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})})));
$3=$5;
return $3;
} else {
$6=_st(self)._value();
return $6;
};
};
$8=_st((smalltalk.MWMooseGroup || MWMooseGroup))._new();
_st($8)._action_(anAction);
$9=_st($8)._parentId_(id);
$7=$9;
return $7;
}, function($ctx1) {$ctx1.fill(self,"asMooseGroupWithAction:withParentId:",{anAction:anAction,id:id}, smalltalk.Array)})},
messageSends: ["ifFalse:", "ifTrue:ifFalse:", "action:", "new", "parentId:", "addAll:", "collect:", "asMooseObject", "value", "isKindOf:", "first", "isEmpty"]}),
smalltalk.Array);

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
"_asMooseGroupWithAction_withParentId_",
smalltalk.method({
selector: "asMooseGroupWithAction:withParentId:",
fn: function (anAction,id){
var self=this;
var group;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3;
$1=_st((smalltalk.MWMooseGroup || MWMooseGroup))._new();
_st($1)._action_(anAction);
$2=_st($1)._parentId_(id);
group=$2;
_st(_st(group)._entities())._add_(_st(self)._asMooseObject());
$3=group;
return $3;
}, function($ctx1) {$ctx1.fill(self,"asMooseGroupWithAction:withParentId:",{anAction:anAction,id:id,group:group}, smalltalk.JSObjectProxy)})},
messageSends: ["action:", "new", "parentId:", "add:", "asMooseObject", "entities"]}),
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

