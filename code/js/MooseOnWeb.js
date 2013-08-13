smalltalk.addPackage('MooseOnWeb');
smalltalk.addClass('MWAbstractItem', smalltalk.Widget, ['htmlAnchor'], 'MooseOnWeb');
smalltalk.MWAbstractItem.comment="A `ColumnItem` is a element able to be in a column. ";
smalltalk.addMethod(
smalltalk.method({
selector: "getColumnNumber",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self["@htmlAnchor"])._asJQuery())._parents_("div"))._first())._attr_("row");
return $1;
}, function($ctx1) {$ctx1.fill(self,"getColumnNumber",{},smalltalk.MWAbstractItem)})},
args: [],
source: "getColumnNumber\x0a\x09^(htmlAnchor asJQuery parents: 'div')first attr: 'row'",
messageSends: ["attr:", "first", "parents:", "asJQuery"],
referencedClasses: []
}),
smalltalk.MWAbstractItem);



smalltalk.addClass('MWActionList', smalltalk.MWAbstractItem, ['actions', 'mooseEntity', 'isFetched'], 'MooseOnWeb');
smalltalk.MWActionList.comment="A `MWActionList` widget makes request the server and displays the actions applicable on an entity.";
smalltalk.addMethod(
smalltalk.method({
selector: "actionClick:",
category: 'events',
fn: function (anAction){
var self=this;
function $MWAddColumn(){return smalltalk.MWAddColumn||(typeof MWAddColumn=="undefined"?nil:MWAddColumn)}
function $MWResult(){return smalltalk.MWResult||(typeof MWResult=="undefined"?nil:MWResult)}
function $MWAnnouncer(){return smalltalk.MWAnnouncer||(typeof MWAnnouncer=="undefined"?nil:MWAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st($MWAddColumn())._new();
_st($1)._colId_(self._getColumnNumber());
$3=_st($MWResult())._new();
_st($3)._action_(anAction);
_st($3)._sourceEntity_(self._mooseEntity());
$4=_st($3)._getResult();
$2=_st($1)._content_($4);
_st(_st($MWAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"actionClick:",{anAction:anAction},smalltalk.MWActionList)})},
args: ["anAction"],
source: "actionClick: anAction\x0a\x09MWAnnouncer current announce: (\x0a    \x09MWAddColumn new\x0a        \x09colId: self getColumnNumber;\x0a        \x09content: (\x0a              MWResult new \x0a                  action: anAction; \x0a                  sourceEntity: self mooseEntity;\x0a                  getResult\x0a        )\x0a    )",
messageSends: ["announce:", "colId:", "getColumnNumber", "new", "content:", "action:", "sourceEntity:", "mooseEntity", "getResult", "current"],
referencedClasses: ["MWAddColumn", "MWResult", "MWAnnouncer"]
}),
smalltalk.MWActionList);

smalltalk.addMethod(
smalltalk.method({
selector: "getActions",
category: 'query',
fn: function (){
var self=this;
function $MWEntryPoint(){return smalltalk.MWEntryPoint||(typeof MWEntryPoint=="undefined"?nil:MWEntryPoint)}
return smalltalk.withContext(function($ctx1) { 
_st(jQuery)._ajax_options_(_st(_st(_st(_st(_st($MWEntryPoint())._restApiLocation()).__comma(_st($MWEntryPoint())._urlEntities())).__comma("/")).__comma(_st(self._mooseEntity())._id())).__comma("?q=actions"),smalltalk.HashedCollection._from_(["type".__minus_gt("GET"),"success".__minus_gt((function(data){
return smalltalk.withContext(function($ctx2) {
return self._success_(data);
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})})),"error".__minus_gt((function(a,b,c){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_("error in getting actions list");
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b,c:c},$ctx1)})})),"dataType".__minus_gt("json")]));
return self}, function($ctx1) {$ctx1.fill(self,"getActions",{},smalltalk.MWActionList)})},
args: [],
source: "getActions\x0a\x09jQuery \x0a    \x09ajax: MWEntryPoint restApiLocation, MWEntryPoint urlEntities,'/',self mooseEntity id, '?q=actions'\x0a\x09\x09options: #{\x0a\x09\x09\x09'type' -> 'GET'.\x0a            'success' ->  [ :data | self success: data].\x0a\x09\x09\x09'error' -> [:a :b : c |  window alert:'error in getting actions list'.].\x0a\x09\x09\x09'dataType' -> 'json'\x0a\x09\x09}.",
messageSends: ["ajax:options:", ",", "id", "mooseEntity", "urlEntities", "restApiLocation", "->", "success:", "alert:"],
referencedClasses: ["MWEntryPoint"]
}),
smalltalk.MWActionList);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.MWActionList.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@isFetched"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MWActionList)})},
args: [],
source: "initialize \x0a\x09super initialize.\x0a\x09isFetched := false.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.MWActionList);

smalltalk.addMethod(
smalltalk.method({
selector: "mooseEntity",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@mooseEntity"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"mooseEntity",{},smalltalk.MWActionList)})},
args: [],
source: "mooseEntity\x0a\x09^mooseEntity",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWActionList);

smalltalk.addMethod(
smalltalk.method({
selector: "mooseEntity:",
category: 'accessing',
fn: function (aMooseEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mooseEntity"]=aMooseEntity;
return self}, function($ctx1) {$ctx1.fill(self,"mooseEntity:",{aMooseEntity:aMooseEntity},smalltalk.MWActionList)})},
args: ["aMooseEntity"],
source: "mooseEntity: aMooseEntity\x0a\x09mooseEntity := aMooseEntity",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWActionList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContents:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=self["@isFetched"];
if(smalltalk.assert($1)){
_st(self["@actions"])._do_((function(association){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$4=_st(html)._a();
_st($4)._href_("#");
_st($4)._with_(_st(association)._key());
_st($4)._at_put_("data-toggle","tooltip");
_st($4)._at_put_("data-delay","{ show: 5000, hide: 1000 }");
_st($4)._title_(_st(association)._value());
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._actionClick_(_st(association)._key());
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
return $5;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({association:association},$ctx1)})}));
} else {
$2=_st(html)._span();
_st($2)._class_("label label-info");
$3=_st($2)._with_("Loading");
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"renderContents:",{html:html},smalltalk.MWActionList)})},
args: ["html"],
source: "renderContents: html\x09\x0a\x09isFetched ifFalse: [\x0a      html span class: 'label label-info'; with: 'Loading'.\x0a    ] ifTrue: [\x0a      actions do: [ :association | \x0a          html li \x0a          \x09with: [\x0a              html a\x0a              \x09  href: '#';\x0a                  with: association key;\x0a                  at: 'data-toggle' put:'tooltip';\x0a                  at: 'data-delay' put: '{ show: 5000, hide: 1000 }';\x0a                  title:  association value;\x0a                  onClick: [ self actionClick: association key ]\x0a          ]\x0a      ]\x0a    ]",
messageSends: ["ifFalse:ifTrue:", "class:", "span", "with:", "do:", "href:", "a", "key", "at:put:", "title:", "value", "onClick:", "actionClick:", "li"],
referencedClasses: []
}),
smalltalk.MWActionList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._ul();
_st($1)._class_("unstyled");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderContents_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@htmlAnchor"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.MWActionList)})},
args: ["html"],
source: "renderOn: html\x0a\x09htmlAnchor := html ul \x0a    \x09class: 'unstyled';\x0a        with: \x0a           [ self renderContents: html]",
messageSends: ["class:", "ul", "with:", "renderContents:"],
referencedClasses: []
}),
smalltalk.MWActionList);

smalltalk.addMethod(
smalltalk.method({
selector: "success:",
category: 'query',
fn: function (data){
var self=this;
var tempActions;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $Association(){return smalltalk.Association||(typeof Association=="undefined"?nil:Association)}
function $MWSuccess(){return smalltalk.MWSuccess||(typeof MWSuccess=="undefined"?nil:MWSuccess)}
function $MWAnnouncer(){return smalltalk.MWAnnouncer||(typeof MWAnnouncer=="undefined"?nil:MWAnnouncer)}
function $MWSuccessForSearch(){return smalltalk.MWSuccessForSearch||(typeof MWSuccessForSearch=="undefined"?nil:MWSuccessForSearch)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
tempActions=_st($Array())._new();
_st(data)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(tempActions)._add_(_st($Association())._key_value_(key,value));
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
self["@actions"]=_st(tempActions)._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(a)._key()).__lt(_st(b)._key());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
self["@isFetched"]=true;
_st(_st($MWAnnouncer())._current())._announce_(_st($MWSuccess())._new());
$1=_st($MWSuccessForSearch())._new();
_st($1)._actions_(self["@actions"]);
$2=_st($1)._yourself();
_st(_st($MWAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"success:",{data:data,tempActions:tempActions},smalltalk.MWActionList)})},
args: ["data"],
source: "success: data\x0a\x09| tempActions |\x0a\x09tempActions := Array new.\x0a    data keysAndValuesDo: [ :key :value | \x0a    \x09tempActions add: (Association key: key value: value)\x0a    ].\x0a    actions := tempActions sorted: [ :a :b | a key < b key ] .\x0a    isFetched := true.\x0a    MWAnnouncer current announce: MWSuccess new.\x0a\x09MWAnnouncer current announce: (MWSuccessForSearch new actions: actions; yourself).",
messageSends: ["new", "keysAndValuesDo:", "add:", "key:value:", "sorted:", "<", "key", "announce:", "current", "actions:", "yourself"],
referencedClasses: ["Array", "Association", "MWSuccess", "MWAnnouncer", "MWSuccessForSearch"]
}),
smalltalk.MWActionList);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@mooseEntity"])._title();
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.MWActionList)})},
args: [],
source: "title\x0a\x09^mooseEntity title",
messageSends: ["title"],
referencedClasses: []
}),
smalltalk.MWActionList);



smalltalk.addClass('MWModelRoot', smalltalk.MWAbstractItem, ['models'], 'MooseOnWeb');
smalltalk.MWModelRoot.comment="MWModelRoot is an object containing all the models provided by the Moose On Web Api";
smalltalk.addMethod(
smalltalk.method({
selector: "click:",
category: 'render',
fn: function (entity){
var self=this;
function $MWActionList(){return smalltalk.MWActionList||(typeof MWActionList=="undefined"?nil:MWActionList)}
function $MWResetColumn(){return smalltalk.MWResetColumn||(typeof MWResetColumn=="undefined"?nil:MWResetColumn)}
function $MWAnnouncer(){return smalltalk.MWAnnouncer||(typeof MWAnnouncer=="undefined"?nil:MWAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MWActionList())._new();
_st($1)._mooseEntity_(entity);
_st($1)._getActions();
$2=_st($1)._yourself();
_st(_st($MWAnnouncer())._current())._announce_(_st(_st($MWResetColumn())._new())._content_($2));
return self}, function($ctx1) {$ctx1.fill(self,"click:",{entity:entity},smalltalk.MWModelRoot)})},
args: ["entity"],
source: "click: entity\x0a\x09MWAnnouncer current announce: \x0a    \x09(MWResetColumn new content: (\x0a                MWActionList new \x0a            \x09mooseEntity: entity; \x0a                getActions; \x0a              \x09yourself\x0a      \x09\x09\x09)\x0a         )",
messageSends: ["announce:", "content:", "mooseEntity:", "new", "getActions", "yourself", "current"],
referencedClasses: ["MWActionList", "MWResetColumn", "MWAnnouncer"]
}),
smalltalk.MWModelRoot);

smalltalk.addMethod(
smalltalk.method({
selector: "cssId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#models-list";
}, function($ctx1) {$ctx1.fill(self,"cssId",{},smalltalk.MWModelRoot)})},
args: [],
source: "cssId \x0a\x09^'#models-list'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWModelRoot);

smalltalk.addMethod(
smalltalk.method({
selector: "getModels",
category: 'query',
fn: function (){
var self=this;
var result;
function $MWEntryPoint(){return smalltalk.MWEntryPoint||(typeof MWEntryPoint=="undefined"?nil:MWEntryPoint)}
return smalltalk.withContext(function($ctx1) { 
_st(jQuery)._ajax_options_(_st(_st($MWEntryPoint())._restApiLocation()).__comma(_st($MWEntryPoint())._urlModels()),smalltalk.HashedCollection._from_(["type".__minus_gt("GET"),"success".__minus_gt((function(tmp){
return smalltalk.withContext(function($ctx2) {
return self._success_(tmp);
}, function($ctx2) {$ctx2.fillBlock({tmp:tmp},$ctx1)})})),"error".__minus_gt((function(a,b,c){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_("error in getting models list");
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b,c:c},$ctx1)})})),"dataType".__minus_gt("json")]));
return self}, function($ctx1) {$ctx1.fill(self,"getModels",{result:result},smalltalk.MWModelRoot)})},
args: [],
source: "getModels\x0a\x09| result |\x0a\x09jQuery \x0a\x09\x09ajax: MWEntryPoint restApiLocation, MWEntryPoint urlModels\x0a\x09\x09options: #{\x0a\x09\x09\x09'type' -> 'GET'.\x0a            'success' ->  [ :tmp | self success: tmp].\x0a\x09\x09\x09'error' -> [:a :b : c |window alert:'error in getting models list'.].\x0a\x09\x09\x09'dataType' -> 'json'\x0a\x09\x09}.",
messageSends: ["ajax:options:", ",", "urlModels", "restApiLocation", "->", "success:", "alert:"],
referencedClasses: ["MWEntryPoint"]
}),
smalltalk.MWModelRoot);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $MWRefreshModelsList(){return smalltalk.MWRefreshModelsList||(typeof MWRefreshModelsList=="undefined"?nil:MWRefreshModelsList)}
function $MWAnnouncer(){return smalltalk.MWAnnouncer||(typeof MWAnnouncer=="undefined"?nil:MWAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.MWModelRoot.superclass.fn.prototype._initialize.apply(_st(self), []);
_st(_st($MWAnnouncer())._current())._on_do_($MWRefreshModelsList(),(function(announcement){
return smalltalk.withContext(function($ctx2) {
return self._getModels();
}, function($ctx2) {$ctx2.fillBlock({announcement:announcement},$ctx1)})}));
self._getModels();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MWModelRoot)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    MWAnnouncer current on: MWRefreshModelsList do: [ :announcement |self getModels ].\x0a\x09self getModels",
messageSends: ["initialize", "on:do:", "getModels", "current"],
referencedClasses: ["MWRefreshModelsList", "MWAnnouncer"]
}),
smalltalk.MWModelRoot);

