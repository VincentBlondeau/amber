Smalltalk current createPackage: 'MooseOnWeb'!
Widget subclass: #MWActionList
	instanceVariableNames: 'actions mooseEntity isFetched ul'
	package: 'MooseOnWeb'!
!MWActionList commentStamp!
This widget get the possible actions on an entity.!

!MWActionList methodsFor: 'accessing'!

mooseEntity
	^mooseEntity
!

mooseEntity: aMooseEntity
	mooseEntity := aMooseEntity
!

title
	^mooseEntity title
! !

!MWActionList methodsFor: 'events'!

actionClick: anAction
	MWAnnouncer current announce: (
    	MWAddColumn new
        	colId: ((ul asJQuery parent: 'div') attr: 'row');
        	content: (
              MWResult new 
                  action: anAction; 
                  sourceEntity: self mooseEntity;
                  getResult
        )
    )
! !

!MWActionList methodsFor: 'initialization'!

initialize 
	super initialize.
	isFetched := false.
! !

!MWActionList methodsFor: 'query'!

getActions
	| result |
	result := jQuery 
    	ajax: MWEntryPoint restApiLocation, MWEntryPoint urlEntities,'/',self mooseEntity id, '?q=actions'
		options: #{
			'type' -> 'GET'.
            'success' ->  [ :tmp | self success: tmp].
			'error' -> [:a :b : c |  window alert:'error in getting actions list'.].
			'dataType' -> 'json'
		}.
!

success: data
	| tempActions |
	tempActions := Array new.
    
    data keysAndValuesDo: [ :key :value | 
    	tempActions add: (Association key: key value: value)
    ].
    actions := tempActions sorted: [ :a :b | a key < b key ] .
    isFetched := true.
    MWAnnouncer current announce: MWSuccess new.
	MWAnnouncer current announce: (MWSuccessForSearch new actions: actions; yourself).
! !

!MWActionList methodsFor: 'rendering'!

renderContents: html	
	isFetched ifFalse: [
      html span class: 'label label-info'; with: 'Loading'.
    ] ifTrue: [
      actions do: [ :association | 
          html li 
          	with: [
              html a
              	  href: '#';
                  with: association key;
                  at: 'data-toggle' put:'tooltip';
                  at: 'data-delay' put: '{ show: 5000, hide: 1000 }';
                  title:  association value;
                  onClick: [ self actionClick: association key ]
          ]
      ]
    ]
!

renderOn: html
	ul := html ul 
    	class: 'unstyled';
        with: 
           [ self renderContents: html]
! !

Object subclass: #MWAnnouncement
	instanceVariableNames: 'content'
	package: 'MooseOnWeb'!
!MWAnnouncement commentStamp!
`MWAnnouncement` is an abstract class. The instance variable `content` contains the object that will be shown by the `MWMain`!

!MWAnnouncement methodsFor: 'accessing'!

content
	^content
!

content: anContent
	content := anContent
! !

MWAnnouncement subclass: #MWAddColumn
	instanceVariableNames: 'colId'
	package: 'MooseOnWeb'!

!MWAddColumn methodsFor: 'accessing'!

colId
	^colId
!

colId: id
	colId := id
! !

MWAnnouncement subclass: #MWClearColumn
	instanceVariableNames: ''
	package: 'MooseOnWeb'!

MWAnnouncement subclass: #MWDelColumn
	instanceVariableNames: 'colId'
	package: 'MooseOnWeb'!

!MWDelColumn methodsFor: 'accessing'!

colId
	^colId
!

colId: id
	colId := id
! !

MWAnnouncement subclass: #MWRefreshModelsList
	instanceVariableNames: 'colId'
	package: 'MooseOnWeb'!

MWAnnouncement subclass: #MWResetColumn
	instanceVariableNames: ''
	package: 'MooseOnWeb'!

MWAnnouncement subclass: #MWSuccess
	instanceVariableNames: ''
	package: 'MooseOnWeb'!

MWAnnouncement subclass: #MWSuccessForSearch
	instanceVariableNames: 'actions'
	package: 'MooseOnWeb'!

!MWSuccessForSearch methodsFor: 'accessing'!

actions
	^actions
!

actions: actionArray 
	actions := actionArray
! !

Announcer subclass: #MWAnnouncer
	instanceVariableNames: ''
	package: 'MooseOnWeb'!

