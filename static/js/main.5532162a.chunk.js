(this["webpackJsonplms-clone"]=this["webpackJsonplms-clone"]||[]).push([[0],{52:function(e,t,n){},76:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(28),s=n.n(i),o=(n(52),n(18)),r=n(19),l=n(21),u=n(20),d=n(5),j=n(3),b=n(22),m=n(11),p="https://safwanlms.pythonanywhere.com/",h=n(6),O=n.n(h),f=n(4),x="ADDQUESTOSTATE",v="REMOVEQUESTIONS",g="AUTHLOADING",N="AUTHSUCCESS",y="AUTHLOGOUT",k="PROFILELOADING",_="PROFILELOADINGSUCCESS",w=n(46),S=function(e,t){return{type:N,payload:{token:e,authtoken:t}}},q=function(){return localStorage.removeItem("data"),localStorage.removeItem("exp_time"),localStorage.removeItem("authtoken"),{type:y}},T=function(e,t){return function(n){n({type:k});var c=null;t.is_student&&(c="".concat(p,"auth/studentupdate/").concat(e)),t.is_teacher&&(c="".concat(p,"auth/teacherupdate/").concat(e)),O.a.get(c).then((function(e){var t;n((t=e.data,{type:_,payload:t}))})).catch((function(e){console.log(e)}))}},C=(n(76),n(0));function E(){return Object(C.jsx)("div",{className:"loader",children:"Loading..."})}var z=Object(d.b)((function(e){return{authloading:e.authloading}}),(function(e){return{authstore:function(t){return e(function(e){return function(t){var n=e,c=Object(w.a)(e),a={email:c.email,id:c.user_id,username:c.username,token:c.jti,is_teacher:c.is_teacher,is_student:c.is_student},i=new Date(1e3*c.exp);localStorage.setItem("data",JSON.stringify(a)),localStorage.setItem("authtoken",JSON.stringify(n)),localStorage.setItem("exp_time",JSON.stringify(i)),t(S(a,n))}}(t))}}}))((function(e){var t=Object(b.a)(),n=t.register,c=t.handleSubmit;return Object(C.jsx)("div",{className:"container my-3",children:e.authloading?Object(C.jsx)(E,{}):Object(C.jsxs)("div",{children:[Object(C.jsx)("h2",{className:"text-center mb-4",children:" Login "}),Object(C.jsxs)("form",{onSubmit:c((function(t,n){!function(t){var n="".concat(p,"auth/token/");O.a.post(n,t,{headers:{"Content-Type":"application/json"}}).then((function(t){e.authstore(t.data.access)})).catch((function(e){console.log(e)}))}({email:t.email,password:t.password}),n.target.reset()})),children:[Object(C.jsx)("input",{name:"email",type:"email",ref:n,className:"form-control mb-3",placeholder:"Enter Your Email"}),Object(C.jsx)("input",{name:"password",type:"password",ref:n,className:"form-control mb-3",placeholder:"Input Your Password"}),Object(C.jsx)("input",{type:"submit",value:"Login",className:"btn btn-secondary"})]}),Object(C.jsx)(m.b,{to:"/",children:" Dont Have An Account ? Sign Up "})]})})})),A=n(8),D=Object(d.b)((function(e){return{authloading:e.authloading}}),(function(e){return{auth:function(t,n){return e(function(e,t){return function(n){var c="",a={user:Object(f.a)({},e)};"Student"===t?(c="".concat(p,"auth/newstudent/"),a={user:Object(f.a)(Object(f.a)({},a.user),{},{is_student:!0})}):(c="".concat(p,"auth/newteacher/"),a={user:Object(f.a)(Object(f.a)({},a.user),{},{is_teacher:!0})}),O.a.post(c,a,{headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}}(t,n))}}}))((function(e){var t=Object(b.a)(),n=t.register,a=t.handleSubmit,i=Object(c.useState)("Student"),s=Object(A.a)(i,2),o=s[0],r=s[1];return Object(C.jsx)("div",{className:"container my-3",children:e.authloading?Object(C.jsx)("h2",{children:"Loading"}):Object(C.jsxs)("div",{children:[Object(C.jsxs)("button",{className:"btn btn-primary w-100 my-4",onClick:function(){r("Student"===o?"Teacher":"Student")},children:["SIGNUP AS ","Student"===o?"Teacher":"Student"]}),Object(C.jsxs)("form",{onSubmit:a((function(t,n){var c={email:t.email,username:t.username,password:t.password};e.auth(c,o),n.target.reset()})),children:[Object(C.jsx)("input",{name:"email",type:"email",ref:n,className:"form-control mb-3",placeholder:"Enter Your Email"}),Object(C.jsx)("input",{name:"username",type:"text",ref:n,className:"form-control mb-3",placeholder:"Enter Your Username"}),Object(C.jsx)("input",{name:"password",type:"password",ref:n,className:"form-control mb-3",placeholder:"Input Your Password"}),Object(C.jsx)("input",{name:"confirmpassword",type:"password",ref:n,className:"form-control mb-3",placeholder:"Confirm Your Password"}),Object(C.jsx)("input",{type:"submit",value:"SIGNUP AS ".concat(o),className:"btn btn-secondary"})]}),Object(C.jsx)(m.b,{to:"/login",children:" Already Have An Account ? Login "})]})})})),Y=n(2),I=n.n(Y),F=n(9),Q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={articles:[]},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=Object(F.a)(I.a.mark((function e(){var t,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===this.props.token){e.next=4;break}return t={is_student:this.props.token.is_student,is_teacher:this.props.token.is_teacher},e.next=4,this.props.loadprofile(this.props.token.id,t);case 4:return e.next=6,O.a.get("".concat(p,"blog/blog/"));case 6:n=e.sent,this.setState({articles:n.data});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=null;return null!==this.state.articles&&0!==this.state.articles.length&&(t=this.state.articles.map((function(t,n){var c;return Object(C.jsx)("div",{className:"col mb-2",onClick:function(){e.props.history.push({pathname:"article_detail/".concat(t.blog_title),state:{url:t.url}})},style:{cursor:"pointer"},children:Object(C.jsxs)("div",{className:"card",children:[Object(C.jsxs)("div",{className:"card-head px-2",style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"},children:[Object(C.jsx)("img",{src:null===(c=t.blog_author)||void 0===c?void 0:c.profile_pic,alt:t.blog_title,width:"30",height:"30",style:{borderRadius:"50%"}}),Object(C.jsx)("h5",{className:"text-center my-3",children:t.blog_title})]}),Object(C.jsx)("img",{src:t.blog_image,className:"card-img-top",alt:t.blog_title}),Object(C.jsx)("div",{className:"card-body",children:Object(C.jsx)("p",{className:"card-text",children:"".concat(t.blog_content).substr(0,80)+"......."})})]})},n)}))),Object(C.jsx)("div",{className:"container p-4",children:Object(C.jsx)("div",{className:"row row-cols-1 row-cols-md-2 g-4",children:t})})}}]),n}(c.Component),L=Object(d.b)((function(e){return{token:e.token}}),(function(e){return{loadprofile:function(t,n){return e(T(t,n))}}}))(Q),U=Object(d.b)((function(e){return{authtoken:e.authtoken,token:e.token,profile:e.profile,profileloading:e.profileloading}}),(function(e){return{loadprofile:function(t,n){return e(T(t,n))}}}))((function(e){var t=e.token,n=e.profile,a=e.loadprofile,i=Object(c.useState)(null),s=Object(A.a)(i,2),o=s[0],r=s[1],l=Object(c.useState)(""),u=Object(A.a)(l,2),d=u[0],j=u[1],b=Object(c.useState)(""),m=Object(A.a)(b,2),h=m[0],f=m[1];Object(c.useEffect)((function(){function e(){return(e=Object(F.a)(I.a.mark((function e(){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==t&&(n={is_student:t.is_student,is_teacher:t.is_teacher},a(t.id,n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r(null===n||void 0===n?void 0:n.profile_pic),j(null===n||void 0===n?void 0:n.full_name),f(null===n||void 0===n?void 0:n.phone),function(){e.apply(this,arguments)}()}),[a,t,null===n||void 0===n?void 0:n.full_name,null===n||void 0===n?void 0:n.phone,null===n||void 0===n?void 0:n.profile_pic]);return Object(C.jsxs)("div",{children:[Object(C.jsx)("h1",{className:"text-center my-3",children:"Your Profile"}),Object(C.jsx)("div",{className:"container my-4",children:e.profileloading?Object(C.jsx)(E,{}):Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:"mx-auto text-center my-3",children:n?Object(C.jsx)("img",{src:o,alt:null===n||void 0===n?void 0:n.full_name,width:"250",height:"250",style:{borderRadius:"50%"}}):null}),Object(C.jsxs)("form",{onSubmit:function(n){n.preventDefault();var c=new FormData(n.target);c.append("full_name",d),c.append("user",t.id),""===c.get("profile_pic").name&&c.delete("profile_pic");var a=t.is_student,i=t.is_teacher,s=null;a&&(s="".concat(p,"auth/studentupdate/").concat(t.id,"/")),i&&(s="".concat(p,"auth/teacherupdate/").concat(t.id,"/")),O.a.put(s,c).then((function(t){e.history.push("/")})).catch((function(e){console.log(e.response)}))},encType:"multipart/form-data",children:[Object(C.jsx)("div",{className:"input-div mb-2",children:Object(C.jsx)("input",{className:"form-control",type:"file",id:"profile_pic",name:"profile_pic",onChange:function(e){r(e.target.files[0])}})}),Object(C.jsx)("div",{className:"input-div mb-2",children:Object(C.jsx)("input",{className:"form-control",type:"text",name:"full_name",value:d,onChange:function(e){j(e.target.value)}})}),Object(C.jsx)("div",{className:"input-div mb-2",children:Object(C.jsx)("input",{className:"form-control",type:"text",name:"username",value:null===t||void 0===t?void 0:t.username,disabled:!0})}),Object(C.jsx)("div",{className:"input-div mb-2",children:Object(C.jsx)("input",{className:"form-control",type:"email",name:"email",value:null===t||void 0===t?void 0:t.email,disabled:!0})}),Object(C.jsx)("div",{className:"input-div mb-2"}),Object(C.jsx)("div",{className:"input-div mb-2",children:Object(C.jsx)("input",{className:"form-control",type:"number",name:"phone",value:h,onChange:function(e){f(e.target.value)}})}),Object(C.jsx)("button",{type:"submit",className:"btn btn-outline-info mx-auto my-3 w-100 btncolor",children:"Update"})]})]})})]})})),G=Object(d.b)((function(e){return{token:e.token}}))((function(e){var t=Object(b.a)(),n=t.register,a=t.handleSubmit,i=t.errors,s=Object(c.useState)([]),o=Object(A.a)(s,2),r=o[0],l=o[1];Object(c.useEffect)((function(){function t(){return(t=Object(F.a)(I.a.mark((function t(){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("".concat(p,"work2/quiz/").concat(e.token.id,"/"));case 2:n=t.sent,l(n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.token.id]);var u=null;return u=null!==r&&0!==r.length?r.map((function(t,n){return Object(C.jsx)("div",{className:"card mb-3",onClick:function(){return e.history.push("/quiz_detail/".concat(t.id))},style:{cursor:"pointer"},children:Object(C.jsxs)("div",{className:"card-body",children:[Object(C.jsx)("h5",{className:"card-title",children:t.title}),Object(C.jsxs)("p",{className:"card-text",children:["Total Questions :",t.question_count]})]})},n)})):Object(C.jsx)("h2",{children:"No Quizes Yet"}),Object(C.jsx)("div",{className:"container my-5 py-5",children:Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("div",{className:"col-md-6",children:u}),Object(C.jsx)("div",{className:"col-md-6",children:Object(C.jsxs)("form",{onSubmit:a((function(t,n){var c={title:t.title,creator:e.token.id},a="".concat(p,"work2/quiz/");O.a.post(a,c,{headers:{"Content-Type":"application/json"}}).then((function(t){e.history.push("/quiz_detail/".concat(t.data.id))})).catch((function(e){console.log(e.response)})),n.target.reset()})),children:[Object(C.jsx)("input",{name:"title",type:"text",ref:n({required:!0}),className:"form-control mb-3",placeholder:"Add Your Quiz Title"}),i.title&&Object(C.jsx)("span",{className:"mb-3 text-danger d-block",children:"This field is required"}),Object(C.jsx)("input",{type:"submit",className:"btn btn-success"})]})})]})})})),M=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.logout()}},{key:"render",value:function(){return Object(C.jsx)(j.a,{to:"/"})}}]),n}(c.Component),H=Object(d.b)(null,(function(e){return{logout:function(){return e(q())}}}))(M),P=Object(d.b)((function(e){return{token:e.token}}))((function(e){var t=Object(c.useState)([]),n=Object(A.a)(t,2),a=n[0],i=n[1],s=Object(b.a)(),o=s.register,r=s.handleSubmit,l=s.errors;Object(c.useEffect)((function(){function t(){return(t=Object(F.a)(I.a.mark((function t(){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("".concat(p,"work2/question/").concat(e.match.params.id,"/"));case 2:n=t.sent,i(n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.match.params.id]);var u=null;return u=null!==a&&0!==a.length?a.map((function(e,t){return Object(C.jsxs)("li",{className:"list-group-item",children:[e.ques_title," \xa0\xa0\xa0\xa0 Answer :: ",e.answer]},t)})):Object(C.jsx)("h2",{children:" Add Questions To Your Quiz "}),Object(C.jsx)("div",{className:"container my-5",children:Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("div",{className:"col-md-6",children:Object(C.jsx)("ul",{className:"list-group",children:u})}),Object(C.jsx)("div",{className:"col-md-6",children:Object(C.jsxs)("form",{onSubmit:r((function(t,n){var c=Object(f.a)(Object(f.a)({},t),{},{quiz:e.match.params.id});O.a.post("".concat(p,"work2/question/"),c,{headers:{"Content-Type":"application/json"}}).then((function(t){e.history.goBack()})).catch((function(t){e.history.goBack()})),n.target.reset()})),children:[Object(C.jsx)("input",{name:"question",type:"text",ref:o({required:!0}),className:"form-control mb-3",placeholder:"Add Your Question"}),l.question&&Object(C.jsx)("span",{className:"mb-3 text-danger d-block",children:"This field is required"}),Object(C.jsx)("input",{name:"answer",type:"text",ref:o({required:!0}),className:"form-control mb-3",placeholder:"Enter The Answer Of The Question"}),l.answer&&Object(C.jsx)("span",{className:"mb-3 text-danger d-block",children:"This field is required"}),Object(C.jsx)("input",{name:"option1",type:"text",ref:o({required:!0}),className:"form-control mb-3",placeholder:"Enter First Option"}),l.option1&&Object(C.jsx)("span",{className:"mb-3 text-danger d-block",children:"This field is required"}),Object(C.jsx)("input",{name:"option2",type:"text",ref:o({required:!0}),className:"form-control mb-3",placeholder:"Enter Second Option"}),l.option2&&Object(C.jsx)("span",{className:"mb-3 text-danger d-block",children:"This field is required"}),Object(C.jsx)("input",{name:"option3",type:"text",ref:o({required:!0}),className:"form-control mb-3",placeholder:"Enter Third Option"}),l.option3&&Object(C.jsx)("span",{className:"mb-3 text-danger d-block",children:"This field is required"}),Object(C.jsx)("input",{name:"option4",type:"text",ref:o({required:!0}),className:"form-control mb-3",placeholder:"Enter Fourth Option"}),l.option4&&Object(C.jsx)("span",{className:"mb-3 text-danger d-block",children:"This field is required"}),Object(C.jsx)("input",{type:"submit",className:"btn btn-success"})]})})]})})})),B=n(30),J=n.n(B),R=function(e){var t=Object(c.useState)([]),n=Object(A.a)(t,2),a=n[0],i=n[1];Object(c.useEffect)((function(){function e(){return(e=Object(F.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(p,"work2/quiz/"));case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var s=null;return s=null!==a&&0!==a.length?a.map((function(t,n){var c;return Object(C.jsx)("div",{className:"col mb-4",onClick:function(){return e.history.push("/take_quiz_detail/".concat(t.id))},style:{cursor:"pointer"},children:Object(C.jsx)("div",{className:"card",children:Object(C.jsxs)("div",{className:"card-body",children:[Object(C.jsx)("h5",{className:"card-title",children:t.title}),Object(C.jsxs)("p",{className:"card-text",children:["Total Questions: ",null===(c=t.questions)||void 0===c?void 0:c.length]}),Object(C.jsxs)("p",{className:"card-text",children:["Created :",J()(t.quiz_created).format("DD-MM-YYYY, HH:mm:ss")]})]})})},n)})):Object(C.jsx)("div",{children:Object(C.jsx)("h1",{className:"text-center d-block w-100",children:"Wait For More Quizes"})}),Object(C.jsx)("div",{className:"container my-4",children:Object(C.jsx)("div",{className:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ",children:s})})},V=Object(d.b)((function(e){return{token:e.token}}))((function(e){var t=Object(c.useState)([]),n=Object(A.a)(t,2),a=n[0],i=n[1];Object(c.useEffect)((function(){function t(){return(t=Object(F.a)(I.a.mark((function t(){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("".concat(p,"work2/studentques/").concat(e.match.params.id,"/"));case 2:n=t.sent,i(n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.match.params.id]);var s=null;return null!==a&&0!==a.length&&(s=a.map((function(t,n){return Object(C.jsxs)("form",{className:"my-3",onSubmit:function(n){var c=null;document.getElementsByName("".concat(t.id)).forEach((function(e){e.disabled=!0,e.checked&&(c=e.value)}));var a={text:c,question:t.id,answered_by:e.token.id};O.a.post("".concat(p,"work2/answer_quiz/"),a,{headers:{"Content-Type":"application/json"}}).then((function(e){})).catch((function(t){e.history.goBack()})),n.preventDefault()},children:[Object(C.jsxs)("p",{children:[n+1,". ",t.ques_title]}),Object(C.jsx)("input",{type:"radio",id:t.option1,name:t.id,value:t.option1}),Object(C.jsxs)("label",{htmlFor:t.option1,children:["\xa0",t.option1]}),Object(C.jsx)("br",{}),Object(C.jsx)("input",{type:"radio",id:t.option2,name:t.id,value:t.option2}),Object(C.jsxs)("label",{htmlFor:t.option2,children:["\xa0",t.option2]}),Object(C.jsx)("br",{}),Object(C.jsx)("input",{type:"radio",id:t.option3,name:t.id,value:t.option3}),Object(C.jsxs)("label",{htmlFor:t.option3,children:["\xa0",t.option3]}),Object(C.jsx)("br",{}),Object(C.jsx)("input",{type:"radio",id:t.option4,name:t.id,value:t.option4}),Object(C.jsxs)("label",{htmlFor:t.option4,children:["\xa0",t.option4]}),Object(C.jsx)("br",{}),Object(C.jsx)("button",{type:"submit",className:"btn btn-info",name:t.id,children:"Submit Answer"}),Object(C.jsx)("p",{children:"Submit Your Answer First to get Grade........"})]},n)}))),Object(C.jsx)("div",{className:"container my-4",children:Object(C.jsxs)("div",{children:[s,Object(C.jsx)("button",{type:"submit",className:"btn btn-success btn-lg mt-5",onClick:function(){var t={quiz:e.match.params.id,taken_by:e.token.id};O.a.post("".concat(p,"work2/graded_quiz/"),t,{headers:{"Content-Type":"application/json"}}).then((function(t){e.history.goBack()})).catch((function(t){e.history.goBack()}))},children:"Get Grade"})]})})})),W=Object(d.b)((function(e){return{token:e.token}}))((function(e){var t=Object(c.useState)([]),n=Object(A.a)(t,2),a=n[0],i=n[1];Object(c.useEffect)((function(){function t(){return(t=Object(F.a)(I.a.mark((function t(){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("".concat(p,"work2/graded_quiz/").concat(e.token.id,"/"));case 2:n=t.sent,i(n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.token.id]);var s=null;return s=null!==a&&0!==a.length?a.map((function(e,t){var n,c;return Object(C.jsx)("div",{className:"col mb-4",children:Object(C.jsx)("div",{className:"card",children:Object(C.jsxs)("div",{className:"card-body",children:[Object(C.jsx)("h5",{className:"card-title",children:null===(n=e.quiz)||void 0===n?void 0:n.title}),Object(C.jsxs)("p",{className:"card-text",children:["Total Questions: ",null===(c=e.quiz)||void 0===c?void 0:c.question_count]}),Object(C.jsxs)("p",{className:"card-text",children:["Marks: ",e.marks]}),Object(C.jsxs)("p",{className:"card-text",children:["Graded At :",J()(e.quiz_graded).format("DD-MM-YYYY, HH:mm:ss")]})]})})},t)})):Object(C.jsx)("div",{children:Object(C.jsx)("h1",{children:" No Graded Quiz Yet"})}),Object(C.jsx)("div",{className:"container my-3",children:Object(C.jsx)("div",{className:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ",children:s})})})),K=Object(d.b)((function(e){return{token:e.token}}))((function(e){var t=Object(b.a)(),n=t.register,c=t.handleSubmit;return Object(C.jsx)("div",{className:"my-5",children:Object(C.jsxs)("form",{onSubmit:c((function(t,n){var c,a=Object(f.a)(Object(f.a)({},t),{},{blog:e.id,commenter:null===(c=e.token)||void 0===c?void 0:c.username});O.a.post("".concat(p,"blog/comment/"),a,{headers:{"Content-Type":"application/json"}}).then((function(e){n.target.reset()})).catch((function(e){n.target.reset()})),n.preventDefault()})),children:[Object(C.jsx)("input",{name:"comment",type:"text",ref:n({required:!0}),className:"form-control mb-3",placeholder:"Add Your Comment"}),Object(C.jsx)("input",{type:"submit",className:"btn btn-success"})]})})})),X=function(e){var t=Object(c.useState)(),n=Object(A.a)(t,2),a=n[0],i=n[1];Object(c.useEffect)((function(){function t(){return(t=Object(F.a)(I.a.mark((function t(){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===e.location.state.url){t.next=5;break}return t.next=3,O.a.get(e.location.state.url);case 3:n=t.sent,i(n.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.location.state.url]);var s=null;return a&&null!==a.comments&&null!=a.comments.length&&(s=a.comments.map((function(e){return Object(C.jsxs)("li",{className:"list-group-item",children:[e.comment," ------- ",e.commenter]},e.id)}))),Object(C.jsxs)("div",{className:"container my-3",children:[Object(C.jsx)("h1",{className:"my-3 text-center",children:null===a||void 0===a?void 0:a.blog_title}),Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("div",{className:"col-md-6",children:Object(C.jsx)("img",{src:null===a||void 0===a?void 0:a.blog_image,alt:null===a||void 0===a?void 0:a.blog_title,className:"img-thumbnail"})}),Object(C.jsxs)("div",{className:"col-md-6",children:[Object(C.jsx)("ul",{className:"list-group",children:s}),Object(C.jsx)(K,{id:null===a||void 0===a?void 0:a.id})]})]}),Object(C.jsx)("div",{className:"row my-4",children:Object(C.jsx)("h5",{children:null===a||void 0===a?void 0:a.blog_content})})]})},Z=Object(d.b)((function(e){return{token:e.token}}))((function(e){var t=Object(c.useState)(null),n=Object(A.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)({blog_title:"",blog_content:""}),o=Object(A.a)(s,2),r=o[0],l=o[1];return Object(C.jsx)("div",{className:"container my-4",children:Object(C.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=new FormData(t.target);n.append("blog_title",r.blog_title),n.append("blog_content",r.blog_content),n.append("blog_author",e.token.id),n.append("blog_image",a),""===n.get("blog_image").name&&n.delete("blog_image");O.a.post("".concat(p,"blog/blog_create/"),n,{headers:{"Content-Type":"application/json"}}).then((function(t){e.history.push("/")})).catch((function(t){e.history.push("/")})),n.forEach((function(e,t){console.log(e),console.log(t)}))},encType:"multipart/form-data",children:[Object(C.jsx)("div",{className:"input-div mb-2",children:Object(C.jsx)("input",{className:"form-control",type:"file",id:"blog_image",name:"blog_image",onChange:function(e){i(e.target.files[0])}})}),Object(C.jsx)("div",{className:"input-div mb-2",children:Object(C.jsx)("input",{className:"form-control",type:"text",name:"blog_title",placeholder:"Enter Article Title",value:r.blog_title,onChange:function(e){l(Object(f.a)(Object(f.a)({},r),{},{blog_title:e.target.value}))}})}),Object(C.jsx)("div",{className:"input-div mb-2",children:Object(C.jsx)("textarea",{placeholder:"Enter Article Details",className:"form-control",name:"blog_content",value:r.blog_content,onChange:function(e){l(Object(f.a)(Object(f.a)({},r),{},{blog_content:e.target.value}))}})}),Object(C.jsx)("button",{type:"submit",className:"btn btn-outline-info mx-auto my-3 w-100 btncolor",children:"Add Article"})]})})})),$=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=null;return e=this.props.token?Object(C.jsxs)(j.d,{children:[Object(C.jsx)(j.b,{path:"/",exact:!0,component:L}),Object(C.jsx)(j.b,{path:"/profile",exact:!0,component:U}),Object(C.jsx)(j.b,{path:"/quiz",exact:!0,component:G}),Object(C.jsx)(j.b,{path:"/article/:name",exact:!0,component:Z}),Object(C.jsx)(j.b,{path:"/logout",exact:!0,component:H}),Object(C.jsx)(j.b,{path:"/quiz_detail/:id",exact:!0,component:P}),Object(C.jsx)(j.b,{path:"/article_detail/:str",exact:!0,component:X}),Object(C.jsx)(j.b,{path:"/take_quiz_detail/:id",exact:!0,component:V}),Object(C.jsx)(j.b,{path:"/take_quiz",exact:!0,component:R}),Object(C.jsx)(j.b,{path:"/graded_quiz",exact:!0,component:W}),Object(C.jsx)(j.a,{to:"/"})]}):Object(C.jsxs)(j.d,{children:[Object(C.jsx)(j.b,{path:"/",exact:!0,component:D}),Object(C.jsx)(j.b,{path:"/login",exact:!0,component:z}),Object(C.jsx)(j.a,{to:"/"})]}),Object(C.jsxs)("div",{children:[e," "]})}}]),n}(c.Component),ee=Object(d.b)((function(e){return{token:e.token}}))($),te=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e,t,n,c,a;return Object(C.jsx)("div",{children:Object(C.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(C.jsxs)("div",{className:"container-fluid",children:[Object(C.jsx)(m.c,{className:"navbar-brand",to:"/",children:"C-LMS"}),Object(C.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(C.jsx)("span",{className:"navbar-toggler-icon"})}),Object(C.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(C.jsx)("ul",{className:"navbar-nav ml-auto mb-2 mb-lg-0",children:this.props.token?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(m.c,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(C.jsx)("li",{className:"nav-item mx-2",children:Object(C.jsxs)(m.c,{className:"nav-link",to:"/profile",children:[Object(C.jsx)("img",{src:null===(e=this.props.profile)||void 0===e?void 0:e.profile_pic,style:{width:"30px",height:"30px"},className:"rounded-circle",alt:null===(t=this.props.token)||void 0===t?void 0:t.username,title:"".concat(null===(n=this.props.token)||void 0===n?void 0:n.username,"'s profile")}),"\xa0\xa0",null===(c=this.props.token)||void 0===c?void 0:c.username]})}),this.props.token.is_teacher?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(m.c,{className:"nav-link",to:"/quiz",children:"Quiz"})}),Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(m.c,{className:"nav-link",to:"/article/".concat(null===(a=this.props.token)||void 0===a?void 0:a.username),children:"Add Article"})})]}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(m.c,{className:"nav-link",to:"/graded_quiz",children:"Graded Quizes"})}),Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(m.c,{className:"nav-link",to:"/take_quiz",children:"Quizes"})})]}),Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(m.c,{className:"nav-link",to:"/logout",children:"Logout"})})]}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(m.c,{className:"nav-link",to:"/",children:"Signup"})}),Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(m.c,{className:"nav-link",to:"/login",children:"Login"})})]})})})]})})})}}]),n}(c.Component),ne=Object(d.b)((function(e){return{token:e.token,profile:e.profile}}))(te),ce=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.authcheck()}},{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(ne,{}),Object(C.jsx)(ee,{})]})}}]),n}(a.a.Component),ae=Object(d.b)(null,(function(e){return{authcheck:function(){return e((function(e){var t=localStorage.getItem("data"),n=localStorage.getItem("authtoken");(t=JSON.parse(t))?JSON.parse(localStorage.getItem("exp_time"))<=new Date?e(q()):e(S(t,n)):(console.log("logout"),e(q()))}))}}}))(ce),ie=function(){return Object(C.jsx)("div",{children:Object(C.jsx)(ae,{})})},se=(n(80),n(26)),oe=n(47),re=n(10),le={questions:[],authloading:!1,token:null,authtoken:null,profile:null,profileloading:!1},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(f.a)(Object(f.a)({},e),{},{questions:[].concat(Object(re.a)(e.questions),[t.payload])});case v:return Object(f.a)(Object(f.a)({},e),{},{questions:[]});case g:return Object(f.a)(Object(f.a)({},e),{},{authloading:t.payload});case N:return Object(f.a)(Object(f.a)({},e),{},{token:t.payload.token,authtoken:t.payload.authtoken});case y:return Object(f.a)(Object(f.a)({},e),{},{token:null,authtoken:null});case _:return Object(f.a)(Object(f.a)({},e),{},{profile:t.payload,profileloading:!1});case k:return Object(f.a)(Object(f.a)({},e),{},{profileloading:!0});default:return e}},de=Object(se.c)(ue,Object(se.a)(oe.a));s.a.render(Object(C.jsx)(d.a,{store:de,children:Object(C.jsx)(m.a,{children:Object(C.jsx)(ie,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.5532162a.chunk.js.map