webpackJsonp([0],{104:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=o(6),d=n(i),f=o(15),c=o(10),s=n(c),p=o(35),_=o(123),T=n(_),y=o(127),E=n(y),O=o(128),m=n(O),b=function(e){function t(){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),a(t,[{key:"componentWillMount",value:function(){this.props.fetchTodos()}},{key:"render",value:function(){var e=this.props,t=e.todos,o=e.remainingTodos;return d.default.createElement("div",null,d.default.createElement(T.default,{todos:t,remainingTodos:o}),d.default.createElement(E.default,null),d.default.createElement(m.default,null))}}]),t}(i.Component),v=function(e){var t=e.todoList,o=t.todos,n=t.completedCount;return{todos:o,remainingTodos:o.length-n}};b.propTypes={fetchTodos:s.default.func.isRequired,todos:s.default.arrayOf(s.default.object.isRequired).isRequired,remainingTodos:s.default.number.isRequired},t.default=(0,f.connect)(v,{fetchTodos:p.fetchTodos})(b)},105:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(27),u=o(60),l=n(u),a=o(130),i=n(a),d=(0,r.applyMiddleware)(l.default),f=function(e){return(0,r.createStore)(i.default,e,d)};t.default=f},123:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(6),u=n(r),l=o(10),a=n(l),i=function(e){var t=e.todos,o=e.remainingTodos;return u.default.createElement("div",null,u.default.createElement("h1",null,"Todos"),t.length>0?u.default.createElement("div",null,u.default.createElement("p",null,"Double click todo to mark as complete"),u.default.createElement("p",null,"Remaining todos: ",o)):u.default.createElement("p",null,"Add a something to do."))};i.propTypes={todos:a.default.arrayOf(a.default.object.isRequired).isRequired,remainingTodos:a.default.number.isRequired},t.default=i},124:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=o(6),d=n(i),f=o(10),c=n(f),s=o(36),p=n(s),_=o(125),T=n(_),y=function(e){function t(){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),a(t,[{key:"renderListItem",value:function(){var e=this.props,t=e.todos,o=e.toggleTodo,n=e.deleteTodo;return t.map(function(e){return d.default.createElement(T.default,{key:e._id,todoObj:e,toggleTodo:o,deleteTodo:n})})}},{key:"render",value:function(){var e=this.props,t=e.todos,o=e.toggleAll,n=e.deleteCompleted,r=e.completedCount;return d.default.createElement("div",null,d.default.createElement("ul",null,t&&this.renderListItem()),t.length>0&&d.default.createElement(p.default,{text:"Toggle All",onClick:o}),r>0&&d.default.createElement(p.default,{text:"Clear Completed",onClick:n}))}}]),t}(i.Component);y.propTypes={todos:c.default.arrayOf(c.default.shape({todo:c.default.string.isRequired,completed:c.default.bool.isRequired,_id:c.default.string.isRequired})).isRequired,toggleTodo:c.default.func.isRequired,toggleAll:c.default.func.isRequired,deleteTodo:c.default.func.isRequired,deleteCompleted:c.default.func.isRequired,completedCount:c.default.number.isRequired},t.default=y},125:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(6),u=n(r),l=o(10),a=n(l),i=o(36),d=n(i),f=function(e){var t=e.todoObj,o=e.todoObj,n=o.todo,r=o.completed,l=e.toggleTodo,a=e.deleteTodo;return u.default.createElement("li",{onDoubleClick:function(){return l(t)},style:{textDecoration:r?"line-through":"none"}},n,u.default.createElement(d.default,{text:"x",onClick:function(){return a(t)}}))};f.propTypes={todoObj:a.default.shape({todo:a.default.string.isRequired,completed:a.default.bool.isRequired,_id:a.default.string.isRequired}).isRequired,toggleTodo:a.default.func.isRequired,deleteTodo:a.default.func.isRequired},t.default=f},126:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(6),u=n(r),l=o(10),a=n(l),i=o(36),d=n(i),f=function(e){var t=e.inputValue,o=e.onFormSubmit,n=e.setInputText;return u.default.createElement("form",{onSubmit:o},u.default.createElement("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)}}),u.default.createElement(d.default,{type:"submit",text:"add"}))};f.propTypes={inputValue:a.default.string.isRequired,setInputText:a.default.func.isRequired,onFormSubmit:a.default.func.isRequired},t.default=f},127:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=o(6),d=n(i),f=o(15),c=o(10),s=n(c),p=o(35),_=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(p),T=o(126),y=n(T),E=function(e){function t(){r(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.onFormSubmit=e.onFormSubmit.bind(e),e}return l(t,e),a(t,[{key:"onFormSubmit",value:function(e){var t=this.props,o=t.inputValue,n=t.addTodo;e.preventDefault(),o.length>0&&n(o)}},{key:"render",value:function(){var e=this.props,t=e.inputValue,o=e.setInputText;return d.default.createElement(y.default,{inputValue:t,setInputText:o,onFormSubmit:this.onFormSubmit})}}]),t}(i.Component),O=function(e){return{inputValue:e.todoList.inputValue}};E.propTypes={inputValue:s.default.string.isRequired,setInputText:s.default.func.isRequired,addTodo:s.default.func.isRequired},t.default=(0,f.connect)(O,_)(E)},128:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=o(6),d=n(i),f=o(15),c=o(10),s=n(c),p=o(35),_=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(p),T=o(124),y=n(T),E=function(e){function t(){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.todos,o=e.toggleTodo,n=e.toggleAll,r=e.deleteTodo,u=e.deleteCompleted,l=e.completedCount;return d.default.createElement(y.default,{todos:t,toggleTodo:o,toggleAll:n,deleteTodo:r,deleteCompleted:u,completedCount:l})}}]),t}(i.Component),O=function(e){var t=e.todoList;return{todos:t.todos,completedCount:t.completedCount}};E.propTypes={todos:s.default.arrayOf(s.default.shape({todo:s.default.string.isRequired,completed:s.default.bool.isRequired,_id:s.default.string.isRequired})).isRequired,toggleTodo:s.default.func.isRequired,toggleAll:s.default.func.isRequired,deleteTodo:s.default.func.isRequired,deleteCompleted:s.default.func.isRequired,completedCount:s.default.number.isRequired},t.default=(0,f.connect)(O,_)(E)},129:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=o(6),u=n(r),l=o(33),a=n(l),i=o(15),d=o(105),f=n(d),c=o(104),s=n(c),p=(0,f.default)();a.default.render(u.default.createElement(i.Provider,{store:p},u.default.createElement(s.default,null)),document.getElementById("root"))},130:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(27),r=o(131),u=function(e){return e&&e.__esModule?e:{default:e}}(r),l=(0,n.combineReducers)({todoList:u.default});t.default=l},131:function(e,t,o){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},u=o(66),l={inputValue:"",todos:[],completedCount:0},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments[1];switch(t.type){case u.INPUT_VALUE:return r({},e,{inputValue:t.payload});case u.FETCH_TODOS:return r({},e,{todos:t.payload});case u.ADD_TODO:return r({},e,{inputValue:"",todos:[].concat(n(e.todos),[t.payload])});case u.TOGGLE_ALL:return r({},e,{todos:[].concat(n(t.payload))});case u.TOGGLE_TODO:var o=e.todos.map(function(e){return e._id===t.payload._id?r({},e,{completed:!e.completed}):e});return r({},e,{todos:[].concat(n(o))});case u.DELETE_TODO:var a=e.todos.filter(function(e){return e._id!==t.payload});return r({},e,{todos:[].concat(n(a))});case u.DELETE_COMPLETED:var i=e.todos.filter(function(e){return!1===e.completed});return r({},e,{todos:[].concat(n(i))});case u.COMPLETED_COUNT:return r({},e,{completedCount:t.payload});case u.INCREMENT_COMPLETED_COUNT:return r({},e,{completedCount:e.completedCount+1});case u.DECREMENT_COMPLETED_COUNT:return r({},e,{completedCount:e.completedCount-1});default:return e}};t.default=a},35:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deleteCompleted=t.deleteTodo=t.toggleAll=t.toggleTodo=t.addTodo=t.fetchTodos=t.setInputText=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=o(59),u=function(e){return e&&e.__esModule?e:{default:e}}(r),l=o(66);t.setInputText=function(e){return{type:l.INPUT_VALUE,payload:e}},t.fetchTodos=function(){return function(e){u.default.get(l.URL).then(function(t){var o=t.data,n=o.filter(function(e){return e.completed}).length;e({type:l.FETCH_TODOS,payload:o}),e({type:l.COMPLETED_COUNT,payload:n})})}},t.addTodo=function(e){return function(t){u.default.post(l.URL+"/create",{todo:e}).then(function(e){var o=e.data;t({type:l.ADD_TODO,payload:o})})}},t.toggleTodo=function(e){return function(t){u.default.put(l.URL+"/update",n({},e,{completed:!e.completed})).then(function(e){var o=e.data;t({type:l.TOGGLE_TODO,payload:o}),t({type:o.completed?l.DECREMENT_COMPLETED_COUNT:l.INCREMENT_COMPLETED_COUNT})})}},t.toggleAll=function(){return function(e){u.default.put(l.URL+"/update/all").then(function(t){var o=t.data,n=o.filter(function(e){return e.completed}).length;e({type:l.TOGGLE_ALL,payload:o}),e({type:l.COMPLETED_COUNT,payload:n})})}},t.deleteTodo=function(e){return function(t){var o=e._id,n=e.completed;u.default.delete(l.URL+"/delete",{data:{_id:o}}).then(function(){t({type:l.DELETE_TODO,payload:o}),n&&t({type:l.DECREMENT_COMPLETED_COUNT})})}},t.deleteCompleted=function(){return function(e){u.default.delete(l.URL+"/delete/completed").then(function(){e({type:l.DELETE_COMPLETED}),e({type:l.COMPLETED_COUNT,payload:0})})}}},36:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(6),u=n(r),l=o(10),a=n(l),i=function(e){var t=e.type,o=e.text,n=e.onClick;return u.default.createElement("button",{type:t,onClick:n},o)};i.propTypes={type:a.default.string,onClick:a.default.func,text:a.default.string},i.defaultProps={type:null,onClick:null,text:null},t.default=i},66:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.URL="https://localhost:42768/",t.INPUT_VALUE="INPUT_VALUE",t.FETCH_TODOS="FETCH_TODOS",t.ADD_TODO="ADD_TODO",t.TOGGLE_TODO="TOGGLE_TODO",t.TOGGLE_ALL="TOGGLE_ALL",t.DELETE_TODO="DELETE_TODO",t.DELETE_COMPLETED="DELETE_COMPLETED",t.COMPLETED_COUNT="COMPLETED_COUNT",t.INCREMENT_COMPLETED_COUNT="INCREMENT_COMPLETED_COUNT",t.DECREMENT_COMPLETED_COUNT="DECREMENT_COMPLETED_COUNT"}},[129]);