MWAnnouncer class instanceVariableNames: 'current'!

!MWAnnouncer class methodsFor: 'Creation'!

new
	self shouldNotImplement
! !

!MWAnnouncer class methodsFor: 'accessing'!

current
	^ current ifNil: [ current := super new ]
! !

Widget subclass: #MWColumn
	instanceVariableNames: 'content number isGroupColumn'
	package: 'MooseOnWeb'!
!MWColumn commentStamp!
`MWColumn` represents an element of the `MWMain`. It's a container of an moose object.!

!MWColumn methodsFor: 'accessing'!

content
	^content
!

content: aWidget
	content := aWidget
!

cssClass
	^'span4'
!

number
	^number ifNil: [ number := 1 ]
!

number: anInt
	number:= anInt
! !

!MWColumn methodsFor: 'initialization'!

initialize
	super initialize.
	content := nil
! !

!MWColumn methodsFor: 'render'!

close
	MWAnnouncer current announce: (
    	MWDelColumn new 
            colId: self number
    ).
!

renderHeaderOn: html
	html div 
		with: [ :cont |
  			cont span 
  				class:' label label-info';
  				with: ( 
                	self content title
                ).        
  			cont button 
  				class:'pull-right btn btn-mini btn-danger';
  				type:'button';
  				onClick: [ self close ];
  				with: 'X'.
            content isSearchableColumn ifTrue: [
  				cont a
	  				href:'#searchModal';
  					at: 'role' put:'button';
  					at: 'data-toggle' put:'modal';
  					class:'pull-right btn btn-mini btn-info';
  					with: 'Search';
	  				onClick: [ MWSearch new group: self content; anchor: self number ].
            ]
		]
!

renderOn: html
	html div 
    	class: self cssClass; 
        at: 'row' put: self number;
    	with: [ :element | 
        	self renderHeaderOn: element.
            element br.    
            element with: self content.
        ]
! !

Widget subclass: #MWDelete
	instanceVariableNames: 'isModelLoaded id'
	package: 'MooseOnWeb'!
!MWDelete commentStamp!
`MWDelete` handle the deletion of a model by the API!

!MWDelete methodsFor: 'accessing'!

cssId
	^ '#deleteButton'
! !

!MWDelete methodsFor: 'initialization'!

initialize
	isModelLoaded := false.
	MWAnnouncer current on: MWResetColumn do: [ :announcement | 
    	id := announcement content mooseEntity id.
    	isModelLoaded := true.
    	self render
	].
  self render.
! !

!MWDelete methodsFor: 'query'!

delete
	(window confirm: 'Do you really want delete the current model ?') ifTrue: [
		jQuery 
    		ajax: MWEntryPoint restApiLocation, MWEntryPoint urlModels, '?id=', id
			options: #{
				'type' -> 'DELETE'.
        	    'success' ->  [ :data | self deleteSuccess: data ].
				'error' -> [:a :b :c |  window alert:'Error in deleting'.]
			}.
    ]
!

deleteSuccess: data
	MWAnnouncer current announce: MWRefreshModelsList new.
    MWAnnouncer current announce: MWClearColumn new.
	window alert: 'Model Succesfully deleted !!'.
    isModelLoaded := false.
    self render
! !

!MWDelete methodsFor: 'rendering'!

render
	(self cssId asJQuery) empty.
	self appendToJQuery: (self cssId) asJQuery
!

renderOn: html
	isModelLoaded ifTrue: [
		html a href: '#'; onClick: [ self delete ]; with: 'Delete Model'
    ]
! !

Object subclass: #MWEntryPoint
	instanceVariableNames: ''
	package: 'MooseOnWeb'!
!MWEntryPoint commentStamp!
`MWEntryPoint` is the root of the package. It provides the web links to the api and initializes the others components!

!MWEntryPoint methodsFor: 'initialization'!

initialize
	MWModelsList new.
    MWMain new.
    MWDelete new.
! !

!MWEntryPoint class methodsFor: 'accessing'!

colorGroup
	 ^'rgb(255,140,0)'
!

colorItems
	 ^'rgb(218, 79, 73)'
!

colorcolorGroup
	 ^'rgb(255,140,0)'
!

restApiLocation
	^'http://localhost:8080/mooseOnWeb'
!