smalltalk.addMethod(
smalltalk.method({
selector: "render",
category: 'render',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._cssId())._asJQuery())._empty();
self._appendToJQuery_(_st(self._cssId())._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"render",{},smalltalk.MWModelRoot)})},
args: [],
source: "render\x0a\x09(self cssId asJQuery) empty.\x0a\x09self appendToJQuery: (self cssId) asJQuery",
messageSends: ["empty", "asJQuery", "cssId", "appendToJQuery:"],
referencedClasses: []
}),
smalltalk.MWModelRoot);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'render',
fn: function (menu){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
_st(self["@models"])._do_((function(e){
return smalltalk.withContext(function($ctx2) {
$1=_st(menu)._li();
_st($1)._href_("#");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(menu)._a();
_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._click_(e);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
$4=_st($3)._with_(_st(e)._name());
return $4;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{menu:menu},smalltalk.MWModelRoot)})},
args: ["menu"],
source: "renderOn: menu\x0a   \x09models do: [ :e |\x0a    \x09menu li\x0a        \x09href: '#'; \x0a        \x09with:\x0a        \x09\x09[ menu a \x0a            \x09\x09onClick: [ self click: e ]; \x0a            \x09\x09with: e name.  \x0a               ]\x0a\x09]",
messageSends: ["do:", "href:", "li", "with:", "onClick:", "click:", "a", "name"],
referencedClasses: []
}),
smalltalk.MWModelRoot);

smalltalk.addMethod(
smalltalk.method({
selector: "success:",
category: 'query',
fn: function (data){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $MWMooseEntity(){return smalltalk.MWMooseEntity||(typeof MWMooseEntity=="undefined"?nil:MWMooseEntity)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@models"]=_st($Array())._new();
_st(data)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
$1=_st($MWMooseEntity())._new();
_st($1)._name_(_st(e)._name());
_st($1)._id_(_st(e)._id());
_st($1)._type_(_st(e)._type());
$2=_st($1)._yourself();
return _st(self["@models"])._add_($2);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
self._render();
return self}, function($ctx1) {$ctx1.fill(self,"success:",{data:data},smalltalk.MWModelRoot)})},
args: ["data"],
source: "success: data\x0a\x09models := Array new.\x0a\x09data do: [:e |  \x0a    \x09models add: (\x0a        \x09MWMooseEntity new \x0a            \x09name: e name; \x0a                id: e id;\x0a                type: e type;\x0a                yourself\x0a             )\x0a\x09].\x0a\x09self render.",
messageSends: ["new", "do:", "add:", "name:", "name", "id:", "id", "type:", "type", "yourself", "render"],
referencedClasses: ["Array", "MWMooseEntity"]
}),
smalltalk.MWModelRoot);



smalltalk.addClass('MWMooseEntity', smalltalk.MWAbstractItem, ['id', 'name', 'type', 'properties', 'isFetched'], 'MooseOnWeb');
smalltalk.MWMooseEntity.comment="MWMooseEntity is a Object containing all the items describing a entity : \x0aid, name, type, properties";
smalltalk.addMethod(
smalltalk.method({
selector: "clickFrom:",
category: 'rendering',
fn: function (colId){
var self=this;
function $MWAddColumn(){return smalltalk.MWAddColumn||(typeof MWAddColumn=="undefined"?nil:MWAddColumn)}
function $MWAnnouncer(){return smalltalk.MWAnnouncer||(typeof MWAnnouncer=="undefined"?nil:MWAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MWAddColumn())._new();
_st($1)._content_(self);
$2=_st($1)._colId_(colId);
_st(_st($MWAnnouncer())._current())._announce_($2);
self._getProperties();
return self}, function($ctx1) {$ctx1.fill(self,"clickFrom:",{colId:colId},smalltalk.MWMooseEntity)})},
args: ["colId"],
source: "clickFrom: colId\x0a  \x09MWAnnouncer current announce: (\x0a    \x09MWAddColumn new \x0a        \x09content: self;\x0a            colId: colId\x0a    ).\x0a\x09self getProperties.",
messageSends: ["announce:", "content:", "new", "colId:", "current", "getProperties"],
referencedClasses: ["MWAddColumn", "MWAnnouncer"]
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "getProperties",
category: 'query',
fn: function (){
var self=this;
function $MWEntryPoint(){return smalltalk.MWEntryPoint||(typeof MWEntryPoint=="undefined"?nil:MWEntryPoint)}
return smalltalk.withContext(function($ctx1) { 
_st(jQuery)._ajax_options_(_st(_st(_st(_st($MWEntryPoint())._restApiLocation()).__comma(_st($MWEntryPoint())._urlEntities())).__comma("/")).__comma(self._id()),smalltalk.HashedCollection._from_(["type".__minus_gt("GET"),"success".__minus_gt((function(data){
return smalltalk.withContext(function($ctx2) {
return self._success_(data);
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})})),"error".__minus_gt((function(){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_("error in getting entities properties");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"dataType".__minus_gt("json")]));
return self}, function($ctx1) {$ctx1.fill(self,"getProperties",{},smalltalk.MWMooseEntity)})},
args: [],
source: "getProperties\x0a\x09jQuery \x0a\x09\x09ajax: MWEntryPoint restApiLocation, MWEntryPoint urlEntities, '/', self id\x0a\x09\x09options: #{\x0a\x09\x09\x09'type' -> 'GET'.\x0a            'success' ->  [ :data | self success: data].\x0a\x09\x09\x09'error' -> [window alert:'error in getting entities properties'].\x0a\x09\x09\x09'dataType' -> 'json'\x0a\x09\x09}.",
messageSends: ["ajax:options:", ",", "id", "urlEntities", "restApiLocation", "->", "success:", "alert:"],
referencedClasses: ["MWEntryPoint"]
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@id"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.MWMooseEntity)})},
args: [],
source: "id \x0a\x09^id",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "id:",
category: 'accessing',
fn: function (anId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@id"]=anId;
return self}, function($ctx1) {$ctx1.fill(self,"id:",{anId:anId},smalltalk.MWMooseEntity)})},
args: ["anId"],
source: "id: anId\x0a\x09id:=anId",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.MWMooseEntity.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@isFetched"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MWMooseEntity)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09isFetched := false.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@name"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.MWMooseEntity)})},
args: [],
source: "name\x0a\x09^name",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
category: 'accessing',
fn: function (anName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@name"]=anName;
return self}, function($ctx1) {$ctx1.fill(self,"name:",{anName:anName},smalltalk.MWMooseEntity)})},
args: ["anName"],
source: "name: anName\x0a\x09name:=anName",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "properties",
category: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@properties"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@properties"]=_st($Dictionary())._new();
$1=self["@properties"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"properties",{},smalltalk.MWMooseEntity)})},
args: [],
source: "properties\x0a\x09^properties ifNil: [ properties := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._properties())._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._li())._with_((function(li){
return smalltalk.withContext(function($ctx3) {
self._renderHeaderOn_withKey_withValue_(li,key,value);
return _st(li)._with_(value);
}, function($ctx3) {$ctx3.fillBlock({li:li},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MWMooseEntity)})},
args: ["html"],
source: "renderContentOn: html\x0a\x09self properties keysAndValuesDo: [ :key :value |\x0a    \x09html li \x0a        \x09with:  \x0a            \x09[ :li  |\x0a                  self renderHeaderOn: li withKey: key withValue: value.\x0a                  li with: value\x0a \x09\x09\x09\x09]\x0a    ].",
messageSends: ["keysAndValuesDo:", "with:", "renderHeaderOn:withKey:withValue:", "li", "properties"],
referencedClasses: []
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeaderOn:withKey:withValue:",
category: 'rendering',
fn: function (html,key,value){
var self=this;
function $MWEntryPoint(){return smalltalk.MWEntryPoint||(typeof MWEntryPoint=="undefined"?nil:MWEntryPoint)}
function $MWMooseGroup(){return smalltalk.MWMooseGroup||(typeof MWMooseGroup=="undefined"?nil:MWMooseGroup)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(value)._isKindOf_($MWMooseGroup());
if(smalltalk.assert($1)){
$2=_st(html)._a();
_st($2)._href_("#");
_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(value)._clickFrom_(self._getColumnNumber());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st($2)._with_(_st(key).__comma(" : "));
$3=_st($2)._style_("color: ".__comma(_st($MWEntryPoint())._colorGroup()));
$3;
} else {
$4=_st(html)._span();
_st($4)._style_("color: ".__comma(_st($MWEntryPoint())._colorItems()));
$5=_st($4)._with_(_st(key).__comma(" : "));
$5;
};
return self}, function($ctx1) {$ctx1.fill(self,"renderHeaderOn:withKey:withValue:",{html:html,key:key,value:value},smalltalk.MWMooseEntity)})},
args: ["html", "key", "value"],
source: "renderHeaderOn: html withKey: key withValue: value\x0a\x09(value isKindOf: MWMooseGroup) ifTrue: [\x0a    \x09html a\x0a      \x09\x09href: '#';\x0a      \x09\x09onClick: [ value clickFrom: self getColumnNumber ];\x0a      \x09\x09with: (key, ' : ');\x0a      \x09\x09style: ('color: ', MWEntryPoint colorGroup)  \x0a\x09] ifFalse: [  \x0a  \x09\x09html span\x0a  \x09\x09\x09style: ('color: ', MWEntryPoint colorItems);\x0a  \x09\x09\x09with: key, ' : ' .\x0a\x09].",
messageSends: ["ifTrue:ifFalse:", "href:", "a", "onClick:", "clickFrom:", "getColumnNumber", "with:", ",", "style:", "colorGroup", "colorItems", "span", "isKindOf:"],
referencedClasses: ["MWEntryPoint", "MWMooseGroup"]
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@isFetched"];
if(smalltalk.assert($1)){
$2=_st(html)._ul();
_st($2)._class_("unstyled");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderContentOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@htmlAnchor"]=$3;
} else {
self["@htmlAnchor"]=_st(html)._with_("Loading");
};
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.MWMooseEntity)})},
args: ["html"],
source: "renderOn: html\x0a\x09htmlAnchor := isFetched ifTrue: [     \x0a\x09\x09html ul \x0a\x09\x09class: 'unstyled';\x0a\x09\x09with: [self renderContentOn: html] ]\x0a\x09ifFalse: [ \x0a\x09\x09html with: 'Loading'.\x0a\x09\x09\x0a\x09]",
messageSends: ["ifTrue:ifFalse:", "class:", "ul", "with:", "renderContentOn:"],
referencedClasses: []
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "success:",
category: 'query',
fn: function (data){
var self=this;
function $MWSuccess(){return smalltalk.MWSuccess||(typeof MWSuccess=="undefined"?nil:MWSuccess)}
function $MWAnnouncer(){return smalltalk.MWAnnouncer||(typeof MWAnnouncer=="undefined"?nil:MWAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
self["@isFetched"]=true;
_st(data)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
return _st(self._properties())._at_put_(key,_st(value)._asMooseGroupWithAction_withParentId_(key,self._id()));
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1)})}));
_st(_st($MWAnnouncer())._current())._announce_(_st($MWSuccess())._new());
return self}, function($ctx1) {$ctx1.fill(self,"success:",{data:data},smalltalk.MWMooseEntity)})},
args: ["data"],
source: "success: data\x0a\x09isFetched := true.\x0a\x09data keysAndValuesDo: [ :key :value | \x0a    \x09self properties at: key put: ( value asMooseGroupWithAction: key withParentId: self id ).\x0a\x09].\x0a    MWAnnouncer current announce: MWSuccess new.",
messageSends: ["keysAndValuesDo:", "at:put:", "asMooseGroupWithAction:withParentId:", "id", "properties", "announce:", "new", "current"],
referencedClasses: ["MWSuccess", "MWAnnouncer"]
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._name();
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.MWMooseEntity)})},
args: [],
source: "title\x0a\x09^self name",
messageSends: ["name"],
referencedClasses: []
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "type",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@type"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"type",{},smalltalk.MWMooseEntity)})},
args: [],
source: "type\x0a\x09^type",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "type:",
category: 'accessing',
fn: function (anType){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@type"]=anType;
return self}, function($ctx1) {$ctx1.fill(self,"type:",{anType:anType},smalltalk.MWMooseEntity)})},
args: ["anType"],
source: "type: anType\x0a\x09type :=anType",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseEntity);



