(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{255:function(e,t,a){"use strict";a.r(t);var s=a(28),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"using-docker-instead-install-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-docker-instead-install-tools"}},[e._v("#")]),e._v(" Using Docker Instead Install Tools")]),e._v(" "),a("p",[e._v("這個練習是一個應用題，同時也是一個小技巧，讓開發者不需安裝工具也能使用該工具。")]),e._v(" "),a("h2",{attrs:{id:"指令練習"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令練習"}},[e._v("#")]),e._v(" 指令練習")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 使用 Composer")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("alias")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("composer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"docker container run -it --rm -v \\'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$PWD")]),e._v(':/source -w /source composer:1.10"')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 使用 npm")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("alias")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("npm")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"docker container run -it --rm -v \\'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$PWD")]),e._v(':/source -w /source node:12-alpine npm"')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 使用 Gradle")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("alias")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("gradle")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"docker container run -it --rm -v \\'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$PWD")]),e._v(':/source -w /source gradle:6.5 gradle"')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 使用 Maven")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("alias")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("mvn")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"docker container run -it --rm -v \\'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$PWD")]),e._v(':/source -w /source maven:3.6-alpine mvn"')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 使用 pip")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("alias")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("pip")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"docker container run -it --rm -v \\'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$PWD")]),e._v(':/source -w /source python:3.8-alpine pip"')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 使用 Go")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("alias")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("go")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"docker container run -it --rm -v \\'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$PWD")]),e._v(':/source -w /source golang:1.14-alpine go"')]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 使用 Mix")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("alias")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("mix")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"docker container run -it --rm -v \\'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$PWD")]),e._v(':/source -w /source elixir:1.10-alpine mix"')]),e._v("\n")])])]),a("h2",{attrs:{id:"指令說明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令說明"}},[e._v("#")]),e._v(" 指令說明")]),e._v(" "),a("h3",{attrs:{id:"docker-container-run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-container-run"}},[e._v("#")]),e._v(" "),a("code",[e._v("docker container run")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("-w|--workdir")]),e._v(" 指定預設執行的路徑")])]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://hub.docker.com/_/composer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Composer image"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://hub.docker.com/_/elixir",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elixir image"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://hub.docker.com/_/golang",target:"_blank",rel:"noopener noreferrer"}},[e._v("Golang image"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://hub.docker.com/_/gradle",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gradle image"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://hub.docker.com/_/node",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node image"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://hub.docker.com/_/maven",target:"_blank",rel:"noopener noreferrer"}},[e._v("Maven image"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://hub.docker.com/_/python",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python image"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);