urlEntities
	^'/entities'
!

urlModels
	^'/models'
! !

Widget subclass: #MWImporter
	instanceVariableNames: ''
	package: 'MooseOnWeb'!
!MWImporter commentStamp!
MWImporter handle the deletion of a model. It shows a modal and apply the deletion!

!MWImporter methodsFor: 'accessing'!

cssId
	^ '#importModal'
!

timeout
	^ 3000
! !

!MWImporter methodsFor: 'initialization'!

initialize
	super initialize.
	self render.
! !

!MWImporter methodsFor: 'query'!

import
	| value |
	"value := valueInput asJQuery val."
	jQuery 
    	ajax: MWEntryPoint restApiLocation, MWEntryPoint urlModels
		options: #{
			'type' -> 'POST'.
            'success' ->  [ :tmp | self postSuccess: tmp ].
			'error' -> [:a :b : c |  window alert:'Error in searching'.].
			'dataType' -> 'json' 
		}.
    (self cssId asJQuery) modal: 'toggle'.
!

postSuccess: data
    setTimeout value: [ (self cssId asJQuery) modal: 'toggle'. MWAnnouncer current announce: (MWRefreshModelsList new)] value: self timeout
! !

!MWImporter methodsFor: 'rendering'!

render
	(self cssId asJQuery) empty.
	self appendToJQuery: (self cssId) asJQuery
!

renderBodyOn: html
	| form frame |
		html div class:' modal-body'; at:'max-height' put: '200'; with: [ :el |
         	form := el form 
            	target:'importIframe';
                method:'post';
                action: MWEntryPoint restApiLocation, MWEntryPoint urlModels;
                at: 'enctype' put: 'multipart/form-data';
                at: 'encoding'  put: 'multipart/form-data';
                with: [ :content | self renderFormOn: content ].
           frame := el iframe 
            	src: 'about:none';
                style: 'display:none';
                name: 'importIframe'
		]
!

renderFormOn: html
	html fieldset with: [ :content |
  		content label with: 'Model Name:'.
        content input type:'text'; name: 'nameModel'; id:'nameModel'; placeholder: 'Moose Model'; at: 'required' put: nil.
        content label with: 'MSE file to upload:'.
  		content input type:'file'; name:'mseFile'.
        content div class:'form-actions'; with:
  			(content button type:'submit'; class:'btn btn-primary'; with: 'Submit'; onClick: [
              		('#nameModel' asJQuery val size = 0) ifFalse: [
                    self postSuccess: '']
  				]).
	]
!

renderHeaderOn: html
	html div
    	class:'modal-header';
        with: [ :el |
        	el button 
            	type:'button';
            	class:'close';
            	at: 'data-dismiss' put:'modal';
            	at: 'aria-hidden' put:'true';
	            with: '×'.
			el h3 
                with: 'Import MSE'.
        ].
!

renderOn: html
	self renderHeaderOn: html.
    self renderBodyOn: html.
! !

Widget subclass: #MWMain
	instanceVariableNames: 'colWidget'
	package: 'MooseOnWeb'!
!MWMain commentStamp!
MWMain is the central interface of the package. It's showing and managing the display of the columns!

!MWMain methodsFor: 'accessing'!

addCol: aContent
    self colWidget add: (
    	MWColumn new 
        	content: aContent; 
           	number: (
            	self colWidget size +1
            )
       ).
    self render
!

colReset
   	^colWidget := Array new
!

colResetWith: aContent
	self colReset.
    self colWidget add: (MWColumn new content: aContent).
    self render
!

colWidget
	^ colWidget ifNil: [ self colReset ]
!

cssClass
	^'row-fluid'
!

cssId
	^ '#main'
!

delCol: num
	| i |
    self colWidget removeFrom: num to:  self colWidget size - num + 2.
    i:= 1.
    self colWidget do: [ :col | col number: i. i := i +1. ].
    self render
! !

!MWMain methodsFor: 'initialization'!

initialize
	super initialize.
 	MWAnnouncer current on: MWSuccess do: [ :announcement | self render ].
    MWAnnouncer current on: MWAddColumn do: [ :announcement | 
        self colManage: announcement.
	].
    MWAnnouncer current on: MWResetColumn do: [ :announcement | 
    	self colResetWith: announcement content
	].
    MWAnnouncer current on: MWClearColumn do: [ :announcement | 
    	self colReset. self render
	].
    MWAnnouncer current on: MWDelColumn do: [ :announcement | 
    	self delCol: announcement colId
	].
	self render