smalltalk.addClass('MWMooseGroup', smalltalk.MWAbstractItem, ['id', 'name', 'type', 'entities', 'action', 'parentId', 'isSearchable'], 'MooseOnWeb');
smalltalk.MWMooseGroup.comment="`MWMooseGroup` contains references to MooseEntities, an id, name and a type.";
smalltalk.addMethod(
smalltalk.method({
selector: "action",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@action"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"action",{},smalltalk.MWMooseGroup)})},
args: [],
source: "action\x0a\x09^action",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "action:",
category: 'accessing',
fn: function (anAction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@action"]=anAction;
return self}, function($ctx1) {$ctx1.fill(self,"action:",{anAction:anAction},smalltalk.MWMooseGroup)})},
args: ["anAction"],
source: "action: anAction\x0a\x09action := anAction",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'accessing',
fn: function (aJSObject){
var self=this;
function $MWMooseEntity(){return smalltalk.MWMooseEntity||(typeof MWMooseEntity=="undefined"?nil:MWMooseEntity)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MWMooseEntity())._new();
_st($1)._id_(_st(aJSObject)._id());
_st($1)._type_(_st(aJSObject)._type());
$2=_st($1)._name_(_st(aJSObject)._name());
_st(self._entities())._add_($2);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{aJSObject:aJSObject},smalltalk.MWMooseGroup)})},
args: ["aJSObject"],
source: "add: aJSObject\x0a\x09\x22anObjectCollection contains MWMooseEntity under JSON format\x22\x0a    self entities add: (\x0a\x09\x09MWMooseEntity new \x0a\x09\x09\x09id: aJSObject id; \x0a\x09\x09\x09type: aJSObject type; \x0a\x09\x09\x09name: aJSObject name)",
messageSends: ["add:", "id:", "id", "new", "type:", "type", "name:", "name", "entities"],
referencedClasses: ["MWMooseEntity"]
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "addAll:",
category: 'accessing',
fn: function (anObjectCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anObjectCollection)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._add_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addAll:",{anObjectCollection:anObjectCollection},smalltalk.MWMooseGroup)})},
args: ["anObjectCollection"],
source: "addAll: anObjectCollection\x0a\x09\x22anObjectCollection contains MWMooseEntity under JSON format\x22\x0a    anObjectCollection do: [ :e | \x0a    \x09self add: e\x0a    ]",
messageSends: ["do:", "add:"],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "clickFrom:",
category: 'render',
fn: function (colId){
var self=this;
function $MWAddColumn(){return smalltalk.MWAddColumn||(typeof MWAddColumn=="undefined"?nil:MWAddColumn)}
function $MWAnnouncer(){return smalltalk.MWAnnouncer||(typeof MWAnnouncer=="undefined"?nil:MWAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MWAddColumn())._new();
_st($1)._content_(self);
$2=_st($1)._colId_(colId);
_st(_st($MWAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"clickFrom:",{colId:colId},smalltalk.MWMooseGroup)})},
args: ["colId"],
source: "clickFrom: colId\x0a  \x09MWAnnouncer current announce: (\x0a    \x09MWAddColumn new \x0a        \x09content: self;\x0a            colId: colId\x0a    ).",
messageSends: ["announce:", "content:", "new", "colId:", "current"],
referencedClasses: ["MWAddColumn", "MWAnnouncer"]
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "entities",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@entities"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@entities"]=_st($Array())._new();
$1=self["@entities"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"entities",{},smalltalk.MWMooseGroup)})},
args: [],
source: "entities\x0a\x09^entities ifNil: [ entities := Array new. ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@id"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.MWMooseGroup)})},
args: [],
source: "id\x0a\x09^id",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "id:",
category: 'accessing',
fn: function (anId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@id"]=anId;
return self}, function($ctx1) {$ctx1.fill(self,"id:",{anId:anId},smalltalk.MWMooseGroup)})},
args: ["anId"],
source: "id: anId\x0a\x09id:=anId",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isSearchable"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MWMooseGroup)})},
args: [],
source: "initialize \x0a\x09isSearchable := true",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "isSearchableColumn",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@isSearchable"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSearchableColumn",{},smalltalk.MWMooseGroup)})},
args: [],
source: "isSearchableColumn\x0a \x09^isSearchable",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "isSearchableColumn:",
category: 'accessing',
fn: function (aBool){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isSearchable"]=aBool;
return self}, function($ctx1) {$ctx1.fill(self,"isSearchableColumn:",{aBool:aBool},smalltalk.MWMooseGroup)})},
args: ["aBool"],
source: "isSearchableColumn: aBool\x0a \x09isSearchable := aBool",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@name"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.MWMooseGroup)})},
args: [],
source: "name\x0a\x09^name",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
category: 'accessing',
fn: function (anName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@name"]=anName;
return self}, function($ctx1) {$ctx1.fill(self,"name:",{anName:anName},smalltalk.MWMooseGroup)})},
args: ["anName"],
source: "name: anName\x0a\x09name:=anName",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "parentId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@parentId"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parentId",{},smalltalk.MWMooseGroup)})},
args: [],
source: "parentId\x0a\x09^parentId",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "parentId:",
category: 'accessing',
fn: function (anId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@parentId"]=anId;
$1=_st(anId).__eq((-1));
if(smalltalk.assert($1)){
self._isSearchableColumn_(false);
};
return self}, function($ctx1) {$ctx1.fill(self,"parentId:",{anId:anId},smalltalk.MWMooseGroup)})},
args: ["anId"],
source: "parentId: anId\x0a\x09parentId:= anId.\x0a    (anId= -1) ifTrue: [ self isSearchableColumn: false ]",
messageSends: ["ifTrue:", "isSearchableColumn:", "="],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
category: 'render',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(self._entities())._sorted_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(a)._name()).__lt(_st(b)._name());
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})})))._do_((function(e){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._a();
_st($1)._href_("#");
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(e)._clickFrom_(self._getColumnNumber());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$2=_st($1)._with_(_st(e)._name());
return _st(_st(html)._li())._with_($2);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},smalltalk.MWMooseGroup)})},
args: ["html"],
source: "renderContentOn: html\x0a    (self entities sorted: [:a :b | a name < b name ] ) do: [ :e |\x0a      html li \x0a    \x09  with:\x0a    \x09\x09  (html a\x0a   \x09\x09\x09\x09   href: '#';\x0a   \x09\x09\x09\x09   onClick: [ e clickFrom: self getColumnNumber ]; \x0a   \x09\x09\x09\x09   with: e name\x0a     \x09\x09\x09 )\x0a    ]",
messageSends: ["do:", "with:", "href:", "a", "onClick:", "clickFrom:", "getColumnNumber", "name", "li", "sorted:", "<", "entities"],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'render',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._pre();
_st($1)._class_("pre-scrollable");
$3=_st(html)._ul();
_st($3)._class_("unstyled");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderContentOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._with_($4);
self["@htmlAnchor"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.MWMooseGroup)})},
args: ["html"],
source: "renderOn: html\x0a\x09htmlAnchor := \x0a        html pre\x0a           class: 'pre-scrollable';\x0a           with: (\x0a    \x09\x09\x09html ul\x0a    \x09\x09\x09class: 'unstyled';\x0a        \x09\x09with: [self renderContentOn: html]\x0a              )",
messageSends: ["class:", "pre", "with:", "ul", "renderContentOn:"],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._name();
if(($receiver = $2) == nil || $receiver == undefined){
$3=self._action();
return $3;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.MWMooseGroup)})},
args: [],
source: "title\x0a\x09^self name ifNil: [ ^self action ]",
messageSends: ["ifNil:", "action", "name"],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "type",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@type"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"type",{},smalltalk.MWMooseGroup)})},
args: [],
source: "type\x0a\x09^type",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "type:",
category: 'accessing',
fn: function (anType){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@type"]=anType;
return self}, function($ctx1) {$ctx1.fill(self,"type:",{anType:anType},smalltalk.MWMooseGroup)})},
args: ["anType"],
source: "type: anType\x0a\x09type :=anType",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMooseGroup);



smalltalk.addClass('MWResult', smalltalk.MWAbstractItem, ['sourceEntity', 'action', 'result', 'isFetched', 'isSearchableColumn'], 'MooseOnWeb');
smalltalk.MWResult.comment="a `MWResult` is created when an request with an action has been sent and the result catched.";
smalltalk.addMethod(
smalltalk.method({
selector: "action",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@action"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"action",{},smalltalk.MWResult)})},
args: [],
source: "action\x0a\x09^action",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWResult);

smalltalk.addMethod(
smalltalk.method({
selector: "action:",
category: 'accessing',
fn: function (anAction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@action"]=anAction;
return self}, function($ctx1) {$ctx1.fill(self,"action:",{anAction:anAction},smalltalk.MWResult)})},
args: ["anAction"],
source: "action: anAction\x0a\x09action := anAction",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWResult);

smalltalk.addMethod(
smalltalk.method({
selector: "entities",
category: 'query',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@result"])._entities();
return $1;
}, function($ctx1) {$ctx1.fill(self,"entities",{},smalltalk.MWResult)})},
args: [],
source: "entities\x0a\x09^result entities",
messageSends: ["entities"],
referencedClasses: []
}),
smalltalk.MWResult);

smalltalk.addMethod(
smalltalk.method({
selector: "getResult",
category: 'query',
fn: function (){
var self=this;
function $MWEntryPoint(){return smalltalk.MWEntryPoint||(typeof MWEntryPoint=="undefined"?nil:MWEntryPoint)}
return smalltalk.withContext(function($ctx1) { 
_st(jQuery)._ajax_options_(_st(_st(_st(_st(_st(_st($MWEntryPoint())._restApiLocation()).__comma(_st($MWEntryPoint())._urlEntities())).__comma("/")).__comma(_st(self._sourceEntity())._id())).__comma("?action=")).__comma(self._action()),smalltalk.HashedCollection._from_(["type".__minus_gt("GET"),"success".__minus_gt((function(data){
return smalltalk.withContext(function($ctx2) {
return self._success_(data);
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})})),"error".__minus_gt((function(){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_("error in getting actions result");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),"dataType".__minus_gt("json")]));
return self}, function($ctx1) {$ctx1.fill(self,"getResult",{},smalltalk.MWResult)})},
args: [],
source: "getResult\x0a\x09jQuery \x0a\x09\x09ajax: MWEntryPoint restApiLocation, MWEntryPoint urlEntities,'/',self sourceEntity id, '?action=',self action\x0a\x09\x09options: #{\x0a\x09\x09\x09'type' -> 'GET'.\x0a            'success' ->  [ :data | self success: data].\x0a\x09\x09\x09'error' -> [ window alert:'error in getting actions result' ].\x0a\x09\x09\x09'dataType' -> 'json'\x0a\x09\x09}.",
messageSends: ["ajax:options:", ",", "action", "id", "sourceEntity", "urlEntities", "restApiLocation", "->", "success:", "alert:"],
referencedClasses: ["MWEntryPoint"]
}),
smalltalk.MWResult);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'query',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.MWResult.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@isFetched"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MWResult)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09isFetched := false.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.MWResult);

smalltalk.addMethod(
smalltalk.method({
selector: "isSearchableColumn",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@isSearchableColumn"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=false;
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSearchableColumn",{},smalltalk.MWResult)})},
args: [],
source: "isSearchableColumn\x0a\x09^isSearchableColumn ifNil: [ false ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MWResult);

smalltalk.addMethod(
smalltalk.method({
selector: "parentId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@sourceEntity"])._id();
return $1;
}, function($ctx1) {$ctx1.fill(self,"parentId",{},smalltalk.MWResult)})},
args: [],
source: "parentId\x0a\x09^sourceEntity id",
messageSends: ["id"],
referencedClasses: []
}),
smalltalk.MWResult);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@isFetched"];
if(smalltalk.assert($1)){
_st(html)._with_(self["@result"]);
} else {
_st(_st(html)._div())._with_("Loading");
};
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.MWResult)})},
args: ["html"],
source: "renderOn: html\x0a    isFetched ifFalse: [ \x0a    \x09html div with: 'Loading'.\x0a\x09] ifTrue: [ \x0a    \x09html with: result \x0a\x09]",
messageSends: ["ifFalse:ifTrue:", "with:", "div"],
referencedClasses: []
}),
smalltalk.MWResult);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceEntity",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sourceEntity"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sourceEntity",{},smalltalk.MWResult)})},
args: [],
source: "sourceEntity\x0a\x09^sourceEntity",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWResult);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceEntity:",
category: 'accessing',
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sourceEntity"]=anEntity;
return self}, function($ctx1) {$ctx1.fill(self,"sourceEntity:",{anEntity:anEntity},smalltalk.MWResult)})},
args: ["anEntity"],
source: "sourceEntity: anEntity\x0a\x09sourceEntity := anEntity",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWResult);

