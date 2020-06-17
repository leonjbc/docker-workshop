(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{265:function(e,n,t){"use strict";t.r(n);var a=t(28),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"volume-advanced"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#volume-advanced"}},[e._v("#")]),e._v(" Volume Advanced")]),e._v(" "),t("p",[e._v("從這個練習，可以了解：")]),e._v(" "),t("ul",[t("li",[e._v("如何建立 volume")]),e._v(" "),t("li",[e._v("如何將 volume 的目錄綁定到 container 裡")])]),e._v(" "),t("h2",{attrs:{id:"指令練習"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指令練習"}},[e._v("#")]),e._v(" 指令練習")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 建立 volume，並命名為 code")]),e._v("\ndocker volume create --name code\ndocker volume "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 執行 container 綁定 volume，並查看裡面的內容")]),e._v("\ndocker container run --rm -it -v code:/source busybox "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" -l /source\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 執行 container 做點檔案系統的改變")]),e._v("\ndocker container run --rm -it -v code:/source busybox "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("touch")]),e._v(" /source/somefile\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 執行 container 查看 volume 的內容")]),e._v("\ndocker container run --rm -it -v code:/source busybox "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" -l /source\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 執行 nginx container 綁定到 html 目錄裡")]),e._v("\ndocker container run -d -v code:/usr/share/nginx/html --name my-web nginx:alpine\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查看 my-web 容器的 html 目錄")]),e._v("\ndocker container "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -it my-web "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" -l /usr/share/nginx/html\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 執行新容器，並把 my-web 容器綁定的 volume 綁到這個容器上")]),e._v("\ndocker container run -d --volumes-from my-web --name my-web2 nginx:alpine\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查看新的 my-web2 容器的 html 目錄")]),e._v("\ndocker container "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -it my-web2 "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" -l /usr/share/nginx/html\n")])])]),t("h2",{attrs:{id:"指令說明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指令說明"}},[e._v("#")]),e._v(" 指令說明")]),e._v(" "),t("h3",{attrs:{id:"docker-volume-create"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-volume-create"}},[e._v("#")]),e._v(" "),t("code",[e._v("docker volume create")])]),e._v(" "),t("p",[e._v("建立 volume")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("--name")]),e._v(" 指定 volume 名稱")])]),e._v(" "),t("h3",{attrs:{id:"docker-container-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-container-run"}},[e._v("#")]),e._v(" "),t("code",[e._v("docker container run")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("-v|--volume")]),e._v(" 指定 volume 到 container 裡面的某個目錄")]),e._v(" "),t("li",[t("code",[e._v("--volumes-from")]),e._v(" 這個參數要接 container，這可以讓新的 container 去共享舊的 container 的 volume 設定。設定包括 "),t("RouterLink",{attrs:{to:"/docs/exercises/exercises-05-volume-mapping.html"}},[e._v("Volume Mapping")]),e._v("，與今天提到的手動建立方法。")],1)]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://larrylu.blog/using-volumn-to-persist-data-in-container-a3640cc92ce4",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker 實戰系列（三）：使用 Volume 保存容器內的數據"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=r.exports}}]);