! !

!MWMain methodsFor: 'rendering'!

colManage: announcement
		| begin end |
        begin :=  announcement colId asNumber + 1.
        end := self colWidget size +1.
		self colWidget removeFrom: begin to: end.
    	self addCol: announcement content.
!

render
	(self cssId asJQuery) empty.
	self appendToJQuery: (self cssId) asJQuery
!

renderOn: html
	| div size |
	div := html div 
    	class: self cssClass.
    size := self colWidget size.
    size < 4  ifTrue: [ self colWidget do: [ :c | div with: c ]  ]
  		ifFalse: [ ((size-2) to: (size)) do: [ :i | div with:  (self colWidget at:i) ] ].
! !

!MWMain methodsFor: 'show'!

showActions: mooseEntity
	self addCol: (MWActionList new mooseEntity: mooseEntity; getActions; yourself) asGroup: false.
! !

MWMain class instanceVariableNames: 'colWidget'!

Widget subclass: #MWModelRoot
	instanceVariableNames: 'models ul'
	package: 'MooseOnWeb'!
!MWModelRoot commentStamp!
MWModelRoot is an object containing all the models provided by the Moose On Web Api!

!MWModelRoot methodsFor: 'accessing'!

cssId 
	^'#models-list'
! !

!MWModelRoot methodsFor: 'initialization'!

initialize
	super initialize.
    MWAnnouncer current on: MWRefreshModelsList do: [ :announcement |self getModels ].
	self getModels
! !

!MWModelRoot methodsFor: 'query'!

getModels
	| result |
	result := jQuery 
		ajax: MWEntryPoint restApiLocation, MWEntryPoint urlModels
		options: #{
			'type' -> 'GET'.
            'success' ->  [ :tmp | self success: tmp].
			'error' -> [:a :b : c |window alert:'error in getting models list'.].
			'dataType' -> 'json'
		}.
!

success: data
	models := Array new.
	data do: [:e |  
    	models add: (
        	MWMooseEntity new 
            	name: e name; 
                id: e id;
                type: e type;
                yourself
             )
	].
	self render.
! !

!MWModelRoot methodsFor: 'render'!

click: entity
	MWAnnouncer current announce: 
    	(MWResetColumn new content: (
                MWActionList new 
            	mooseEntity: entity; 
                getActions; 
              	yourself
      			)
         )
!

render
	(self cssId asJQuery) empty.
	self appendToJQuery: (self cssId) asJQuery
!

renderOn: menu
   	models do: [ :e |
    	menu li
        	href: '#'; 
        	with:
        		[ menu a 
            		onClick: [ self click: e ]; 
            		with: e name.  
               ]
	]
! !

Widget subclass: #MWModelsList
	instanceVariableNames: 'content'
	package: 'MooseOnWeb'!
!MWModelsList commentStamp!
MWModelsList is the container of the models' list!

!MWModelsList methodsFor: 'accessing'!

buttonTitle
	^'Models'
!

cssId 
	^'#models-menu'
! !

!MWModelsList methodsFor: 'initialization'!

initialize
	super initialize.
	self render.
    MWModelRoot new.
! !

!MWModelsList methodsFor: 'rendering'!

render
	(self cssId asJQuery) empty.
	self appendToJQuery: self cssId asJQuery
!

renderOn: html
	html a
    	href: '#';
    	class: 'dropdown-toggle';
        at: 'data-toggle' put: 'dropdown';
        with: self buttonTitle; 
        with: [ 
        	 (html tag: 'b') class: 'caret'
			].
     html ul 
     	class: 'dropdown-menu';
       	id: 'models-list'
! !

Widget subclass: #MWMooseEntity
	instanceVariableNames: 'id name type properties isFetched div'
	package: 'MooseOnWeb'!
!MWMooseEntity commentStamp!
MWMooseEntity is a Object containing all the items describing a entity : 
id, name, type, properties!

!MWMooseEntity methodsFor: 'accessing'!

id 
	^id
!

id: anId
	id:=anId
!

name
	^name
!

name: anName
	name:=anName
!

properties
	^properties ifNil: [ properties := Dictionary new ]