smalltalk.addMethod(
smalltalk.method({
selector: "success:",
category: 'query',
fn: function (data){
var self=this;
var group;
function $MessageNotUnderstood(){return smalltalk.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
function $MWMooseGroup(){return smalltalk.MWMooseGroup||(typeof MWMooseGroup=="undefined"?nil:MWMooseGroup)}
function $JSObjectProxy(){return smalltalk.JSObjectProxy||(typeof JSObjectProxy=="undefined"?nil:JSObjectProxy)}
function $MWSuccess(){return smalltalk.MWSuccess||(typeof MWSuccess=="undefined"?nil:MWSuccess)}
function $MWAnnouncer(){return smalltalk.MWAnnouncer||(typeof MWAnnouncer=="undefined"?nil:MWAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@isFetched"]=true;
_st((function(){
return smalltalk.withContext(function($ctx2) {
group=_st(_st($MWMooseGroup())._new())._addAll_(_st(data)._entities());
group;
_st(group)._action_(self._action());
_st(group)._parentId_(_st(self["@sourceEntity"])._id());
self["@result"]=group;
self["@result"];
self["@isSearchableColumn"]=true;
return self["@isSearchableColumn"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($MessageNotUnderstood(),(function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(data)._isKindOf_($JSObjectProxy());
if(smalltalk.assert($1)){
group=_st(_st($MWMooseGroup())._new())._add_(data);
group;
_st(group)._action_(self._action());
_st(group)._parentId_(_st(self["@sourceEntity"])._id());
self["@result"]=group;
} else {
self["@result"]=data;
};
return self["@result"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st($MWAnnouncer())._current())._announce_(_st($MWSuccess())._new());
return self}, function($ctx1) {$ctx1.fill(self,"success:",{data:data,group:group},smalltalk.MWResult)})},
args: ["data"],
source: "success: data\x0a   \x09| group |\x0a\x09isFetched := true.\x0a\x09[ \x09\x0a    \x09group := MWMooseGroup new addAll: (data entities).\x0a        group action: self action.\x0a        group  parentId: sourceEntity id.\x0a        result := group.\x0a        isSearchableColumn := true.\x0a\x09] on: MessageNotUnderstood do:\x0a    [ \x0a    \x09result := (data isKindOf: JSObjectProxy) ifTrue: [ \x0a        \x09group := MWMooseGroup new add: ( data ) .\x0a            group action: self action.\x0a      \x09\x09group  parentId: sourceEntity id.\x0a            group\x0a            \x0a  \x09\x09] ifFalse: [ data ].\x0a      \x09  \x0a\x09].\x0a  \x09MWAnnouncer current announce: MWSuccess new.",
messageSends: ["on:do:", "ifTrue:ifFalse:", "add:", "new", "action:", "action", "parentId:", "id", "isKindOf:", "addAll:", "entities", "announce:", "current"],
referencedClasses: ["MessageNotUnderstood", "MWMooseGroup", "JSObjectProxy", "MWSuccess", "MWAnnouncer"]
}),
smalltalk.MWResult);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._action();
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.MWResult)})},
args: [],
source: "title\x0a\x09^self action",
messageSends: ["action"],
referencedClasses: []
}),
smalltalk.MWResult);



smalltalk.addClass('MWAbstractModal', smalltalk.Widget, [], 'MooseOnWeb');
smalltalk.MWAbstractModal.comment="A `MWAbstractModal` contains methods for boostrap modal";
smalltalk.addMethod(
smalltalk.method({
selector: "render",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._cssId())._asJQuery())._empty();
self._appendToJQuery_(_st(self._cssId())._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"render",{},smalltalk.MWAbstractModal)})},
args: [],
source: "render\x0a\x09(self cssId asJQuery) empty.\x0a\x09self appendToJQuery: (self cssId) asJQuery",
messageSends: ["empty", "asJQuery", "cssId", "appendToJQuery:"],
referencedClasses: []
}),
smalltalk.MWAbstractModal);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeaderOn:title:",
category: 'rendering',
fn: function (html,aTitle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("modal-header");
$2=_st($1)._with_((function(el){
return smalltalk.withContext(function($ctx2) {
$3=_st(el)._button();
_st($3)._type_("button");
_st($3)._class_("close");
_st($3)._at_put_("data-dismiss","modal");
_st($3)._at_put_("aria-hidden","true");
$4=_st($3)._with_("×");
$4;
return _st(_st(el)._h3())._with_(aTitle);
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderHeaderOn:title:",{html:html,aTitle:aTitle},smalltalk.MWAbstractModal)})},
args: ["html", "aTitle"],
source: "renderHeaderOn: html title: aTitle\x0a\x09html div\x0a    \x09class:'modal-header';\x0a        with: [ :el |\x0a        \x09el button \x0a            \x09type:'button';\x0a            \x09class:'close';\x0a            \x09at: 'data-dismiss' put:'modal';\x0a            \x09at: 'aria-hidden' put:'true';\x0a\x09            with: '×'.\x0a\x09\x09\x09el h3 \x0a                with: aTitle.\x0a        ]",
messageSends: ["class:", "div", "with:", "type:", "button", "at:put:", "h3"],
referencedClasses: []
}),
smalltalk.MWAbstractModal);



smalltalk.addClass('MWImporter', smalltalk.MWAbstractModal, [], 'MooseOnWeb');
smalltalk.MWImporter.comment="MWImporter handle the deletion of a model. It shows a modal and apply the deletion";
smalltalk.addMethod(
smalltalk.method({
selector: "cssId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#importModal";
}, function($ctx1) {$ctx1.fill(self,"cssId",{},smalltalk.MWImporter)})},
args: [],
source: "cssId\x0a\x09^ '#importModal'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWImporter);

smalltalk.addMethod(
smalltalk.method({
selector: "import",
category: 'query',
fn: function (){
var self=this;
var value;
function $MWEntryPoint(){return smalltalk.MWEntryPoint||(typeof MWEntryPoint=="undefined"?nil:MWEntryPoint)}
return smalltalk.withContext(function($ctx1) { 
_st(jQuery)._ajax_options_(_st(_st($MWEntryPoint())._restApiLocation()).__comma(_st($MWEntryPoint())._urlModels()),smalltalk.HashedCollection._from_(["type".__minus_gt("POST"),"success".__minus_gt((function(tmp){
return smalltalk.withContext(function($ctx2) {
return self._postSuccess_(tmp);
}, function($ctx2) {$ctx2.fillBlock({tmp:tmp},$ctx1)})})),"error".__minus_gt((function(a,b,c){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_("Error in searching");
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b,c:c},$ctx1)})})),"dataType".__minus_gt("json")]));
_st(_st(self._cssId())._asJQuery())._modal_("toggle");
return self}, function($ctx1) {$ctx1.fill(self,"import",{value:value},smalltalk.MWImporter)})},
args: [],
source: "import\x0a\x09| value |\x0a\x09\x22value := valueInput asJQuery val.\x22\x0a\x09jQuery \x0a    \x09ajax: MWEntryPoint restApiLocation, MWEntryPoint urlModels\x0a\x09\x09options: #{\x0a\x09\x09\x09'type' -> 'POST'.\x0a            'success' ->  [ :tmp | self postSuccess: tmp ].\x0a\x09\x09\x09'error' -> [:a :b : c |  window alert:'Error in searching'.].\x0a\x09\x09\x09'dataType' -> 'json' \x0a\x09\x09}.\x0a    (self cssId asJQuery) modal: 'toggle'.",
messageSends: ["ajax:options:", ",", "urlModels", "restApiLocation", "->", "postSuccess:", "alert:", "modal:", "asJQuery", "cssId"],
referencedClasses: ["MWEntryPoint"]
}),
smalltalk.MWImporter);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.MWImporter.superclass.fn.prototype._initialize.apply(_st(self), []);
self._render();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MWImporter)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self render.",
messageSends: ["initialize", "render"],
referencedClasses: []
}),
smalltalk.MWImporter);

