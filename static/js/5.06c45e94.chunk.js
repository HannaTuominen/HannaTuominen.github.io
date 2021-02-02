(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[5],{103:function(c,e,t){"use strict";t.r(e);var i=t(0),n=t(10),s=t(1),l=t(72),a=t(73),j=t(17),r=t(71);t(66);e.default=function(c){var e=Object(s.useState)([]),t=Object(n.a)(e,2),o=t[0],b=t[1],A=Object(s.useState)(),d=Object(n.a)(A,2),h=d[0],I=d[1],m=Object(s.useState)(!1),u=Object(n.a)(m,2),O=u[0],W=u[1];return Object(s.useEffect)((function(){W(!0),r.a.get("projects.json").then((function(c){var e;e=c.data.filter((function(c){return 3===c.projectType})),b(e),W(!1)})).catch((function(c){return I(c.message)}))}),[]),Object(i.jsxs)("div",{className:"Containers",children:[Object(i.jsx)("div",{className:"ContainersTitle",children:Object(i.jsx)("h1",{children:"Other projects"})}),h?Object(i.jsx)(a.a,{show:h,closeModal:function(){I(!1),W(!1),c.history.push("/")},children:h}):Object(i.jsx)("div",{children:O?Object(i.jsx)("div",{className:"AlbumsLoader",children:Object(i.jsx)(j.a,{height:"50px"})}):Object(i.jsx)(l.a,{projectItems:o})})]})}},66:function(c,e,t){},67:function(c,e,t){},68:function(c,e,t){},69:function(c,e,t){},70:function(c,e,t){},71:function(c,e,t){"use strict";var i=t(74),n=t.n(i).a.create({baseURL:"https://hanna-tuominen-portfolio-fe84a-default-rtdb.firebaseio.com/"});e.a=n},72:function(c,e,t){"use strict";var i=t(0),n=t(1),s=t.n(n),l=(t(67),t(11)),a=function(c){var e;switch(c.type){case 1:e=Object(i.jsx)("div",{className:"ProjectItemContainerImageWeb",children:Object(i.jsx)("img",{src:c.image,alt:c.title})});break;case 2:e=Object(i.jsx)("div",{className:"ProjectItemContainerImageMobile",children:Object(i.jsx)("img",{src:c.image,alt:c.title})});break;case 3:e=Object(i.jsx)("div",{className:"ProjectItemContainerImageOther",children:Object(i.jsx)("img",{src:c.image,alt:c.title})});break;default:e=null}var t=function(c){window.location.assign(c)};return Object(i.jsxs)("div",{className:"ProjectItemContainer",children:[e,Object(i.jsxs)("div",{className:"ProjectItemContainerInfo",children:[Object(i.jsx)("h3",{children:c.title}),Object(i.jsx)("p",{children:c.desc}),Object(i.jsxs)("div",{className:"Redirect",children:[Object(i.jsx)("h5",{children:"Check out the source code and live version:"}),Object(i.jsx)("img",{src:l.a,style:{width:"50px",paddingRight:"10px"},onClick:function(){return t(c.github)}}),Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABkCAYAAABkW8nwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGfmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTAyLTAyVDE0OjMyOjIwKzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTAyLTAyVDE0OjMyOjIwKzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wMi0wMlQxNDozMjoyMCswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4YzA3OWVlNi03Yjk0LWQ4NDktYWY3My01NzdkMDEzOWFkYTIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0NDNjZTU5ZS01MjczLTY0NDYtOTk5Ny1iNmE5OGEwNTg2MGEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkM2RjMzU3MS0zNjZhLTlkNDMtOWM5ZS1jMzc4OGYwODc0ZjMiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmQzZGMzNTcxLTM2NmEtOWQ0My05YzllLWMzNzg4ZjA4NzRmMyIgc3RFdnQ6d2hlbj0iMjAyMS0wMi0wMlQxNDozMjoyMCswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4YzA3OWVlNi03Yjk0LWQ4NDktYWY3My01NzdkMDEzOWFkYTIiIHN0RXZ0OndoZW49IjIwMjEtMDItMDJUMTQ6MzI6MjArMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpUZXh0TGF5ZXJzPiA8cmRmOkJhZz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJMaXZlIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSJMaXZlIi8+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6VGV4dExheWVycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7iJPXpAAAD4klEQVR42u2d7Y2jMBBA08FpW6AFWkC6CmiBFmiBFmghLbgFWqAFSliWSOwpl2DwxwyG8JDej5PCYcZv7cnY672N43gDkIYgAGIBYgFiEQRALEAsQCwAxALEAsQCQCxALEAsAMQCxALEAkAsQCxALADEAsQCxAJALEAsQCwAxALEgquI9SnX95+/+UQ9YSbGDR6fq29cXCtCfU3cHWSyURFFriWxYqT6pSSSXK+j1SjAnWjKd04h1DnP9Cdre48JiIVYiMVUiFgnFEswec8xAbEkyw394/2xALHW3sO1QNrPn6PEgFhciIVYe/Vb9RLzJrDva4dU4j5/rriEWFrlhunfrUZMHvmgYF45vD7D4/566X5HBqd11ulDmUIQu5OLVSvEJGhUWRHjrcMD7xsjBKv2FsucvUAqVMZYIhN4735px8ZGH3eu8v+OrPN0u3WfWRyJEWt5hJ3jMhwtNo9vsz7T7ByjIXREtU27C8/PEcuxvQsJshRVxDsb1/8vID5lRBF6+E+uk4uVa7dXaUoMSuQtonQrsRkkViA8vswM/6b6k4uV7SDWl9KU2AiNVoWlzb1U/uf5LblDLMf2WvKaXRN5y7Rsm8IbyfYElF9qxHJsr9KUaDzetXcRITImUmINiOUultaUWAWOVq2QBBpijYjl0V6lKXE1kbfkS8PSPQL70xArhViKyz2NZ7W8VqqsI9bTS0u0t41dp9NI5C3PWiuGGsQ6qViKhVPj2KGVYiwQK6VYQqPDaiJv6ZdOuViMWAcQSyNuw9MCsFMxVHgURazUYilur2ktSzdmh7Yg1hHEmp/fKY1cXlV6xT1kQUgu5J653BAjVr5DR7WJRs8osQrEChcrcm3OK+9CrOuJFbqbwG1Bd78SSCbZORpidVcSK9Vyj0I/Hl6s/mpiKe2AqDxHTcT6ULEk98l3Ac/vEOsDxRJOoosEz0aso4olNHKYRPHIIt+71f5WeHWx8lQdHJnnZVIjNWIpiBVZ22oTzkBZ4DPLvepYiBVW2xq+Bc53iNiMmEmNzoilJFZgbatOKLW3WGvuIJaiWJ45j9hpNBF5ns+vo9Vbv/5VIpbeEpTHVubqACNm4RhzsznqKm2zPdv5WEa5nVWqeHnGaOvEmnYjPyylFy+16c4s1txWI1kMDZgWe1+5nk7826rL3d+m8ZOINSqL1SWctvfcFCm9vcdYfygYsXadumvVZRR3wWMFazgb/2DXy5TUJm5L6XiEeet9uC3X7p1ZvJ0l9YkXf2YW+JvQgFiAWACIBYgFiAWAWIBYgFgAiAWIBYgFgFiAWIBYAIgFiAWIBYBYgFiAWACR/ADQm3MnnnvOtwAAAABJRU5ErkJggg==",style:{width:"50px"},onClick:function(){return t(c.live)}})]})]})]})};t(68),e.a=function(c){var e=c.projectItems.map((function(c){return Object(i.jsx)(a,{github:c.githubUrl,live:c.liveUrl,image:c.imageUrl,desc:c.projectDescription,type:c.projectType,title:c.projectName},c.id)}));return Object(i.jsx)(s.a.Fragment,{children:e})}},73:function(c,e,t){"use strict";var i=t(0),n=(t(1),t(69),t(16)),s=function(c){return Object(i.jsxs)("div",{children:[Object(i.jsx)(n.a,{show:c.show,clicked:c.closeModal}),Object(i.jsx)("div",{className:"Modal",style:{transform:c.show?"translateY(0)":"translateY(-100vh)",opacity:c.show?"1":"0"},onClick:c.closeModal,children:c.children})]})};t(70),e.a=function(c){return Object(i.jsx)("div",{className:"ErrorButton",children:Object(i.jsxs)(s,{show:c.show,closeModal:c.closeModal,children:[Object(i.jsx)("h2",{children:"An Error Occurred!"}),Object(i.jsx)("p",{children:c.children}),Object(i.jsx)("button",{type:"button",onClick:c.closeModal,children:"Okay"})]})})}}}]);
//# sourceMappingURL=5.06c45e94.chunk.js.map