!

title
	^self name
!

type
	^type
!

type: anType
	type :=anType
! !

!MWMooseEntity methodsFor: 'initialization'!

initialize
	super initialize.
	isFetched := false.
! !

!MWMooseEntity methodsFor: 'query'!

getProperties
	jQuery 
		ajax: MWEntryPoint restApiLocation, MWEntryPoint urlEntities, '/', self id
		options: #{
			'type' -> 'GET'.
            'success' ->  [ :tmp | self success: tmp].
			'error' -> [window alert:'error in getting entities properties'].
			'dataType' -> 'json'
		}.
!

success: data
	isFetched := true.
	data keysAndValuesDo: [ :key :value | 
    	self properties at: key put: ( value asMooseGroupWithAction: key withParentId: self id ).
	].
    MWAnnouncer current announce: MWSuccess new.
! !

!MWMooseEntity methodsFor: 'rendering'!

clickFrom: colId
  	MWAnnouncer current announce: (
    	MWAddColumn new 
        	content: self;
            colId: colId
    ).
	self getProperties.
!

renderContentOn: html
	self properties keysAndValuesDo: [ :key :value |
    	html li 
        	with:  
            	[ :li  |
                  self renderHeaderOn: li withKey: key withValue: value.
                  li span with: ( value )
 				]
    ].
!

renderHeaderOn: html withKey: key withValue: value
	"Cannot be inlined : too much recursion!!"
	(value isKindOf: MWMooseGroup) ifTrue: [
    	html a
      		href: '#';
      		onClick: [ value clickFrom: ((div asJQuery parents: 'div') attr: 'row') ];
      		with: (key, ' : ');
      		style: ('color: ', MWEntryPoint colorGroup)  
	] ifFalse: [  
  		html span
  			style: ('color: ', MWEntryPoint colorItems);
  			with: key, ' : ' .
	].
!

renderOn: html


       div := isFetched ifTrue: [     
        		html ul 
         			 class: 'unstyled';
          			 with: [self renderContentOn: html] ]
                   ifFalse: [ 
                 html span 
          			with: 'Loading'.
                   
               ]
! !

Widget subclass: #MWMooseGroup
	instanceVariableNames: 'id name type entities ul action parentId isSearchable'
	package: 'MooseOnWeb'!
!MWMooseGroup commentStamp!
`MWMooseGroup` contains references to MooseEntities, an id, name and a type.!

!MWMooseGroup methodsFor: 'accessing'!

action
	^action
!

action: anAction
	action := anAction
!

add: aJSObject
	"anObjectCollection contains MWMooseEntity under JSON format"
    self entities add: (MWMooseEntity new id: aJSObject id; type: aJSObject type; name: aJSObject name).
!

addAll: anObjectCollection
	"anObjectCollection contains MWMooseEntity under JSON format"
    anObjectCollection do: [ :e | 
    	self add: e
    ]
!

entities
	^entities ifNil: [ entities := Array new. ]
!

id
	^id
!

id: anId
	id:=anId
!

isSearchableColumn
 	^isSearchable
!

isSearchableColumn: aBool
 	isSearchable := aBool
!

name
	^name
!

name: anName
	name:=anName
!

parentId
	^parentId
!

parentId: anId
	parentId:= anId.
    (anId= -1) ifTrue: [ self isSearchableColumn: false ]
!

title
	^self name ifNil: [ ^self action ]
!

type
	^type
!

type: anType
	type :=anType
! !

!MWMooseGroup methodsFor: 'initialization'!

initialize 
	isSearchable := true
! !

!MWMooseGroup methodsFor: 'render'!

clickFrom: colId
  	MWAnnouncer current announce: (
    	MWAddColumn new 
        	content: self;
            colId: colId
    ).
!

renderContentOn: html
    (self entities sorted: [:a :b | a name < b name ] ) do: [ :e |
      html li 
    	  with:
    		  (html a
   				   href: '#';
   				   onClick: [ e clickFrom:  ((ul asJQuery parents: 'div') attr: 'row') ]; 
   				   with: e name
     			 )
    ]
!

renderOn: html
	ul := 
        html pre
           class: 'pre-scrollable';
           with: (
    			html ul
    			class: 'unstyled';
        		with: [self renderContentOn: html]
              )
! !