smalltalk.addMethod(
smalltalk.method({
selector: "postSuccess:",
category: 'query',
fn: function (data){
var self=this;
function $MWRefreshModelsList(){return smalltalk.MWRefreshModelsList||(typeof MWRefreshModelsList=="undefined"?nil:MWRefreshModelsList)}
function $MWAnnouncer(){return smalltalk.MWAnnouncer||(typeof MWAnnouncer=="undefined"?nil:MWAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
_st(setTimeout)._value_value_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(self._cssId())._asJQuery())._modal_("toggle");
return _st(_st($MWAnnouncer())._current())._announce_(_st($MWRefreshModelsList())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),self._timeout());
return self}, function($ctx1) {$ctx1.fill(self,"postSuccess:",{data:data},smalltalk.MWImporter)})},
args: ["data"],
source: "postSuccess: data\x0a    setTimeout value: [ (self cssId asJQuery) modal: 'toggle'. MWAnnouncer current announce: (MWRefreshModelsList new)] value: self timeout",
messageSends: ["value:value:", "modal:", "asJQuery", "cssId", "announce:", "new", "current", "timeout"],
referencedClasses: ["MWRefreshModelsList", "MWAnnouncer"]
}),
smalltalk.MWImporter);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBodyOn:",
category: 'rendering',
fn: function (html){
var self=this;
var form,frame;
function $MWEntryPoint(){return smalltalk.MWEntryPoint||(typeof MWEntryPoint=="undefined"?nil:MWEntryPoint)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
_st(window)._at_put_("amber_upload",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_("coucou");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st(html)._div();
_st($1)._class_(" modal-body");
_st($1)._at_put_("max-height","200");
$2=_st($1)._with_((function(el){
return smalltalk.withContext(function($ctx2) {
$3=_st(el)._form();
_st($3)._method_("post");
_st($3)._action_(_st(_st($MWEntryPoint())._restApiLocation()).__comma(_st($MWEntryPoint())._urlModels()));
_st($3)._at_put_("enctype","multipart/form-data");
_st($3)._at_put_("encoding","multipart/form-data");
_st($3)._with_((function(content){
return smalltalk.withContext(function($ctx3) {
self._renderFormOn_(content);
$4=_st(el)._iframe();
_st($4)._id_("importIframe");
_st($4)._src_("about:blank");
_st($4)._style_("display:none");
_st($4)._name_("importIframe");
$5=_st($4)._yourself();
frame=$5;
return frame;
}, function($ctx3) {$ctx3.fillBlock({content:content},$ctx2)})}));
$6=_st($3)._yourself();
form=$6;
form;
return _st(form)._onSubmit_((function(){
return smalltalk.withContext(function($ctx3) {
_st(window)._alert_("submit");
_st(form)._target_("importIframe");
_st("importIframe"._asJQuery())._at_put_("onload",(function(){
return smalltalk.withContext(function($ctx4) {
return _st(window)._alert_("coucou");
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
return _st(console)._log_(frame);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBodyOn:",{html:html,form:form,frame:frame},smalltalk.MWImporter)})},
args: ["html"],
source: "renderBodyOn: html\x0a\x09| form frame |\x0a\x09window at: 'amber_upload' put: [ window alert: 'coucou' ].\x0a\x09\x0a\x09\x09html div class:' modal-body'; at:'max-height' put: '200'; with: [ :el |\x0a         \x09form := el form \x0a            \x09\x22target:'importIframe';\x22\x0a                method:'post';\x0a                action: MWEntryPoint restApiLocation, MWEntryPoint urlModels;\x0a                at: 'enctype' put: 'multipart/form-data';\x0a                at: 'encoding'  put: 'multipart/form-data';\x0a                with: [ :content | \x0a\x09\x09\x09\x09\x09self renderFormOn: content.\x0a\x09\x09\x09\x09\x09frame := el iframe \x0a\x09\x09\x09\x09\x09\x09id: 'importIframe';\x0a\x09\x09\x09\x09\x09\x09\x22at: 'onload' put: 'amber_upload_done()';\x22\x0a    \x09        \x09\x09src: 'about:blank';\x0a        \x09        \x09style: 'display:none';\x0a            \x09    \x09name: 'importIframe';\x0a\x09\x09\x09\x09\x09\x09yourself\x0a\x09\x09\x09\x09\x09];\x0a\x09\x09\x09\x09yourself.\x0a\x09\x09\x09form onSubmit: [\x0a\x09\x09\x09\x09window alert: 'submit'.\x0a\x09\x09\x09\x09form target:'importIframe'.\x0a\x09\x09\x09\x09'importIframe' asJQuery at: 'onload' put: [ window alert: 'coucou' ].\x0a\x09\x09\x09\x09console log: frame.\x0a\x09\x09\x09]\x0a\x09\x09\x09\x22frame asJQuery on: 'load' do: [ window alert: 'coucou' ]\x22\x0a\x09\x09]",
messageSends: ["at:put:", "alert:", "class:", "div", "with:", "method:", "form", "action:", ",", "urlModels", "restApiLocation", "renderFormOn:", "id:", "iframe", "src:", "style:", "name:", "yourself", "onSubmit:", "target:", "asJQuery", "log:"],
referencedClasses: ["MWEntryPoint"]
}),
smalltalk.MWImporter);

smalltalk.addMethod(
smalltalk.method({
selector: "renderFormOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$7,$9,$8,$6;
_st(_st(html)._fieldset())._with_((function(content){
return smalltalk.withContext(function($ctx2) {
_st(_st(content)._label())._with_("Model Name:");
$1=_st(content)._input();
_st($1)._type_("text");
_st($1)._name_("nameModel");
_st($1)._id_("nameModel");
_st($1)._placeholder_("Moose Model");
$2=_st($1)._at_put_("required",nil);
$2;
_st(_st(content)._label())._with_("MSE file to upload:");
$3=_st(content)._input();
_st($3)._type_("file");
$4=_st($3)._name_("mseFile");
$4;
$5=_st(content)._div();
_st($5)._class_("form-actions");
$7=_st(content)._button();
_st($7)._type_("submit");
_st($7)._class_("btn btn-primary");
_st($7)._with_("Submit");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
$9=_st(_st(_st("#nameModel"._asJQuery())._val())._size()).__eq((0));
if(! smalltalk.assert($9)){
return self._postSuccess_("");
};
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$6=_st($5)._with_($8);
return $6;
}, function($ctx2) {$ctx2.fillBlock({content:content},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderFormOn:",{html:html},smalltalk.MWImporter)})},
args: ["html"],
source: "renderFormOn: html\x0a\x09html fieldset with: [ :content |\x0a  \x09\x09content label with: 'Model Name:'.\x0a        content input \x0a\x09\x09\x09type:'text'; \x0a\x09\x09\x09name: 'nameModel'; \x0a\x09\x09\x09id:'nameModel'; \x0a\x09\x09\x09placeholder: 'Moose Model'; \x0a\x09\x09\x09at: 'required' put: nil.\x0a        content label with: 'MSE file to upload:'.\x0a  \x09\x09content input type:'file'; name:'mseFile'.\x0a        content div class:'form-actions'; with:\x0a  \x09\x09\x09(content button type:'submit'; class:'btn btn-primary'; with: 'Submit'; onClick: [\x0a              \x09\x09('#nameModel' asJQuery val size = 0) ifFalse: [self postSuccess: '']])\x0a\x09]",
messageSends: ["with:", "label", "type:", "input", "name:", "id:", "placeholder:", "at:put:", "class:", "div", "button", "onClick:", "ifFalse:", "postSuccess:", "=", "size", "val", "asJQuery", "fieldset"],
referencedClasses: []
}),
smalltalk.MWImporter);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderHeaderOn_title_(html,"Import MSE");
self._renderBodyOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.MWImporter)})},
args: ["html"],
source: "renderOn: html\x0a\x09self renderHeaderOn: html title: 'Import MSE'.\x0a    self renderBodyOn: html.",
messageSends: ["renderHeaderOn:title:", "renderBodyOn:"],
referencedClasses: []
}),
smalltalk.MWImporter);

smalltalk.addMethod(
smalltalk.method({
selector: "timeout",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (3000);
}, function($ctx1) {$ctx1.fill(self,"timeout",{},smalltalk.MWImporter)})},
args: [],
source: "timeout\x0a\x09^ 3000",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWImporter);



smalltalk.addClass('MWSearch', smalltalk.MWAbstractModal, ['group', 'isListUpdated', 'actionsList', 'selectedAction', 'selectedOperator', 'valueInput', 'anchor'], 'MooseOnWeb');
smalltalk.MWSearch.comment="`MWSearch` provide a search functionality. It's open a modal to precise the search parameters and do the search. It add a new column when the result is got";
smalltalk.addMethod(
smalltalk.method({
selector: "actionChosen:",
category: 'action',
fn: function (a){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._selectedAction_(a);
return self}, function($ctx1) {$ctx1.fill(self,"actionChosen:",{a:a},smalltalk.MWSearch)})},
args: ["a"],
source: "actionChosen: a\x0a\x09 self selectedAction: a.",
messageSends: ["selectedAction:"],
referencedClasses: []
}),
smalltalk.MWSearch);

smalltalk.addMethod(
smalltalk.method({
selector: "anchor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@anchor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"anchor",{},smalltalk.MWSearch)})},
args: [],
source: "anchor\x0a\x09^anchor",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWSearch);

smalltalk.addMethod(
smalltalk.method({
selector: "anchor:",
category: 'accessing',
fn: function (a){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@anchor"]=a;
return self}, function($ctx1) {$ctx1.fill(self,"anchor:",{a:a},smalltalk.MWSearch)})},
args: ["a"],
source: "anchor: a\x0a\x09anchor := a",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWSearch);

smalltalk.addMethod(
smalltalk.method({
selector: "cssId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#searchModal";
}, function($ctx1) {$ctx1.fill(self,"cssId",{},smalltalk.MWSearch)})},
args: [],
source: "cssId\x0a\x09^ '#searchModal'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWSearch);

smalltalk.addMethod(
smalltalk.method({
selector: "group:",
category: 'accessing',
fn: function (aMooseGroup){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@group"]=aMooseGroup;
self._updateList();
return self}, function($ctx1) {$ctx1.fill(self,"group:",{aMooseGroup:aMooseGroup},smalltalk.MWSearch)})},
args: ["aMooseGroup"],
source: "group: aMooseGroup\x0a\x09group := aMooseGroup.\x0a    self updateList",
messageSends: ["updateList"],
referencedClasses: []
}),
smalltalk.MWSearch);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $MWSuccessForSearch(){return smalltalk.MWSuccessForSearch||(typeof MWSuccessForSearch=="undefined"?nil:MWSuccessForSearch)}
function $MWAnnouncer(){return smalltalk.MWAnnouncer||(typeof MWAnnouncer=="undefined"?nil:MWAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.MWSearch.superclass.fn.prototype._initialize.apply(_st(self), []);
_st(_st($MWAnnouncer())._current())._on_do_($MWSuccessForSearch(),(function(announcement){
return smalltalk.withContext(function($ctx2) {
return self._updateListSuccess_(_st(announcement)._actions());
}, function($ctx2) {$ctx2.fillBlock({announcement:announcement},$ctx1)})}));
self["@isListUpdated"]=false;
self._render();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MWSearch)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    MWAnnouncer current on: MWSuccessForSearch do: [ :announcement |  self updateListSuccess: announcement actions ].\x0a    isListUpdated := false.\x0a\x09self render",
messageSends: ["initialize", "on:do:", "updateListSuccess:", "actions", "current", "render"],
referencedClasses: ["MWSuccessForSearch", "MWAnnouncer"]
}),
smalltalk.MWSearch);

smalltalk.addMethod(
smalltalk.method({
selector: "renderActionListOn:",
category: 'rendering',
fn: function (content){
var self=this;
var dropdown;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$6,$7,$8,$9,$4;
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
return smalltalk.withContext(function($ctx2) {
$5=self["@isListUpdated"];
if(smalltalk.assert($5)){
return _st(self["@actionsList"])._do_((function(associations){
return smalltalk.withContext(function($ctx3) {
$6=_st(elem)._a();
_st($6)._href_("#");
_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
$7=_st(dropdown)._asJQuery();
_st($7)._empty();
$8=_st($7)._append_(_st(associations)._key());
$8;
self["@selectedAction"]=_st(associations)._key();
return self["@selectedAction"];
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
$9=_st($6)._with_(_st(associations)._key());
return _st(_st(elem)._li())._with_($9);
}, function($ctx3) {$ctx3.fillBlock({associations:associations},$ctx2)})}));
};
}, function($ctx2) {$ctx2.fillBlock({elem:elem},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderActionListOn:",{content:content,dropdown:dropdown},smalltalk.MWSearch)})},
args: ["content"],
source: "renderActionListOn: content \x0a\x09| dropdown |\x0a\x09dropdown := content a class: 'btn dropdown-toggle';\x0a\x09\x09at: 'data-toggle' put:'dropdown';\x0a\x09\x09href:'#'.\x0a    dropdown with: 'Choose an action'.\x0a\x09dropdown with: (content span class: 'caret').\x0a\x09content ul class: 'dropdown-menu';\x0a\x09\x09with: [ :elem |\x0a        \x09isListUpdated ifTrue: [\x0a        \x09\x09actionsList do: [ :associations | \x0a                \x09elem li\x0a                \x09\x09with: (\x0a                        \x09elem a \x0a                            \x09href: '#'; \x0a                                onClick: [ dropdown asJQuery empty; append: associations key. selectedAction := associations key ];\x0a                               \x09with: associations  key\x0a                          )\x0a    \x09\x09\x09]     \x0a           ]\x0a        ]",
messageSends: ["class:", "a", "at:put:", "href:", "with:", "span", "ul", "ifTrue:", "do:", "onClick:", "empty", "asJQuery", "append:", "key", "li"],
referencedClasses: []
}),
smalltalk.MWSearch);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBodyOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
$1=_st(html)._div();
_st($1)._class_(" modal-body");
_st($1)._at_put_("max-height","200");
$2=_st($1)._with_((function(el){
return smalltalk.withContext(function($ctx2) {
$3=_st(el)._div();
_st($3)._class_("btn-group");
$4=_st($3)._with_((function(content){
return smalltalk.withContext(function($ctx3) {
return self._renderActionListOn_(content);
}, function($ctx3) {$ctx3.fillBlock({content:content},$ctx2)})}));
$4;
$5=_st(el)._div();
_st($5)._class_("btn-group");
$6=_st($5)._with_((function(content){
return smalltalk.withContext(function($ctx3) {
return self._renderOperatorsOn_(content);
}, function($ctx3) {$ctx3.fillBlock({content:content},$ctx2)})}));
$6;
return self._renderValueInputOn_(el);
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderBodyOn:",{html:html},smalltalk.MWSearch)})},
args: ["html"],
source: "renderBodyOn: html\x0a\x09\x09html div class:' modal-body'; at:'max-height' put: '200'; with: [ :el |\x0a         \x09el div class: 'btn-group';\x0a            \x09with: [ :content | self renderActionListOn: content ].\x0a          \x09el div class: 'btn-group';\x0a            \x09with: [ :content | self renderOperatorsOn: content ].\x0a           self renderValueInputOn: el.\x0a        ]",
messageSends: ["class:", "div", "at:put:", "with:", "renderActionListOn:", "renderOperatorsOn:", "renderValueInputOn:"],
referencedClasses: []
}),
smalltalk.MWSearch);

smalltalk.addMethod(
smalltalk.method({
selector: "renderFooterOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
$1=_st(html)._div();
_st($1)._class_("modal-footer");
$2=_st($1)._with_((function(el){
return smalltalk.withContext(function($ctx2) {
$3=_st(el)._button();
_st($3)._class_("btn");
_st($3)._at_put_("data-dismiss","modal");
_st($3)._at_put_("aria-hidden","true");
$4=_st($3)._with_("Close");
$4;
$5=_st(el)._button();
_st($5)._class_("btn btn-primary");
_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._search();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$6=_st($5)._with_("Search");
return $6;
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderFooterOn:",{html:html},smalltalk.MWSearch)})},
args: ["html"],
source: "renderFooterOn: html\x0a\x09html div class:'modal-footer';\x0a    \x09with: [ :el |\x0a        \x09el button class:'btn'; at: 'data-dismiss' put:'modal'; at: 'aria-hidden' put:'true'; with:'Close'.\x0a\x09\x09\x09el button class:'btn btn-primary'; onClick: [ self search ]; with: 'Search'.\x0a        ]",
messageSends: ["class:", "div", "with:", "button", "at:put:", "onClick:", "search"],
referencedClasses: []
}),
smalltalk.MWSearch);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderHeaderOn_title_(html,"Search");
self._renderBodyOn_(html);
self._renderFooterOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.MWSearch)})},
args: ["html"],
source: "renderOn: html\x0a\x09self renderHeaderOn: html title: 'Search'.\x0a    self renderBodyOn: html.\x0a    self renderFooterOn: html.",
messageSends: ["renderHeaderOn:title:", "renderBodyOn:", "renderFooterOn:"],
referencedClasses: []
}),
smalltalk.MWSearch);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOperatorsOn:",
category: 'rendering',
fn: function (content){
var self=this;
var dropdown;
function $MWSearch(){return smalltalk.MWSearch||(typeof MWSearch=="undefined"?nil:MWSearch)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$6,$4;
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
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st($MWSearch())._operatorsDictionnary())._keys())._do_((function(op){
return smalltalk.withContext(function($ctx3) {
$5=_st(elem)._a();
_st($5)._href_("#");
_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
_st(_st(_st(dropdown)._asJQuery())._context())._innerHTML_(_st(op)._asString());
self["@selectedOperator"]=op;
return self["@selectedOperator"];
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
$6=_st($5)._with_(op);
return _st(_st(elem)._li())._with_($6);
}, function($ctx3) {$ctx3.fillBlock({op:op},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({elem:elem},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOperatorsOn:",{content:content,dropdown:dropdown},smalltalk.MWSearch)})},
args: ["content"],
source: "renderOperatorsOn: content\x0a\x09| dropdown |\x0a\x09dropdown := content a class: 'btn dropdown-toggle';\x0a\x09\x09at: 'data-toggle' put:'dropdown';\x0a\x09\x09href:'#'.\x0a    dropdown with: 'Choose an operator'.\x0a\x09dropdown with: (content span class: 'caret').\x0a\x09content ul class: 'dropdown-menu';\x0a\x09\x09with: [ :elem |\x0a        \x09MWSearch operatorsDictionnary keys do: [ :op  | \x0a                \x09elem li\x0a                \x09\x09with: (\x0a                        \x09elem a \x0a                            \x09href: '#'; \x0a                                onClick: [ dropdown asJQuery context innerHTML: op asString. selectedOperator:= op ];\x0a                               \x09with: op\x0a                          )\x0a    \x09\x09\x09]\x0a        ]",
messageSends: ["class:", "a", "at:put:", "href:", "with:", "span", "ul", "do:", "onClick:", "innerHTML:", "asString", "context", "asJQuery", "li", "keys", "operatorsDictionnary"],
referencedClasses: ["MWSearch"]
}),
smalltalk.MWSearch);

smalltalk.addMethod(
smalltalk.method({
selector: "renderValueInputOn:",
category: 'rendering',
fn: function (content){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(content)._div();
_st($1)._class_("pull-right");
$3=_st(content)._input();
_st($3)._class_("input-large search-query");
_st($3)._type_("text");
$4=_st($3)._placeholder_("Text input");
self["@valueInput"]=$4;
$2=_st($1)._with_(self["@valueInput"]);
return self}, function($ctx1) {$ctx1.fill(self,"renderValueInputOn:",{content:content},smalltalk.MWSearch)})},
args: ["content"],
source: "renderValueInputOn: content\x0a\x09content div \x0a    \x09class: 'pull-right';\x0a    \x09with: (\x0a\x09\x09\x09\x09valueInput := content input class: 'input-large search-query'; type: 'text'; placeholder:'Text input'\x0a            )",
messageSends: ["class:", "div", "with:", "input", "type:", "placeholder:"],
referencedClasses: []
}),
smalltalk.MWSearch);

smalltalk.addMethod(
smalltalk.method({
selector: "search",
category: 'action',
fn: function (){
var self=this;
var value;
function $MWSearch(){return smalltalk.MWSearch||(typeof MWSearch=="undefined"?nil:MWSearch)}
function $MWEntryPoint(){return smalltalk.MWEntryPoint||(typeof MWEntryPoint=="undefined"?nil:MWEntryPoint)}
return smalltalk.withContext(function($ctx1) { 
value=_st(_st(self["@valueInput"])._asJQuery())._val();
_st(jQuery)._ajax_options_(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st($MWEntryPoint())._restApiLocation()).__comma(_st($MWEntryPoint())._urlEntities())).__comma("/")).__comma(_st(self["@group"])._parentId())).__comma("?q=search&onAction=")).__comma(_st(self["@group"])._action())).__comma("&key=")).__comma(self["@selectedAction"])).__comma("&op=")).__comma(_st(_st($MWSearch())._operatorsDictionnary())._at_(self["@selectedOperator"]))).__comma("&value=")).__comma(value),smalltalk.HashedCollection._from_(["type".__minus_gt("GET"),"success".__minus_gt((function(tmp){
return smalltalk.withContext(function($ctx2) {
return self._searchSuccess_(tmp);
}, function($ctx2) {$ctx2.fillBlock({tmp:tmp},$ctx1)})})),"error".__minus_gt((function(a,b,c){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_("Error in searching");
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b,c:c},$ctx1)})})),"dataType".__minus_gt("json")]));
_st(_st(self._cssId())._asJQuery())._modal_("toggle");
return self}, function($ctx1) {$ctx1.fill(self,"search",{value:value},smalltalk.MWSearch)})},
args: [],
source: "search\x0a\x09| value |\x0a\x09value := valueInput asJQuery val.\x0a\x09jQuery \x0a    \x09ajax: MWEntryPoint restApiLocation, MWEntryPoint urlEntities,'/', group parentId, '?q=search&onAction=', group action, '&key=',selectedAction,'&op=',(MWSearch operatorsDictionnary at: selectedOperator),'&value=', value\x0a\x09\x09options: #{\x0a\x09\x09\x09'type' -> 'GET'.\x0a            'success' ->  [ :tmp | self searchSuccess: tmp ].\x0a\x09\x09\x09'error' -> [:a :b : c |  window alert:'Error in searching'.].\x0a\x09\x09\x09'dataType' -> 'json' \x0a\x09\x09}.\x0a    (self cssId asJQuery) modal: 'toggle'.",
messageSends: ["val", "asJQuery", "ajax:options:", ",", "at:", "operatorsDictionnary", "action", "parentId", "urlEntities", "restApiLocation", "->", "searchSuccess:", "alert:", "modal:", "cssId"],
referencedClasses: ["MWSearch", "MWEntryPoint"]
}),
smalltalk.MWSearch);

