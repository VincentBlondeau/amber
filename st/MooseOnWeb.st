Smalltalk current createPackage: 'MooseOnWeb' properties: #{}!
Widget subclass: #MWActionList
	instanceVariableNames: 'actions mooseEntity isFetched'
	package: 'MooseOnWeb'!

!MWActionList methodsFor: 'accessing'!

mooseEntity
	^mooseEntity
!

mooseEntity: aMooseEntity
	mooseEntity := aMooseEntity
! !

!MWActionList methodsFor: 'query'!

getActions
	| result |
	result := jQuery 
    	ajax: MWEntryPoint restApiLocation, MWEntryPoint urlEntities,'/',self mooseEntity id, '?q=actions'
		options: #{
			'type' -> 'GET'.
            'success' ->  [ :tmp | self success: tmp].
			'error' -> [:a :b : c |window alert:'error in getting actions list'.Transcript  show: 'error1',a, '2',b,'3',c].
			'dataType' -> 'json'
		}.
!

success: data
	actions := data asArray.
    isFetched := true.
	self render.
! !

!MWActionList methodsFor: 'rendering'!

initialize 
	isFetched := false.
!

renderOn: html
	isFetched ifFalse: [
      html li with: 'loading'
    ] ifFalse: [
      actions do: [ :action |
          html li with: [
              html a
                  with: action;
                  onClick: [ "self getActionResult: action" ]
          ]
      ]
    ]
! !

Widget subclass: #MWColWidget
	instanceVariableNames: 'content'
	package: 'MooseOnWeb'!

!MWColWidget methodsFor: 'accessing'!

content
	^content
!

content: aWidget
	content := aWidget
!

cssClass
	^'span4'
! !

!MWColWidget methodsFor: 'initialization'!

initialize
	content := nil
! !

!MWColWidget methodsFor: 'render'!

renderOn: html
	html div 
    	class: self cssClass; 
    	with: [
			self content 
		]
! !

Object subclass: #MWEntryPoint
	instanceVariableNames: ''
	package: 'MooseOnWeb'!

!MWEntryPoint methodsFor: 'Initialization'!

initialize
	MWMenuWidget new.
  "  IndexChartApp new.
    ModelRoot new."
! !

!MWEntryPoint class methodsFor: 'Accesseurs'!

restApiLocation
	^'http://localhost:8080/mooseOnWeb'
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

colWidget
	^ colWidget ifNil: [ colWidget := Array new ]
!

cssClass
	^'row-fluid'
!

cssId
	^ '#main'
!

initialize
	self new render
!

showActions: mooseEntity
	self addCol: (MWActionList new mooseEntity: mooseEntity; getActions).
! !

!MWMainWidget methodsFor: 'rendering'!

addCol: aContent

    self colWidget add: (MWColWidget new content: aContent).
    self render
!

render
	(self cssId asJQuery) empty.
	self appendToJQuery: (self cssId) asJQuery
!

renderOn: html
	| div |
	div := html div 
    	class: self cssClass.
    self rowWidget do: [ :rw | 
    	div with: rw ]
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
	instanceVariableNames: 'models'
	package: 'MooseOnWeb'!

!MWModelRoot methodsFor: 'accessing'!

cssId 
	^'#models-list'
! !

!MWModelRoot methodsFor: 'initialization'!

initialize
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
	data entities do: [:e |  models add: (MWMooseEntity new name: e name; id: e id;yourself)].
	self render.
! !

!MWModelRoot methodsFor: 'render'!

render
	(self cssId asJQuery) empty.
	self appendToJQuery: (self cssId) asJQuery
!

renderOn: menu
   	models do: [ :e |
    	menu li with: [
        	menu a 
            	onClick: [ MWMainWidget new showActions: e ]; 
            	with: e name.  
    	]
	]
! !

Object subclass: #MWMooseEntity
	instanceVariableNames: 'id name type'
	package: 'MooseOnWeb'!

!MWMooseEntity methodsFor: 'not yet classified'!

getActionResult: action
	| result |
	result := jQuery 
		ajax: EntryPoint restApiLocation, EntryPoint urlEntities,'/',self id, '?action=',action
		options: #{
			'type' -> 'GET'.
            'success' ->  [ :tmp | self getActionResultSuccess: tmp].
			"complete' -> [ :a :b |window alert:'complete'.Transcript  show: 'Compelte1',a, '2',b]."
			'error' -> [:a :b : c |window alert:'error in getting actions result'.Transcript  show: 'error1',a, '2',b,'3',c].
			'dataType' -> 'json'
		}.
!

getActionResultSuccess: data
  | col |
  window alert: 'getActionsResultSuccess:', data.
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
! !