Widget subclass: #MWResult
	instanceVariableNames: 'sourceEntity action result isFetched isSearchableColumn'
	package: 'MooseOnWeb'!
!MWResult commentStamp!
a `MWResult` is created when an request with an action has been sent and the result catched.!

!MWResult methodsFor: 'accessors'!

action
	^action
!

action: anAction
	action := anAction
!

isSearchableColumn
	^isSearchableColumn ifNil: [ false ]
!

parentId
	^sourceEntity id
!

sourceEntity
	^sourceEntity
!

sourceEntity: anEntity
	sourceEntity := anEntity
!

title
	^self action
! !

!MWResult methodsFor: 'query'!

entities
	^result entities
!

getResult
	jQuery 
		ajax: MWEntryPoint restApiLocation, MWEntryPoint urlEntities,'/',self sourceEntity id, '?action=',self action
		options: #{
			'type' -> 'GET'.
            'success' ->  [ :tmp | self success: tmp].
			'error' -> [ window alert:'error in getting actions result' ].
			'dataType' -> 'json'
		}.
!

initialize
	super initialize.
	isFetched := false.
!

success: data
   	| group |
	isFetched := true.
	[ 	
    	group := MWMooseGroup new addAll: (data entities).
        group action: self action.
        group  parentId: sourceEntity id.
        result := group.
        isSearchableColumn := true.
	] on: MessageNotUnderstood do:
    [ 
    	result := (data isKindOf: JSObjectProxy) ifTrue: [ 
        	group := MWMooseGroup new add: ( data ) .
            group action: self action.
      		group  parentId: sourceEntity id.
            group
            
  		] ifFalse: [ data ].
      	  
	].
  	MWAnnouncer current announce: MWSuccess new.
! !

!MWResult methodsFor: 'rendering'!

renderOn: html
    isFetched ifFalse: [ 
    	html div with: 'Loading'.
	] ifTrue: [ 
    	html with: result 
	]
! !

Widget subclass: #MWSearch
	instanceVariableNames: 'group isListUpdated actionsList selectedAction selectedOperator valueInput anchor'
	package: 'MooseOnWeb'!
!MWSearch commentStamp!
`MWSearch` provide a search functionality. It's open a modal to precise the search parameters and do the search. It add a new column when the result is got!

!MWSearch methodsFor: 'accessing'!

anchor
	^anchor
!

anchor: a
	anchor := a
!

cssId
	^ '#searchModal'
!

group: aMooseGroup
	group := aMooseGroup.
    self updateList
!

selectedAction
	^selectedAction
!

selectedAction: anAction
	selectedAction := anAction
! !

!MWSearch methodsFor: 'action'!

actionChosen: a
	 self selectedAction: a.
!

search
	| value |
	value := valueInput asJQuery val.
	jQuery 
    	ajax: MWEntryPoint restApiLocation, MWEntryPoint urlEntities,'/', group parentId, '?q=search&onAction=', group action, '&key=',selectedAction,'&op=',(MWSearch operatorsDictionnary at: selectedOperator),'&value=', value
		options: #{
			'type' -> 'GET'.
            'success' ->  [ :tmp | self searchSuccess: tmp ].
			'error' -> [:a :b : c |  window alert:'Error in searching'.].
			'dataType' -> 'json' 
		}.
    (self cssId asJQuery) modal: 'toggle'.
!

searchSuccess: data
	| name |
	name :=  group action, ' where ',selectedAction,' ',selectedOperator asString,' ',  valueInput asJQuery val.
	MWAnnouncer current announce: (
    	MWAddColumn new
        	colId: self anchor asString;
        	content: (data asMooseGroupWithAction: name  withParentId: -1)
    )
!

updateList
	MWActionList new 
    	mooseEntity:  ( group isSearchableColumn ifTrue: [ group entities at:1 ]);
        getActions.
!

updateListSuccess: actions
	actionsList := actions.
    isListUpdated := true.
    self render
! !

!MWSearch methodsFor: 'initialize'!

initialize
	super initialize.
    MWAnnouncer current on: MWSuccessForSearch do: [ :announcement |  self updateListSuccess: announcement actions ].
    isListUpdated := false.
	self render
! !

!MWSearch methodsFor: 'rendering'!

render
	(self cssId asJQuery) empty.
	self appendToJQuery: (self cssId) asJQuery
!