smalltalk.addMethod(
smalltalk.method({
selector: "searchSuccess:",
category: 'action',
fn: function (data){
var self=this;
var name;
function $MWAddColumn(){return smalltalk.MWAddColumn||(typeof MWAddColumn=="undefined"?nil:MWAddColumn)}
function $MWAnnouncer(){return smalltalk.MWAnnouncer||(typeof MWAnnouncer=="undefined"?nil:MWAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
name=_st(_st(_st(_st(_st(_st(_st(self["@group"])._action()).__comma(" where ")).__comma(self["@selectedAction"])).__comma(" ")).__comma(_st(self["@selectedOperator"])._asString())).__comma(" ")).__comma(_st(_st(self["@valueInput"])._asJQuery())._val());
$1=_st($MWAddColumn())._new();
_st($1)._colId_(_st(self._anchor())._asString());
$2=_st($1)._content_(_st(data)._asMooseGroupWithAction_withParentId_(name,(-1)));
_st(_st($MWAnnouncer())._current())._announce_($2);
return self}, function($ctx1) {$ctx1.fill(self,"searchSuccess:",{data:data,name:name},smalltalk.MWSearch)})},
args: ["data"],
source: "searchSuccess: data\x0a\x09| name |\x0a\x09name :=  group action, ' where ',selectedAction,' ',selectedOperator asString,' ',  valueInput asJQuery val.\x0a\x09MWAnnouncer current announce: (\x0a    \x09MWAddColumn new\x0a        \x09colId: self anchor asString;\x0a        \x09content: (data asMooseGroupWithAction: name  withParentId: -1)\x0a    )",
messageSends: [",", "val", "asJQuery", "asString", "action", "announce:", "colId:", "anchor", "new", "content:", "asMooseGroupWithAction:withParentId:", "current"],
referencedClasses: ["MWAddColumn", "MWAnnouncer"]
}),
smalltalk.MWSearch);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedAction",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@selectedAction"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedAction",{},smalltalk.MWSearch)})},
args: [],
source: "selectedAction\x0a\x09^selectedAction",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWSearch);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedAction:",
category: 'accessing',
fn: function (anAction){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@selectedAction"]=anAction;
return self}, function($ctx1) {$ctx1.fill(self,"selectedAction:",{anAction:anAction},smalltalk.MWSearch)})},
args: ["anAction"],
source: "selectedAction: anAction\x0a\x09selectedAction := anAction",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWSearch);

smalltalk.addMethod(
smalltalk.method({
selector: "updateList",
category: 'action',
fn: function (){
var self=this;
function $MWActionList(){return smalltalk.MWActionList||(typeof MWActionList=="undefined"?nil:MWActionList)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5;
$1=_st($MWActionList())._new();
$2=$1;
$4=_st(self["@group"])._isSearchableColumn();
if(smalltalk.assert($4)){
$3=_st(_st(self["@group"])._entities())._at_((1));
};
_st($2)._mooseEntity_($3);
$5=_st($1)._getActions();
return self}, function($ctx1) {$ctx1.fill(self,"updateList",{},smalltalk.MWSearch)})},
args: [],
source: "updateList\x0a\x09MWActionList new \x0a    \x09mooseEntity:  ( group isSearchableColumn ifTrue: [ group entities at:1 ]);\x0a        getActions.",
messageSends: ["mooseEntity:", "ifTrue:", "at:", "entities", "isSearchableColumn", "new", "getActions"],
referencedClasses: ["MWActionList"]
}),
smalltalk.MWSearch);

smalltalk.addMethod(
smalltalk.method({
selector: "updateListSuccess:",
category: 'action',
fn: function (actions){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@actionsList"]=actions;
self["@isListUpdated"]=true;
self._render();
return self}, function($ctx1) {$ctx1.fill(self,"updateListSuccess:",{actions:actions},smalltalk.MWSearch)})},
args: ["actions"],
source: "updateListSuccess: actions\x0a\x09actionsList := actions.\x0a    isListUpdated := true.\x0a    self render",
messageSends: ["render"],
referencedClasses: []
}),
smalltalk.MWSearch);


smalltalk.addMethod(
smalltalk.method({
selector: "operatorsDictionnary",
category: 'not yet classified',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Dictionary())._new();
_st($2)._at_put_(">=","ge");
_st($2)._at_put_(">","gt");
_st($2)._at_put_("=","eq");
_st($2)._at_put_("<=","le");
_st($2)._at_put_("<","lt");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"operatorsDictionnary",{},smalltalk.MWSearch.klass)})},
args: [],
source: "operatorsDictionnary\x0a\x09^Dictionary new\x0a    \x09at: #'>=' put: 'ge';\x0a        at: #'>'   put: 'gt';\x0a        at: #'='   put: 'eq';\x0a        at: #'<='   put: 'le';\x0a        at: #'<'   put: 'lt';\x0a        yourself",
messageSends: ["at:put:", "new", "yourself"],
referencedClasses: ["Dictionary"]
}),
smalltalk.MWSearch.klass);


smalltalk.addClass('MWAnnouncement', smalltalk.Object, ['content'], 'MooseOnWeb');
smalltalk.MWAnnouncement.comment="`MWAnnouncement` is an abstract class. The instance variable `content` contains the object that will be shown by the `MWMain`";
smalltalk.addMethod(
smalltalk.method({
selector: "content",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@content"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"content",{},smalltalk.MWAnnouncement)})},
args: [],
source: "content\x0a\x09^content",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWAnnouncement);

smalltalk.addMethod(
smalltalk.method({
selector: "content:",
category: 'accessing',
fn: function (anContent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@content"]=anContent;
return self}, function($ctx1) {$ctx1.fill(self,"content:",{anContent:anContent},smalltalk.MWAnnouncement)})},
args: ["anContent"],
source: "content: anContent\x0a\x09content := anContent",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWAnnouncement);



smalltalk.addClass('MWClearColumn', smalltalk.MWAnnouncement, [], 'MooseOnWeb');


smalltalk.addClass('MWIdentifiedColumn', smalltalk.MWAnnouncement, ['colId'], 'MooseOnWeb');
smalltalk.addMethod(
smalltalk.method({
selector: "colId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@colId"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colId",{},smalltalk.MWIdentifiedColumn)})},
args: [],
source: "colId\x0a\x09^colId",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWIdentifiedColumn);

smalltalk.addMethod(
smalltalk.method({
selector: "colId:",
category: 'accessing',
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@colId"]=id;
return self}, function($ctx1) {$ctx1.fill(self,"colId:",{id:id},smalltalk.MWIdentifiedColumn)})},
args: ["id"],
source: "colId: id\x0a\x09colId := id",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWIdentifiedColumn);



smalltalk.addClass('MWAddColumn', smalltalk.MWIdentifiedColumn, [], 'MooseOnWeb');


smalltalk.addClass('MWDelColumn', smalltalk.MWIdentifiedColumn, [], 'MooseOnWeb');


smalltalk.addClass('MWRefreshModelsList', smalltalk.MWAnnouncement, [], 'MooseOnWeb');


smalltalk.addClass('MWResetColumn', smalltalk.MWAnnouncement, [], 'MooseOnWeb');


smalltalk.addClass('MWSuccess', smalltalk.MWAnnouncement, [], 'MooseOnWeb');


smalltalk.addClass('MWSuccessForSearch', smalltalk.MWAnnouncement, ['actions'], 'MooseOnWeb');
smalltalk.addMethod(
smalltalk.method({
selector: "actions",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@actions"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"actions",{},smalltalk.MWSuccessForSearch)})},
args: [],
source: "actions\x0a\x09^actions",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWSuccessForSearch);

smalltalk.addMethod(
smalltalk.method({
selector: "actions:",
category: 'accessing',
fn: function (actionArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@actions"]=actionArray;
return self}, function($ctx1) {$ctx1.fill(self,"actions:",{actionArray:actionArray},smalltalk.MWSuccessForSearch)})},
args: ["actionArray"],
source: "actions: actionArray \x0a\x09actions := actionArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWSuccessForSearch);



smalltalk.addClass('MWAnnouncer', smalltalk.Announcer, [], 'MooseOnWeb');

smalltalk.MWAnnouncer.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=smalltalk.MWAnnouncer.klass.superclass.fn.prototype._new.apply(_st(self), []);
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.MWAnnouncer.klass)})},
args: [],
source: "current\x0a\x09^ current ifNil: [ current := super new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.MWAnnouncer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'Creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.MWAnnouncer.klass)})},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.MWAnnouncer.klass);


smalltalk.addClass('MWColumn', smalltalk.Widget, ['content', 'number', 'isGroupColumn'], 'MooseOnWeb');
smalltalk.MWColumn.comment="`MWColumn` represents an element of the `MWMain`. It's a container of an moose object.";
smalltalk.addMethod(
smalltalk.method({
selector: "close",
category: 'render',
fn: function (){
var self=this;
function $MWDelColumn(){return smalltalk.MWDelColumn||(typeof MWDelColumn=="undefined"?nil:MWDelColumn)}
function $MWAnnouncer(){return smalltalk.MWAnnouncer||(typeof MWAnnouncer=="undefined"?nil:MWAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($MWAnnouncer())._current())._announce_(_st(_st($MWDelColumn())._new())._colId_(self._number()));
return self}, function($ctx1) {$ctx1.fill(self,"close",{},smalltalk.MWColumn)})},
args: [],
source: "close\x0a\x09MWAnnouncer current announce: (\x0a    \x09MWDelColumn new \x0a            colId: self number\x0a    ).",
messageSends: ["announce:", "colId:", "number", "new", "current"],
referencedClasses: ["MWDelColumn", "MWAnnouncer"]
}),
smalltalk.MWColumn);

smalltalk.addMethod(
smalltalk.method({
selector: "content",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@content"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"content",{},smalltalk.MWColumn)})},
args: [],
source: "content\x0a\x09^content",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWColumn);

smalltalk.addMethod(
smalltalk.method({
selector: "content:",
category: 'accessing',
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@content"]=aWidget;
return self}, function($ctx1) {$ctx1.fill(self,"content:",{aWidget:aWidget},smalltalk.MWColumn)})},
args: ["aWidget"],
source: "content: aWidget\x0a\x09content := aWidget",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWColumn);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "span4";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MWColumn)})},
args: [],
source: "cssClass\x0a\x09^'span4'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWColumn);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.MWColumn.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@content"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MWColumn)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09content := nil",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.MWColumn);

smalltalk.addMethod(
smalltalk.method({
selector: "number",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@number"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@number"]=(1);
$1=self["@number"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"number",{},smalltalk.MWColumn)})},
args: [],
source: "number\x0a\x09^number ifNil: [ number := 1 ]",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.MWColumn);

smalltalk.addMethod(
smalltalk.method({
selector: "number:",
category: 'accessing',
fn: function (anInt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@number"]=anInt;
return self}, function($ctx1) {$ctx1.fill(self,"number:",{anInt:anInt},smalltalk.MWColumn)})},
args: ["anInt"],
source: "number: anInt\x0a\x09number:= anInt",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWColumn);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeaderOn:",
category: 'render',
fn: function (html){
var self=this;
function $MWSearch(){return smalltalk.MWSearch||(typeof MWSearch=="undefined"?nil:MWSearch)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$8,$9,$7;
_st(_st(html)._div())._with_((function(cont){
return smalltalk.withContext(function($ctx2) {
$1=_st(cont)._span();
_st($1)._class_(" label label-info");
$2=_st($1)._with_(_st(self._content())._title());
$2;
$3=_st(cont)._button();
_st($3)._class_("pull-right btn btn-mini btn-danger");
_st($3)._type_("button");
_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._close();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
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
return smalltalk.withContext(function($ctx3) {
$8=_st($MWSearch())._new();
_st($8)._group_(self._content());
$9=_st($8)._anchor_(self._number());
return $9;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $7;
};
}, function($ctx2) {$ctx2.fillBlock({cont:cont},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderHeaderOn:",{html:html},smalltalk.MWColumn)})},
args: ["html"],
source: "renderHeaderOn: html\x0a\x09html div \x0a\x09\x09with: [ :cont |\x0a  \x09\x09\x09cont span \x0a  \x09\x09\x09\x09class:' label label-info';\x0a  \x09\x09\x09\x09with: ( \x0a                \x09self content title\x0a                ).        \x0a  \x09\x09\x09cont button \x0a  \x09\x09\x09\x09class:'pull-right btn btn-mini btn-danger';\x0a  \x09\x09\x09\x09type:'button';\x0a  \x09\x09\x09\x09onClick: [ self close ];\x0a  \x09\x09\x09\x09with: 'X'.\x0a            content isSearchableColumn ifTrue: [\x0a  \x09\x09\x09\x09cont a\x0a\x09  \x09\x09\x09\x09href:'#searchModal';\x0a  \x09\x09\x09\x09\x09at: 'role' put:'button';\x0a  \x09\x09\x09\x09\x09at: 'data-toggle' put:'modal';\x0a  \x09\x09\x09\x09\x09class:'pull-right btn btn-mini btn-info';\x0a  \x09\x09\x09\x09\x09with: 'Search';\x0a\x09  \x09\x09\x09\x09onClick: [ MWSearch new group: self content; anchor: self number ].\x0a            ]\x0a\x09\x09]",
messageSends: ["with:", "class:", "span", "title", "content", "button", "type:", "onClick:", "close", "ifTrue:", "href:", "a", "at:put:", "group:", "new", "anchor:", "number", "isSearchableColumn", "div"],
referencedClasses: ["MWSearch"]
}),
smalltalk.MWColumn);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'render',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_(self._cssClass());
_st($1)._at_put_("row",self._number());
$2=_st($1)._with_((function(element){
return smalltalk.withContext(function($ctx2) {
self._renderHeaderOn_(element);
_st(element)._br();
return _st(element)._with_(self._content());
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.MWColumn)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div \x0a    \x09class: self cssClass; \x0a        at: 'row' put: self number;\x0a    \x09with: [ :element | \x0a        \x09self renderHeaderOn: element.\x0a            element br.    \x0a            element with: self content.\x0a        ]",
messageSends: ["class:", "cssClass", "div", "at:put:", "number", "with:", "renderHeaderOn:", "br", "content"],
referencedClasses: []
}),
smalltalk.MWColumn);



smalltalk.addClass('MWDelete', smalltalk.Widget, ['isModelLoaded', 'id'], 'MooseOnWeb');
smalltalk.MWDelete.comment="`MWDelete` handle the deletion of a model by the API";
smalltalk.addMethod(
smalltalk.method({
selector: "cssId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#deleteButton";
}, function($ctx1) {$ctx1.fill(self,"cssId",{},smalltalk.MWDelete)})},
args: [],
source: "cssId\x0a\x09^ '#deleteButton'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWDelete);

smalltalk.addMethod(
smalltalk.method({
selector: "delete",
category: 'query',
fn: function (){
var self=this;
function $MWEntryPoint(){return smalltalk.MWEntryPoint||(typeof MWEntryPoint=="undefined"?nil:MWEntryPoint)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(window)._confirm_("Do you really want delete the current model ?");
if(smalltalk.assert($1)){
_st(jQuery)._ajax_options_(_st(_st(_st(_st($MWEntryPoint())._restApiLocation()).__comma(_st($MWEntryPoint())._urlModels())).__comma("?id=")).__comma(self["@id"]),smalltalk.HashedCollection._from_(["type".__minus_gt("DELETE"),"success".__minus_gt((function(data){
return smalltalk.withContext(function($ctx2) {
return self._deleteSuccess_(data);
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})})),"error".__minus_gt((function(){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_("Error in deleting");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))]));
};
return self}, function($ctx1) {$ctx1.fill(self,"delete",{},smalltalk.MWDelete)})},
args: [],
source: "delete\x0a\x09(window confirm: 'Do you really want delete the current model ?') ifTrue: [\x0a\x09\x09jQuery \x0a    \x09\x09ajax: MWEntryPoint restApiLocation, MWEntryPoint urlModels, '?id=', id\x0a\x09\x09\x09options: #{\x0a\x09\x09\x09\x09'type' -> 'DELETE'.\x0a        \x09    'success' ->  [ :data | self deleteSuccess: data ].\x0a\x09\x09\x09\x09'error' -> [window alert:'Error in deleting']\x0a\x09\x09\x09}.\x0a    ]",
messageSends: ["ifTrue:", "ajax:options:", ",", "urlModels", "restApiLocation", "->", "deleteSuccess:", "alert:", "confirm:"],
referencedClasses: ["MWEntryPoint"]
}),
smalltalk.MWDelete);

smalltalk.addMethod(
smalltalk.method({
selector: "deleteSuccess:",
category: 'query',
fn: function (data){
var self=this;
function $MWRefreshModelsList(){return smalltalk.MWRefreshModelsList||(typeof MWRefreshModelsList=="undefined"?nil:MWRefreshModelsList)}
function $MWAnnouncer(){return smalltalk.MWAnnouncer||(typeof MWAnnouncer=="undefined"?nil:MWAnnouncer)}
function $MWClearColumn(){return smalltalk.MWClearColumn||(typeof MWClearColumn=="undefined"?nil:MWClearColumn)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($MWAnnouncer())._current())._announce_(_st($MWRefreshModelsList())._new());
_st(_st($MWAnnouncer())._current())._announce_(_st($MWClearColumn())._new());
_st(window)._alert_("Model Succesfully deleted !");
self["@isModelLoaded"]=false;
self._render();
return self}, function($ctx1) {$ctx1.fill(self,"deleteSuccess:",{data:data},smalltalk.MWDelete)})},
args: ["data"],
source: "deleteSuccess: data\x0a\x09MWAnnouncer current announce: MWRefreshModelsList new.\x0a    MWAnnouncer current announce: MWClearColumn new.\x0a\x09window alert: 'Model Succesfully deleted !'.\x0a    isModelLoaded := false.\x0a    self render",
messageSends: ["announce:", "new", "current", "alert:", "render"],
referencedClasses: ["MWRefreshModelsList", "MWAnnouncer", "MWClearColumn"]
}),
smalltalk.MWDelete);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $MWResetColumn(){return smalltalk.MWResetColumn||(typeof MWResetColumn=="undefined"?nil:MWResetColumn)}
function $MWAnnouncer(){return smalltalk.MWAnnouncer||(typeof MWAnnouncer=="undefined"?nil:MWAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
self["@isModelLoaded"]=false;
_st(_st($MWAnnouncer())._current())._on_do_($MWResetColumn(),(function(announcement){
return smalltalk.withContext(function($ctx2) {
self["@id"]=_st(_st(_st(announcement)._content())._mooseEntity())._id();
self["@id"];
self["@isModelLoaded"]=true;
self["@isModelLoaded"];
return self._render();
}, function($ctx2) {$ctx2.fillBlock({announcement:announcement},$ctx1)})}));
self._render();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MWDelete)})},
args: [],
source: "initialize\x0a\x09isModelLoaded := false.\x0a\x09MWAnnouncer current on: MWResetColumn do: [ :announcement | \x0a    \x09id := announcement content mooseEntity id.\x0a    \x09isModelLoaded := true.\x0a    \x09self render\x0a\x09].\x0a  self render.",
messageSends: ["on:do:", "id", "mooseEntity", "content", "render", "current"],
referencedClasses: ["MWResetColumn", "MWAnnouncer"]
}),
smalltalk.MWDelete);

