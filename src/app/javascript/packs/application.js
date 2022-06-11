// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

const images = require.context('../images', true)
const imagePath = (name) => images(name, true)
import "../src/style.scss";

require("jquery");
require("bootstrap");

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"



Rails.start()
Turbolinks.start()
ActiveStorage.start()

// 5月29日追加jQueryの導入
// require("jquery")

// // 5月29日追加jQueryの導入
// import 'bootstrap'
// import '../src/application.scss'