renderActionListOn: content 
	| dropdown |
	dropdown := content a class: 'btn dropdown-toggle';
		at: 'data-toggle' put:'dropdown';
		href:'#'.
    dropdown with: 'Choose an action'.
	dropdown with: (content span class: 'caret').
	content ul class: 'dropdown-menu';
		with: [ :elem |
        	isListUpdated ifTrue: [
        		actionsList do: [ :associations | 
                	elem li
                		with: (
                        	elem a 
                            	href: '#'; 
                                onClick: [ dropdown asJQuery empty; append: associations key. selectedAction := associations key ];
                               	with: associations  key
                          )
    			]     
           ]
        ]
!

renderBodyOn: html
		html div class:' modal-body'; at:'max-height' put: '200'; with: [ :el |
         	el div class: 'btn-group';
            	with: [ :content | self renderActionListOn: content ].
          	el div class: 'btn-group';
            	with: [ :content | self renderOperatorsOn: content ].
           self renderValueInputOn: el.
        ]
!

renderFooterOn: html
	html div class:'modal-footer';
    	with: [ :el |
        	el button class:'btn'; at: 'data-dismiss' put:'modal'; at: 'aria-hidden' put:'true'; with:'Close'.
			el button class:'btn btn-primary'; onClick: [ self search ]; with: 'Search'.
        ]
!

renderHeaderOn: html
	html div
    	class:'modal-header';
        with: [ :el |
        	el button 
            	type:'button';
            	class:'close';
            	at: 'data-dismiss' put:'modal';
            	at: 'aria-hidden' put:'true';
	            with: '×'.
			el h3 
            	id:'myModalLabel'; 
                with: 'Search'.
        ].
!

renderOn: html
	self renderHeaderOn: html.
    self renderBodyOn: html.
    self renderFooterOn: html.
!

renderOperatorsOn: content
	| dropdown |
	dropdown := content a class: 'btn dropdown-toggle';
		at: 'data-toggle' put:'dropdown';
		href:'#'.
    dropdown with: 'Choose an operator'.
	dropdown with: (content span class: 'caret').
	content ul class: 'dropdown-menu';
		with: [ :elem |
        	MWSearch operatorsDictionnary keys do: [ :op  | 
                	elem li
                		with: (
                        	elem a 
                            	href: '#'; 
                                onClick: [ dropdown asJQuery empty; append: op asString. selectedOperator:= op ];
                               	with: op
                          )
    			]
        ]
!

renderValueInputOn: content
	content div 
    	class: 'pull-right';
    	with: (
				valueInput := content input class: 'input-large search-query'; type: 'text'; placeholder:'Text input'
            )
! !

!MWSearch class methodsFor: 'not yet classified'!

operatorsDictionnary
	^Dictionary new
    	at: #'>=' put: 'ge';
        at: #'>'   put: 'gt';
        at: #'='   put: 'eq';
        at: #'<='   put: 'le';
        at: #'<'   put: 'lt';
        yourself
! !

!Object methodsFor: '*MooseOnWeb'!

asMooseGroupWithAction: anAction withParentId: id
	^self asMooseObject
!

asMooseObject
	^self
!

isSearchableColumn
	^false
! !

!Array methodsFor: '*MooseOnWeb'!

asMooseGroupWithAction: anAction withParentId: id  
	self isEmpty ifFalse: [
        (self first isKindOf: JSObjectProxy) ifTrue: [
        	^MWMooseGroup new action: anAction; parentId: id; addAll: ( self collect: [ :e | e asMooseObject ])
        ] ifFalse:  [ ^self value ]
	].
    ^MWMooseGroup new action: anAction; parentId: id.
!

asMooseObject
	self isEmpty ifFalse: [
        (self first isKindOf: JSObjectProxy) ifTrue: [
        	^MWMooseGroup new addAll: ( self collect: [ :e | e asMooseObject ])
        ] ifFalse:  [ ^self value ]
	].
    ^nil
! !

!JSObjectProxy methodsFor: '*MooseOnWeb'!

asMooseGroupWithAction: anAction withParentId: id
	| group |
	group := MWMooseGroup new action: anAction; parentId: id.
    group entities add: self asMooseObject.
    ^group
!

asMooseObject

   	^MWMooseEntity new
       	id: self id;
        type: self type;
        name: self name.
! !