smalltalk.addMethod(
smalltalk.method({
selector: "render",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._cssId())._asJQuery())._empty();
self._appendToJQuery_(_st(self._cssId())._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"render",{},smalltalk.MWDelete)})},
args: [],
source: "render\x0a\x09(self cssId asJQuery) empty.\x0a\x09self appendToJQuery: (self cssId) asJQuery",
messageSends: ["empty", "asJQuery", "cssId", "appendToJQuery:"],
referencedClasses: []
}),
smalltalk.MWDelete);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@isModelLoaded"];
if(smalltalk.assert($1)){
$2=_st(html)._a();
_st($2)._href_("#");
_st($2)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._delete();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st($2)._with_("Delete Model");
$3;
};
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.MWDelete)})},
args: ["html"],
source: "renderOn: html\x0a\x09isModelLoaded ifTrue: [\x0a\x09\x09html a href: '#'; onClick: [ self delete ]; with: 'Delete Model'\x0a    ]",
messageSends: ["ifTrue:", "href:", "a", "onClick:", "delete", "with:"],
referencedClasses: []
}),
smalltalk.MWDelete);



smalltalk.addClass('MWEntryPoint', smalltalk.Object, [], 'MooseOnWeb');
smalltalk.MWEntryPoint.comment="`MWEntryPoint` is the root of the package. It provides the web links to the api and initializes the others components\x0a";
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $MWModelsList(){return smalltalk.MWModelsList||(typeof MWModelsList=="undefined"?nil:MWModelsList)}
function $MWMain(){return smalltalk.MWMain||(typeof MWMain=="undefined"?nil:MWMain)}
function $MWDelete(){return smalltalk.MWDelete||(typeof MWDelete=="undefined"?nil:MWDelete)}
return smalltalk.withContext(function($ctx1) { 
_st($MWModelsList())._new();
_st($MWMain())._new();
_st($MWDelete())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MWEntryPoint)})},
args: [],
source: "initialize\x0a\x09MWModelsList new.\x0a    MWMain new.\x0a    MWDelete new.",
messageSends: ["new"],
referencedClasses: ["MWModelsList", "MWMain", "MWDelete"]
}),
smalltalk.MWEntryPoint);


smalltalk.addMethod(
smalltalk.method({
selector: "colorGroup",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "rgb(255,140,0)";
}, function($ctx1) {$ctx1.fill(self,"colorGroup",{},smalltalk.MWEntryPoint.klass)})},
args: [],
source: "colorGroup\x0a\x09 ^'rgb(255,140,0)'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWEntryPoint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "colorItems",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "rgb(218, 79, 73)";
}, function($ctx1) {$ctx1.fill(self,"colorItems",{},smalltalk.MWEntryPoint.klass)})},
args: [],
source: "colorItems\x0a\x09 ^'rgb(218, 79, 73)'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWEntryPoint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "colorcolorGroup",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "rgb(255,140,0)";
}, function($ctx1) {$ctx1.fill(self,"colorcolorGroup",{},smalltalk.MWEntryPoint.klass)})},
args: [],
source: "colorcolorGroup\x0a\x09 ^'rgb(255,140,0)'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWEntryPoint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "restApiLocation",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "http://localhost:8080/mooseOnWeb";
}, function($ctx1) {$ctx1.fill(self,"restApiLocation",{},smalltalk.MWEntryPoint.klass)})},
args: [],
source: "restApiLocation\x0a\x09^'http://localhost:8080/mooseOnWeb'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWEntryPoint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "urlEntities",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "/entities";
}, function($ctx1) {$ctx1.fill(self,"urlEntities",{},smalltalk.MWEntryPoint.klass)})},
args: [],
source: "urlEntities\x0a\x09^'/entities'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWEntryPoint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "urlModels",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "/models";
}, function($ctx1) {$ctx1.fill(self,"urlModels",{},smalltalk.MWEntryPoint.klass)})},
args: [],
source: "urlModels\x0a\x09^'/models'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWEntryPoint.klass);


smalltalk.addClass('MWMain', smalltalk.Widget, ['colWidget'], 'MooseOnWeb');
smalltalk.MWMain.comment="MWMain is the central interface of the package. It's showing and managing the display of the columns";
smalltalk.addMethod(
smalltalk.method({
selector: "addCol:",
category: 'accessing',
fn: function (aContent){
var self=this;
function $MWColumn(){return smalltalk.MWColumn||(typeof MWColumn=="undefined"?nil:MWColumn)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MWColumn())._new();
_st($1)._content_(aContent);
$2=_st($1)._number_(_st(_st(self._colWidget())._size()).__plus((1)));
_st(self._colWidget())._add_($2);
self._render();
return self}, function($ctx1) {$ctx1.fill(self,"addCol:",{aContent:aContent},smalltalk.MWMain)})},
args: ["aContent"],
source: "addCol: aContent\x0a    self colWidget add: (\x0a    \x09MWColumn new \x0a        \x09content: aContent; \x0a           \x09number: (\x0a            \x09self colWidget size +1\x0a            )\x0a       ).\x0a    self render",
messageSends: ["add:", "content:", "new", "number:", "+", "size", "colWidget", "render"],
referencedClasses: ["MWColumn"]
}),
smalltalk.MWMain);

smalltalk.addMethod(
smalltalk.method({
selector: "colManage:",
category: 'rendering',
fn: function (announcement){
var self=this;
var begin,end;
return smalltalk.withContext(function($ctx1) { 
begin=_st(_st(_st(announcement)._colId())._asNumber()).__plus((1));
end=_st(self._colWidget())._size();
_st(self._colWidget())._removeFrom_to_(begin,end);
self._addCol_(_st(announcement)._content());
return self}, function($ctx1) {$ctx1.fill(self,"colManage:",{announcement:announcement,begin:begin,end:end},smalltalk.MWMain)})},
args: ["announcement"],
source: "colManage: announcement\x0a\x09\x09| begin end |\x0a        begin :=  announcement colId asNumber +1.\x0a        end := self colWidget size.\x0a\x09\x09self colWidget removeFrom: begin to: end.\x0a    \x09self addCol: announcement content.",
messageSends: ["+", "asNumber", "colId", "size", "colWidget", "removeFrom:to:", "addCol:", "content"],
referencedClasses: []
}),
smalltalk.MWMain);

smalltalk.addMethod(
smalltalk.method({
selector: "colReset",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@colWidget"]=_st($Array())._new();
$1=self["@colWidget"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colReset",{},smalltalk.MWMain)})},
args: [],
source: "colReset\x0a   \x09^colWidget := Array new",
messageSends: ["new"],
referencedClasses: ["Array"]
}),
smalltalk.MWMain);

smalltalk.addMethod(
smalltalk.method({
selector: "colResetWith:",
category: 'accessing',
fn: function (aContent){
var self=this;
function $MWColumn(){return smalltalk.MWColumn||(typeof MWColumn=="undefined"?nil:MWColumn)}
return smalltalk.withContext(function($ctx1) { 
self._colReset();
_st(self._colWidget())._add_(_st(_st($MWColumn())._new())._content_(aContent));
self._render();
return self}, function($ctx1) {$ctx1.fill(self,"colResetWith:",{aContent:aContent},smalltalk.MWMain)})},
args: ["aContent"],
source: "colResetWith: aContent\x0a\x09self colReset.\x0a    self colWidget add: (MWColumn new content: aContent).\x0a    self render",
messageSends: ["colReset", "add:", "content:", "new", "colWidget", "render"],
referencedClasses: ["MWColumn"]
}),
smalltalk.MWMain);

smalltalk.addMethod(
smalltalk.method({
selector: "colWidget",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@colWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=self._colReset();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"colWidget",{},smalltalk.MWMain)})},
args: [],
source: "colWidget\x0a\x09^ colWidget ifNil: [ self colReset ]",
messageSends: ["ifNil:", "colReset"],
referencedClasses: []
}),
smalltalk.MWMain);

smalltalk.addMethod(
smalltalk.method({
selector: "cssClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "row-fluid";
}, function($ctx1) {$ctx1.fill(self,"cssClass",{},smalltalk.MWMain)})},
args: [],
source: "cssClass\x0a\x09^'row-fluid'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMain);

smalltalk.addMethod(
smalltalk.method({
selector: "cssId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#main";
}, function($ctx1) {$ctx1.fill(self,"cssId",{},smalltalk.MWMain)})},
args: [],
source: "cssId\x0a\x09^ '#main'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWMain);

