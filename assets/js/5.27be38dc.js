(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{259:function(r,e,t){"use strict";t.r(e);var a=t(28),o=Object(a.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"docker-workshop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-workshop"}},[r._v("#")]),r._v(" Docker Workshop")]),r._v(" "),t("p",[t("a",{attrs:{href:"https://travis-ci.com/104corp/docker-workshop",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://travis-ci.com/104corp/docker-workshop.svg?branch=master",alt:"Build Status"}}),t("OutboundLink")],1)]),r._v(" "),t("p",[t("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Docker"),t("OutboundLink")],1),r._v(" 工作坊。")]),r._v(" "),t("p",[r._v("開始前，先對此工作坊做點基本說明：")]),r._v(" "),t("ul",[t("li",[r._v("主要使用 command line 操作，shell 會以 "),t("code",[r._v("bash")]),r._v(" 為主")]),r._v(" "),t("li",[r._v("文件會以 Mac / Linux 環境為主做說明，不保證 Windows 系統完全可用")]),r._v(" "),t("li",[r._v("大多 image 裡面的 user 都會是 root，包括執行 docker 也需要 root（Linux）。為方便入門為前提，會以 root 執行來教學")])]),r._v(" "),t("blockquote",[t("p",[r._v("GUI 可以參考 "),t("a",{attrs:{href:"https://www.portainer.io/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Portainer"),t("OutboundLink")],1),r._v("、"),t("a",{attrs:{href:"https://kitematic.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Kitematic"),t("OutboundLink")],1),r._v("、"),t("a",{attrs:{href:"https://dockstation.io/",target:"_blank",rel:"noopener noreferrer"}},[r._v("DockStation"),t("OutboundLink")],1),r._v("，但本 workshop 說明不會討論 GUI。")])]),r._v(" "),t("h2",{attrs:{id:"直接在原生系統上安裝-docker-環境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#直接在原生系統上安裝-docker-環境"}},[r._v("#")]),r._v(" 直接在原生系統上安裝 Docker 環境")]),r._v(" "),t("p",[r._v("不同環境的安裝方法當然是不同的，但最後驗證是否安裝成功，可以打開終端機輸入下面指令：")]),r._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[r._v("docker run hello-world\n")])])]),t("p",[r._v("若沒出現錯誤訊息，且有出現 "),t("code",[r._v("Hello from Docker!")]),r._v(" 的字眼的話，代表服務有正常啟動，可以開始使用 Docker 了。")]),r._v(" "),t("h3",{attrs:{id:"mac"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac"}},[r._v("#")]),r._v(" Mac")]),r._v(" "),t("p",[r._v("使用 "),t("a",{attrs:{href:"https://docs.brew.sh/Installation",target:"_blank",rel:"noopener noreferrer"}},[r._v("Homebrew"),t("OutboundLink")],1),r._v(" 的 "),t("a",{attrs:{href:"https://github.com/Homebrew/homebrew-cask",target:"_blank",rel:"noopener noreferrer"}},[r._v("Cask"),t("OutboundLink")],1),r._v(" 安裝（需要權限）：")]),r._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[r._v("brew cask "),t("span",{pre:!0,attrs:{class:"token function"}},[r._v("install")]),r._v(" docker\n")])])]),t("p",[r._v("或是下載"),t("a",{attrs:{href:"https://hub.docker.com/editions/community/docker-ce-desktop-mac",target:"_blank",rel:"noopener noreferrer"}},[r._v("安裝包"),t("OutboundLink")],1),r._v("安裝（需要權限）。")]),r._v(" "),t("h3",{attrs:{id:"windows-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-10"}},[r._v("#")]),r._v(" Windows 10")]),r._v(" "),t("p",[r._v("參考"),t("a",{attrs:{href:"https://docs.docker.com/docker-for-windows/",target:"_blank",rel:"noopener noreferrer"}},[r._v("官方文件"),t("OutboundLink")],1),r._v("，下載並安裝 Docker Desktop 即可。")]),r._v(" "),t("h3",{attrs:{id:"linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[r._v("#")]),r._v(" Linux")]),r._v(" "),t("p",[r._v("參考"),t("a",{attrs:{href:"https://docs.docker.com/install/",target:"_blank",rel:"noopener noreferrer"}},[r._v("官方文件"),t("OutboundLink")],1),r._v("，注意必須要是 64-bit 版本才能運行 Docker。")]),r._v(" "),t("p",[r._v("或使用懶人包安裝：")]),r._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[r._v("sudo")]),r._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[r._v("curl")]),r._v(" -fsSL https://get.docker.com/ "),t("span",{pre:!0,attrs:{class:"token operator"}},[r._v("|")]),r._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[r._v("sh")]),r._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[r._v("sudo")]),r._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[r._v("usermod")]),r._v(" -aG docker your-user\n")])])]),t("blockquote",[t("p",[r._v("已使用 Vagrant 測試過 "),t("a",{attrs:{href:"https://app.vagrantup.com/ubuntu/boxes/trusty64",target:"_blank",rel:"noopener noreferrer"}},[t("code",[r._v("ubuntu/trusty64")]),t("OutboundLink")],1),r._v("、"),t("a",{attrs:{href:"https://app.vagrantup.com/debian/boxes/jessie64",target:"_blank",rel:"noopener noreferrer"}},[t("code",[r._v("debian/jessie64")]),t("OutboundLink")],1),r._v(" 可行。"),t("a",{attrs:{href:"https://app.vagrantup.com/centos/boxes/7",target:"_blank",rel:"noopener noreferrer"}},[t("code",[r._v("centos/7")]),t("OutboundLink")],1),r._v(" 需另外啟動 docker daemon "),t("code",[r._v("sudo systemctl start docker")]),r._v("。")])]),r._v(" "),t("h2",{attrs:{id:"使用虛擬機安裝-docker-環境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用虛擬機安裝-docker-環境"}},[r._v("#")]),r._v(" 使用虛擬機安裝 Docker 環境")]),r._v(" "),t("p",[r._v("有時候因為特殊理由，可能會不想或無法（如 Windows 7）在本機安裝 Docker，這時可以考慮使用虛擬機安裝。")]),r._v(" "),t("h3",{attrs:{id:"docker-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-machine"}},[r._v("#")]),r._v(" Docker Machine")]),r._v(" "),t("p",[t("a",{attrs:{href:"https://docs.docker.com/machine/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Docker Machine"),t("OutboundLink")],1),r._v(" 是建立 Docker 虛擬機的首選，預設的 provider 包括以下選擇：")]),r._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.docker.com/machine/drivers/virtualbox/",target:"_blank",rel:"noopener noreferrer"}},[r._v("VirtualBox"),t("OutboundLink")],1)]),r._v(" "),t("li",[t("a",{attrs:{href:"https://docs.docker.com/machine/drivers/hyper-v/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Hyper-V"),t("OutboundLink")],1),r._v("（Windows only）")]),r._v(" "),t("li",[r._v("AWS")])]),r._v(" "),t("blockquote",[t("p",[r._v("使用 AWS 請注意防火牆要開通 local 機器的連線，Docker 使用 tcp 2376 port 連線，同時也注意不要讓其他人能連到這個 port。")])]),r._v(" "),t("p",[r._v("以 VirtualBox 為例，執行以下指令即可建立一個 Docker 虛擬機：")]),r._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[r._v("# 建立 Docker 虛擬機")]),r._v("\ndocker-machine create -d virtualbox my-docker\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[r._v("# 查看這台機器相關的環境參數")]),r._v("\ndocker-machine "),t("span",{pre:!0,attrs:{class:"token function"}},[r._v("env")]),r._v(" my-docker\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[r._v("# export 環境參數，執行 docker 指令即可改直接連線到虛擬機上")]),r._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[r._v("eval")]),r._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[r._v("$(")]),r._v("docker-machine "),t("span",{pre:!0,attrs:{class:"token function"}},[r._v("env")]),r._v(" my-docker"),t("span",{pre:!0,attrs:{class:"token variable"}},[r._v(")")])]),r._v("\n")])])]),t("h3",{attrs:{id:"vagrant"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vagrant"}},[r._v("#")]),r._v(" Vagrant")]),r._v(" "),t("p",[t("a",{attrs:{href:"https://www.vagrantup.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Vagrant"),t("OutboundLink")],1),r._v(" 可以使用指令管理虛擬機（VM），並使用程式碼來表達環境（Infrastructure-as-code，IaC）。")]),r._v(" "),t("p",[r._v("Clone 此專案，並使用 "),t("code",[r._v("vagrant up")]),r._v(" 指令即可得到 Ubuntu trusty 64-bit + Docker CE 的乾淨環境：")]),r._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[r._v("vagrant up\nvagrant "),t("span",{pre:!0,attrs:{class:"token function"}},[r._v("ssh")]),r._v("\n")])])]),t("h3",{attrs:{id:"aws"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aws"}},[r._v("#")]),r._v(" AWS")]),r._v(" "),t("p",[r._v("除了上述方法外，也可以在 AWS 上使用 "),t("a",{attrs:{href:"https://github.com/rancher/os",target:"_blank",rel:"noopener noreferrer"}},[r._v("RancherOS"),t("OutboundLink")],1),r._v(" 的 AMI。")]),r._v(" "),t("h4",{attrs:{id:"cloud9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cloud9"}},[r._v("#")]),r._v(" Cloud9")]),r._v(" "),t("p",[r._v("另一個方法是使用 "),t("a",{attrs:{href:"https://aws.amazon.com/tw/cloud9/",target:"_blank",rel:"noopener noreferrer"}},[r._v("AWS Cloud9"),t("OutboundLink")],1),r._v(" 服務：")]),r._v(" "),t("ol",[t("li",[r._v("起 Cloud9 服務，設定直接用預設值即可")]),r._v(" "),t("li",[r._v("在 Cloud9 服務，下 "),t("code",[r._v("curl ifconfig.co")]),r._v(" 指令取得公開 IP：")]),r._v(" "),t("li",[r._v("因需要練習 port forwarding，所以必須到 EC2 服務裡，找到對應的 instance，再設定 security group")])]),r._v(" "),t("h3",{attrs:{id:"play-with-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#play-with-docker"}},[r._v("#")]),r._v(" Play with Docker")]),r._v(" "),t("p",[r._v("上述方法全部都不行的話，最後一個就是使用 "),t("a",{attrs:{href:"https://labs.play-with-docker.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Play with Docker"),t("OutboundLink")],1),r._v(" 服務，只要準備好 DockerHub 的帳號，即可使用。因為它是一個使用 "),t("a",{attrs:{href:"https://hub.docker.com/_/docker/",target:"_blank",rel:"noopener noreferrer"}},[r._v("DinD"),t("OutboundLink")],1),r._v(" 做成的線上服務，所以會有兩個問題：")]),r._v(" "),t("ul",[t("li",[r._v("它並沒有保證系統一直都可以用，所以什麼時候會壞，這是無法預期的")]),r._v(" "),t("li",[r._v("因為使用 DinD，所以跟 port forwarding 相關的練習是無法使用瀏覽器測試的，不過可以使用 curl 指令測試")])]),r._v(" "),t("h2",{attrs:{id:"預載-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#預載-image"}},[r._v("#")]),r._v(" 預載 Image")]),r._v(" "),t("p",[r._v("若知道如何使用 docker 指令下載 image 的話，可以先執行下面這些指令，先下載比較大的 image，避免當天大家都在下載造成網路過慢。")]),r._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[r._v("docker pull composer:1.10\ndocker pull gradle:6.5\ndocker pull maven:3.6-alpine\ndocker pull mysql\ndocker pull nginx\ndocker pull node:10-alpine\ndocker pull node:12-alpine\ndocker pull php:7.2-alpine\ndocker pull php:7.3-alpine\ndocker pull php:7.4-alpine\ndocker pull python:3.8-alpine\ndocker pull selenium/hub:3.141.59-iron\ndocker pull selenium/node-chrome-debug:3.141.59-iron\ndocker pull selenium/node-firefox-debug:3.141.59-iron\n")])])]),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[r._v("#")]),r._v(" References")]),r._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/docker/labs",target:"_blank",rel:"noopener noreferrer"}},[r._v("Docker Tutorials and Labs"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=o.exports}}]);