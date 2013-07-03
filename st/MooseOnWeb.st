Smalltalk current createPackage: 'MooseOnWeb' properties: #{}!
Widget subclass: #MWActionList
	instanceVariableNames: 'actions mooseEntity isFetched ul'
	package: 'MooseOnWeb'!

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
              MWResultWidget new 
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
			'error' -> [:a :b : c |  window alert:'error in getting actions list'.Transcript  show: 'error1',a, '2',b,'3',c].
			'dataType' -> 'json'
		}.
!

success: data
	actions := data asArray.
    isFetched := true.
    MWAnnouncer current announce: MWSuccess new.
! !

!MWActionList methodsFor: 'rendering'!

renderContents: html	
	isFetched ifFalse: [
      html span class: 'label label-info'; with: 'Loading'.
    ] ifTrue: [
      actions do: [ :action |
          html li 
          	with: [
              html a
              	  href: '#';
                  with: action;
                  onClick: [ self actionClick: action ]
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

MWAnnouncement subclass: #MWResetColumn
	instanceVariableNames: ''
	package: 'MooseOnWeb'!

MWAnnouncement subclass: #MWSuccess
	instanceVariableNames: ''
	package: 'MooseOnWeb'!

Announcer subclass: #MWAnnouncer
	instanceVariableNames: ''
	package: 'MooseOnWeb'!

MWAnnouncer class instanceVariableNames: 'current'!

!MWAnnouncer class methodsFor: 'Accessing'!

current
	^ current ifNil: [ current := super new ]
! !

!MWAnnouncer class methodsFor: 'Creation'!

new
	self shouldNotImplement
! !

Widget subclass: #MWColumnWidget
	instanceVariableNames: 'content number'
	package: 'MooseOnWeb'!

!MWColumnWidget methodsFor: 'accessing'!

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

!MWColumnWidget methodsFor: 'initialization'!

initialize
	super initialize.
	content := nil
! !

!MWColumnWidget methodsFor: 'render'!

close
	MWAnnouncer current announce: (
    	MWDelColumn new 
            colId: self number
    ).
!

renderOn: html
	html div 
    	class: self cssClass; 
        at: 'row' put: self number;
    	with: [ :element | 
        	element div 
                with: [ :cont |
                            cont span 
                            	    class:' label label-info';
                            		with: self content title.
                            cont button 
                                class:'pull-right btn btn-mini btn-danger';
                                type:'button';
                                onClick: [ self close ];
                                with: 'X'
            	]   .
            element with: self content.
        ]
! !

Object subclass: #MWEntryPoint
	instanceVariableNames: ''
	package: 'MooseOnWeb'!

!MWEntryPoint methodsFor: 'Initialization'!

initialize
	MWMenuWidget new.
    MWMainWidget new.
  "  IndexChartApp new.
    ModelRoot new."
! !

!MWEntryPoint class methodsFor: 'Accesseurs'!

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
	^'http://37.139.2.203:8080/mooseOnWeb'
!

urlEntities
	^'/entities'
!

urlModels
	^'/models'
! !

Widget subclass: #MWMainWidget
	instanceVariableNames: 'colWidget'
	package: 'MooseOnWeb'!

!MWMainWidget methodsFor: 'accessing'!

addCol: aContent

    self colWidget add: (
    	MWColumnWidget new 
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
    self colWidget add: (MWColumnWidget new content: aContent).
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

!MWMainWidget methodsFor: 'initializing'!

initialize
	super initialize.
 	MWAnnouncer current on: MWSuccess do: [ :announcement | self render ].
    MWAnnouncer current on: MWAddColumn do: [ :announcement | 
        self colManage: announcement.
	].
    MWAnnouncer current on: MWResetColumn do: [ :announcement | 
    	self colResetWith: announcement content
	].
    MWAnnouncer current on: MWDelColumn do: [ :announcement | 
    	self delCol: announcement colId
	].
	self render
! !

!MWMainWidget methodsFor: 'rendering'!

colManage: announcement
		| begin end |
        begin :=  announcement colId asNumber + 1.
        end := self colWidget size +1.
        "window alert: begin, ' ',end."
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

!MWMainWidget methodsFor: 'show'!

showActions: mooseEntity
	self addCol: (MWActionList new mooseEntity: mooseEntity; getActions; yourself).
! !

MWMainWidget class instanceVariableNames: 'colWidget'!

Widget subclass: #MWMenuWidget
	instanceVariableNames: 'content'
	package: 'MooseOnWeb'!

!MWMenuWidget methodsFor: 'accessing'!

buttonTitle
	^'Models'
!

cssId 
	^'#models-menu'
! !

!MWMenuWidget methodsFor: 'initialization'!

initialize
	super initialize.
	self render.
    MWModelRoot new.
! !

!MWMenuWidget methodsFor: 'rendering'!

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

Widget subclass: #MWModelRoot
	instanceVariableNames: 'models ul'
	package: 'MooseOnWeb'!

!MWModelRoot methodsFor: 'accessing'!

cssId 
	^'#models-list'
! !

!MWModelRoot methodsFor: 'initialization'!

initialize
	super initialize.
	models := Array new.
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
			'error' -> [:a :b : c |window alert:'error in getting models list'.Transcript  show: 'error1',a, '2',b,'3',c].
			'dataType' -> 'json'
		}.
!

success: data
	data entities do: [:e |  
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
        	with: [
        		menu a 
            		onClick: [ self click: e ]; 
            		with: e name.  
    		]
	]
! !

Widget subclass: #MWMooseEntity
	instanceVariableNames: 'id name type properties isFetched div'
	package: 'MooseOnWeb'!

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
			'error' -> [:a :b : c |window alert:'error in getting models list'.Transcript  show: 'error1',a, '2',b,'3',c].
			'dataType' -> 'json'
		}.
!

success: data
	isFetched := true.
	data keysAndValuesDo: [ :key :value | 
    	self properties at: key put: ( value asMooseGroup ).
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

                 	(value isKindOf: MWMooseGroup) ifTrue: [
                    		li a
                     			style: 'color: ', MWEntryPoint colorGroup,';"';
                                href: '#';
                                onClick: [ value clickFrom: ((div asJQuery parents: 'div') attr: 'row') ];
                     			with: key, ' : '.
    					] ifFalse: [  
                        	li span
            	                style: 'color: ', MWEntryPoint colorItems,';"';
                     			with: key, ' : '.
    					].
                   li span with: ( value )
 				]
    ].
!

renderOn: html


       isFetched ifTrue: [     
        		div := html ul 
         			 class: 'unstyled';
          			 with: [self renderContentOn: html] ]
                   ifFalse: [ 
                 html span 
          			with: 'Loading'.
                   
               ]
! !

Widget subclass: #MWMooseGroup
	instanceVariableNames: 'id name type entities ul'
	package: 'MooseOnWeb'!

!MWMooseGroup methodsFor: 'accessing'!

addAll: anObjectCollection
	"anObjectCollection contains MWMooseEntity under JSON format"
    anObjectCollection do: [ :e | 
    	self entities add: (MWMooseEntity new id: e id; type: e type; name: e name).
    ]
!

clickFrom: colId
  	MWAnnouncer current announce: (
    	MWAddColumn new 
        	content: self;
            colId: colId
    ).
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

name
	^name
!

name: anName
	name:=anName
!

renderContentOn: html
    self entities do: [ :e |
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

Widget subclass: #MWResultWidget
	instanceVariableNames: 'sourceEntity action result isFetched'
	package: 'MooseOnWeb'!

!MWResultWidget methodsFor: 'accessors'!

action
	^action
!

action: anAction
	action := anAction
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

!MWResultWidget methodsFor: 'query'!

getResult
	jQuery 
		ajax: MWEntryPoint restApiLocation, MWEntryPoint urlEntities,'/',self sourceEntity id, '?action=',self action
		options: #{
			'type' -> 'GET'.
            'success' ->  [ :tmp | self success: tmp].
			'error' -> [:a :b : c |window alert:'error in getting actions result'.Transcript  show: 'error1',a, '2',b,'3',c].
			'dataType' -> 'json'
		}.
!

initialize
	super initialize.
	isFetched := false.
!

success: data
	isFetched := true.
	[ result:=(MWMooseGroup new addAll: (data entities); yourself). ] on: MessageNotUnderstood do:
    	[ 
      	  result :=  data.
          window alert: 'not entities'.
		].
  	MWAnnouncer current announce: MWSuccess new.
! !

!MWResultWidget methodsFor: 'render'!

renderOn: html
    isFetched ifFalse: [ 
    	html div with: 'Loading'.
	] ifTrue: [ 
    	html with: result
	]
! !

!Object methodsFor: '*MooseOnWeb'!

asMooseGroup
	^self asMooseObject
!

asMooseObject
	^self
! !

!Array methodsFor: '*MooseOnWeb'!

asMooseObject
	self isEmpty ifFalse: [
        (self first isKindOf: JSObjectProxy) ifTrue: [
        	^MWMooseGroup new addAll: ( self collect: [ :e | e asMooseObject ])
        ] ifFalse:  [ ^self value ]
	].
    ^nil
! !

!JSObjectProxy methodsFor: '*MooseOnWeb'!

asMooseGroup
	| group |
	group := MWMooseGroup new.
    group entities add: self asMooseObject.
    ^group
!

asMooseObject

   	^MWMooseEntity new
       	id: self id;
        type: self type;
        name: self name.
! !