smalltalk.addMethod(
smalltalk.method({
selector: "delCol:",
category: 'accessing',
fn: function (num){
var self=this;
var i;
return smalltalk.withContext(function($ctx1) { 
_st(self._colWidget())._removeFrom_to_(num,_st(_st(_st(self._colWidget())._size()).__minus(num)).__plus((2)));
i=(1);
_st(self._colWidget())._do_((function(col){
return smalltalk.withContext(function($ctx2) {
_st(col)._number_(i);
i=_st(i).__plus((1));
return i;
}, function($ctx2) {$ctx2.fillBlock({col:col},$ctx1)})}));
self._render();
return self}, function($ctx1) {$ctx1.fill(self,"delCol:",{num:num,i:i},smalltalk.MWMain)})},
args: ["num"],
source: "delCol: num\x0a\x09| i |\x0a    self colWidget removeFrom: num to:  self colWidget size - num + 2.\x0a    i:= 1.\x0a    self colWidget do: [ :col | col number: i. i := i +1. ].\x0a    self render",
messageSends: ["removeFrom:to:", "+", "-", "size", "colWidget", "do:", "number:", "render"],
referencedClasses: []
}),
smalltalk.MWMain);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $MWSuccess(){return smalltalk.MWSuccess||(typeof MWSuccess=="undefined"?nil:MWSuccess)}
function $MWAnnouncer(){return smalltalk.MWAnnouncer||(typeof MWAnnouncer=="undefined"?nil:MWAnnouncer)}
function $MWAddColumn(){return smalltalk.MWAddColumn||(typeof MWAddColumn=="undefined"?nil:MWAddColumn)}
function $MWResetColumn(){return smalltalk.MWResetColumn||(typeof MWResetColumn=="undefined"?nil:MWResetColumn)}
function $MWClearColumn(){return smalltalk.MWClearColumn||(typeof MWClearColumn=="undefined"?nil:MWClearColumn)}
function $MWDelColumn(){return smalltalk.MWDelColumn||(typeof MWDelColumn=="undefined"?nil:MWDelColumn)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.MWMain.superclass.fn.prototype._initialize.apply(_st(self), []);
_st(_st($MWAnnouncer())._current())._on_do_($MWSuccess(),(function(announcement){
return smalltalk.withContext(function($ctx2) {
return self._render();
}, function($ctx2) {$ctx2.fillBlock({announcement:announcement},$ctx1)})}));
_st(_st($MWAnnouncer())._current())._on_do_($MWAddColumn(),(function(announcement){
return smalltalk.withContext(function($ctx2) {
return self._colManage_(announcement);
}, function($ctx2) {$ctx2.fillBlock({announcement:announcement},$ctx1)})}));
_st(_st($MWAnnouncer())._current())._on_do_($MWResetColumn(),(function(announcement){
return smalltalk.withContext(function($ctx2) {
return self._colResetWith_(_st(announcement)._content());
}, function($ctx2) {$ctx2.fillBlock({announcement:announcement},$ctx1)})}));
_st(_st($MWAnnouncer())._current())._on_do_($MWClearColumn(),(function(announcement){
return smalltalk.withContext(function($ctx2) {
self._colReset();
return self._render();
}, function($ctx2) {$ctx2.fillBlock({announcement:announcement},$ctx1)})}));
_st(_st($MWAnnouncer())._current())._on_do_($MWDelColumn(),(function(announcement){
return smalltalk.withContext(function($ctx2) {
return self._delCol_(_st(announcement)._colId());
}, function($ctx2) {$ctx2.fillBlock({announcement:announcement},$ctx1)})}));
self._render();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MWMain)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a \x09MWAnnouncer current on: MWSuccess do: [ :announcement | self render ].\x0a    MWAnnouncer current on: MWAddColumn do: [ :announcement | \x0a        self colManage: announcement.\x0a\x09].\x0a    MWAnnouncer current on: MWResetColumn do: [ :announcement | \x0a    \x09self colResetWith: announcement content\x0a\x09].\x0a    MWAnnouncer current on: MWClearColumn do: [ :announcement | \x0a    \x09self colReset. self render\x0a\x09].\x0a    MWAnnouncer current on: MWDelColumn do: [ :announcement | \x0a    \x09self delCol: announcement colId\x0a\x09].\x0a\x09self render",
messageSends: ["initialize", "on:do:", "render", "current", "colManage:", "colResetWith:", "content", "colReset", "delCol:", "colId"],
referencedClasses: ["MWSuccess", "MWAnnouncer", "MWAddColumn", "MWResetColumn", "MWClearColumn", "MWDelColumn"]
}),
smalltalk.MWMain);

smalltalk.addMethod(
smalltalk.method({
selector: "render",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._cssId())._asJQuery())._empty();
self._appendToJQuery_(_st(self._cssId())._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"render",{},smalltalk.MWMain)})},
args: [],
source: "render\x0a\x09(self cssId asJQuery) empty.\x0a\x09self appendToJQuery: (self cssId) asJQuery",
messageSends: ["empty", "asJQuery", "cssId", "appendToJQuery:"],
referencedClasses: []
}),
smalltalk.MWMain);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
var div,size;
return smalltalk.withContext(function($ctx1) { 
var $1;
div=_st(_st(html)._div())._class_(self._cssClass());
size=_st(self._colWidget())._size();
$1=_st(size).__lt((4));
if(smalltalk.assert($1)){
_st(self._colWidget())._do_((function(c){
return smalltalk.withContext(function($ctx2) {
return _st(div)._with_(c);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}));
} else {
_st(_st(_st(size).__minus((2)))._to_(size))._do_((function(i){
return smalltalk.withContext(function($ctx2) {
return _st(div)._with_(_st(self._colWidget())._at_(i));
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,div:div,size:size},smalltalk.MWMain)})},
args: ["html"],
source: "renderOn: html\x0a\x09| div size |\x0a\x09div := html div \x0a    \x09class: self cssClass.\x0a    size := self colWidget size.\x0a    size < 4  ifTrue: [ self colWidget do: [ :c | div with: c ]  ]\x0a  \x09\x09ifFalse: [ ((size-2) to: (size)) do: [ :i | div with:  (self colWidget at:i) ] ].",
messageSends: ["class:", "cssClass", "div", "size", "colWidget", "ifTrue:ifFalse:", "do:", "with:", "at:", "to:", "-", "<"],
referencedClasses: []
}),
smalltalk.MWMain);

smalltalk.addMethod(
smalltalk.method({
selector: "showActions:",
category: 'show',
fn: function (mooseEntity){
var self=this;
function $MWActionList(){return smalltalk.MWActionList||(typeof MWActionList=="undefined"?nil:MWActionList)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MWActionList())._new();
_st($1)._mooseEntity_(mooseEntity);
_st($1)._getActions();
$2=_st($1)._yourself();
self._addCol_asGroup_($2,false);
return self}, function($ctx1) {$ctx1.fill(self,"showActions:",{mooseEntity:mooseEntity},smalltalk.MWMain)})},
args: ["mooseEntity"],
source: "showActions: mooseEntity\x0a\x09self addCol: (MWActionList new mooseEntity: mooseEntity; getActions; yourself) asGroup: false.",
messageSends: ["addCol:asGroup:", "mooseEntity:", "new", "getActions", "yourself"],
referencedClasses: ["MWActionList"]
}),
smalltalk.MWMain);


smalltalk.MWMain.klass.iVarNames = ['colWidget'];

smalltalk.addClass('MWModelsList', smalltalk.Widget, ['content'], 'MooseOnWeb');
smalltalk.MWModelsList.comment="MWModelsList is the container of the models' list";
smalltalk.addMethod(
smalltalk.method({
selector: "buttonTitle",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Models";
}, function($ctx1) {$ctx1.fill(self,"buttonTitle",{},smalltalk.MWModelsList)})},
args: [],
source: "buttonTitle\x0a\x09^'Models'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWModelsList);

smalltalk.addMethod(
smalltalk.method({
selector: "cssId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#models-menu";
}, function($ctx1) {$ctx1.fill(self,"cssId",{},smalltalk.MWModelsList)})},
args: [],
source: "cssId \x0a\x09^'#models-menu'",
messageSends: [],
referencedClasses: []
}),
smalltalk.MWModelsList);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $MWModelRoot(){return smalltalk.MWModelRoot||(typeof MWModelRoot=="undefined"?nil:MWModelRoot)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.MWModelsList.superclass.fn.prototype._initialize.apply(_st(self), []);
self._render();
_st($MWModelRoot())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MWModelsList)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self render.\x0a    MWModelRoot new.",
messageSends: ["initialize", "render", "new"],
referencedClasses: ["MWModelRoot"]
}),
smalltalk.MWModelsList);

smalltalk.addMethod(
smalltalk.method({
selector: "render",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._cssId())._asJQuery())._empty();
self._appendToJQuery_(_st(self._cssId())._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"render",{},smalltalk.MWModelsList)})},
args: [],
source: "render\x0a\x09(self cssId asJQuery) empty.\x0a\x09self appendToJQuery: self cssId asJQuery",
messageSends: ["empty", "asJQuery", "cssId", "appendToJQuery:"],
referencedClasses: []
}),
smalltalk.MWModelsList);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(html)._a();
_st($1)._href_("#");
_st($1)._class_("dropdown-toggle");
_st($1)._at_put_("data-toggle","dropdown");
_st($1)._with_(self._buttonTitle());
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._tag_("b"))._class_("caret");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(html)._ul();
_st($3)._class_("dropdown-menu");
$4=_st($3)._id_("models-list");
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.MWModelsList)})},
args: ["html"],
source: "renderOn: html\x0a\x09html a\x0a    \x09href: '#';\x0a    \x09class: 'dropdown-toggle';\x0a        at: 'data-toggle' put: 'dropdown';\x0a        with: self buttonTitle; \x0a        with: [ \x0a        \x09 (html tag: 'b') class: 'caret'\x0a\x09\x09\x09].\x0a     html ul \x0a     \x09class: 'dropdown-menu';\x0a       \x09id: 'models-list'",
messageSends: ["href:", "a", "class:", "at:put:", "with:", "buttonTitle", "tag:", "ul", "id:"],
referencedClasses: []
}),
smalltalk.MWModelsList);



smalltalk.addMethod(
smalltalk.method({
selector: "asMooseGroupWithAction:withParentId:",
category: '*MooseOnWeb',
fn: function (anAction,id){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._asMooseObject();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asMooseGroupWithAction:withParentId:",{anAction:anAction,id:id},smalltalk.Object)})},
args: ["anAction", "id"],
source: "asMooseGroupWithAction: anAction withParentId: id\x0a\x09^self asMooseObject",
messageSends: ["asMooseObject"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "asMooseObject",
category: '*MooseOnWeb',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asMooseObject",{},smalltalk.Object)})},
args: [],
source: "asMooseObject\x0a\x09^self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isSearchableColumn",
category: '*MooseOnWeb',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isSearchableColumn",{},smalltalk.Object)})},
args: [],
source: "isSearchableColumn\x0a\x09^false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "asMooseGroupWithAction:withParentId:",
category: '*MooseOnWeb',
fn: function (anAction,id){
var self=this;
function $MWMooseGroup(){return smalltalk.MWMooseGroup||(typeof MWMooseGroup=="undefined"?nil:MWMooseGroup)}
function $JSObjectProxy(){return smalltalk.JSObjectProxy||(typeof JSObjectProxy=="undefined"?nil:JSObjectProxy)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3,$6,$8,$9,$7;
$1=self._isEmpty();
if(! smalltalk.assert($1)){
$2=_st(self._first())._isKindOf_($JSObjectProxy());
if(smalltalk.assert($2)){
$4=_st($MWMooseGroup())._new();
_st($4)._action_(anAction);
_st($4)._parentId_(id);
$5=_st($4)._addAll_(self._collect_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(e)._asMooseObject();
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})})));
$3=$5;
return $3;
} else {
$6=self._value();
return $6;
};
};
$8=_st($MWMooseGroup())._new();
_st($8)._action_(anAction);
$9=_st($8)._parentId_(id);
$7=$9;
return $7;
}, function($ctx1) {$ctx1.fill(self,"asMooseGroupWithAction:withParentId:",{anAction:anAction,id:id},smalltalk.Array)})},
args: ["anAction", "id"],
source: "asMooseGroupWithAction: anAction withParentId: id  \x0a\x09self isEmpty ifFalse: [\x0a        (self first isKindOf: JSObjectProxy) ifTrue: [\x0a        \x09^MWMooseGroup new action: anAction; parentId: id; addAll: ( self collect: [ :e | e asMooseObject ])\x0a        ] ifFalse:  [ ^self value ]\x0a\x09].\x0a    ^MWMooseGroup new action: anAction; parentId: id.",
messageSends: ["ifFalse:", "ifTrue:ifFalse:", "action:", "new", "parentId:", "addAll:", "collect:", "asMooseObject", "value", "isKindOf:", "first", "isEmpty"],
referencedClasses: ["MWMooseGroup", "JSObjectProxy"]
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "asMooseObject",
category: '*MooseOnWeb',
fn: function (){
var self=this;
function $MWMooseGroup(){return smalltalk.MWMooseGroup||(typeof MWMooseGroup=="undefined"?nil:MWMooseGroup)}
function $JSObjectProxy(){return smalltalk.JSObjectProxy||(typeof JSObjectProxy=="undefined"?nil:JSObjectProxy)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self._isEmpty();
if(! smalltalk.assert($1)){
$2=_st(self._first())._isKindOf_($JSObjectProxy());
if(smalltalk.assert($2)){
$3=_st(_st($MWMooseGroup())._new())._addAll_(self._collect_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(e)._asMooseObject();
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})})));
return $3;
} else {
$4=self._value();
return $4;
};
};
return nil;
}, function($ctx1) {$ctx1.fill(self,"asMooseObject",{},smalltalk.Array)})},
args: [],
source: "asMooseObject\x0a\x09self isEmpty ifFalse: [\x0a        (self first isKindOf: JSObjectProxy) ifTrue: [\x0a        \x09^MWMooseGroup new addAll: ( self collect: [ :e | e asMooseObject ])\x0a        ] ifFalse:  [ ^self value ]\x0a\x09].\x0a    ^nil",
messageSends: ["ifFalse:", "ifTrue:ifFalse:", "addAll:", "collect:", "asMooseObject", "new", "value", "isKindOf:", "first", "isEmpty"],
referencedClasses: ["MWMooseGroup", "JSObjectProxy"]
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "asMooseGroupWithAction:withParentId:",
category: '*MooseOnWeb',
fn: function (anAction,id){
var self=this;
var group;
function $MWMooseGroup(){return smalltalk.MWMooseGroup||(typeof MWMooseGroup=="undefined"?nil:MWMooseGroup)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st($MWMooseGroup())._new();
_st($1)._action_(anAction);
$2=_st($1)._parentId_(id);
group=$2;
_st(_st(group)._entities())._add_(self._asMooseObject());
$3=group;
return $3;
}, function($ctx1) {$ctx1.fill(self,"asMooseGroupWithAction:withParentId:",{anAction:anAction,id:id,group:group},smalltalk.JSObjectProxy)})},
args: ["anAction", "id"],
source: "asMooseGroupWithAction: anAction withParentId: id\x0a\x09| group |\x0a\x09group := MWMooseGroup new action: anAction; parentId: id.\x0a    group entities add: self asMooseObject.\x0a    ^group",
messageSends: ["action:", "new", "parentId:", "add:", "asMooseObject", "entities"],
referencedClasses: ["MWMooseGroup"]
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "asMooseObject",
category: '*MooseOnWeb',
fn: function (){
var self=this;
function $MWMooseEntity(){return smalltalk.MWMooseEntity||(typeof MWMooseEntity=="undefined"?nil:MWMooseEntity)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($MWMooseEntity())._new();
_st($2)._id_(self._id());
_st($2)._type_(self._type());
$3=_st($2)._name_(self._name());
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asMooseObject",{},smalltalk.JSObjectProxy)})},
args: [],
source: "asMooseObject\x0a\x0a   \x09^MWMooseEntity new\x0a       \x09id: self id;\x0a        type: self type;\x0a        name: self name.",
messageSends: ["id:", "id", "new", "type:", "type", "name:", "name"],
referencedClasses: ["MWMooseEntity"]
}),
smalltalk.JSObjectProxy);

